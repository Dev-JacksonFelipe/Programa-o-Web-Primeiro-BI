import './App.css'
import corridaImage from './assets/Corrida.jpeg'
import Article from './components/Article'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

function App() {
  const blogTitle = 'Blog do Corredor'

  const navigationLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Artigo', href: '#post' },
    { label: 'Relacionados', href: '#relacionados' },
  ]

  const post = {
    title: 'Minha Primeira Corrida de 5km: O Inicio de uma Jornada',
    author: 'Jackson',
    date: '15 de maio de 2025',
    dateTime: '2025-05-15',
    content: [
      'Tudo comecou com uma corrida organizada pela Grafica Tuicial, onde eu trabalho. Nunca tinha participado de uma prova oficial antes, e confesso que estava nervoso na largada. Meu objetivo era simples: completar os 5km sem parar. Quando cruzei a linha de chegada, o cronometro marcava 30 minutos. Nao era o tempo mais rapido, mas para mim representava uma conquista enorme.',
      'Aquela primeira corrida despertou algo em mim. Comecei a treinar com mais frequencia, melhorei minha tecnica de corrida e aprendi sobre a importancia do aquecimento e alongamento. A evolucao foi gradual, mas constante. Hoje, consigo completar os mesmos 5km em apenas 20 minutos. Cada treino e uma oportunidade de superar meus proprios limites e me tornar uma versao melhor de mim mesmo.',
    ],
    image: corridaImage,
    imageAlt: 'Corredor participando de uma prova de 5km',
    caption:
      'Registro de uma das minhas corridas de 5km, mostrando a evolucao desde a primeira prova.',
  }

  const relatedPosts = [
    {
      title: 'Como comecar a correr do zero',
      url: 'https://www.tuasaude.com/corrida-para-iniciantes/',
    },
    {
      title: 'Melhores tenis para corrida de longa distancia',
      url: 'https://www.mktesportivo.com/2025/03/melhores-tenis-para-maratona-e-longas-distancias/',
    },
    {
      title: 'Alimentacao pre e pos treino para corredores',
      url: 'https://content.paodeacucar.com/dicas/veja-o-que-comer-antes-durante-e-apos-correr',
    },
  ]

  return (
    <div className="app" id="home">
      <header className="site-header">
        <Header title={blogTitle} />
        <Navigation links={navigationLinks} />
      </header>

      <main className="layout">
        <Article
          title={post.title}
          author={post.author}
          date={post.date}
          dateTime={post.dateTime}
          content={post.content}
          image={post.image}
          imageAlt={post.imageAlt}
          caption={post.caption}
        />

        <Sidebar posts={relatedPosts} />
      </main>

      <Footer text="© 2026 - Todos os direitos reservados." />
    </div>
  )
}

export default App
