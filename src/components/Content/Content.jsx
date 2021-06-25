import React from 'react';
import c from './Content.module.css'
import s from './../Sale/Sale.module.css'
import car from '../../assets/car.svg'
import product from '../../assets/products.svg'
import mail from '../../assets/mail.svg'

const Content = (props) => {
    return (
        <>
            <div className={c.wrapper}>
                <div className={c.grid}>
                    <div className={[c.grid_item, c.grid_item_title].join(" ")}>
                        <h2 className={c.title_h2}>Специальные предложения</h2>
                    </div>
                    <div className={[c.grid_item, c.grid_item_img].join(" ")}>
                        <img src={car} alt="Car"/>
                    </div>

                    <div className={[c.grid_item, c.grid_item_product].join(" ")}>
                        <div className={c.bg_white}>
                            <div className={c.thumb}>
                                <img src={product} alt="Product"/>
                            </div>
                            <p className={c.grid_title}>Супер-пупер стул</p>
                            <p className={c.grid_price}>10 000 Р</p>
                            <a className={c.grid_btn} href="#">Купить</a>
                        </div>
                    </div>
                    <div className={[c.grid_item, c.grid_item_product].join(" ")}>
                        <div className={c.bg_white}>
                            <div className={c.thumb}>
                                <img src={product} alt="Product"/>
                            </div>
                            <p className={c.grid_title}>Супер-пупер стул</p>
                            <p className={c.grid_price}>10 000 Р</p>
                            <a className={c.grid_btn} href="#">Купить</a>
                        </div>
                    </div>
                    <div className={[c.grid_item, c.grid_item_product].join(" ")}>
                        <div className={c.bg_white}>
                            <div className={c.thumb}>
                                <img src={product} alt="Product"/>
                            </div>
                            <p className={c.grid_title}>Супер-пупер стул</p>
                            <p className={c.grid_price}>10 000 Р</p>
                            <a className={c.grid_btn} href="#">Купить</a>
                        </div>
                    </div>
                    <div className={[c.grid_item, c.grid_item_product].join(" ")}>
                        <div className={c.bg_white}>
                            <div className={c.thumb}>
                                <img src={product} alt="Product"/>
                            </div>
                            <p className={c.grid_title}>Супер-пупер стул</p>
                            <p className={c.grid_price}>10 000 Р</p>
                            <a className={c.grid_btn} href="#">Купить</a>
                        </div>
                    </div>

                    <div className={[c.grid_item, c.grid_item_left].join(" ")}>
                        <div className={c.bg_green}>
                            <div className={c.bg_green_item}>
                                <h3>Получайте бонусы и подарки</h3>
                                <p>Каждый месяц разыгрываем <br/>10 000 рублей для наших клиентов</p>
                                <input type="mail" placeholder="Введите e-mail"/>
                            </div>
                            <img className={c.bg_green_item_img} src={mail} alt="Mail"/>
                        </div>
                    </div>
                    <div className={[c.grid_item, c.grid_item_right].join(" ")}>
                        <div className={c.bg_green}>
                            <div className={c.bg_green_item}>
                                <h3>Заходите к нам</h3>
                                <p>Более 300 магазинов <br/>по всей России</p>
                                <a href="#" className={[s.btn, c.btn].join(" ")}>Карта магазинов</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Content;