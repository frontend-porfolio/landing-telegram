export type Language = "en" | "ru"

export type Translation<T> = {
  [key in Language]: T
}

export interface LanguageProps {
	lang: string | string[]
	changeLanguage: (language: string) => void
	en: string
	ru: string
	isMenu: boolean
}