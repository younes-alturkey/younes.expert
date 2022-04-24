import { BiBookOpen } from 'react-icons/bi'
import { LinkButton } from '@/src/components'
import { BsMedium } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export function AricleCard(props: any) {
    const { title, medium, linkedin } = props
    return (
        <div className="md:w-6/12 flex flex-col justify-center items-center gap-12 p-8 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            <BiBookOpen size={64} className="text-ored hover:opacity-75" />
            <h2 className="text-2xl leading-loose text-center py-3 px-8 rounded-xl shadow-md bg-light dark:bg-dark">
                {title}
            </h2>

            <div className="w-full flex justify-between items-center gap-4">
                <LinkButton
                    text={<FaLinkedinIn size={36} />}
                    href={medium}
                    fullwidth
                />
                <LinkButton
                    text={<BsMedium size={36} />}
                    href={linkedin}
                    fullwidth
                />
            </div>
        </div>
    )
}
