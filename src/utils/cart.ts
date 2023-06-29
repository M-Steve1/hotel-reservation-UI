import Category from "../models/Category";

export const addToCart = (category: Category, roomType: string, setCart: React.Dispatch<React.SetStateAction<Category>>): void => {
    roomType = roomType;
    setCart(category);
  };

export const removeFromCart = (setCart: React.Dispatch<React.SetStateAction<Category>>, theCategory: Category): void => {
    setCart(theCategory);
  };