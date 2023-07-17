interface HomeChipProps {
	isActive: boolean,
	label: String,
	setname: String,
	handleSetActive: Function,
}

export default function HomeChip(props: HomeChipProps) {
	return (
		<div
			className={`flex justify-center px-3 py-1 rounded-home-chip ${
				props.isActive ? 'active-chip' : 'inactive-chip'
			} cursor-pointer hover:active-chip transition`}
			onClick={() => props.handleSetActive(props.label, props.setname)}
		>
			<p>{props.label}</p>
		</div>
	);
}
