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
        className="absolute -top-20 -right-25 size-[230px] rounded-full bg-gradient-to-tr from-[#7044CC] via-[#7044CC] to-white blur-xl md:-top-70 md:-right-50 md:size-[600px]"
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
        <motion.div
          className="absolute top-150 -left-45 size-[230px] rounded-full bg-gradient-to-tr from-[#7044CC] via-[#7044CC] to-white blur-xl md:top-150 md:-left-50 md:size-[400px]"
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
        <Work />
        <motion.div
          className="absolute top-400 -right-45 size-[230px] rounded-full bg-gradient-to-tr from-[#7044CC] via-[#7044CC] to-white blur-xl md:top-400 md:-right-50 md:size-[400px]"
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
        <Registration />
        <Questions />
      </main>
      <Footer />
    </div>
  )
}
