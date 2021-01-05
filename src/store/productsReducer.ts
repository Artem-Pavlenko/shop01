import {v1} from "uuid";

type item = {
    brand: string
    model: string | number
    prise: number
    totalCount: number
    id: string
    photo: string | null
}
export type ProductsRootType = {
    sneakers: Array<item>
}
type ActionTypes = ReturnType<typeof itemInCart>

const initState: ProductsRootType = {
    sneakers: [
        {brand: 'Nike', model:'', id: v1(), prise: 2, totalCount:1, photo: null},
        {brand: 'Nike', model:'', id: v1(), prise: 2, totalCount:1, photo: null},
        {brand: 'Nike', model:'', id: v1(), prise: 2, totalCount:1, photo: null},
        {brand: 'Nike', model:'', id: v1(), prise: 2, totalCount:1, photo: null}
        ]
}

export const productsReducer = (state:ProductsRootType = initState, action: ActionTypes ):ProductsRootType => {
    switch (action.type) {
        case "product/ITEM_IN_CART":
            return {
                ...state,
                sneakers: state.sneakers
                    .map(item => action.id === item.id ? {...item, totalCount: item.totalCount - 1} : item)
                    .filter(item => item.totalCount > 0)
            }
        default:
            return state
    }
}

export const itemInCart = (id: string) => ({type: 'product/ITEM_IN_CART', id} as const)