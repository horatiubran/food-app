export const ItemsList = ({id, name, price, amount, onAdd, onRemove}) => {
    console.log("itemlistname", name)
    console.log("itemlistamount", amount)
    console.log("itemlistid", id)

    return <a key={id} className="list-group-item list-group-item-action active" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>Selected amount: {amount}</small>
            </div>
            <p className="mb-1">{}</p>
            <small>$ {price}</small>
        </a>

}