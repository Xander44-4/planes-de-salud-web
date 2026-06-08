import InternationalInsuranceClientPage from "./InternationalInsuranceClientPage"

export const metadata = {
  title: "Seguro Médico Internacional desde República Dominicana | PlanesSalud.com.do",
  description:
    "Seguro médico internacional desde República Dominicana. Cobertura global en EE.UU., Europa y 190+ países. Planes desde $50 USD/mes. Cotiza ahora con CAS Seguros RD.",
  keywords:
    "seguro médico internacional RD, seguro salud internacional República Dominicana, cobertura global dominicanos, seguro privado internacional RD, Bupa salud RD, seguro viajero dominicano",
  alternates: {
    canonical: "https://planessalud.com.do/seguro-internacional",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://planessalud.com.do/seguro-internacional",
    title: "Seguro Médico Internacional desde República Dominicana",
    description:
      "Cobertura global desde RD en EE.UU., Europa y 190+ países. Planes desde $50 USD/mes.",
    siteName: "PlanesSalud.com.do",
    images: [
      {
        url: "/images/SEGURO_INTERNACIONAL_HERO_RD.webp",
        width: 1200,
        height: 630,
        alt: "Seguro médico internacional desde República Dominicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro Médico Internacional desde RD | PlanesSalud.com.do",
    description: "Cobertura global desde República Dominicana. Planes desde $50 USD/mes.",
    images: ["/images/SEGURO_INTERNACIONAL_HERO_RD.webp"],
  },
}

export default function InternationalInsurancePage() {
  return <InternationalInsuranceClientPage />
}
