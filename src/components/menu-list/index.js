import {RenderedItems} from "./menu-components/components/RenderedItems";
import {List} from "../listComponents";
import {MenuTitle} from "./menu-components/components/MenuTitle";


export const MenuList = () => <>
    <MenuTitle/>
    <List>
        <RenderedItems/>
    </List>
</>


