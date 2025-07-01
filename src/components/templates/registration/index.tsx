import { useTranslation } from "react-i18next"

export default function Registration() {
    const { t } = useTranslation()
  return (
    <section className="registration--bg md:py-[100px] py-[80px]">
      <div className="custom-container flex md:flex-row flex-col justify-between items-center">
        <h4 className="text-white md:text-[55px] text-[30px] font-medium leading-[54px]">{t('registration.title')}</h4>
        <div className="flex flex-col gap-3">
            <p className="text-white text-[17px] font-normal leading-[27px]">{t('registration.description')}</p>
            <a className="text-white inline-block w-fit bg-[#FFFFFF4D] rounded-full py-3 px-[35px]" href="#">{t('registration.btn')}</a>
        </div>
      </div>
    </section>
  )
}
