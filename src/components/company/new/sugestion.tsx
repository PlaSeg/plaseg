interface Props {
    text: string;
}

export default function Sugestion({ text }: Props) {
    return (
        <div className="bg-gray-300 p-2 inline rounded-3xl px-6">
            {text}
        </div>
    )
}