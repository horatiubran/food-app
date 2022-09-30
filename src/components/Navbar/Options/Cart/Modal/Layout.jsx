export const Layout = ({children, id}) => <div>
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>
</div>