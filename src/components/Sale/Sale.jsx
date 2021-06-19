import React from 'react';
import s from './Sale.module.css'
import h from './../Header/Header.module.css';

const Sale = (props) => {
    return (
        <section className={s.banner}>
            <div className={h.wrapper}>
                <h1 className={s.title}>Супер кресло</h1>
                <p>Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее</p>
                <a className={s.btn} href="#">Подробнее</a>
            </div>
        </section>
    )
}

export default Sale