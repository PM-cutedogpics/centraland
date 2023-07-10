import Image from 'next/image';

interface SearchIconProps {
    size: number
}
export default function SearchIcon(props : SearchIconProps) {
    return (
        <Image
            src="./icons/search-icon.svg"
            width={props.size}
            height={props.size}
            alt="search-icon-img"
        />

    )    
}