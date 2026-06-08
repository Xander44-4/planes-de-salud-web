"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Plus, Minus } from "lucide-react"

interface Dependent {
  id: string
  age: string
  relationship: string
}

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    insurer: "",
    planType: "",
    message: "",
    spouseAge: "",
    dependents: [] as Dependent[],
    employeeCount: "",
  })

  const addDependent = () => {
    const newDependent: Dependent = {
      id: Date.now().toString(),
      age: "",
      relationship: "hijo",
    }
    setFormData({ ...formData, dependents: [...formData.dependents, newDependent] })
  }

  const removeDependent = (id: string) => {
    setFormData({
      ...formData,
      dependents: formData.dependents.filter((dep) => dep.id !== id),
    })
  }

  const updateDependent = (id: string, field: string, value: string) => {
    setFormData({
      ...formData,
      dependents: formData.dependents.map((dep) => (dep.id === id ? { ...dep, [field]: value } : dep)),
    })
  }

  const showFamilyOptions = formData.planType === "familiar" || formData.planType === "empresarial"
  const showEnterpriseOptions = formData.planType === "empresarial"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let dependentsInfo = ""
    if (formData.dependents.length > 0) {
      dependentsInfo = `
👨‍👩‍👧‍👦 Dependientes:
${formData.dependents.map((dep, index) => `• ${dep.relationship} ${index + 1}: ${dep.age} años`).join("\n")}`
    }

    const spouseInfo = formData.spouseAge ? `\n👫 Cónyuge: ${formData.spouseAge} años` : ""

    const enterpriseInfo = formData.employeeCount ? `\n🏢 Cantidad de afiliados: ${formData.employeeCount}` : ""

    const message = `Hola, me interesa cotizar un seguro de salud:
    
👤 Información Personal:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Edad: ${formData.age}

📋 Plan Deseado:
• Aseguradora preferida: ${formData.insurer}
• Tipo de plan: ${formData.planType}${spouseInfo}${dependentsInfo}${enterpriseInfo}

💬 Mensaje adicional: ${formData.message}

Por favor, envíenme información detallada y cotización personalizada.`

    const whatsappUrl = `https://wa.me/+18099652727?text=${encodeURIComponent(message)}`.replace(
      "+18099652727",
      "+18099652727",
    )
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/10 backdrop-blur border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">Formulario de Cotización</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Nombre Completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="809-000-0000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-white">
                  Edad *
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Tu edad"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurer" className="text-white">
                  Aseguradora Preferida
                </Label>
                <Select
                  value={formData.insurer}
                  onValueChange={(value) => setFormData({ ...formData, insurer: value })}
                >
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Selecciona una aseguradora" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mapfre">Mapfre Salud ARS</SelectItem>
                    <SelectItem value="humano">Humano Seguros</SelectItem>
                    <SelectItem value="universal">ARS Universal</SelectItem>
                    <SelectItem value="monumental">ARS Monumental</SelectItem>
                    <SelectItem value="futuro">ARS Futuro</SelectItem>
                    <SelectItem value="yunen">ARS Yunen</SelectItem>
                    <SelectItem value="reservas">ARS Reservas</SelectItem>
                    <SelectItem value="no-seguro">No tengo preferencia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="planType" className="text-white">
                  Tipo de Plan *
                </Label>
                <Select
                  value={formData.planType}
                  onValueChange={(value) => setFormData({ ...formData, planType: value })}
                  required
                >
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Selecciona un tipo de plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="familiar">Familiar</SelectItem>
                    <SelectItem value="empresarial">Empresarial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Family Options */}
            {showFamilyOptions && !showEnterpriseOptions && (
              <div className="space-y-6 p-4 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-lg font-semibold text-white">Información Familiar</h3>

                <div className="space-y-2">
                  <Label htmlFor="spouseAge" className="text-white">
                    Edad del Cónyuge (opcional)
                  </Label>
                  <Input
                    id="spouseAge"
                    type="number"
                    value={formData.spouseAge}
                    onChange={(e) => setFormData({ ...formData, spouseAge: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Edad del cónyuge"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-white">Dependientes (Hijos)</Label>
                    <Button
                      type="button"
                      onClick={addDependent}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Agregar Hijo
                    </Button>
                  </div>

                  {formData.dependents.map((dependent, index) => (
                    <div key={dependent.id} className="flex gap-2 items-end">
                      <div className="flex-1">
                        <Label className="text-white text-sm">Hijo {index + 1} - Edad</Label>
                        <Input
                          type="number"
                          value={dependent.age}
                          onChange={(e) => updateDependent(dependent.id, "age", e.target.value)}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          placeholder="Edad"
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={() => removeDependent(dependent.id)}
                        size="sm"
                        variant="destructive"
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enterprise Options */}
            {showEnterpriseOptions && (
              <div className="space-y-6 p-4 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-lg font-semibold text-white">Información Empresarial</h3>

                <div className="space-y-2">
                  <Label htmlFor="employeeCount" className="text-white">
                    Cantidad de Afiliados (mínimo 3) *
                  </Label>
                  <Input
                    id="employeeCount"
                    type="number"
                    min="3"
                    value={formData.employeeCount || ""}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Número de empleados a afiliar"
                    required={showEnterpriseOptions}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Mensaje Adicional
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                placeholder="Cuéntanos sobre tus necesidades específicas..."
                rows={4}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" size="lg" className="flex-1 bg-green-500 hover:bg-green-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar por WhatsApp
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="flex-1 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                onClick={() => window.open("tel:+18099652727", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
