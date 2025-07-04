import { motion } from "framer-motion"

import Navbar from "@/components/templates/navbar"
import Footer from "@/components/templates/footer"

import Header from "@/components/templates/header"
import Trust from "@/components/templates/trust"
import Work from "@/components/templates/work"
import Registration from "@/components/templates/registration"
import Questions from "@/components/templates/questions"

export default function App() {
  return (
    <div className="relative flex h-screen flex-col justify-between overflow-x-hidden">
      <motion.div
        className="absolute md:-top-70 md:-right-50 -top-20 -right-25 md:size-[600px] size-[230px] rounded-full bg-gradient-to-tr from-[#7044CC] via-[#7044CC] to-white blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Navbar />
      <main className="relative z-90 flex-1">
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
