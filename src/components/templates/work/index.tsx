import { useTranslation } from "react-i18next"

import type { Client } from "@/types/work"

export default function Work() {
    const { t } = useTranslation()

    const clients = t("work.clients", { returnObjects: true }) as Client[]
  return (
    <section className="custom-container md:py-[50px] py-[30px] flex flex-col md:gap-20 gap-10">
      <h3 className="text-[#7044CC] md:text-[55px] text-[30px] font-medium leading-[54px] text-center">{t('work.title')}</h3>
      <div className="flex flex-wrap justify-center items-center">
        {clients.map(({ id, client, info }: Client) => (
            <div key={id} className={`${id === 3 ? 'md:-mt-25 -mt-8 md:py-[165px]' : 'md:mt-0 -mt-8'} md:w-[40%] w-full md:py-[150px] md:px-[40px] py-[80px] px-[30px] border-dashed border-[#7044CC] border rounded-full flex flex-col justify-center items-center gap-3`}>
                <h5 className="text-[#7044CC] md:text-[20px] text-[18px] font-medium leading-[19px]">{client}</h5>
                <hr className="h-1 bg-[#7044CC] w-[40px] border-none rounded-sm"/>
                <p className="w-[50%] text-center text-gray-400 md:text-[17px] text-[15px] leading-[27px]">{info}</p>
            </div>
        ))}
      </div>
    </section>
  )
}
