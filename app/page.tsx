import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { UrgencyNotice } from "@/components/urgency-notice"
import {
  CheckCircle2,
  HeartPulse,
  ZapOff,
  Scale,
  BrainCircuit,
  Activity,
  Smile,
  PersonStanding,
  Star,
  ShieldCheck,
  Lock,
  Award,
  BookOpen,
  Users,
  Quote,
  Shirt,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const depoimentosReais = [
  {
    nome: "Cristina",
    youtubeId: "cDTZGnzHb5s",
    resultado: "-16 quilos aos 54 anos",
    especificidade: "Sem deixar de comer pudim!",
  },
  {
    nome: "Vera",
    youtubeId: "UqcLhXFTZns",
    resultado: "-14 quilos aos 73 anos",
    especificidade: "Mesmo tomando sorvete",
  },
  {
    nome: "Eneiva",
    youtubeId: "5lSKuMsrd7I",
    resultado: "-10 quilos aos 72 anos",
    especificidade: "Comendo chocolate!",
  },
  {
    nome: "Ana Maria",
    youtubeId: "MyQWW3b0XVw",
    resultado: "-10 quilos aos 65 anos",
    especificidade: "Mesmo comendo doce!",
  },
  {
    nome: "Nelice",
    youtubeId: "HMu7gMRHmSQ",
    resultado: "-21 quilos",
    especificidade: "mesmo comendo torresmo!",
  },
  {
    nome: "Maria do Céu",
    youtubeId: "FIAlV0BOGdU",
    resultado: "-12 quilos aos 70 anos",
    especificidade: "sem deixar de comer bolo e doce!",
  },
]

export default function LandingPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <main>
        {/* 1. Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden relative z-10 min-h-screen flex flex-col px-4 py-8">
            <div className="text-center mb-4">
              <div className="bg-red-500 text-white font-semibold text-sm px-4 py-2 rounded-full inline-block">
                🔴 AO VIVO - 02/07 às 14h
              </div>
            </div>
            <h1 className="text-lg font-bold text-white text-center leading-tight mb-4">
              Pare de se culpar: Não é falta de força de vontade. Descubra o que REALMENTE impede mulheres 60+ de
              emagrecer
            </h1>
            <p className="text-sm text-white/90 mb-4 text-center">
              Método científico para emagrecer 10-20kg SEM abrir mão do que gosta
            </p>

            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="w-full max-w-xs mx-auto">
                <div style={{ position: "relative", paddingTop: "177.77777777777777%" }}>
                  <iframe
                    id="panda-mobile"
                    src="https://player-vz-30fdd560-ba9.tv.pandavideo.com.br/embed/?v=680760b5-e612-45c7-8c45-755e5f7c29a1"
                    style={{
                      border: "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "12px",
                    }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                    allowFullScreen={true}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    // @ts-ignore
                    fetchPriority="high"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-3">
                <p className="text-white font-medium text-center text-sm">✨ Vagas limitadas para esta turma!</p>
              </div>
              <a
                href="https://pay.hub.la/ry4PAFI0Qud8NOe0cFrf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-full text-center text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                GARANTIR MINHA VAGA AGORA
              </a>
              <p className="text-white/80 text-center text-xs">
                ✓ Sem dietas restritivas ✓ Método científico ✓ Específico para 60+
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative z-10 container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div style={{ position: "relative", paddingTop: "177.77777777777777%" }}>
                    <iframe
                      id="panda-desktop"
                      src="https://player-vz-30fdd560-ba9.tv.pandavideo.com.br/embed/?v=680760b5-e612-45c7-8c45-755e5f7c29a1"
                      style={{
                        border: "none",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderRadius: "16px",
                      }}
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                      allowFullScreen={true}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      // @ts-ignore
                      fetchPriority="high"
                      className="rounded-2xl shadow-2xl shadow-black/30"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 font-semibold text-sm mb-4 inline-block">
                  🔴 AO VIVO - 02/07 às 14h
                </div>
                <h1 className="text-5xl font-bold text-white text-center leading-tight mb-4">
                  Pare de se culpar: Não é falta de força de vontade. Descubra o que REALMENTE impede mulheres 60+ de
                  emagrecer
                </h1>
                <p className="text-lg text-white/90 mb-6 text-center">
                  Assista até o final. Método científico específico para mulheres 60+ que já tentaram várias dietas mas
                  sempre voltam a ganhar peso
                </p>
                <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-4 mb-6">
                  <p className="text-white font-medium text-center">✨ Vagas limitadas para esta turma!</p>
                </div>
                <a
                  href="https://pay.hub.la/ry4PAFI0Qud8NOe0cFrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-center text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl mb-4"
                >
                  GARANTIR MINHA VAGA AGORA
                </a>
                <p className="text-sm text-white/80 text-center">
                  ✓ Sem dietas restritivas ✓ Método científico ✓ Específico para 60+
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Pain Recognition Section */}
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center relative">
            <h2 className="text-3xl font-bold mb-8 text-purple-800">Se você chegou até aqui, é porque...</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Sofre com ansiedade que te faz comer compulsivamente",
                "Já tentou várias dietas mas sempre volta o terrível efeito sanfona",
                "Tem hipotireoidismo ou outros problemas hormonais que 'travam' o peso",
                "Não sabe mais como combinar os alimentos corretamente",
                "Sente que seu metabolismo 'parou' definitivamente após os 50/60 anos",
                "Quer emagrecer 10-20kg ou mais mas tem medo de não conseguir manter para sempre",
              ].map((pain, index) => (
                <div
                  key={index}
                  className="bg-white border border-purple-100 rounded-xl p-6 flex items-center gap-4 text-left shadow-lg hover:shadow-purple-200/50 transition-shadow"
                >
                  <CheckCircle2 className="h-8 w-8 text-pink-500 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">{pain}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-xl md:text-2xl font-semibold text-purple-800 max-w-3xl mx-auto">
              "Eu entendo. Milhares de mulheres como você me contaram exatamente isso. E descobri que o problema não era
              com vocês... era com os métodos que não consideravam sua realidade após os 60."
            </p>
          </div>
        </section>

        {/* 3. Authority Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/images/dra-claudia-nova.jpeg"
                  alt="Foto da Dra. Cláudia Benevides"
                  width={400}
                  height={400}
                  priority={false}
                  loading="lazy"
                  className="rounded-full shadow-2xl shadow-purple-200 aspect-square object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-purple-800">
                  Oi, eu sou a Dra Cláudia Benevides, médica nutróloga E ex-obesa.
                </h2>
                <div className="text-lg text-slate-600 mb-6 space-y-4">
                  <p>Sim, EU TAMBÉM sofri com ansiedade alimentar.</p>
                  <p>Sim, EU TAMBÉM vivi o efeito sanfona várias vezes.</p>
                  <p>Sim, EU TAMBÉM achei que meu metabolismo havia 'travado' para sempre.</p>
                  <p className="mt-2 pt-4 border-t border-purple-200">
                    Até descobrir que mulheres após os 60 com hipotireoidismo, ansiedade e histórico de várias dietas
                    precisam de uma abordagem <strong className="text-purple-700">COMPLETAMENTE diferente</strong>.
                  </p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Award className="h-6 w-6 text-purple-500" />
                    <span>CRM 117.369/SP e RQE 62916</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <BookOpen className="h-6 w-6 text-purple-500" />
                    <span>Pesquisadora com estudos publicados em congressos</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Users className="h-6 w-6 text-purple-500" />
                    <span>+14.000 mulheres transformadas</span>
                  </div>
                </div>
                <blockquote className="border-l-4 border-pink-400 pl-4 italic text-slate-700 bg-purple-50/50 p-4 rounded-r-lg">
                  <Quote className="h-6 w-6 text-pink-400 mb-2" />
                  <p className="text-xl font-semibold">"Ensino a emagrecer comendo o que gosta, sem neura!"</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Differentiator Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-purple-800">Este NÃO é mais um método de emagrecimento</h2>
            <p className="text-xl text-slate-600 mt-2 mb-8 max-w-3xl mx-auto">
              É uma solução médica específica para mulheres 60+ que sofrem com:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: BrainCircuit, text: "Ansiedade que leva à compulsão alimentar" },
                { icon: Scale, text: "Efeito sanfona recorrente (emagrece e engorda)" },
                { icon: HeartPulse, text: "Hipotireoidismo e alterações hormonais" },
                { icon: ZapOff, text: "Metabolismo lento devido à idade" },
                { icon: Activity, text: "Resistência à insulina desenvolvida" },
                { icon: BookOpen, text: "Confusão sobre como combinar alimentos" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-purple-200/50 transition-shadow"
                >
                  <item.icon className="h-10 w-10 mx-auto text-purple-500" />
                  <h3 className="text-lg font-semibold mt-4 text-slate-800">{item.text}</h3>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto bg-purple-100/50 border-l-4 border-purple-500 text-purple-900 p-6 rounded-r-lg text-left">
              <h3 className="font-bold text-xl">
                Por isso dietas tradicionais sempre falharam com você. Seu corpo após os 60 precisa de orientação médica
                especializada.
              </h3>
            </div>
          </div>
        </section>

        {/* 5. Benefits Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center relative">
            <h2 className="text-3xl font-bold mb-8 text-purple-800">O que você vai REALMENTE recuperar:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-center">
              {[
                { icon: BrainCircuit, title: "Controle da ansiedade alimentar sem sofrimento" },
                { icon: ShieldCheck, title: "Fim do efeito sanfona de uma vez por todas" },
                { icon: Target, title: "Método para emagrecer 10-20kg ou mais e MANTER" },
                { icon: Smile, title: "Autoestima para se olhar no espelho com orgulho" },
                { icon: Shirt, title: "Liberdade para vestir as roupas que você gosta" },
                { icon: PersonStanding, title: "Mobilidade e independência aos 60, 70, 80 anos" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow bg-white rounded-xl border border-purple-100 hover:shadow-purple-200/50"
                >
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="h-12 w-12 text-pink-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{benefit.title}</h3>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Não é sobre ficar 'magra'... é sobre ter CONTROLE sobre seu corpo e sua vida novamente.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Social Proof Section - Video Testimonials */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">
              VEJA COMO AJUDAMOS AS NOSSAS ALUNAS A EMAGRECER SAUDÁVEL E SEM NEURA!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {depoimentosReais.map((depoimento) => (
                <div
                  key={depoimento.youtubeId}
                  className="bg-purple-50/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-200/50 transition-shadow duration-300 border border-purple-100"
                >
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${depoimento.youtubeId}`}
                      title={`Depoimento de ${depoimento.nome}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 text-center">
                    <p className="font-bold text-lg text-purple-800">{depoimento.resultado}</p>
                    <p className="text-base text-pink-600 font-semibold">{depoimento.especificidade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Offer Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl p-6 md:p-10 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
              <div className="text-center">
                <Badge className="w-fit bg-pink-500 text-white animate-pulse mb-4 border-none">
                  🔴 AO VIVO - 02/07 às 14h
                </Badge>
                <h2 className="text-3xl font-bold mb-6">VEJA TUDO QUE VOCÊ TERÁ ACESSO:</h2>
              </div>
              <ul className="space-y-4 text-lg mb-8">
                {[
                  "Aula AO VIVO completa - 02/07 às 14h",
                  "Todos os cardápios e passos do método",
                  "Área de alunas exclusiva com suporte",
                  "Acesso completo à gravação por 12 meses",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-4 text-center">E AINDA 3 BÔNUS ESPECIAIS:</h3>
                <ul className="space-y-3">
                  {[
                    { bonus: 1, text: "7 livros digitais de receitas anti-inflamatórias" },
                    { bonus: 2, text: "Curso completo de chás e ervas para pós-menopausa" },
                    { bonus: 3, text: "Apostila médica completa com explicações científicas" },
                  ].map((item) => (
                    <li key={item.bonus} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-bold">BÔNUS {item.bonus}:</span> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center my-8">
                <p className="text-white/70 text-2xl line-through">De R$ 497,00</p>
                <p className="text-xl">por apenas</p>
                <p className="text-5xl font-bold text-amber-400 my-2">12x de R$ 10,18</p>
                <p className="text-lg">ou R$ 97,00 à vista</p>
              </div>
              <a
                href="https://pay.hub.la/ry4PAFI0Qud8NOe0cFrf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-slate-200 text-purple-700 font-bold py-4 px-8 text-xl rounded-full shadow-lg transition-all transform hover:scale-105 text-center"
              >
                SIM, QUERO GARANTIR MEU ACESSO COM DESCONTO
              </a>
              <UrgencyNotice />
            </div>
          </div>
        </section>

        {/* 8. Guarantee Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg border-2 border-dashed border-purple-200">
              <ShieldCheck className="h-24 w-24 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-purple-800 mb-2">GARANTIA INCONDICIONAL</h3>
                <p className="text-slate-600">
                  Você pode assistir todo o curso AO VIVO até o final, ver todos os materiais preparatórios e bônus, e
                  no final, se não gostar, pode pedir 100% do seu dinheiro de volta, sem multas e sem taxas. É uma
                  garantia total de satisfação ou seu dinheiro de volta!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Funciona mesmo comendo de tudo que eu gosto?",
                  a: "Sim! O método não foca em restrição, mas em ensinar você a combinar os alimentos que gosta de forma inteligente para ativar seu metabolismo e controlar a ansiedade, sem culpa.",
                },
                {
                  q: "Como emagrecer tendo hipotireoidismo?",
                  a: "Nosso protocolo médico foi criado especificamente para isso. Você aprenderá quais alimentos e estratégias ajudam a regular seus hormônios e destravar a queima de gordura, mesmo com hipotireoidismo.",
                },
                {
                  q: "Como garantir que não vou ganhar peso de volta (efeito sanfona)?",
                  a: "Essa é a nossa especialidade! A 'Garantia Anti-Efeito Sanfona' se baseia em criar um novo relacionamento com a comida e hábitos sustentáveis, para que o peso perdido não volte mais.",
                },
                {
                  q: "Quantas calorias posso comer por dia na minha idade?",
                  a: "Vamos além da contagem de calorias. Você vai aprender a focar na qualidade e na combinação dos alimentos para regular seus hormônios da fome e saciedade, o que é muito mais eficaz após os 60.",
                },
                {
                  q: "Como combinar os alimentos corretamente?",
                  a: "Essa é uma das bases do curso. Você receberá orientações claras e cardápios práticos para aprender a fazer combinações que te dão saciedade, energia e ajudam a emagrecer.",
                },
                {
                  q: "E se eu tenho ansiedade e como compulsivamente?",
                  a: "O método possui um módulo inteiro dedicado a controlar a ansiedade alimentar. Você vai entender a causa raiz da sua compulsão e aprenderá técnicas médicas para ter controle sobre ela.",
                },
                {
                  q: "Funciona para quem já tem mais de 70 anos?",
                  a: "Com certeza! O método foi desenhado para mulheres 60+ e temos alunas de 70, 80 e até mais anos com resultados fantásticos de saúde, mobilidade e autoestima.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-purple-200">
                  <AccordionTrigger className="text-lg font-semibold text-left text-purple-900 hover:text-pink-600">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 10. Final CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-purple-800 to-purple-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sua chance de finalmente entender como seu corpo funciona após os 60 está aqui.
            </h2>
            <p className="text-lg text-purple-200 mb-8 max-w-3xl mx-auto">
              Pare de se culpar pela ansiedade alimentar. Pare de sofrer com o efeito sanfona. Milhares de mulheres como
              você já descobriram que o problema não era falta de força de vontade.
            </p>
            <a
              href="https://pay.hub.la/ry4PAFI0Qud8NOe0cFrf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 text-xl rounded-full shadow-lg transition-transform transform hover:scale-105 text-center"
            >
              SIM, EU QUERO CONTROLAR MEU CORPO NOVAMENTE
            </a>
            <div className="flex justify-center items-center gap-6 mt-8 text-sm text-purple-300">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <span>Suporte Dedicado 60+</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-purple-200">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm py-8">
          <p>
            &copy; {new Date().getFullYear()} Imersão - Curso Prático Emagrecendo sem Neura. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 max-w-2xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a
            responsabilidade não é deles e sim do nosso site.
          </p>
          <div className="mt-4">
            <Link href="#" className="hover:text-white underline">
              Termos de Uso
            </Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-white underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
