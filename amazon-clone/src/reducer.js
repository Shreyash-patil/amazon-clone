export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
    // Check if item.price is a string
    if (typeof item.price === "string") {
      // Remove commas from the price string and convert it to a number
      const price = parseFloat(item.price.replace(/,/g, ""));
      // Check if price is a valid number
      if (!isNaN(price)) {
        return price + amount;
      }
    }
    // If item.price is not a valid string or cannot be converted to a number, return the current amount
    return amount;
  }, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      // Logic for adding product to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic for removing product from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exits in basket, remove it
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
