"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Phone, MessageCircle, Star, Smartphone, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HumanoPlansClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-300" />
            <span className="text-xl font-bold">PlanesSalud.com.do</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-300 transition-colors">
              Inicio
            </Link>
            <Link href="/#planes" className="hover:text-blue-300 transition-colors">
              Planes
            </Link>
            <Link href="/planes-mapfre" className="hover:text-blue-300 transition-colors">
              Mapfre Salud ARS
            </Link>
            <Link href="/#contacto" className="hover:text-blue-300 transition-colors">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:(809)965-2727" className="text-sm hover:text-blue-400 transition-colors">
              (809)965-2727
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Innovación en Seguros de Salud</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Humano Seguros -<span className="text-blue-600">  Mi Salud </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubre los planes Mi Salud de Humano Seguros en República Dominicana. Innovación en seguros con cobertura local y la mejor tecnología médica para atención nacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Cotizar Humano
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-green-50 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/SEGUROS_SALUD_HUMANO_RD.webp"
                alt="Humano Seguros Mi Salud Max – Seguro de salud local en República Dominicana"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Humano Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Planes Mi Salud Max - Humano Seguros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Planes Mi Salud - Humano Seguro, elige el que más se adapte a tus necesidades. Todos incluyen cobertura local con tecnología de vanguardia para atención médica en República Dominicana.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mi Salud Max Básico */}
            <Card className="border-2 border-gray-200 hover:border-blue-400 transition-colors">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-gray-900">Mi Salud Superior</CardTitle>
                <CardDescription className="text-gray-700">
                  Cobertura superior para atención médica local
                </CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  Desde RD$3,217
                  <span className="text-sm font-normal text-gray-500">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Consultas médicas ilimitadas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Emergencias 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Laboratorios y estudios</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>App móvil avanzada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Red médica nacional</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = "/#cotizar")}
                  >
                    Cotizar Mi Salud Superior 
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mi Salud Max Plus */}
            <Card className="border-2 border-blue-400 hover:border-blue-600 transition-colors relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                Más Popular
              </Badge>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl text-blue-900">Mi Salud Max </CardTitle>
                <CardDescription className="text-blue-700">Cobertura completa local</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  Desde RD$5,352
                  <span className="text-sm font-normal text-gray-500">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Consultas médicas ilimitadas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Centros </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Hospitalización</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Maternidad integral</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Medicina preventiva</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Telemedicina 24/7</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = "/#cotizar")}
                  >
                    Cotizar Mi Salud Max 
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mi Salud Max Premium */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-blue-900">Mi Salud Platinum</CardTitle>
                  <Badge className="bg-blue-600 text-white">Premium</Badge>
                </div>
                <CardDescription className="text-blue-700">Máxima cobertura local con beneficios VIP</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  Desde RD$17,082
                  <span className="text-sm font-normal text-gray-500">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Red clínicas Exclusivas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Odontología Premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Chequeos preventivos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Seguro viajero</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Cobertura reembolso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Sala VIP Aeropuerto</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = "/#cotizar")}
                  >
                    Cotizar Mi Salud Platimum
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Beneficios Exclusivos Humano Seguros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre la innovación en seguros de salud con tecnología de vanguardia para atención médica local.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">App Móvil Más Avanzada</h3>
                    <p className="text-gray-600">
                      Gestiona todo desde tu móvil: citas, recetas digitales, historial médico y más.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Red Médica Nacional</h3>
                    <p className="text-gray-600">
                      Acceso a clínicas privadas de primer nivel en toda República Dominicana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Atención Personalizada</h3>
                    <p className="text-gray-600">
                      Cada afiliado tiene un asesor personal disponible para resolver cualquier consulta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/BENEFICIOS_SEGURO_EXCLUSIVO_HUMANO_RD.webp"
                alt="Beneficios exclusivos Humano Seguros Mi Salud – Seguro de salud privado en RD"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Listo para Mi Salud ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de familias que ya disfrutan de la mejor cobertura de salud local en República Dominicana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              Cotizar por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">PlanesSalud.com.do</span>
              </Link>
              <p className="text-gray-400 mb-4">Corredores de Seguros de Salud en República Dominicana.</p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Respaldado por:</p>
                <p className="text-white font-semibold">CAS CORREDORES ASESORES DE SEGUROS SRL</p>
                <p className="text-gray-400 text-sm">Contacto@cas.com.do</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <a href="tel:(809)965-2727" className="hover:text-white transition-colors">
                  (809)965-2727
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Planes Humano</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mi Salud Superior
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mi Salud Max
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mi Salud Platinum
                  </Link>
                </li>
                <li>
                  <Link href="/planes-mapfre" className="hover:text-white transition-colors">
                    Ver Mapfre Salud ARS
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Cotización Gratuita
                  </Link>
                </li>
                <li>
                  <Link href="/seguro-internacional" className="hover:text-white transition-colors">
                    Seguro Internacional
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Asesoría Personalizada
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    App Móvil
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Torre Acrópolis, 8vo. Piso, Av. Winston Churchill, Santo Domingo</li>
                <li>Contacto@cas.com.do</li>
                <li>(809)965-2727</li>
                <li>Lun - Vie: 8:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 PlanesSalud.com.do. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
