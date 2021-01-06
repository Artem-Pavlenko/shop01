import {v1} from "uuid"
import s1 from "../assets/sneakers/INTERNATIONALIST-KJCRD-M-QS-829344_006_A_PREM_1.png"
import s2 from "../assets/sneakers/NIKE-ROSHE-CORTEZ-NM-823299_607_A_PREM_1.png"
import s3 from "../assets/sneakers/NIKE-ROSHE-FLYKNIT-PRM-746825_402_A_PREM_1.png"
import s4 from "../assets/sneakers/NIKE-ROSHE-NM-FLYKNIT-SE-816531_300_A_PREM_1.png"
import s5 from "../assets/sneakers/STEFAN-JANOSKI-MAX-PRM-807497_101_A_PREM_1.png"
import s6 from "../assets/sneakers/TENNIS-CLASSIC-ULTRA-QS-807175_008_A_PREM_1.png"

export type Item = {
    brand: string
    model: string | number
    prise: number
    totalCount: number
    id: string
    photo: string
}
export type ProductsRootType = {
    sneakers: Array<Item>
}
type ActionTypes = ReturnType<typeof itemInCart> | ReturnType<typeof addItem>

const initState: ProductsRootType = {
    sneakers: [
        {brand: 'Nike', model: 'INTERNATIONALIST', id: v1(), prise: 94.99, totalCount: 1, photo: s1},
        {brand: 'Nike', model: 'ROSHE-CORTEZ', id: v1(), prise: 49.99, totalCount: 1, photo: s2},
        {brand: 'Nike', model: 'ROSHE-FLYKNIT', id: v1(), prise: 59.99, totalCount: 1, photo: s3},
        {brand: 'Nike', model: 'ROSHE-NM', id: v1(), prise: 44, totalCount: 1, photo: s4},
        {brand: 'Nike', model: 'STEFAN-JANOSKI', id: v1(), prise: 46.99, totalCount: 1, photo: s5},
        {brand: 'Nike', model: 'TENNIS-CLASSIC-ULTRA', id: v1(), prise: 77, totalCount: 1, photo: s6},
    ]
}

export const productsReducer = (state: ProductsRootType = initState, action: ActionTypes): ProductsRootType => {
    switch (action.type) {
        case "product/ITEM_IN_CART":
            return {
                ...state,
                sneakers: state.sneakers
                    .map(item => action.id === item.id ? {...item, totalCount: item.totalCount - 1} : item)
                    .filter(item => item.totalCount > 0)
            }
        case "product/ADD_ITEM":
            return {
                ...state,
                sneakers: [...state.sneakers, action.item]
            }
        default:
            return state
    }
}

// если единица товара попадёт в корзину, то её нужно убрать из списка
export const itemInCart = (id: string) => ({type: 'product/ITEM_IN_CART', id} as const)
// если пользователь удалит товар из корзины, то вернётся обратно в список
export const addItem = (item: Item) => ({type: 'product/ADD_ITEM', item} as const)