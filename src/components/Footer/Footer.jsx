import React from 'react';
import c from '../Content/Content.module.css'
import f from './Footer.module.css'
import h from '../Header/Header.module.css'

const Footer = (props) => {
    return (
        <>
            <footer>
                <div className={c.bg_white}>
                    <div className={c.wrapper}>
                        <div className={f.footer_top}>
                            <div className={f.footer_info}>
                                <ul className={f.social}>
                                    <li className={f.social_item}><a
                                        className={[f.social_link, f.social_link_youtube].join(" ")} href=""
                                        target="_blank"></a></li>
                                    <li className={f.social_item}><a
                                        className={[f.social_link, f.social_link_vk].join(" ")}
                                        href="" target="_blank"></a></li>
                                    <li className={f.social_item}><a
                                        className={[f.social_link, f.social_link_facebook].join(" ")}
                                        href="" target="_blank"></a></li>
                                    <li className={f.social_item}><a
                                        className={[f.social_link, f.social_link_instagram].join(" ")}
                                        href="" target="_blank"></a></li>
                                </ul>
                            </div>
                            <div className={f.footer_info}>
                                <span>198555, Невский пр. 140, офис 140</span>
                                <span>8 (812) 123-45-67</span>
                                <button type="button">Обратная звонок</button>
                            </div>
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