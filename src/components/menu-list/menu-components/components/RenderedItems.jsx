import {menuItems} from "../../../../menudatabase/menu-db";
import {Item} from "./Item";

export const RenderedItems = () => {
    return (menuItems.map((value) =>
        <Item
            key={value.id}
            id={value.id}
            foodName={value.name}
            description={value.description}
            price={value.price}
        />
    ))
};