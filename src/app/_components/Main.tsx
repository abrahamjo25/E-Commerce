import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem {
  id: number;
  quantity: number;
}

const items: Item[] = [
  {
    id: 1,
    name: "Item 1",
    description: "This is item 1",
    price: 10.99,
    image: "/images/item1.jpg",
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is item 2",
    price: 15.99,
    image: "/images/item2.jpg",
  },
];

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { id: item.id, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  return (
    <div className="flex">
      <div className="w-1/3 border-r border-gray-200">
        {items.map((item) => (
          <div key={item.id} className="border-b border-gray-200 p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
            <p className="text-gray-500 mb-4">{item.description}</p>
            <p className="text-lg font-bold mb-2">${item.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="w-2/3">
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          items={items}
        />
      </div>
    </div>
  );
};

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (item: CartItem) => void;
  items: Item[];
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart, items }) => (
  <div className="flex flex-col">
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    {cartItems.length === 0 ? (
      <p className="text-gray-500">Your cart is empty</p>
    ) : (
      <div className="flex flex-col gap-2">
        {cartItems.map((cartItem) => {
          const item = items.find((i) => i.id === cartItem.id);
          return (
            <div key={cartItem.id} className="flex items-center gap-2">
              <img
                src={item?.image}
                alt={item?.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold">{item?.name}</p>
                <p className="text-gray-500">{item?.description}</p>
                <p className="text-lg font-bold">
                  ${item ? item.price * cartItem.quantity : 0}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-200 px-2 py-1 rounded-md"
                    onClick={() => removeFromCart(cartItem)}
                  >
                    Remove
                  </button>
                  <p className="text-lg font-bold">{cartItem.quantity}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">
            $
            {cartItems.reduce((total, cartItem) => {
              const item = items.find((i) => i.id === cartItem.id);
              return total + (item ? item.price * cartItem.quantity : 0);
            }, 0)}
          </p>
        </div>
      </div>
    )}
  </div>
);

export default App;
