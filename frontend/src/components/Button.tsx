export default function Button(props: any) {
    const { text } = props
    return (
        <button className="bg-gradient text-2xl py-2 px-8 rounded-xl hover:opacity-75">
            {text}
        </button>
    )
}
