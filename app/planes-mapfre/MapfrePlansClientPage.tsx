"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

/**
 * Página de planes Mapfre
 * — versión limpia sin errores de sintaxis —
 */
export default function MapfrePlansClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ────────────────────  HEADER  ──────────────────── */}
      <header className="sticky top-0 z-50 bg-red-900 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-red-300" />
            <span className="text-xl font-bold">PlanesSalud.com.do</span>
          </Link>

          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="transition-colors hover:text-red-300">
              Inicio
            </Link>
            <Link href="/#planes" className="transition-colors hover:text-red-300">
              Planes
            </Link>
            <Link href="/planes-humano" className="transition-colors hover:text-red-300">
              Humano Seguros
            </Link>
            <Link href="/#contacto" className="transition-colors hover:text-red-300">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+18099652727" className="text-sm transition-colors hover:text-red-400">
              (809) 965-2727
            </a>
          </div>
        </div>
      </header>

      {/* ────────────────────  HERO  ──────────────────── */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <Badge className="mb-4 bg-red-100 text-red-800">Líder en Seguros de Salud</Badge>

            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Mapfre Salud ARS —<span className="text-red-600"> La Red Médica Más Amplia</span>
            </h1>

            <p className="mb-8 text-xl text-gray-600">
              Descubre los planes de seguro de salud de Mapfre Salud ARS en República Dominicana. Plan Ejecutivo,
              Prestige y Preferencial con la mejor cobertura médica del país.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Cotizar Mapfre
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                onClick={() => window.open("tel:+18099652727", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
            </div>
          </div>

          {/* Imagen */}
          <Image
            src="/images/MAPFRE_SEGURO_RD.webp"
            alt="Mapfre Salud ARS – Planes de seguro de salud en República Dominicana"
            width={500}
            height={400}
            className="rounded-lg shadow-xl object-cover w-full h-full"
            priority
          />
        </div>
      </section>

      {/* ────────────────────  PLANES MAPFRE  ──────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Planes Mapfre Salud ARS</h2>
            <p className="text-xl text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades. Todos incluyen acceso a la red médica más amplia de
              República Dominicana.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* ── Preferencial ── */}
            <Card className="border-2 transition-colors hover:border-red-400">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl">Plan Preferencial</CardTitle>
                <CardDescription>Económico y eficiente para cuidado básico</CardDescription>
                <div className="text-3xl font-bold text-red-600">
                  RD$ 2,753 <span className="text-sm font-normal text-gray-500">/mes</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-6">
                {[
                  "Consultas médicas generales",
                  "Laboratorios básicos",
                  "Medicamentos ambulatorios",
                  "Emergencias 24/7",
                  "Red médica nacional",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}

                <Button
                  className="mt-6 w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.location.assign("/#cotizar")}
                >
                  Cotizar Plan Preferencial
                </Button>
              </CardContent>
            </Card>

            {/* ── Ejecutivo ── */}
            <Card className="relative border-2 border-red-400 transition-colors hover:border-red-600">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-red-600 text-white">
                Más Popular
              </Badge>

              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-900">Plan Ejecutivo</CardTitle>
                <CardDescription className="text-red-700">Cobertura completa para toda la familia</CardDescription>
                <div className="text-3xl font-bold text-red-600">
                  RD$ 4,500 <span className="text-sm font-normal text-gray-500">/mes</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-6">
                {[
                  "Todo lo del Plan Preferencial",
                  "Especialistas sin referencia",
                  "Cirugías ambulatorias",
                  "Hospitalización completa",
                  "Maternidad integral",
                  "Telemedicina 24/7",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}

                <Button
                  className="mt-6 w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.location.assign("/#cotizar")}
                >
                  Cotizar Plan Ejecutivo
                </Button>
              </CardContent>
            </Card>

            {/* ── Prestige ── */}
            <Card className="border-2 border-purple-200 transition-colors hover:border-purple-400">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-purple-900">Plan Prestige</CardTitle>
                  <Badge className="bg-purple-600 text-white">Premium</Badge>
                </div>
                <CardDescription className="text-purple-700">Premium con beneficios exclusivos</CardDescription>
                <div className="text-3xl font-bold text-purple-600">
                  RD$ 7,500 <span className="text-sm font-normal text-gray-500">/mes</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-6">
                {[
                  "Todo lo del Plan Ejecutivo",
                  "Habitación privada garantizada",
                  "Cobertura internacional limitada",
                  "Chequeos médicos anuales",
                  "Medicina alternativa",
                  "Concierge médico",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}

                <Button
                  className="mt-6 w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.location.assign("/#cotizar")}
                >
                  Cotizar Plan Prestige
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ────────────────────  CTA  ──────────────────── */}
      <section className="bg-red-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">¿Listo para unirte a Mapfre Salud ARS?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-100">
            Obtén una cotización personalizada y descubre por qué somos la ARS líder en República Dominicana.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              Cotizar por WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              onClick={() => window.open("tel:+18099652727", "_self")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* ────────────────────  FOOTER  ──────────────────── */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto space-y-12 px-4 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Marca */}
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">PlanesSalud.com.do</span>
            </Link>
            <p className="mb-4 text-gray-400">
              Encuentra tu seguro de salud ideal al mejor precio. Asesores expertos listos para ayudarte.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="h-4 w-4" />
              <a href="tel:+18099652727" className="transition-colors hover:text-white">
                +1 809-965-2727
              </a>
            </div>
          </div>

          {/* Planes */}
          <div>
            <h4 className="mb-4 font-semibold">Planes Mapfre</h4>
            <ul className="space-y-2 text-gray-400">
              {["Plan Preferencial", "Plan Ejecutivo", "Plan Prestige"].map((p) => (
                <li key={p}>
                  <span className="cursor-default transition-colors hover:text-white">{p}</span>
                </li>
              ))}
              <li>
                <Link href="/planes-humano" className="transition-colors hover:text-white">
                  Ver Humano Seguros
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4 font-semibold">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Cotización Gratuita
                </Link>
              </li>
              <li>
                <Link href="/#internacional" className="transition-colors hover:text-white">
                  Seguro Internacional
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Asesoría Personalizada
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 font-semibold">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Torre Acrópolis, 8 vo Piso, Av. Winston Churchill, Santo Domingo</li>
              <li>Contacto@cas.com.do</li>
              <li>+1 809-965-2727</li>
              <li>Lun – Vie: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          © 2025 PlanesSalud.com.do. Todos los derechos reservados.
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}
