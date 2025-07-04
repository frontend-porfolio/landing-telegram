import { useState } from "react"

import { useTranslation } from "react-i18next"

import { CiMenuFries } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi"

import { Language } from "@/components/atoms/language"

export default function Navbar() {
  const { t, i18n } = useTranslation()

  const [ isMenu, setIsMenu ] = useState<boolean>(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const links = [
    {
      to: "#1",
      label: t("navbar.links.about")
    },
    {
      to: "#2",
      label: t("navbar.links.advantages")
    },
    {
      to: "#3",
      label: t("navbar.links.services")
    },
    {
      to: "#4",
      label: t("navbar.links.contacts")
    }
  ] as const

  return (
    <nav className="relative z-100 container mx-auto flex items-center justify-between px-5 py-[30px]">
      <a className={`${isMenu ? 'hidden' : 'flex'} md:flex`} href="#">
        <img src="/icons/logo.svg" alt="logo" />
      </a>

       <div
        className={`${isMenu ? 'order-1' : 'order-0'} flex cursor-pointer md:hidden relative z-10`}
        onClick={() => setIsMenu(!isMenu)}>
        {isMenu ? (
          <TfiClose className="text-[30px] text-black" />
        ) : (
          <CiMenuFries className="text-[30px] text-white" />
        )}
      </div>
      <div className={`${isMenu ? 'flex' : 'hidden'} md:flex z-10`}>
        <Language
          lang={i18n.language}
          changeLanguage={changeLanguage}
          en={t("navbar.languages.en")}
          ru={t("navbar.languages.ru")}
          isMenu={isMenu}
        />
      </div>
      <div className={`${isMenu ? 'flex' : 'hidden'} z-0 md:flex md:flex-row flex-col md:justify-start justify-center items-center gap-[50px] md:static absolute md:bg-transparent bg-white w-full h-screen top-0 bottom-0 left-0 right-0`}>
        {links.map(({ to, label }) => (
          <a
            className="md:text-[17px] text-[20px] font-medium text-black transition-colors duration-300 ease-in-out hover:text-[#7044CC]"
            href={to}
            key={to}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
