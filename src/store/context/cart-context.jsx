import React from 'react';

const CartContext = React.createContext({
    items: [ {id: 1, name: "dummy", amount: "2", price:"22"}],
    totalAmount: 0,
    addItem: (item) => {
    },
    removeItem: (id) => {
    }
});

export default CartContext;