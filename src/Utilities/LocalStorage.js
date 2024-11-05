import { toast } from "react-toastify";

const getCartFromLs = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const addCartToLs = (product) => {
  const cart = getCartFromLs();

  cart.push(product);
  saveCartToLs(cart);
  toast.success("Cart Added");
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

const addWishToLs = (product) => {
  const wishlist = getWishFromLs();

  wishlist.push(product);
  saveWishToLs(wishlist);
  toast.success("Wish Added");
};

const saveWishToLs = (wish) => {
  localStorage.setItem("wishlist", JSON.stringify(wish));
};

export { getCartFromLs, addCartToLs, getWishFromLs, addWishToLs };
