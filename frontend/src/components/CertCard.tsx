export function CertCard(props: any) {
    const { img, document, text } = props
    return (
        <div className="flex flex-col justify-between items-center gap-8 p-8 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            <img
                src={img}
                className="hover:opacity-75"
                alt="Certification official logo"
                width={160}
                height={160}
                draggable={false}
            />
            <div className="w-64 text-lg text-ored font-bold bg-light dark:bg-dark p-3 rounded-xl flex justify-center items-center hover:opacity-75 cursor-pointer">
                <a href={document} target="_blank" rel="noreferrer">
                    <p>{text}</p>
                </a>
            </div>
        </div>
    )
}
