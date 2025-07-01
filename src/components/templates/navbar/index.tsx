import { useTranslation } from "react-i18next"

import { Language } from "@/components/atoms/language"

export default function Navbar() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <nav className="flex items-center justify-between px-5 py-[21px] md:pr-[25px] md:pl-[50px]">
      <Language
        lang={i18n.language}
        changeLanguage={changeLanguage}
        en={t("navbar.languages.en")}
        ru={t("navbar.languages.ru")}
      />
    </nav>
  )
}
