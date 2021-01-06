import {Item} from "./productsReducer";

export type CartRootType = {
    cart: Array<Item>
    totalPrice: number
}
type ActionTypes = ReturnType<typeof addProductToCart>

const initState: CartRootType = {
    cart: [],
    totalPrice: 0
}


export const cartReducer = (state:CartRootType = initState, action: ActionTypes): CartRootType => {
    switch (action.type) {
        case "cart/ADD_PRODUCT_TO_CART":
            return {...state, cart: [...state.cart, action.product], totalPrice: state.totalPrice + action.product.prise}
        default:
            return state
    }
}

export const addProductToCart = (product: Item) => ({type: 'cart/ADD_PRODUCT_TO_CART', product} as const)