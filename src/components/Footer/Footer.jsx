import React from 'react';
import c from '../Content/Content.module.css'
import f from './Footer.module.css'

const Footer = (props) => {
    return (
        <>
            <footer>
                <div className={c.bg_white}>
                    <div className={c.wrapper}>
                        <div className={f.footer_top}>

                        </div>
                    </div>
                </div>
                <div className={c.wrapper}>
                    <div className={f.footer_bottom}>
                        <p>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов
                            красоты</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;