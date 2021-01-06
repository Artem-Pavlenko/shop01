import {Item} from "./productsReducer";

export type CartRootType = {
    cart: Array<Item>
}
type ActionTypes = ReturnType<typeof addProductToCart>

const initState: CartRootType = {
    cart: []
}


export const cartReducer = (state:CartRootType = initState, action: ActionTypes): CartRootType => {
    switch (action.type) {
        case "cart/ADD_PRODUCT_TO_CART":
            return {...state, cart: [...state.cart, action.product]}
        default:
            return state
    }
}

export const addProductToCart = (product: Item) => ({type: 'cart/ADD_PRODUCT_TO_CART', product} as const)