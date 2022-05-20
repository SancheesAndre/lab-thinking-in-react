import ProductsRow from "./ProductRow.js";


function ProductTable(props) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => <ProductsRow
                        name={product.name}
                        price={product.price}
                        key={product.id} 
                        stock={product.inStock}
                        />
                        
                    )}
                    <ProductsRow />
                </tbody>

            </table>
        </div>
    )
}

export default ProductTable