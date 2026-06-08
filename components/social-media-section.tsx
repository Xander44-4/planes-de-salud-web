"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Users, Heart, MessageCircle } from "lucide-react"

export function SocialMediaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-2xl p-6 text-white text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Instagram className="h-8 w-8" />
              <span className="text-2xl font-bold">@cassegurosrd</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-b-2xl">
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Consejos de salud y seguros</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-pink-600" />
                <span className="text-gray-700">Ofertas exclusivas para seguidores</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Respuestas rápidas a tus dudas</span>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl"
              onClick={() => window.open("https://www.instagram.com/cassegurosrd/", "_blank")}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Seguir en Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
