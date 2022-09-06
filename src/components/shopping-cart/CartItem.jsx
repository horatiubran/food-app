export const CartItem = ({id, foodName, price, amount, onRemove, onAdd}) => {


    return <ol className="list-group list-group-flush">
        <li key={id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{foodName}</div>
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



