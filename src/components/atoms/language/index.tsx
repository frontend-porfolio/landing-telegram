import { useRef, useState } from "react"

import { useClickOutside } from "@/hooks/click-outside"

import type { LanguageProps } from "@/types"

export const Language = ({ lang, changeLanguage, en, ru }: LanguageProps) => {
    const [btnLng, setBtnLng] = useState<boolean>(false)

    const languageRef = useRef<HTMLDivElement>(null)

    useClickOutside(languageRef, () => setBtnLng(false))

    const language = lang === "en" ? en : ru

    return (
        <div ref={languageRef} className="relative z-50">
            <button
                className="flex h-[40px] w-[60px] cursor-pointer items-center justify-center border-2 border-[#D42E12] text-[14px] font-bold text-red uppercase"
                onClick={() => setBtnLng(!btnLng)}>
                {language}
            </button>

            <div
                className={`absolute top-[50px] flex w-[60px] transform flex-col gap-2 border-2 border-[#D42E12] bg-black/80 px-[10px] py-[5px] text-red shadow-md transition-all duration-300 ease-in-out ${
                    btnLng
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-95 opacity-0"
                }`}>
                <button
                    className="w-full cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#D42E12]"
                    onClick={() => changeLanguage("en")}>
                    {en}
                </button>
                <hr />
                <button
                    className="w-full cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#D42E12]"
                    onClick={() => changeLanguage("ru")}>
                    {ru}
                </button>
            </div>
        </div>
    )
}