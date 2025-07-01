import { useTranslation } from "react-i18next"

import { Google, Mastercard, Visa, Yandex } from "@/assets/images/trust"
import { StepsMastercard, StepsVisa } from "@/assets/images/trust/steps"

import type { Step } from "@/types/trust"

export default function Trust() {
  const { t } = useTranslation()

  const brands = [
    {
      alt: "google",
      image: Google
    },
    {
      alt: "mastercard",
      image: Mastercard
    },
    {
      alt: "visa",
      image: Visa
    },
    {
      alt: "yandex",
      image: Yandex
    }
  ] as const

  const steps = t("trust.integration.steps", { returnObjects: true }) as Step[]

  const stepThridImages = [
    {
      alt: "steps-visa",
      image: StepsVisa
    },
    {
      alt: "steps-mastercard",
      image: StepsMastercard
    }
  ] as const

  return (
    <section className="custom-container flex flex-col gap-8 py-[30px] md:gap-18 md:py-[50px]">
      <h2 className="text-center text-[25px] leading-[54px] text-[#7044CC] md:text-[55px]">
        {t("trust.title")}
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {brands.map(({ alt, image }) => (
          <div
            key={alt}
            className="flex items-center justify-center border border-gray-300 py-3 shadow-sm md:py-8">
            <img src={image} alt={alt} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1">
        {steps.map(({ id, icon, title, description }: Step) => {
          const isFirst = id === '01'   
          const isSecond = id === '02'
          const isThirdStep = id === "03"
          return (
            <div key={id} className="grid grid-cols-1 p-5 md:grid-cols-2 transition-all duration-300 ease-in-out bg-transparent hover:bg-[#F6F6F6] cursor-pointer md:py-[50px] py-[30px]">
              <div className={`${isSecond ? 'order-2' : ''} flex flex-col gap-3`}>
                <div className="flex items-center gap-4">
                  <span className="trust__step md:text-[100px] text-[40px] leading-[99px] text-transparent">{id}</span>
                  <img className="h-[62px]" src={icon} alt={id} />
                </div>
                <h4 className="text-black md:text-[35px] text-[25px] font-medium leading-[34px]">{title}</h4>
              </div>
              <div className={`${isSecond ? 'order-0' : ''} flex flex-col gap-3`}>
                <p className="text-gray-400 font-normal text-[16px] leading-[27px]">{description}</p>
                 {isThirdStep && (
                  <span className="text-black text-[17px] font-normal leading-[27px]">{t("trust.integration.thirdStepInfo")}</span>
                )}
                {isFirst && <a className="iniline-block w-fit rounded-full bg-[#7044CC] text-white py-1 px-7 text-[15px] font-medium uppercase leading-[34px]" href="#">{t("trust.integration.btn")}</a>}
                {isThirdStep && (
                  <div className="flex items-center gap-3">
                    {stepThridImages.map(({ alt, image }) => (
                      <img key={alt} src={image} alt={alt} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
