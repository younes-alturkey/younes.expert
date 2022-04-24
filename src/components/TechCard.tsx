export function TechCard(props: any) {
    const { title, img } = props
    return (
        <div className="flex flex-col justify-between items-center gap-8 p-8 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            <img
                alt="Technology icon"
                src={img}
                width={84}
                height={84}
                className="hover:opacity-75"
                draggable={false}
            />
            <div className="w-64 font-bold text-sm bg-light dark:bg-dark p-3 rounded-xl flex justify-center items-center hover:opacity-75">
                <p>{title}</p>
            </div>
        </div>
    )
}
