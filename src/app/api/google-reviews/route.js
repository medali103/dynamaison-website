import { NextResponse } from 'next/server'

const FALLBACK_MAPS_URL =
  'https://www.google.com/maps/place/DynaMaison+SAS/@46.6311772,4.8824046,8.5z/data=!4m8!3m7!1s0x478cede7c54fb3e9:0x6b6a17429132d82a!8m2!3d46.3845698!4d5.7826615!9m1!1b1!16s%2Fg%2F11y66w4pby?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D'
const TEXT_SEARCH_URL = 'https://places.googleapis.com/v1/places:searchText'
const PLACE_QUERY = 'DynaMaison SAS Lavans-les-Saint-Claude France'

async function resolvePlaceId(apiKey, explicitPlaceId) {
  if (explicitPlaceId) {
    return explicitPlaceId
  }

  const response = await fetch(TEXT_SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName',
    },
    body: JSON.stringify({
      textQuery: PLACE_QUERY,
      languageCode: 'fr',
    }),
    next: { revalidate: 86400 },
  })

  if (!response.ok) {
    throw new Error(`Google text search failed with ${response.status}`)
  }

  const data = await response.json()
  return data.places?.[0]?.id
}

function mapReview(review, fallbackUrl) {
  return {
    authorName: review.authorAttribution?.displayName || 'Avis Google',
    authorPhoto:
      review.authorAttribution?.photoUri ||
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',
    rating: review.rating || 5,
    relativeTime:
      review.relativePublishTimeDescription ||
      review.publishTime ||
      '',
    text:
      review.originalText?.text ||
      review.text?.text ||
      '',
    url:
      review.googleMapsUri ||
      review.authorAttribution?.uri ||
      fallbackUrl,
  }
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const explicitPlaceId = process.env.GOOGLE_PLACE_ID

  if (!apiKey) {
    return NextResponse.json(
      {
        configured: false,
        place: {
          name: 'DynaMaison SAS',
          googleMapsUri: FALLBACK_MAPS_URL,
        },
        reviews: [],
      },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  }

  try {
    const placeId = await resolvePlaceId(apiKey, explicitPlaceId)

    if (!placeId) {
      throw new Error('Unable to resolve a Google place ID for DynaMaison SAS')
    }

    const detailsResponse = await fetch(`https://places.googleapis.com/v1/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask':
          'id,displayName,rating,userRatingCount,reviews,googleMapsUri',
      },
      next: { revalidate: 86400 },
    })

    if (!detailsResponse.ok) {
      throw new Error(`Google place details failed with ${detailsResponse.status}`)
    }

    const place = await detailsResponse.json()
    const googleMapsUri = place.googleMapsUri || FALLBACK_MAPS_URL
    const reviews = (place.reviews || []).slice(0, 6).map((review) => mapReview(review, googleMapsUri))

    return NextResponse.json(
      {
        configured: true,
        place: {
          name: place.displayName?.text || 'DynaMaison SAS',
          rating: place.rating ?? null,
          userRatingCount: place.userRatingCount ?? null,
          googleMapsUri,
        },
        reviews,
      },
      {
        headers: {
          'Cache-Control': 's-maxage=86400, stale-while-revalidate=604800',
        },
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        configured: true,
        error: error instanceof Error ? error.message : 'Unknown Google reviews error',
        place: {
          name: 'DynaMaison SAS',
          googleMapsUri: FALLBACK_MAPS_URL,
        },
        reviews: [],
      },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  }
}
