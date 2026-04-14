import { Manrope, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const meta = messages.Metadata;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "Juan Murillo",
      "Full-Stack Engineer",
      "Software Engineer",
      "React",
      "TypeScript",
      "Python",
      "Node.js",
      "AWS",
      "AI Engineer",
      "Technical Lead",
      "Colombia",
      "Google",
      "Atlassian",
      "Snappr",
    ],
    authors: [{ name: "Juan Murillo", url: "https://juanmurillo.co" }],
    creator: "Juan Murillo",
    metadataBase: new URL("https://juanmurillo.co"),
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/icon.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://juanmurillo.co/${locale}`,
      languages: {
        en: "https://juanmurillo.co/en",
        es: "https://juanmurillo.co/es",
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `https://juanmurillo.co/${locale}`,
      siteName: "Juan Murillo",
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [
        {
          url: "/juan-murillo.jpg",
          width: 500,
          height: 625,
          alt: "Juan Murillo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: ["/juan-murillo.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          hrefLang="en"
          href="https://juanmurillo.co/en"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://juanmurillo.co/es"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://juanmurillo.co/en"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Juan Murillo",
              url: "https://juanmurillo.co",
              image: "https://juanmurillo.co/juan-murillo.jpg",
              jobTitle: "Senior Full-Stack Software Engineer",
              worksFor: { "@type": "Organization", name: "Snappr" },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Universidad de los Andes",
              },
              knowsAbout: [
                "React",
                "TypeScript",
                "Python",
                "Node.js",
                "AWS",
                "AI",
                "GraphQL",
                "Go",
              ],
              sameAs: [
                "https://linkedin.com/in/juan-murillo",
                "https://github.com/jgmurillo10",
              ],
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
