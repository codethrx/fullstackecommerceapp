import { createContext, useContext, useState, useEffect } from "react";

//Creating the context
const ShopContext = createContext();
//React toastify
import { toast, ToastContainer } from "react-toastify";
//Provider
export const StateContext = ({ children }) => {
  //State
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  //useEffect
  useEffect(() => {
    const cloneCartItems = [...cartItems];
    const price =
      cloneCartItems.length >= 1 &&
      cloneCartItems.reduce((currentElement, nextElement) => {
        return currentElement + nextElement.price * nextElement.qty;
      }, 0);

    setTotalPrice(price);
  }, [cartItems]);
  //Functions
  //Items adding and removing functionality
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  const resetQty = () => setQty(1);
  //Cart functionality
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const toggleCart = () => setShowCart(!showCart);
  //Decreasing and decreasing cart items from cart
  const onAddCartItem = (slug) => {
    const cartItemsClone = [...cartItems];
    const exist = cartItemsClone.find((e) => e.slug === slug);
    if (exist) {
      setTotalItems((prev) => prev + 1);
      return setCartItems(
        cartItemsClone.map((item) =>
          item.slug === slug ? { ...exist, qty: item.qty + 1 } : item
        )
      );
    }
  };
  const onRemoveCartItem = (slug) => {
    const cartItemsClone = [...cartItems];
    const exist = cartItemsClone.find((e) => e.slug === slug);
    setTotalItems((prev) => (prev === 0 ? 0 : prev - 1));
    if (exist.qty - 1 === 0) {
      toast.error(`${exist.title} removed.`);
      return setCartItems(cartItems.filter((item) => item.slug !== slug));
    }
    if (exist) {
      return setCartItems(
        cartItemsClone.map((item) =>
          item.slug === slug ? { ...exist, qty: item.qty - 1 } : item
        )
      );
    }
  };
  //Add to Cart item functionality
  const onAdd = (product, qty) => {
    const cartItemsClone = [...cartItems];
    const exist = cartItemsClone.find(
      (cartItem) => cartItem.slug === product.slug
    );
    if (exist) {
      setTotalItems((prev) => prev - exist.qty);
      const updatedCartItems = cartItemsClone.map((item) =>
        item.slug === product.slug ? { ...item, qty } : item
      );
      setCartItems(updatedCartItems);
      setTotalItems((prev) => prev + qty);
    } else {
      toast.success(`${product.title} added`);
      setCartItems([...cartItems, { ...product, qty }]);
      setTotalItems((prev) => prev + qty);
    }
  };
  //Final State
  const shopContext = {
    qty,
    increaseQty,
    decreaseQty,
    resetQty,
    showCart,
    setShowCart,
    cartItems,
    onAdd,
    openCart,
    toggleCart,
    closeCart,
    onAddCartItem,
    onRemoveCartItem,
    totalItems,
    totalPrice,
  };
  //test
  console.log(cartItems);

  return (
    <ShopContext.Provider value={shopContext}>
      {children}
      <ToastContainer />
    </ShopContext.Provider>
  );
};
//using the context
export default function useStateContext() {
  return useContext(ShopContext);
}
