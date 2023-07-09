interface ChipProps {
    isActive?: boolean,
    label: string
}

export default function HomeChip (props : ChipProps) {
    return (
        <div className={`flex justify-center px-3 py-1 rounded-home-chip ${props.isActive ? "bg-app-mint-green" : "bg-chip-default"}`}>
            <p>
                {props.label}
            </p>
        </div>

    )
}