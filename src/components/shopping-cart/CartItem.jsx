export const CartItem = ({id, name, price, amount, onRemove, onAdd}) => {


    return <ol className="list-group list-group-flush">
        <li key={id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="fw-bold">{name}</div>
            <div className="ms-2 me-auto">
                $ {price}
            </div>
            <button type="button" className="btn btn-primary" onClick={onAdd}>
                +
            </button>
            <button type="button" className="btn btn-danger" onClick={onRemove}>
                _
            </button>
            <span className="badge bg-primary rounded-pill">{amount}</span>
        </li>
    </ol>
}



