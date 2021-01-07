import React from "react"
import s from "./Header.module.scss"
import logo from "../../assets/icon/sneakers.svg"
import {useSelector} from "react-redux";
import {StateType} from "../../store/store";
import {CartRootType} from "../../store/cartReducer";
import { NavLink } from "react-router-dom";

export const Header = () => {

    const {totalPrice} = useSelector<StateType, CartRootType>(state => state.cart)

    return (
        <header className={s.headerBlock}>
            <div className={s.logo}>
                <NavLink to={'/about'}><img src={logo} alt=' '/></NavLink>
            </div>
            <div className={s.title}>
                <NavLink to={'/'}>
                    <h2>bingo</h2>
                </NavLink>
            </div>
            <div className={s.cart}>
               <div className={s.totalPrice}>
                   {totalPrice === 0 ? '$00.00' : '$' + totalPrice}
               </div>
                <div className={s.link}>
                    <NavLink to={'/cart'}>cart</NavLink>
                </div>
            </div>
        </header>
    )
}