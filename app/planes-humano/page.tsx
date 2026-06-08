import HumanoPlansClientPage from "./HumanoPlansClientPage"

export const metadata = {
  title: "Humano Seguros – Planes Mi Salud en República Dominicana | PlanesSalud.com.do",
  description:
    "Planes Mi Salud de Humano Seguros en RD: Mi Salud Superior, Mi Salud Max y Mi Salud Platinum. Cotiza tu seguro de salud privado con la mejor tecnología médica.",
  keywords:
    "Humano Seguros RD, Mi Salud Max, Mi Salud Platinum, planes Humano República Dominicana, seguro salud privado Humano, Mi Salud Superior RD",
  alternates: {
    canonical: "https://planessalud.com.do/planes-humano",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://planessalud.com.do/planes-humano",
    title: "Humano Seguros – Planes Mi Salud en República Dominicana",
    description:
      "Mi Salud Superior, Mi Salud Max y Mi Salud Platinum. Cotiza tu seguro privado con Humano Seguros RD.",
    siteName: "PlanesSalud.com.do",
    images: [
      {
        url: "/images/SEGUROS_SALUD_HUMANO_RD.webp",
        width: 1200,
        height: 630,
        alt: "Humano Seguros Mi Salud – Seguro de salud privado en República Dominicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humano Seguros – Planes Mi Salud en RD",
    description: "Mi Salud Superior, Max y Platinum. Cotiza tu seguro de salud privado en RD.",
    images: ["/images/SEGUROS_SALUD_HUMANO_RD.webp"],
  },
}

export default function HumanoPlansPage() {
  return <HumanoPlansClientPage />
}
