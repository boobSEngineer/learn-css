import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return <>
        <header>
            <div className={s.wrapper}>
                <nav>
                    <ul className={s.nav}>
                        <li><a href=""> Доставка </a></li>
                        <li><a href=""> Оплата </a></li>
                        <li><a href=""> Отзывы </a></li>
                        <li><a href=""> Вопрос - ответ </a></li>
                        <li><a href=""> Контакты </a></li>
                    </ul>
                </nav>
            </div>
            <div className={s.bg_wrapper}>
                <div className={s.header}>
                    <div className={s.wrapper}>
                        <div className={s.header_top}>
                            <div className={s.logo}>BEAUTY</div>
                            <div className={s.info}>
                                <span>8 (812) 123-45-67</span>
                                <button>Обратная связь</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;