import MainContent from './components/MainContent/page'
import Navbar from './components/Navbar/page'
import PromotionArea from './components/PromotionArea/page'

export default function Home() {
  return (
    <main>
      <div>
        <PromotionArea />
        <Navbar />
      </div>
      <MainContent />
    </main>
  )
}
