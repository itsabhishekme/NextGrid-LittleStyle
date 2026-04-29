"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// 🧠 PRODUCT TYPE
type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

// 🛒 CART ITEM TYPE
type CartItem = Product & {
  quantity: number;
};

// 📦 CONTEXT TYPE
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

// 🚀 PROVIDER
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ LOAD FROM LOCALSTORAGE
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // ✅ SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD TO CART
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔄 UPDATE QUANTITY
  const updateQuantity = (id: string, qty: number) => {
    if (qty < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // 🧹 CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // 💰 TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 🎯 HOOK
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};