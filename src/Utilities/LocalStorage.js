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

const removeFromLS = (id) => {
  const cart = getCartFromLs();
  const remaining = cart.filter((product) => product.product_id !== id);
  saveCartToLs(remaining);
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

const removeFromWishList = (id) => {
  const wish = getWishFromLs();
  const remaining = wish.filter((product) => product.product_id !== id);
  saveWishToLs(remaining);
};

export {
  getCartFromLs,
  addCartToLs,
  getWishFromLs,
  addWishToLs,
  removeFromLS,
  removeFromWishList,
};
