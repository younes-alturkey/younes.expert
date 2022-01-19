export function SkillCard(props: any) {
    const { title, icon } = props
    return (
        <div className="flex flex-col justify-between items-center gap-16 p-8 md:w-96 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            {icon}
            <div className="w-full font-bold text-base bg-light dark:bg-dark p-3 rounded-xl flex justify-center items-center hover:opacity-75">
                <p>{title}</p>
            </div>
        </div>
    )
}
