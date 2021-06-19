import React from 'react';
import h from './Header.module.css';

const Header = (props) => {
    return <>
        <header>
            <div className={h.wrapper}>
                <nav>
                    <ul className={h.nav}>
                        <li><a href=""> Доставка </a></li>
                        <li><a href=""> Оплата </a></li>
                        <li><a href=""> Отзывы </a></li>
                        <li><a href=""> Вопрос - ответ </a></li>
                        <li><a href=""> Контакты </a></li>
                    </ul>
                </nav>
            </div>
            <div className={h.bg_wrapper}>
                <div className={h.header}>
                    <div className={h.wrapper}>
                        <div className={h.header_top}>
                            <div className={h.logo}>
                                <span className={h.logo_img}></span>
                                <span>BEAUTY</span>
                            </div>
                            <div className={h.info}>
                                <span>8 (812) 123-45-67</span>
                                <button>Обратная связь</button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={h.wrapper}>
                        <div className={h.header_bottom}>
                            <ul className={h.nav}>
                                <li><a href=""> Парикмахерская </a></li>
                                <li><a href=""> Барбершоп </a></li>
                                <li><a href=""> Маникюр </a></li>
                                <li><a href=""> Педикюр </a></li>
                                <li><a href=""> Массаж </a></li>
                                <li><a href=""> Мебель </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;