import React, { forwardRef } from 'react';
import Navigation from "./Navigation/Navigation.jsx";
import {
    DownCircleOutlined,
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined
} from "@ant-design/icons";
import { message } from "antd";
import Excavator from '../../../assets/Img/header.webp';
import './index.scss';
import { useMediaQuery } from "react-responsive";

const Header = forwardRef((props, ref) => {
    const isMobile = useMediaQuery({ maxWidth: 600 });

    const handlePhoneClick = () => {
        window.location.href = 'tel:+79123456789'; // Открывает приложение для звонков
    };

    const handleEmailClick = () => {
        navigator.clipboard.writeText('info@example.com')
            .then(() => {
                message.success('Email адрес успешно скопирован!');
            })
            .catch((err) => {
                message.error('Не удалось скопировать email адрес');
            });
    };

    return (
        <header className="header" ref={ref}>
            <img src={Excavator} alt="background" className="header__background" />
            <div className="header-inner">
                <div className="top-line">
                    <div className="logo">SanBuilding INC.</div>
                    <div className="info-inner">
                        <h2 className="contacts">
                            <span style={{ cursor: 'pointer' }} onClick={handlePhoneClick}>
                                <PhoneOutlined /> {!isMobile && '+79123456789'}
                            </span>
                            {!isMobile && <span style={{ cursor: 'pointer' }} onClick={handleEmailClick}>
                                <MailOutlined /> info@example.com
                            </span>}
                        </h2>
                        <h2 className="location">
                            <span><EnvironmentOutlined /> Пермский край, Пермь</span>
                        </h2>
                    </div>
                </div>
                <Navigation />
                <div className="header-content">
                    <div className="header-content__title">
                        <h1>SanBuilding INC.</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                    </div>
                    <div className="header-content__button">
                        <button className="calculator_button">Рассчитать стоймость работы</button>
                    </div>
                </div>
                <div className="header__arrow-down">
                    <a href="#about">
                        <DownCircleOutlined />
                    </a>
                </div>
            </div>
        </header>
    );
});

export default Header;
