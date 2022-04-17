interface Props {
    text: string
}

export const FeatureItem = (props: Props) => {

    return (
        <li className="flex justify-between px-5 rounded bg-zinc-300 cursor-pointer mb-5 p-1 gap-3">
            <span className="whitespace-nowrap">{props.text}</span> <span className="border-l-2 border-l-gray-500 pl-5"><i
            className="fa-solid fa-plus"/></span>
        </li>
    )
}