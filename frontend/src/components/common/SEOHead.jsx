import { Helmet } from 'react-helmet-async'
import { practiceInfo, doctorInfo } from '../../data/practiceInfo'

function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  noIndex = false,
  structuredData
}) {
  const siteName = practiceInfo.name
  const defaultDescription = `${doctorInfo.title} in Moorabbin, Melbourne. ${doctorInfo.name} provides expert wisdom teeth removal, dental implants, and oral surgery. ${doctorInfo.experience} experience. Call ${practiceInfo.contact.phone}.`
  const defaultKeywords = 'oral surgeon Melbourne, wisdom teeth removal Moorabbin, dental implants Melbourne, oral surgery Victoria, Dr Bala oral surgeon'
  const siteUrl = 'https://oralsurgeon.care'

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Specialist Oral Surgeon Melbourne`
  const metaDescription = description || defaultDescription
  const metaKeywords = keywords || defaultKeywords
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : null
  const image = ogImage || `${siteUrl}/og-image.jpg`

  // Default structured data for the practice
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': siteUrl,
    name: practiceInfo.name,
    description: metaDescription,
    url: siteUrl,
    telephone: practiceInfo.contact.phone,
    email: practiceInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: practiceInfo.address.street,
      addressLocality: practiceInfo.address.suburb,
      addressRegion: practiceInfo.address.state,
      postalCode: practiceInfo.address.postcode,
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.9393,
      longitude: 145.0544
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    priceRange: '$$',
    image: image,
    sameAs: [
      practiceInfo.social.facebook
    ],
    medicalSpecialty: 'Oral Surgery',
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Wisdom Teeth Removal' },
      { '@type': 'MedicalProcedure', name: 'Dental Implants' },
      { '@type': 'MedicalProcedure', name: 'Tooth Extractions' },
      { '@type': 'MedicalProcedure', name: 'Bone Grafting' }
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta */}
      <meta name="author" content={doctorInfo.name} />
      <meta name="geo.region" content="AU-VIC" />
      <meta name="geo.placename" content="Moorabbin" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  )
}

export default SEOHead
