import { Helmet } from "react-helmet-async";

export default function Head({ pageTitle, description }) {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:url" content="https://plusconsulting.in" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pluscorp Consulting" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/favicon.png" />

      <link rel="canonical" href="https://plusconsulting.in" />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Company",
          "name": "Pluscorp Consulting",
          "url": "https://plusconsulting.in",
          "logo": "/favicon.png",
          "description": "${description}",
          "author": {
             "@type": "Person",
             "name": "Badhri Narayanan Hari"
           },
          "sameAs": [
            "https://www.facebook.com/plusconsultingindia",
            "https://www.instagram.com/pluscorpconsulting/",
            "https://www.linkedin.com/company/plus-consulting-india/"
          ]
        }
      `}
      </script>
    </Helmet>
  );
}
