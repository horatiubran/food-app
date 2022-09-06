import { Item } from "../list/item";
import { menuItems } from "../../menudatabase/menu-db";



export const RenderedList = () => {

  return (
    <div>
      {menuItems.map((value) => {
        return (
          <Item
            key={value.id}
            foodName={value.name}
            description={value.description}
            price={value.price}
          />
        );
      })}
    </div>
  );
};
