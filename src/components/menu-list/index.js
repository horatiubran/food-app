import { useCallback, useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Item } from "../list/item";
import { menuItems } from "../../menudatabase/menu-db";


const useAddToCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return useCallback(
    (value) => {
      setCartItems([...cartItems, value]);
    },
    [cartItems, setCartItems]
  );
};



export const RenderedList = () => {
  const addToCart = useAddToCart();

  return (
    <div>
      {menuItems.map((value) => {
        return (
          <Item
            key={value.id}
            foodName={value.name}
            description={value.description}
            price={value.price}
            handleClick={() => addToCart(value)}
          />
        );
      })}
    </div>
  );
};
