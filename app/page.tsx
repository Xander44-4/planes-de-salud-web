"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Heart,
  Globe,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import { QuoteForm } from "@/components/quote-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SocialMediaSection } from "@/components/social-media-section"
import { SocialMediaFloating } from "@/components/social-media-floating"
import { OptimizedImage } from "@/components/optimized-image"
import { LazySection } from "@/components/lazy-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-300" />
            <span className="text-xl font-bold">PlanesSalud.com.do</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#inicio" className="hover:text-blue-300 transition-colors">
              Inicio
            </Link>
            <Link href="#planes" className="hover:text-blue-300 transition-colors">
              Planes
            </Link>
            <Link href="#cotizar" className="hover:text-blue-300 transition-colors">
              Cotizar
            </Link>
            <Link href="/seguro-internacional" className="hover:text-blue-300 transition-colors">
              Internacional
            </Link>
            <Link href="#contacto" className="hover:text-blue-300 transition-colors">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+1(809)965-2727" className="hover:text-blue-400 transition-colors">
                +1(809)965-2727
              </a>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-transparent hidden sm:flex"
              onClick={() => window.open("https://www.instagram.com/cassegurosrd/", "_blank")}
            >
              <Instagram className="h-4 w-4 mr-1" />
              Síguenos
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-500 text-white hover:bg-orange-500 border-0">
                ✓ Seguros de Salud Privados en RD
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Seguro de Salud Privado en RD –<span className="text-orange-400"> Calidad y Respaldo</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                Cotiza y compara planes de Mapfre Salud ARS y Humano Seguros en un solo lugar. Protege a tu familia con
                la mejor cobertura médica privada en República Dominicana.
              </p>

              {/* Trust indicators row */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white text-sm font-medium">Sin costo de asesoría</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white text-sm font-medium">Respuesta en 24h</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white text-sm font-medium">15+ años de experiencia</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                  onClick={() => {
                    const element = document.getElementById("cotizar")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Cotiza Ahora — Es Gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => window.open("tel:+1(809)965-2727", "_self")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
            </div>

            {/* Image column with decorative framing */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative ring behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[420px] h-[420px] rounded-full border-2 border-white/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[480px] h-[480px] rounded-full border border-white/5" />
              </div>

              <div className="relative w-full max-w-[520px]">
                {/* Glow effect behind the image */}
                <div className="absolute inset-4 bg-blue-400 opacity-20 blur-2xl rounded-2xl" />

                <OptimizedImage
                  src="/images/SEGURO_SALUD_LOCAL_RD.webp"
                  alt="Familia protegida con seguro de salud privado en República Dominicana"
                  width={520}
                  height={420}
                  className="rounded-2xl shadow-2xl ring-1 ring-white/20 relative"
                  priority={true}
                />

                {/* Floating card — top left */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 leading-tight">5,000+</div>
                    <div className="text-xs text-gray-500">Familias Protegidas</div>
                  </div>
                </div>

                {/* Floating card — bottom right */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 leading-tight">Calificación 5★</div>
                    <div className="text-xs text-gray-500">Clientes satisfechos</div>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div className="absolute -bottom-2 left-6 bg-blue-600 text-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg text-sm font-semibold">
                  <Clock className="h-3.5 w-3.5" />
                  Atención 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Familias Protegidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Atención Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Insurers Section */}
      <section id="planes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Planes por Aseguradora</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compara los mejores planes de seguro de salud privado en República Dominicana. Mapfre Salud ARS y Humano
              Seguros te ofrecen la mejor cobertura médica.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Mapfre Salud ARS */}
            <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-red-900">Mapfre Salud ARS</CardTitle>
                  <Badge className="bg-red-600 text-white">Más Popular</Badge>
                </div>
                <CardDescription className="text-red-700">
                  Líder en seguros de salud con amplia red médica nacional
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Plan Ejecutivo - Cobertura completa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Plan Prestige - Premium con beneficios exclusivos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Plan Preferencial - Económico y eficiente</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Red médica más amplia del país</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Telemedicina 24/7</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => {
                      const element = document.getElementById("cotizar")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Cotizar Mapfre Salud ARS
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Humano Seguros */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-blue-900">Humano Seguros</CardTitle>
                  <Badge className="bg-blue-600 text-white">Recomendado</Badge>
                </div>
                <CardDescription className="text-blue-700">Innovación en seguros con cobertura local</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Mi Salud Max - Plan integral</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Cobertura local completa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Red médica nacional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>App móvil avanzada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Atención personalizada</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      const element = document.getElementById("cotizar")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Cotizar Humano Seguros
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other ARS */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Otras ARS Disponibles</h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {["ARS Universal", "ARS Monumental", "ARS Futuro", "ARS Yunen", "ARS Reservas"].map((ars) => (
                <div
                  key={ars}
                  className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById("cotizar")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">{ars}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="cotizar" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Cotiza tu Seguro de Salud</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Obtén una cotización personalizada en minutos. Compara precios y coberturas de las mejores aseguradoras de
              República Dominicana.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* International Coverage */}
      <section id="internacional" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Cobertura Global</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Seguro Médico Internacional</h2>
              <p className="text-lg text-gray-600 mb-6">
                Protégete en cualquier parte del mundo con nuestros planes de seguro médico internacional. Cobertura
                global y acceso a las mejores clínicas privadas internacionales.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Es importante tener en cuenta que solo los planes premium de las aseguradoras incluyen cobertura de
                seguro viajero internacional. Los planes locales básicos no ofrecen cobertura internacional
                directamente. Para cobertura internacional completa, considera opciones especializadas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-purple-600" />
                  <span>Cobertura en más de 190 países</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-purple-600" />
                  <span>Acceso a clínicas privadas de primer nivel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span>Acceso directo a tratamientos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <span>Asistencia 24/7 en español</span>
                </div>
              </div>
              <Link
                href="/seguro-internacional"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded px-6 py-3 inline-block"
              >
                Cotizar Seguro Internacional
              </Link>
            </div>
            <div>
              <OptimizedImage
                src="/images/SEGURO_INTERNACIONAL_RD.webp"
                alt="Seguro médico internacional desde República Dominicana – Cobertura global"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <LazySection>
        {/* Additional Coverage */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Coberturas Adicionales</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complementa tu seguro de salud con coberturas especializadas para una protección integral.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Seguro de Vida en USD</CardTitle>
                  <CardDescription>Protección financiera para tu familia en dólares americanos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Cobertura desde $50,000 USD</li>
                    <li>• Primas fijas en dólares</li>
                    <li>• Beneficios por muerte accidental</li>
                    <li>• Proceso de reclamación ágil</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      const message = "Hola, me interesa obtener más información sobre Seguro de Vida en USD."
                      const whatsappUrl = `https://wa.me/+18099652727?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, "_blank")
                    }}
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Enfermedades Graves</CardTitle>
                  <CardDescription>Cobertura especializada para enfermedades catastróficas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Cáncer, infarto, derrame cerebral</li>
                    <li>• Pago único al diagnóstico</li>
                    <li>• Cobertura desde $500,000 USD</li>
                    <li>• Sin períodos de carencia largos</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      const message =
                        "Hola, me interesa obtener más información sobre cobertura para Enfermedades Graves."
                      const whatsappUrl = `https://wa.me/+18099652727?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, "_blank")
                    }}
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Accidentes Personales</CardTitle>
                  <CardDescription>Protección completa contra accidentes y lesiones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Muerte accidental desde $2,000 USD</li>
                    <li>• Incapacidad total y permanente</li>
                    <li>• Gastos médicos por accidentes</li>
                    <li>• Indemnización por hospitalización</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      const message = "Hola, me interesa obtener más información sobre Seguro de Accidentes Personales."
                      const whatsappUrl = `https://wa.me/+18099652727?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, "_blank")
                    }}
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Por Qué Elegirnos?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos especialistas en seguros de salud privados en República Dominicana. Te ayudamos a encontrar la
                mejor cobertura al mejor precio.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ventajas del Seguro Privado vs. Sistema Público
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <div className="font-semibold">Atención Inmediata</div>
                      <div className="text-gray-600">Sin largas esperas, citas el mismo día</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <div className="font-semibold">Red Médica Amplia</div>
                      <div className="text-gray-600">Acceso a las mejores clínicas privadas y especialistas</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <div className="font-semibold">Telemedicina 24/7</div>
                      <div className="text-gray-600">Consultas médicas desde casa</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <div className="font-semibold">Cobertura de Maternidad</div>
                      <div className="text-gray-600">Atención completa durante el embarazo</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-gray-600">Satisfacción Cliente</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-gray-600">Soporte Disponible</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-purple-600">5★</div>
                  <div className="text-gray-600">Calificación Promedio</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Listo para Proteger a tu Familia?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Obtén una cotización gratuita y personalizada. Nuestros asesores expertos te ayudarán a encontrar el plan
            perfecto para tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => {
                const message =
                  "Hola, me interesa obtener información sobre seguros de salud privados en República Dominicana."
                const whatsappUrl = `https://wa.me/+18099652727?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, "_blank")
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Cotizar por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              onClick={() => window.open("tel:+1(809)965-2727", "_self")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">PlanesSalud.com.do</span>
              </div>
              <p className="text-gray-400 mb-4">
                Especialistas en seguros de salud privados en República Dominicana. Tu salud es nuestra prioridad.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Respaldado por:</p>
                <p className="text-white font-semibold">CAS CORREDORES ASESORES DE SEGUROS SRL</p>
                <p className="text-gray-400 text-sm">Contacto@cas.com.do</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mt-4">
                <Phone className="h-4 w-4" />
                <a href="tel:+1(809)965-2727" className="hover:text-blue-400 transition-colors">
                  +1(809)965-2727
                </a>
              </div>

              {/* Social Media in Footer */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3">Síguenos en redes sociales:</p>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  onClick={() => window.open("https://www.instagram.com/cassegurosrd/", "_blank")}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  @cassegurosrd
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Aseguradoras</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mapfre Salud ARS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Humano Seguros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ARS Universal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ARS Monumental
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Seguro de Salud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Seguro Internacional
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Seguro de Vida
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enfermedades Graves
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Torre Acrópolis, 8vo. Piso, Av. Winston Churchill, Santo Domingo.</li>
                <li>Contacto@cas.com.do</li>
                <li>
                  <a href="tel:+1(809)965-2727" className="hover:text-blue-400 transition-colors">
                    +1(809)965-2727
                  </a>
                </li>
                <li>Lun - Vie: 8:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 PlanesSalud.com.do. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">
              Síguenos en Instagram:
              <a
                href="https://www.instagram.com/cassegurosrd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 ml-1"
              >
                @cassegurosrd
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Social Media Floating Button */}
      <SocialMediaFloating />
    </div>
  )
}
