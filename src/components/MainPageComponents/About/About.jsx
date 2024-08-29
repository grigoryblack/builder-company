import React, { forwardRef } from 'react';
import Decor from '../../../assets/Img/about_decor.webp';
import './index.scss';
import {DownCircleOutlined} from "@ant-design/icons";

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="about" className="about-us__wrapper">
            <div className="about-us__wrapper-container">
                <img className="bg_decor" src={Decor} alt="decoration"/>
                <h2>О нас</h2>
                <div className="card-container">
                    <div className="card-container__item">
                        <div className="card-container__item-inner">
                            <div className="inner-number">01</div>
                            <p>
                                Более 20 лет опыта работы и коллектив, состоящий из
                                опытных профессионалов высокой квалификации
                            </p>
                        </div>
                    </div>
                    <div className="card-container__item">
                        <div className="card-container__item-inner">
                            <div className="inner-number">02</div>
                            <p>
                                Гарантирия соблюдения сроков выполнения
                                работ по договору
                            </p>
                        </div>
                    </div>
                    <div className="card-container__item">
                        <div className="card-container__item-inner">
                            <div className="inner-number">03</div>
                            <p>
                                Индивидуальный и гибкий подход к выполнению
                                работ в самые сжатые сроки
                            </p>
                        </div>
                    </div>
                    <div className="card-container__item">
                        <div className="card-container__item-inner">
                            <div className="inner-number">04</div>
                            <p>
                                Большой арсенал собственной техники
                                позволит выполнить работы качественно и в срок
                            </p>
                        </div>
                    </div>
                    <div className="card-container__item">
                        <div className="card-container__item-inner">
                            <div className="inner-number">05</div>
                            <p>
                                При необходимости постоянно находимся с вами на связи
                                в удобном мессенджере. Ведем фото / видео отчет
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about__arrow-down">
                    <a href="#about">
                        <DownCircleOutlined/>
                    </a>
                </div>
            </div>
        </section>
    );
});

export default About;
