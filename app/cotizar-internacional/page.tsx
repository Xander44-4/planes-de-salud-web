import InternationalQuoteClientPage from "./InternationalQuoteClientPage"

export const metadata = {
  title: "Cotizar Seguro Médico Internacional - PlanesSalud.com.do",
  description:
    "Cotiza tu seguro médico internacional desde República Dominicana. Formulario especializado para cobertura global en Estados Unidos, Europa y más de 190 países.",
  keywords: "cotizar seguro internacional RD, formulario seguro global, cobertura médica internacional",
  alternates: {
    canonical: "https://planessalud.com.do/cotizar-internacional",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://planessalud.com.do/cotizar-internacional",
    title: "Cotizar Seguro Médico Internacional desde República Dominicana",
    description:
      "Formulario especializado para cobertura global en EE.UU., Europa y más de 190 países.",
    siteName: "PlanesSalud.com.do",
    images: [
      {
        url: "/images/SEGURO_INTERNACIONAL_HERO_RD.webp",
        width: 1200,
        height: 630,
        alt: "Cotizar seguro médico internacional desde República Dominicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cotizar Seguro Internacional desde RD | PlanesSalud.com.do",
    description: "Cobertura global desde República Dominicana. Más de 190 países.",
    images: ["/images/SEGURO_INTERNACIONAL_HERO_RD.webp"],
  },
}

export default function InternationalQuotePage() {
  return <InternationalQuoteClientPage />
}
