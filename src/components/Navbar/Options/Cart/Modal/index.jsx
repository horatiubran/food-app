import {Header} from "./Header";
import {Footer} from "./Footer";
import {Layout} from "./Layout";

export const Modal = ({id, title, children, onCancel,}) => <Layout id={id}>
    <Header title={title}/>
    <div className="modal-body">
        {children}
    </div>
    <Footer onCancel={onCancel}/>
</Layout>