import React from "react"
import s from "./Header.module.scss"
import logo from "../../assets/icon/sneakers.svg"

export const Header = () => {
    return (
        <header className={s.headerBlock}>
            <div className={s.logo}>
                <img src={logo} alt=' '/>
            </div>
            <div className={s.title}>
                <h2>bingo</h2>
            </div>
            <div className={s.cart}>
                cart
            </div>
        </header>
    )
}