export default function Table(props) {
    return (
        <div>
            <h2>{props.tableHeader}</h2>
            <ul>
                {props.products.map((product) =>
                    <li key={product.name}>{product.name}</li>)
                }
            </ul>
        </div>
    )
}