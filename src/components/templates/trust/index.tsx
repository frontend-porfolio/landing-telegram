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
    <section className="custom-container flex flex-col gap-8 py-[30px] md:gap-15 md:py-[50px]">
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
          const isSecond = id === '02'
          const isThirdStep = id === "03"

          return (
            <div key={id} className={`grid grid-cols-1 p-5 md:grid-cols-2 ${ isSecond ? 'bg-[#F6F6F6]' : 'bg-transparent'}`}>
              <div className={`${isSecond ? 'order-2' : ''} flex flex-col gap-3`}>
                <div className="flex items-center gap-4">
                  <span>{id}</span>
                  <img src={icon} alt={id} />
                </div>
                <h4>{title}</h4>
              </div>
              <div className={`${isSecond ? 'order-0' : ''} flex flex-col gap-3`}>
                {isThirdStep && (
                  <span className="text-gray-400">{t("trust.integration.thirdStepInfo")}</span>
                )}
                <p>{description}</p>
                {id === "01" && <a href="#">{t("trust.integration.btn")}</a>}
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
