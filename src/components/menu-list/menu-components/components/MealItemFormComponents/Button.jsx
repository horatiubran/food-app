import {Store} from "../../../../../store";

export const Button = () => <button
    hidden={!Store.useIsAuth()}
    type="submit"
    className="btn btn-primary">Add to cart</button>
