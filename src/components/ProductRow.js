import './ProductRow.css'

const ProductsRow = (props) => {

    return (
        <tr>
            <td className={props.stock === false && 'unavailable'}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductsRow