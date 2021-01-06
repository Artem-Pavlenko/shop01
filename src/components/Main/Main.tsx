import React from "react"
import s from "./Main.module.scss"
import {useSelector} from "react-redux";
import {StateType} from "../../store/store";
import {ProductsRootType} from "../../store/productsReducer";
import {Product} from "../Product/Product";

export const Main = () => {

    const {sneakers} = useSelector<StateType, ProductsRootType>(state => state.products)

    return (
        <div className={s.homeBlock}>
            <Product {...sneakers[0]} />
        </div>
    )
}