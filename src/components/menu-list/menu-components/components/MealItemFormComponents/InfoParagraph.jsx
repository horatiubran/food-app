import {Store} from "../../../../../store";

export const InfoParagraph = () => <p hidden={Store.useIsAuth()}>Please Log in to add to cart</p>