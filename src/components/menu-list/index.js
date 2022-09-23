import {Item} from "../listComponents/item";
import {menuItems} from "../../menudatabase/menu-db";


export const RenderedList = () => {

    const renderedItems = menuItems.map((value) =>
        <Item
            key={value.id}
            id={value.id}
            foodName={value.name}
            description={value.description}
            price={value.price}
        />
    );

    return <ul>{renderedItems}</ul>
};


