import {useNavigateForward} from "./hooks/useNavigateForward";

export const Footer = ({onCancel}) => <div className="modal-footer">
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCancel}>
        Continue shopping...
    </button>

    <button className={'btn btn-primary'} data-bs-dismiss={'modal'} onClick={useNavigateForward()}>
        Complete Order!
    </button>
</div>