import {Item} from "../list/item";
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
    console.log("key", renderedItems)
    return <ul>{renderedItems}</ul>
};


