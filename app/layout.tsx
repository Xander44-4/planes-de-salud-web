import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "PlanesSalud.com.do – CAS Corredores Asesores de Seguros SRL",
  description:
    "Cotiza y compara planes de seguro de salud privado en República Dominicana. Mapfre Salud ARS, Humano Seguros, ARS Universal y más.",
  url: "https://planessalud.com.do",
  telephone: "+18099652727",
  email: "Contacto@cas.com.do",
  image: "https://planessalud.com.do/images/SEGURO_SALUD_LOCAL_RD.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Torre Acrópolis, 8vo. Piso, Av. Winston Churchill",
    addressLocality: "Santo Domingo",
    addressCountry: "DO",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: ["https://www.instagram.com/cassegurosrd/"],
  areaServed: {
    "@type": "Country",
    name: "República Dominicana",
  },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://planessalud.com.do"),
  title: {
    default: "PlanesSalud.com.do – Seguros de Salud Privados en República Dominicana",
    template: "%s | PlanesSalud.com.do",
  },
  description:
    "Cotiza y compara planes de seguro de salud privado en RD. Mapfre Salud ARS, Humano Seguros y más. La mejor cobertura médica para tu familia en República Dominicana.",
  keywords:
    "seguro salud República Dominicana, seguro médico privado RD, Mapfre Salud ARS, Humano Seguros, ARS Universal, cotizar seguro salud, seguro médico familiar RD, mejor seguro privado RD",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: {
    google: "EsF40iA0Jwdvm01FJwV5Q2a5BxF8ltRwEbAEsIlzIys",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://planessalud.com.do",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://planessalud.com.do",
    title: "PlanesSalud.com.do – Seguros de Salud Privados en República Dominicana",
    description:
      "Cotiza y compara planes de seguro de salud privado en RD. Mapfre Salud ARS, Humano Seguros y más.",
    siteName: "PlanesSalud.com.do",
    images: [
      {
        url: "/images/SEGURO_SALUD_LOCAL_RD.webp",
        width: 1200,
        height: 630,
        alt: "Seguro médico familiar en República Dominicana – PlanesSalud.com.do",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanesSalud.com.do – Seguros de Salud Privados en RD",
    description: "Cotiza y compara planes de seguro de salud privado en República Dominicana.",
    images: ["/images/SEGURO_SALUD_LOCAL_RD.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
