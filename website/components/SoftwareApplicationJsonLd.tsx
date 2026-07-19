import {
  APP_ICON_URL,
  REPO_URL,
  SITE_AUTHOR_ID,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOFTWARE_ID,
  WEBPAGE_ID,
} from "@/lib/seo";

type SoftwareApplicationJsonLdProps = {
  downloadUrl: string;
  version: string | null;
};

export function SoftwareApplicationJsonLd({
  downloadUrl,
  version,
}: SoftwareApplicationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    mainEntityOfPage: { "@id": WEBPAGE_ID },
    image: APP_ICON_URL,
    downloadUrl,
    codeRepository: REPO_URL,
    operatingSystem: "macOS 14 or later",
    softwareRequirements: "macOS 14 or later",
    applicationCategory: "DeveloperApplication",
    license: `${REPO_URL}/blob/main/LICENSE`,
    featureList: [
      "Send GET, POST, PUT, PATCH, and DELETE requests",
      "Configure request headers and bodies",
      "Inspect response status, duration, content type, headers, and body",
      "Cancel requests in progress",
      "Access the scratchpad from the macOS menu bar",
    ],
    author: {
      "@type": "Person",
      "@id": SITE_AUTHOR_ID,
      ...SITE_AUTHOR,
    },
    softwareVersion: version ?? undefined,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
      url: downloadUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
