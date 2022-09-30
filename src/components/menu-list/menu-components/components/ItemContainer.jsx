export const ItemContainer = ({id, children}) => <div key={id}>
    <div className="card" style={{width: "18rem"}}>{children}</div>
</div>