import {Item, itemInCart} from "./productsReducer";
import {Dispatch} from "redux";

export type CartRootType = {
    cart: Array<Item>
    totalPrice: number
}
type ActionTypes = ReturnType<typeof addProductToCart> | ReturnType<typeof deleteProductFromCart>

const initState: CartRootType = {
    cart: [],
    totalPrice: 0
}

export const cartReducer = (state: CartRootType = initState, action: ActionTypes): CartRootType => {
    switch (action.type) {
        case "cart/ADD_PRODUCT_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.product],
                totalPrice: (state.totalPrice + action.product.prise)
            }
        case "cart/DELETE_PRODUCT":
            const {prise} = state.cart.find(p => p.id === action.id) as Item
            return {
                ...state,
                cart: state.cart.filter(p => p.id !== action.id),
                totalPrice: +(state.totalPrice - prise).toFixed(2)
            }
        default:
            return state
    }
}

export const addProductToCart = (product: Item) => ({type: 'cart/ADD_PRODUCT_TO_CART', product} as const)
export const deleteProductFromCart = (id: string) => ({type: 'cart/DELETE_PRODUCT', id} as const)

export const productToCart = (product: Item) => (dispatch: Dispatch) => {
    dispatch(addProductToCart(product))
    dispatch(itemInCart(product.id))
}