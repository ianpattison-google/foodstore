import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const FoodstoreDataStore = createStore(ShopReducer);