"use client"

import { Button } from "@/components/ui/button"
import { Shield, Phone, MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { InternationalQuoteForm } from "@/components/international-quote-form"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function InternationalQuoteClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-purple-900 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-300" />
            <span className="text-xl font-bold">PlanesSalud.com.do</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/seguro-internacional"
              className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a Info Internacional</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+18099652727" className="text-sm hover:text-purple-300 transition-colors">
                +1 809-965-2727
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cotizar Seguro<span className="text-purple-600"> Internacional</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Completa el formulario especializado para obtener una cotización personalizada de tu seguro médico
              internacional. Cobertura global desde República Dominicana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp: +1 809-965-2727
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                onClick={() => window.open("tel:+18099652727", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
            </div>
          </div>

          <InternationalQuoteForm />

          {/* Benefits Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cobertura Global</h3>
              <p className="text-gray-600 text-sm">Protección médica en más de 190 países del mundo</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Respuesta Rápida</h3>
              <p className="text-gray-600 text-sm">Cotización personalizada en menos de 24 horas</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Asesoría Experta</h3>
              <p className="text-gray-600 text-sm">Especialistas en seguros internacionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold">PlanesSalud.com.do</span>
          </div>
          <p className="text-gray-400 mb-2">Especialistas en seguros de salud privados e internacionales</p>
          <p className="text-sm text-gray-400 mb-2">
            Respaldado por: <span className="text-white font-semibold">CAS CORREDORES ASESORES DE SEGUROS SRL</span>
          </p>
          <p className="text-gray-400">
            <a href="tel:+18099652727" className="hover:text-white transition-colors">
              +1 809-965-2727
            </a>{" "}
            |{" "}
            <a href="mailto:contacto@cas.com.do" className="hover:text-white transition-colors">
              contacto@cas.com.do
            </a>
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
