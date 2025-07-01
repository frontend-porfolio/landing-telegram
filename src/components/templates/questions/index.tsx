import { useTranslation } from "react-i18next"

import { SlSocialVkontakte } from "react-icons/sl"
import { LiaTelegramPlane } from "react-icons/lia"
import { LuFacebook } from "react-icons/lu"

export default function Questions() {
    const { t } = useTranslation()

    const links = [
        {
            to: "#vk",
            icon: <SlSocialVkontakte className="questions__icons"/>,
            title: t('questions.socials.vk')
        },
        {
            to: "#telegram",
            icon: <LiaTelegramPlane className="questions__icons"/>,
            title: t('questions.socials.telegram')
        },
        {
            to: "#facebook",
            icon: <LuFacebook className="questions__icons"/>,
            title: t('questions.socials.facebook')
        }
    ] as const
    
  return (
    <section className="custom-container md:py-[60px] py-[30px] grid md:grid-cols-2 grid-cols-1">
      <div className="questions--bg md:py-[150px] py-[80px] px-5 flex flex-col justify-center items-center gap-4">
        <h5 className="md:w-[400px] w-full text-white md:text-[55px] text-[30px] font-medium leading-[62px]">{t('questions.title')}</h5>
        <p className="md:w-[400px] w-full text-white text-[18px] font-normal leading-[34px]">{t('questions.description')}</p>
      </div>
      <div className="bg-gray-100 md:py-[150px] py-[80px] px-5 flex flex-col justify-center items-center gap-4">
        {links.map(({ to, icon, title }) => (
            <a className="md:w-[300px] w-full inline-flex items-center gap-8 border border-dashed border-[#7044CC] p-5" key={to} href={to}>
                <h5 className="text-black uppercase md:text-[15px] text-[12px] font-normal">{title}</h5>
                <span>{icon}</span>
            </a>
        ))}
      </div>
    </section>
  )
}
