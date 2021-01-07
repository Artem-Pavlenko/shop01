import React from "react"
import s from './Cart.module.scss'
import {useSelector} from "react-redux";
import {StateType} from "../../store/store";
import {CartRootType} from "../../store/cartReducer";
import {CartItem} from "./CartItem/CartItem";
import {NavLink} from "react-router-dom";

export const Cart = () => {

    const cartProduct = useSelector<StateType, CartRootType>(state => state.cart)

    return (
        <div className={s.cartBlock}>
            <div className={s.cartContainer}>
                <h3>your cart</h3>
                {cartProduct.cart.length
                    ? <div className={s.cartList}>
                        {cartProduct.cart.map(p => <CartItem key={p.id} {...p}/>)}
                        <div>
                            <NavLink to={'/'}>back store</NavLink>
                            <div>
                                <span>Total:</span>
                                <span>{cartProduct.totalPrice}</span>
                            </div>
                        </div>
                    </div>
                    : <div className={s.empty}>
                        <p>There is not items yet.</p>
                        <NavLink to={'/'}>Back to shop</NavLink>
                    </div>}
            </div>
        </div>
    )
}