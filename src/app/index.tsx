import Navbar from "@/components/templates/navbar"
import Footer from "@/components/templates/footer"

import Header from "@/components/templates/header"
import Trust from "@/components/templates/trust"
import Work from "@/components/templates/work"
import Registration from "@/components/templates/registration"
import Questions from "@/components/templates/questions"

export default function App() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Header />
        <Trust />
        <Work />
        <Registration />
        <Questions />
      </main>
      <Footer />
    </div>
  )
}
