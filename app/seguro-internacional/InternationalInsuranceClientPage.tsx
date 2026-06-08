"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Globe, Phone, MessageCircle, Star, Heart, Clock, Award, Plane, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { InternationalQuoteForm } from "@/components/international-quote-form"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function InternationalInsuranceClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-300" />
            <span className="text-xl font-bold">PlanesSalud.com.do</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-purple-300 transition-colors">
              Inicio
            </Link>
            <Link href="/#planes" className="hover:text-purple-300 transition-colors">
              Planes Locales
            </Link>
            <Link href="/planes-mapfre" className="hover:text-purple-300 transition-colors">
              Mapfre Salud ARS
            </Link>
            <Link href="/planes-humano" className="hover:text-purple-300 transition-colors">
              Humano Seguros
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:(809)965-2727" className="text-sm hover:text-purple-400 transition-colors">
              (809)965-2727
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
                Seguro Médico Internacional RD
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Seguro Médico Internacional<span className="text-purple-600"> desde República Dominicana</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Obtén cobertura médica internacional completa desde RD. Acceso directo a las mejores clínicas privadas
                en Estados Unidos, Europa y más de 190 países. Planes desde $50 USD mensuales con las principales
                aseguradoras internacionales. Los seguros locales no incluyen cobertura internacional - necesitas un
                plan especializado para viajar protegido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => {
                    const element = document.getElementById("cotizar-internacional")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Cotizar Seguro Internacional
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  onClick={() => window.open("tel:(809)965-2727", "_self")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar (809)965-2727
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/SEGURO_INTERNACIONAL_HERO_RD.webp"
                alt="Seguro médico internacional desde República Dominicana – Cobertura global para dominicanos"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* International Insurance Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mejores Aseguradoras Internacionales en RD
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compara y cotiza seguros médicos internacionales con las aseguradoras más confiables disponibles en
              República Dominicana. Cobertura global desde $50 USD mensuales.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-200 hover:border-green-400">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-800">Seguros Reservas</CardTitle>
                <CardDescription>Líder en seguros internacionales con 25+ años de experiencia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">
                  Seguros Reservas ofrece planes internacionales premium con cobertura en Estados Unidos, Europa y
                  América Latina. Red médica de más de 1.2 millones de proveedores globales.
                </p>
                <Badge className="bg-green-100 text-green-800 mb-4">Cobertura Premium Global</Badge>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    const element = document.getElementById("cotizar-internacional")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Cotizar Seguros Reservas
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-200 hover:border-blue-400">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-800">Humano Seguros Internacional</CardTitle>
                <CardDescription>Innovación y tecnología en seguros médicos globales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">
                  Humano Seguros Internacional combina la calidad local con cobertura global. Planes con telemedicina
                  24/7 y acceso a clínicas premium mundiales.
                </p>
                <Badge className="bg-blue-100 text-blue-800 mb-4">Tecnología Avanzada</Badge>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    const element = document.getElementById("cotizar-internacional")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Cotizar Humano Internacional
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-teal-200 hover:border-teal-400">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-teal-800">Seguros Sura Internacional</CardTitle>
                <CardDescription>Presencia multinacional con cobertura en 11 países</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">
                  Seguros Sura cuenta con amplia experiencia internacional y red médica en América Latina, Estados
                  Unidos y Europa. Especialistas en expatriados y viajeros frecuentes.
                </p>
                <Badge className="bg-teal-100 text-teal-800 mb-4">Presencia Multinacional</Badge>
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => {
                    const element = document.getElementById("cotizar-internacional")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Cotizar Seguros Sura
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-rose-200 hover:border-rose-400">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle className="text-xl text-rose-800">La Colonial de Seguros</CardTitle>
                <CardDescription>Tradición dominicana con alcance internacional</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">
                  La Colonial combina 50+ años de tradición dominicana con cobertura médica internacional moderna.
                  Planes adaptados para dominicanos que viajan o residen en el exterior.
                </p>
                <Badge className="bg-rose-100 text-rose-800 mb-4">Tradición Dominicana</Badge>
                <Button
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                  onClick={() => {
                    const element = document.getElementById("cotizar-internacional")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Cotizar La Colonial
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-indigo-200 hover:border-indigo-400">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl text-indigo-800">Bupa Salud Internacional</CardTitle>
                <CardDescription>Líder mundial en seguros de salud premium</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">
                  Bupa Salud es reconocida mundialmente por su excelencia en atención médica internacional. Cobertura
                  premium con acceso a los mejores hospitales del mundo.
                </p>
                <Badge className="bg-indigo-100 text-indigo-800 mb-4">Excelencia Mundial</Badge>
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => {
                    const element = document.getElementById("cotizar-internacional")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Cotizar Bupa Salud
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-cyan-200 hover:border-cyan-400">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <Plane className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl text-cyan-800">BMI Internacional</CardTitle>
                <CardDescription>Especialistas en seguros médicos para expatriados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">
                  BMI Internacional se especializa en seguros médicos para dominicanos que viven en el exterior y
                  expatriados. Cobertura flexible con beneficios de repatriación médica.
                </p>
                <Badge className="bg-cyan-100 text-cyan-800 mb-4">Especialistas Expatriados</Badge>
                <Button
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  onClick={() => {
                    const element = document.getElementById("cotizar-internacional")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Cotizar BMI Internacional
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Beneficios del Seguro Médico Internacional desde RD
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre por qué miles de dominicanos eligen seguro médico internacional para proteger su salud sin
              fronteras. Cobertura desde $50 USD mensuales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cobertura Global en 190+ Países</h3>
                    <p className="text-gray-600">
                      Protección médica completa en cualquier destino mundial. Desde emergencias hasta tratamientos
                      especializados en Estados Unidos, Europa y América Latina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Acceso a Clínicas Premium Mundiales</h3>
                    <p className="text-gray-600">
                      Tratamiento directo en Mayo Clinic, Johns Hopkins, Cleveland Clinic, Hospital Americano de París y
                      las mejores clínicas privadas internacionales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sin Restricciones ni Autorizaciones</h3>
                    <p className="text-gray-600">
                      Acceso inmediato a tratamientos médicos sin trámites burocráticos. Coordinación completa de tu
                      atención médica internacional desde República Dominicana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Asistencia 24/7 en Español</h3>
                    <p className="text-gray-600">
                      Soporte médico y administrativo las 24 horas en español desde cualquier parte del mundo. Línea
                      directa desde República Dominicana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/BENEFICIOS_SEGURO_INTERNACIONAL_RD.webp"
                alt="Beneficios del seguro médico internacional para dominicanos – Cobertura global desde RD"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Destinos de Cobertura Internacional desde RD
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige la cobertura geográfica que mejor se adapte a tus necesidades de viaje, trabajo o residencia en el
              exterior. Planes flexibles para dominicanos globales.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Estados Unidos</CardTitle>
                <CardDescription>Acceso completo al sistema de salud estadounidense premium</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Mayo Clinic (Minnesota, Florida, Arizona)</li>
                  <li>• Johns Hopkins Hospital (Baltimore)</li>
                  <li>• Cleveland Clinic (Ohio)</li>
                  <li>• Mount Sinai Hospital (Nueva York)</li>
                  <li>• Cedars-Sinai Medical Center (Los Ángeles)</li>
                </ul>
                <Badge className="bg-blue-100 text-blue-800">Cobertura Premium USA</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Europa</CardTitle>
                <CardDescription>Red médica premium en España, Francia, Alemania, Reino Unido</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Clínica Universidad de Navarra (España)</li>
                  <li>• Charité Universitätsmedizin (Berlín)</li>
                  <li>• Hôpital Américain de Paris (Francia)</li>
                  <li>• King's College Hospital (Londres)</li>
                  <li>• Clínica Hirslanden (Suiza)</li>
                </ul>
                <Badge className="bg-green-100 text-green-800">Excelencia Europea</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">América Latina</CardTitle>
                <CardDescription>Clínicas privadas de alta calidad en la región latinoamericana</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Clínica Alemana (Santiago, Chile)</li>
                  <li>• Hospital CIMA (San José, Costa Rica)</li>
                  <li>• Fundación Santa Fe (Bogotá, Colombia)</li>
                  <li>• Clínica Las Condes (Santiago, Chile)</li>
                  <li>• Hospital Británico (Buenos Aires)</li>
                </ul>
                <Badge className="bg-orange-100 text-orange-800">Calidad Latinoamericana</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose International Insurance */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Necesitas Seguro Internacional desde RD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los seguros de salud locales dominicanos no cubren emergencias o tratamientos en el exterior. Protégete
              con cobertura internacional especializada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/NECESIDAD_SEGURO_INTERNACIONAL_RD.webp"
                alt="Por qué los dominicanos necesitan seguro médico internacional – Limitaciones de seguros locales"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguros Locales No Cubren el Exterior</h3>
                  <p className="text-gray-600">
                    Mapfre, Humano y otras ARS locales solo cubren en República Dominicana. Una emergencia en Miami o
                    Madrid puede costarte miles de dólares.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Plane className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dominicanos Viajan Más que Nunca</h3>
                  <p className="text-gray-600">
                    Turismo, trabajo, estudios, familia en el exterior. Los dominicanos necesitan protección médica
                    internacional para viajar con tranquilidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Acceso a Tratamientos Avanzados</h3>
                  <p className="text-gray-600">
                    Algunos tratamientos especializados no están disponibles en RD. El seguro internacional te da acceso
                    a la medicina más avanzada del mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="cotizar-internacional" className="py-20 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cotiza tu Seguro Médico Internacional desde RD
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y recibe cotizaciones personalizadas de las mejores aseguradoras internacionales.
              Planes desde $50 USD mensuales.
            </p>
          </div>
          <InternationalQuoteForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Protege tu Salud Sin Fronteras desde República Dominicana
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            No dejes que las limitaciones de los seguros locales pongan en riesgo tu salud en el exterior. Obtén
            cobertura médica internacional desde $50 USD mensuales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => {
                const element = document.getElementById("cotizar-internacional")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Cotizar Seguro Internacional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              onClick={() => window.open("tel:(809)965-2727", "_self")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar (809)965-2727
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
              <p className="text-gray-400 mb-4">
                Especialistas en seguros médicos internacionales para dominicanos. Cobertura global desde $50 USD
                mensuales.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Respaldado por:</p>
                <p className="text-white font-semibold">CAS CORREDORES ASESORES DE SEGUROS SRL</p>
                <p className="text-gray-400 text-sm">Contacto@cas.com.do</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mt-4">
                <Phone className="h-4 w-4" />
                <a href="tel:(809)965-2727" className="hover:text-white transition-colors">
                  (809)965-2727
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Aseguradoras Internacionales</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    Seguros Reservas
                  </Link>
                </li>
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    Humano Internacional
                  </Link>
                </li>
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    Seguros Sura
                  </Link>
                </li>
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    BMI Internacional
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Cobertura Internacional</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    Estados Unidos
                  </Link>
                </li>
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    Europa
                  </Link>
                </li>
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    América Latina
                  </Link>
                </li>
                <li>
                  <Link href="#cotizar-internacional" className="hover:text-white transition-colors">
                    Cobertura Global
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Torre Acrópolis, 8vo. Piso, Av. Winston Churchill, Santo Domingo</li>
                <li>Contacto@cas.com.do</li>
                <li>
                  <a href="tel:(809)965-2727" className="hover:text-white transition-colors">
                    (809)965-2727
                  </a>
                </li>
                <li>Lun - Vie: 8:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PlanesSalud.com.do - Seguros Médicos Internacionales República Dominicana</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
