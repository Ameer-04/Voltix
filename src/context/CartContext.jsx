"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];

      // Hydrate client state from browser storage after the server render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
    } catch {
      localStorage.removeItem("cart");
      setCartItems([]);
    } finally {
      setIsCartLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isCartLoaded) return;

    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, isCartLoaded]);

  // 3. Add a product or increase its quantity.
  function addToCart(productId, quantity = 1) {
    if (
      typeof productId !== "string" ||
      !productId ||
      !Number.isSafeInteger(quantity) ||
      quantity < 1
    ) {
      return;
    }

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, { productId, quantity }];
    });
  }

  // 4. Remove a product completely.
  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId)
    );
  }

  // 5. Change a product's quantity.
  function updateQuantity(productId, quantity) {
    if (!Number.isSafeInteger(quantity) || quantity < 1) return;

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  // 6. Empty the cart.
  function clearCart() {
    setCartItems([]);
  }

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const value = {
    cartItems,
    totalItems,
    isCartLoaded,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}