import "./ProductTag.scss"

interface TagProps {
    color: string,
    label: string,
}

/** */
const ProductTag: React.FC<TagProps> = (props : TagProps) => {
    return (
        <div className={`${props.color} flex justify-center items-center rounded-product-tag tag-container`}>
            <p className="tag-text">{props.label}</p>
        </div>
    )
}

export default ProductTag;