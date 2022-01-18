import Link from 'next/link'

export default function Button(props: any) {
    const { text, href } = props
    return (
        <Link href={href}>
            <a className="bg-gradient text-light text-center text-2xl py-2 px-8 rounded-xl hover:opacity-7">
                {text}
            </a>
        </Link>
    )
}
