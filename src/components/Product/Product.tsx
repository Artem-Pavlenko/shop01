import React from "react"
import s from "../Product/Product.module.scss"
import {Item} from "../../store/productsReducer";
import {useDispatch} from "react-redux";
import {productToCart} from "../../store/cartReducer";

export const Product = ({photo, brand, id, model, prise, totalCount}: Item) => {

    const dispatch = useDispatch()

    const buyProduct = () => {
        dispatch(productToCart({photo, brand, id, model, prise, totalCount}))
    }

    return (
        <div className={s.productBlock}>
            <div className={s.photo}>
                <img src={photo} alt="" title={'balance: ' + totalCount.toString()}/>
            </div>
            <div className={s.brand}>
                <h3>
                    <span className={s.brandName}>{brand} </span>
                    <span className={s.model}>{model}</span>
                </h3>
            </div>
            <div className={s.price}>
                <span>{'$' + prise}</span>
                <button onClick={buyProduct}>buy</button>
            </div>
        </div>
    )
}