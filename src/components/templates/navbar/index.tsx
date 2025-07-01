import { useTranslation } from "react-i18next"

import { Language } from "@/components/atoms/language"

export default function Navbar() {
  const { t, i18n } = useTranslation()

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
    <nav className="container mx-auto flex items-center justify-between px-5 py-[30px]">
      <a href="#">
        <img src="/icons/logo.svg" alt="logo" />
      </a>
      <div className="flex items-center gap-[50px]">
        {links.map(({ to, label }) => (
          <a className="text-black text-[17px] font-medium transition-colors duration-300 ease-in-out hover:text-[#7044CC]" href={to} key={to}>
            {label}
          </a>
        ))}
      </div>
      <Language
        lang={i18n.language}
        changeLanguage={changeLanguage}
        en={t("navbar.languages.en")}
        ru={t("navbar.languages.ru")}
      />
    </nav>
  )
}
