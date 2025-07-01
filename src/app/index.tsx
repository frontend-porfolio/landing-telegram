import Navbar from "@/components/templates/navbar"
import Footer from "@/components/templates/footer"

import Header from "@/components/templates/header"

export default function App() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Header />
      </main>
      <Footer />
    </div>
  )
}
