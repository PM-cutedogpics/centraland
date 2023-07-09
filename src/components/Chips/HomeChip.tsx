interface ChipProps {
    isActive?: boolean,
    label: string
}

export default function HomeChip (props : ChipProps) {
    const colorClass = props.isActive ? "app-mint-green" : "chip-default";
    console.log(colorClass)
    return (
        <div className={`flex justify-center px-3 py-1 rounded-home-chip bg-${colorClass}`}>
            <p>
                {props.label}
            </p>
        </div>

    )
}