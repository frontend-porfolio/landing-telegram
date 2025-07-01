import Navbar from "@/components/templates/navbar"
import Footer from "@/components/templates/footer"

export default function App() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main className="flex-1"></main>
      <Footer />
    </div>
  )
}
