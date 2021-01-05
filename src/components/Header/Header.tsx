import React from "react"
import s from "./Header.module.scss"
import logo from "../../assets/icon/parrot.svg"

export const Header = () => {
    return (
        <header className={s.headerBlock}>
            <div className={s.logo}>
                <img src={logo} alt=' '/>
            </div>
            <div className={s.title}>
                <span>bingo</span>
            </div>
            <div className={s.cart}>

            </div>
        </header>
    )
}