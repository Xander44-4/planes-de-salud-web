"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageCircle, Phone, Globe, Plus, Minus } from "lucide-react"

interface Dependent {
  id: string
  age: string
  relationship: string
}

export function InternationalQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    coverage: "",
    destinations: [] as string[],
    budget: "",
    planType: "",
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

  const handleDestinationChange = (destination: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, destinations: [...formData.destinations, destination] })
    } else {
      setFormData({ ...formData, destinations: formData.destinations.filter((d) => d !== destination) })
    }
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

    const message = `Hola, me interesa cotizar un SEGURO MÉDICO INTERNACIONAL desde República Dominicana:

👤 Información Personal:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Edad: ${formData.age}

🌍 Cobertura Deseada:
• Tipo de plan: ${formData.planType}
• Tipo de cobertura: ${formData.coverage}
• Destinos de interés: ${formData.destinations.join(", ") || "No especificado"}
• Presupuesto mensual: ${formData.budget}${spouseInfo}${dependentsInfo}${enterpriseInfo}

Soy residente de República Dominicana y necesito cobertura médica internacional. Por favor, envíenme información detallada y cotización personalizada de las mejores aseguradoras disponibles.`

    const whatsappUrl = `https://wa.me/+18099652727?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Globe className="h-6 w-6" />
            <CardTitle className="text-2xl text-center">Cotizar Seguro Médico Internacional</CardTitle>
          </div>
          <p className="text-center text-purple-100">Cobertura global desde República Dominicana - Desde $50 USD/mes</p>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono RD *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="809-000-0000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Edad *</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="Tu edad"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="planType">Tipo de Plan Internacional *</Label>
              <Select
                value={formData.planType}
                onValueChange={(value) => setFormData({ ...formData, planType: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="familiar">Familiar</SelectItem>
                  <SelectItem value="empresarial">Empresarial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Family Options */}
            {showFamilyOptions && !showEnterpriseOptions && (
              <div className="space-y-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900">Información Familiar</h3>

                <div className="space-y-2">
                  <Label htmlFor="spouseAge">Edad del Cónyuge (opcional)</Label>
                  <Input
                    id="spouseAge"
                    type="number"
                    value={formData.spouseAge}
                    onChange={(e) => setFormData({ ...formData, spouseAge: e.target.value })}
                    placeholder="Edad del cónyuge"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Dependientes (Hijos)</Label>
                    <Button
                      type="button"
                      onClick={addDependent}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Agregar Hijo
                    </Button>
                  </div>

                  {formData.dependents.map((dependent, index) => (
                    <div key={dependent.id} className="flex gap-2 items-end">
                      <div className="flex-1">
                        <Label className="text-purple-900 text-sm">Hijo {index + 1} - Edad</Label>
                        <Input
                          type="number"
                          value={dependent.age}
                          onChange={(e) => updateDependent(dependent.id, "age", e.target.value)}
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
              <div className="space-y-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900">Información Empresarial</h3>

                <div className="space-y-2">
                  <Label htmlFor="employeeCount">Cantidad de Afiliados (mínimo 3) *</Label>
                  <Input
                    id="employeeCount"
                    type="number"
                    min="3"
                    value={formData.employeeCount || ""}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    placeholder="Número de empleados a afiliar"
                    required={showEnterpriseOptions}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="coverage">Tipo de Cobertura Internacional *</Label>
              <Select
                value={formData.coverage}
                onValueChange={(value) => setFormData({ ...formData, coverage: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de cobertura" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Cobertura Global (Mundial)</SelectItem>
                  <SelectItem value="americas">Américas (USA, Canadá, Latinoamérica)</SelectItem>
                  <SelectItem value="usa-only">Solo Estados Unidos</SelectItem>
                  <SelectItem value="europe">Europa y Reino Unido</SelectItem>
                  <SelectItem value="emergency">Solo Emergencias Internacionales</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Destinos de Mayor Interés (opcional)</Label>
              <div className="grid grid-cols-2 gap-2">
                {["Estados Unidos", "España", "Colombia", "Europa", "Costa Rica", "Panamá", "Otros"].map(
                  (destination) => (
                    <div key={destination} className="flex items-center space-x-2">
                      <Checkbox
                        id={destination}
                        checked={formData.destinations.includes(destination)}
                        onCheckedChange={(checked) => handleDestinationChange(destination, checked as boolean)}
                      />
                      <Label htmlFor={destination} className="text-sm">
                        {destination}
                      </Label>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Presupuesto Mensual (USD)</Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu presupuesto mensual" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50-100">$50 - $100 USD</SelectItem>
                  <SelectItem value="100-150">$100 - $150 USD</SelectItem>
                  <SelectItem value="150-200">$150 - $200 USD</SelectItem>
                  <SelectItem value="200-300">$200 - $300 USD</SelectItem>
                  <SelectItem value="300-500">$300 - $500 USD</SelectItem>
                  <SelectItem value="over-500">Más de $500 USD</SelectItem>
                  <SelectItem value="no-limit">Sin límite específico</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" size="lg" className="flex-1 bg-purple-600 hover:bg-purple-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => window.open("tel:+1(809)965-2727", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar: +1(809)965-2727
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
