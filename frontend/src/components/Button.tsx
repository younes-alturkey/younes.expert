export function Button(props: any) {
    const { text } = props
    return (
        <button className="bg-gradient text-light text-2xl shadow-md py-2 px-8 rounded-xl hover:opacity-7">
            {text}
        </button>
    )
}
