export const ShoppingCartModal = ({
                                 title = "defaultValue",
                                 children,
                                 onSave,
                                 onCancel,
                             }) => {
    return (
        <div>
            <div
                className="modal fade"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {title}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={onCancel}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={onSave}
                            >
                                Send order!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};