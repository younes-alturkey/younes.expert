import Link from 'next/link'

export function LinkButton(props: any) {
    const { text, href, fullwidth } = props
    return (
        <Link href={href}>
            <a
                className={`bg-gradient text-light text-center text-2xl shadow-md py-2 px-2 md:px-6 rounded-xl hover:opacity-7 flex justify-center items-center ${
                    fullwidth && 'w-full'
                }`}
            >
                {text}
            </a>
        </Link>
    )
}
