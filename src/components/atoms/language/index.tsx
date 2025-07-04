import { useRef, useState } from "react"

import { useClickOutside } from "@/hooks/click-outside"

import type { LanguageProps } from "@/types"

export const Language = ({ lang, changeLanguage, en, ru, isMenu }: LanguageProps) => {
    const [ btnLng, setBtnLng ] = useState<boolean>(false)

    const languageRef = useRef<HTMLDivElement>(null)

    useClickOutside(languageRef, () => setBtnLng(false))

    const language = lang === "en" ? en : ru

    return (
        <div ref={languageRef} className="relative">
            <button
                className={`flex h-[40px] w-[60px] cursor-pointer items-center justify-center uppercase text-[17px] font-medium border rounded-md ${isMenu ? 'text-black border-black' : 'text-white border-white'}`}
                onClick={() => setBtnLng(!btnLng)}>
                {language}
            </button>

            <div
                className={`absolute top-[50px] flex w-[60px] transform flex-col gap-2 border rounded-md ${isMenu ? 'text-black border-black' : 'text-white border-white'} px-[10px] py-[5px] text-red shadow-md transition-all duration-300 ease-in-out ${
                    btnLng
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-95 opacity-0"
                }`}>
                <button
                    className="w-full cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
                    onClick={() => changeLanguage("en")}>
                    {en}
                </button>
                <hr />
                <button
                    className="w-full cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
                    onClick={() => changeLanguage("ru")}>
                    {ru}
                </button>
            </div>
        </div>
    )
}