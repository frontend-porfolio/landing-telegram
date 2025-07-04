import { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"

import { motion, AnimatePresence } from "framer-motion"

import { CiMenuFries } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi"

import { Language } from "@/components/atoms/language"

export default function Navbar() {
  const { t, i18n } = useTranslation()

  const [isMenu, setIsMenu] = useState(false)
  const [isMenuFullyOpen, setIsMenuFullyOpen] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const links = [
    { to: "#1", label: t("navbar.links.about") },
    { to: "#2", label: t("navbar.links.advantages") },
    { to: "#3", label: t("navbar.links.services") },
    { to: "#4", label: t("navbar.links.contacts") }
  ] as const

  useEffect(() => {
    if (isMenu) {
      document.body.classList.add("body--no-scroll")
    } else {
      document.body.classList.remove("body--no-scroll")
      setIsMenuFullyOpen(false)
    }

    return () => {
      document.body.classList.remove("body--no-scroll")
    }
  }, [isMenu])

  return (
    <nav className="relative z-[100] container mx-auto flex items-center justify-between px-5 py-[30px]">

      <a className={`${isMenu ? "hidden" : "flex"} md:flex`} href="#">
        <img src="/icons/logo.svg" alt="logo" />
      </a>

      <motion.div
        key={isMenu ? "close" : "burger"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ delay: isMenu ? links.length * 0.1 : 0.1 }}
        className={`${isMenu ? "order-1" : "order-0"} relative z-10 flex cursor-pointer md:hidden`}
        onClick={() => setIsMenu(!isMenu)}
      >
        {isMenu ? (
          <TfiClose className="text-[30px] text-black" />
        ) : (
          <CiMenuFries className="text-[30px] text-white" />
        )}
      </motion.div>

      <AnimatePresence>
        {isMenu && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onAnimationComplete={() => setIsMenuFullyOpen(true)}
            className="fixed inset-0 z-0 flex h-screen w-full flex-col items-center justify-center bg-white md:hidden"
          >
            {isMenuFullyOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-10"
              >
                {links.map(({ to, label }, i) => (
                  <motion.a
                    key={to}
                    href={to}
                    className="text-[20px] font-medium text-black transition-colors duration-300 ease-in-out hover:text-[#7044CC]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden items-center gap-[50px] md:flex">
        {links.map(({ to, label }) => (
          <a
            className="text-[17px] font-medium text-black transition-colors duration-300 ease-in-out hover:text-[#7044CC]"
            href={to}
            key={to}
          >
            {label}
          </a>
        ))}
      </div>

      <AnimatePresence>
        {isMenu && isMenuFullyOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: links.length * 0.1 }}
            className="flex z-10 md:hidden"
          >
            <Language
              lang={i18n.language}
              changeLanguage={changeLanguage}
              en={t("navbar.languages.en")}
              ru={t("navbar.languages.ru")}
              isMenu={isMenu}
            />
          </motion.div>
        ) : (
          <div className="hidden md:flex z-10">
            <Language
              lang={i18n.language}
              changeLanguage={changeLanguage}
              en={t("navbar.languages.en")}
              ru={t("navbar.languages.ru")}
              isMenu={isMenu}
            />
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}
