import { useTranslation } from "react-i18next"

import { TfiArrowCircleRight } from "react-icons/tfi"

export default function Header() {
    const { t } = useTranslation()

    const platformStats = [
        {
            count: '207 228',
            title: t('header.second.newUsers')
        },
         {
            count: '7 754',
            title: t('header.second.verifiedChannels')
        },
         {
            count: '460 482',
            title: t('header.second.completedOrders')
        }
    ] as const

  return (
    <section className="md:max-w-[1200px] mx-auto w-full p-5 flex flex-col md:gap-30 gap-10 md:py-[50px] py-[30px]">
      <div className="flex flex-col gap-4 md:w-[700px] w-full">
        <h1 className="text-black md:text-[85px] text-[25px] font-semibold leading-[90px]">{t('header.first.title')}</h1>
        <p className="text-gray-500 text-[17px] leading-[27px]">{t('header.first.description')}</p>
        <a className="inline-flex items-center gap-5 border border-[#7044CC] pl-5 pr-1 py-2 rounded-full w-fit md:mt-5 mt-2" href="#">
            <span className="text-[#7044CC] md:text-[17px] text-[13px] font-medium leading-[34px] uppercase">{t('header.first.btn')}</span>
            <span className="bg-[#7044CC] md:p-[17px] p-3 rounded-full">
                <TfiArrowCircleRight className="text-white md:text-[30px] text-[20px]" />
            </span>
        </a>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {platformStats.map(({ count, title }) => (
            <div key={title} className="flex flex-col items-center gap-3 group cursor-pointer hover:bg-[#7044CC] transition-all duration-300 md:py-10 py-5 px-4">
                <p className="text-[#7044CC] transition-colors duration-300 ease-in-out group-hover:text-white md:text-[55px] text-[30px] font-light leading-[68px]">{count}</p>
                <p className="text-black transition-colors duration-300 ease-in-out group-hover:text-white text-[18px] font-normal leading-[30px]">{title}</p>
            </div>
        ))}
      </div>
    </section>
  )
}
