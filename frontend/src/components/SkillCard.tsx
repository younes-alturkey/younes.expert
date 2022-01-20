export function SkillCard(props: any) {
    const { title, icon } = props
    return (
        <div className="flex flex-col justify-between items-center gap-8 p-8 xl:px-12 2xl:px-24 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            {icon}
            <div className="w-64 font-bold text-sm bg-light dark:bg-dark p-3 rounded-xl flex justify-center items-center hover:opacity-75">
                <p>{title}</p>
            </div>
        </div>
    )
}
