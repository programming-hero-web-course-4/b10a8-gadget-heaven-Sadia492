import { toast } from "react-toastify";

const getCartFromLs = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const addCartToLs = (id) => {
  const cart = getCartFromLs();
  const duplicate = cart.find((idx) => idx === id);
  if (!duplicate) {
    cart.push(id);
    saveCartToLs(cart);
    toast.success("Cart Added");
  } else {
    toast.error("already exists");
  }
};

const saveCartToLs = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const getWishFromLs = () => {
  const storedWish = localStorage.getItem("wishlist");
  if (storedWish) {
    return JSON.parse(storedWish);
  }
  return [];
};

const addWishToLs = (id) => {
  const wishlist = getWishFromLs();
  const duplicate = wishlist.find((idx) => idx === id);
  if (!duplicate) {
    wishlist.push(id);
    saveWishToLs(wishlist);
    toast.success("Wish Added");
  } else {
    toast.error("already exists");
  }
};

const saveWishToLs = (wish) => {
  localStorage.setItem("wishlist", JSON.stringify(wish));
};

export { getCartFromLs, addCartToLs, getWishFromLs, addWishToLs };
