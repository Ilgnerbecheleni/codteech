import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Globe,
  ShoppingCart,
  Cpu,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  Zap,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CodTeech</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors">
              Serviços
            </Link>
            <Link href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
              Portfólio
            </Link>
            <Link href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Solicitar Orçamento
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    🚀 Soluções Tecnológicas Personalizadas
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Transforme suas ideias em realidade digital
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Na CodTeech, desenvolvemos soluções tecnológicas sob medida para o seu negócio. Desde páginas web
                    até sistemas de automação embarcada, criamos tecnologia que impulsiona resultados.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Começar Projeto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Portfólio
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Projetos entregues no prazo</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Suporte técnico incluso</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-3xl opacity-30"></div>
                  <Image
                    src="/banner-ini.jpeg"
                    alt="CodTeech - Desenvolvimento de Soluções Tecnológicas"
                    width={600}
                    height={400}
                    className="relative rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Serviços</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos soluções completas em tecnologia para impulsionar seu negócio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-8 w-8 text-blue-600" />
                      <CardTitle>Páginas Web Profissionais</CardTitle>
                    </div>
                    <CardDescription>
                      Sites responsivos, modernos e otimizados para conversão. Desde landing pages até portais
                      corporativos completos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Design responsivo e moderno</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>SEO otimizado</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Integração com redes sociais</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <ShoppingCart className="h-8 w-8 text-green-600" />
                      <CardTitle>Sistemas de Ponto de Venda</CardTitle>
                    </div>
                    <CardDescription>
                      Soluções PDV personalizadas para otimizar suas vendas e controle de estoque.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Controle de estoque integrado</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Relatórios de vendas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Interface intuitiva</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Code className="h-8 w-8 text-purple-600" />
                      <CardTitle>Sites Personalizados</CardTitle>
                    </div>
                    <CardDescription>
                      Desenvolvimento sob medida com funcionalidades específicas para suas necessidades.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Funcionalidades customizadas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Integração com APIs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Painel administrativo</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Cpu className="h-8 w-8 text-orange-600" />
                      <CardTitle>Automação Embarcada</CardTitle>
                    </div>
                    <CardDescription>
                      Sistemas de automação inteligente para otimizar processos e aumentar a eficiência.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>IoT e sensores inteligentes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Monitoramento remoto</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Controle automatizado</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que escolher a CodTeech?</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Somos especialistas em transformar desafios tecnológicos em soluções inovadoras que geram resultados
                    reais para seu negócio.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium">Desenvolvimento Ágil</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Código Seguro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Suporte Dedicado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    <span className="font-medium">Qualidade Premium</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/porque.png"
                  alt="Equipe CodTeech"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos em Destaque</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça alguns dos projetos que desenvolvemos para nossos clientes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="E-commerce Moderno"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>E-commerce Completo</CardTitle>
                  <CardDescription>
                    Plataforma de vendas online com sistema de pagamento integrado e painel administrativo.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Sistema PDV"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Sistema PDV Restaurante</CardTitle>
                  <CardDescription>
                    Solução completa para gestão de pedidos, estoque e relatórios para restaurantes.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Automação IoT"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Automação Industrial</CardTitle>
                  <CardDescription>
                    Sistema de monitoramento e controle automatizado para linha de produção.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Vamos conversar sobre seu projeto?
                  </h2>
                  <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Entre em contato conosco e descubra como podemos transformar suas ideias em soluções tecnológicas de
                    sucesso.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-white">
                    <Mail className="h-5 w-5" />
                    <span>contato@codteech.com.br</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Phone className="h-5 w-5" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <MapPin className="h-5 w-5" />
                    <span>Belo Horizonte, MG - Brasil</span>
                  </div>
                </div>
              </div>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Solicite um Orçamento</CardTitle>
                  <CardDescription className="text-blue-100">
                    Preencha o formulário e entraremos em contato em até 24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      placeholder="Seu nome"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                    <Input
                      placeholder="Seu email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                  </div>
                  <Input
                    placeholder="Empresa (opcional)"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Textarea
                    placeholder="Descreva seu projeto..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 min-h-[100px]"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Enviar Solicitação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CodTeech</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CodTeech. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
