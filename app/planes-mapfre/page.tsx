import MapfrePlansClientPage from "./MapfrePlansClientPage"

export const metadata = {
  title: "Mapfre Salud ARS – Planes de Seguro de Salud en RD | PlanesSalud.com.do",
  description:
    "Planes Mapfre Salud ARS en República Dominicana: Plan Preferencial, Ejecutivo y Prestige. La red médica más amplia del país. Cotiza desde RD$2,753/mes.",
  keywords:
    "Mapfre Salud ARS, planes Mapfre RD, Plan Ejecutivo Mapfre, Plan Prestige Mapfre, seguro médico privado República Dominicana, ARS Mapfre cotizar",
  alternates: {
    canonical: "https://planessalud.com.do/planes-mapfre",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://planessalud.com.do/planes-mapfre",
    title: "Mapfre Salud ARS – Planes de Seguro de Salud en RD",
    description:
      "Plan Preferencial, Ejecutivo y Prestige. La red médica más amplia de República Dominicana.",
    siteName: "PlanesSalud.com.do",
    images: [
      {
        url: "/images/MAPFRE_SEGURO_RD.webp",
        width: 1200,
        height: 630,
        alt: "Mapfre Salud ARS – Planes de seguro médico en República Dominicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapfre Salud ARS – Planes en RD | PlanesSalud.com.do",
    description: "Plan Preferencial, Ejecutivo y Prestige. Cotiza desde RD$2,753/mes.",
    images: ["/images/MAPFRE_SEGURO_RD.webp"],
  },
}

export default function MapfrePlansPage() {
  return <MapfrePlansClientPage />
}
