import * as React from 'react';

const SidebarMobile = () => {
    return <div className="sidebar-mobile">
        <div className="bar">
            <div className="bar-header">
                <div className="hamburger hamburger--3dx">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
                <a href="/" className="logo">
                    <img src="../../img/logo-mobile.png" alt="" />
                </a>
                <button className="search-btn">
                    <img src="../../img/search.svg" alt="" />
                </button>
                <ul className="language">
                    <li><a href="/">Ua</a></li>
                    <li><a href="/">Ru</a></li>
                </ul>
            </div>
            <ul className="group top-links">
                <li className="item user-account">
                    <a href="/" className="user-register">
                        <div className="avatar"><img src="../../img/user-register.svg" alt="" /></div>
                        <div className="name">Наталья П.</div>
                    </a>
                    <ul className="user-account-links">
                        <li><a href="/">Профиль</a></li>
                        <li><a href="/">Настройки</a></li>
                        <li><a href="/">Персналиация</a></li>
                        <li><a href="/">Счета</a></li>
                    </ul>
                </li>
                <li className="item">
                    <a href="/">
                        <div className="img-container">
                            <img src="../../img/add2.svg" alt="" />
                        </div>
                        Подать объявление
                    </a>
                </li>
            </ul>

            {/* <div className="group ">
                <ul>
                    <li className="item collapse">
                        <div className="collapse-head category-heading">
                            Для малышей
                        </div>
                        <ul className="collapse-body">
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                    <li className="item collapse">
                        <div className="collapse-head category-heading">
                            Для девочек
                        </div>
                        <ul className="collapse-body">
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                    <li className="item collapse">
                        <div className="collapse-head category-heading">
                            Для мальчиков
                        </div>
                        <ul className="collapse-body">
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                    <li className="item collapse">
                        <div className="collapse-head category-heading special">
                            Спецкатегория
                        </div>
                        <ul className="collapse-body">
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                </ul>
            </div> */}

            <div className="collapse_menu">
                <ul>
                    <li>
                        <div className="collapse_menu__title">
                            <span>Для малышей</span>
                            <img src="../../img/down_arrow.svg" alt="" />
                        </div>
                        <ul>
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="collapse_menu__title">
                            <span>Для девочек</span>
                            <img src="../../img/down_arrow.svg" alt="" />
                        </div>
                        <ul>
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="collapse_menu__title">
                            <span>Для мальчиков</span>
                            <img src="../../img/down_arrow.svg" alt="" />
                        </div>
                        <ul>
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="collapse_menu__title">
                            <span>Спецкатегория</span>
                            <img src="../../img/down_arrow.svg" alt="" />
                        </div>
                        <ul>
                            <li className="collapse-item"><a href="/">Детские лыжи</a></li>
                            <li className="collapse-item"><a href="/">Рубашка для мальчика</a></li>
                            <li className="collapse-item"><a href="/">Футболка фирменая</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <ul className="group user-state">
                <li className="item">
                    <a href="/">
                        <div className="icon-group">
                            <div className="wrap"><img src="../../img/cart.svg" alt="" /><span className="sum">7</span></div>
                        </div>
                        Корзина
                    </a>
                </li>
                <li className="item">
                    <a href="/">
                        <div className="icon-group">
                            <div className="wrap"><img src="../../img/like.svg" alt="" /><span className="sum">7</span></div>
                        </div>
                        Вишлист
                    </a>
                </li>
                <li className="item">
                    <a href="/">
                        <div className="icon-group">
                            <div className="wrap"><img src="../../img/chat_black.svg" alt="" /><span className="sum">7</span></div>
                        </div>
                        Чат
                    </a>
                </li>
            </ul>

            <ul className="group bottom-links">
                <li className="item">
                    <a href="/">
                        Как продавать на Baby Bazaar
                    </a>
                </li>
                <li className="item">
                    <a href="/">О сервисе</a>
                </li>
                <li className="item">
                    <a href="/">Страница</a>
                </li>
            </ul>
        </div>
    </div>
}

export default SidebarMobile;