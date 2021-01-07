import React from "react"
import s from "./CartItem.module.scss"
import {Item} from "../../../store/productsReducer"
import {useDispatch} from "react-redux";
import {removeProductFromCart} from "../../../store/cartReducer";


export const CartItem = (item: Item) => {

    const dispatch = useDispatch()

    const removeProduct = () => {
        dispatch(removeProductFromCart(item))
    }

    return (
        <div className={s.cartItemBlock}>
            <div className={s.photo}>
                <span onClick={removeProduct}>x</span>
                <img src={item.photo} alt=""/>
            </div>
            <div className={s.productInfo}>
                <h3>
                    <span className={s.brandName}>{item.brand} </span>
                    <span className={s.model}>{item.model}</span>
                </h3>
            </div>
            <div className={s.price}>
                <span>{'$' + item.prise}</span>
            </div>
        </div>
    )
}