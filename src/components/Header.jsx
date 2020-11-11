import * as React from 'react';
import userRegisterImg from '../img/user-register.svg';

const Header = () => {
    return <header className="header-desktop">
        {/* <div className="support">
            <div className="container">
                <span>
                    BabyBazaar работает в режиме beta-тестирования. 
                    Пожалуйста, о найденных ошибках сообщайте на почту&nbsp;
                    <a href="mailto:support@babybazaar.com.ua">support@babybazaar.com.ua</a>&nbsp;
                    или в онлай-чат
                </span>
            </div>
        </div> */}
        <div className="container">
            <a href="/" className="logo">
                <img src="../../img/logo_new.svg" alt="" />
            </a>
            <div className="search-group">
                <input className="search" placeholder="Что вы ищите" />
                <button><img src="../../img/search.svg" alt="" /></button>
            </div>

            <div className="icon-group">
                <a href="/"><img src="../../img/message.svg" alt="" /><span className="sum">6</span></a>
                <a href="/"><img src="../../img/heart.svg" alt="" /><span className="sum empty">0</span></a>
                <a href="/"><img src="../../img/cart.svg" alt="" /><span className="sum">7</span></a>
            </div>

            <div className="user-register">
                <ul className="user-menu">
                    <li className="header-menu">
                        <div className="profile-menu">
                            <img className="avatar" src={userRegisterImg} alt="" />
                            <span className="name">Наталья П.</span>
                        </div>                    
                        {/* <ul className="links">
                            <li><a href="/">Мои объявления</a></li>
                            <li><a href="/">Мой профиль</a></li>
                            <li><a href="/">История заказов</a></li>
                            <li><a href="/">Избранное</a></li>
                            <li><a href="/">Корзина</a></li>
                            <li><a href="/">Чат</a></li>
                            <li><a href="/">Настройка профиля</a></li>
                        </ul> */}
                    </li>
                </ul>
            </div>

            <a href="/" className="new-announcement">Подать объявление</a>
        </div>
        <nav>
            <div className="container">
                <ul className="products-nav">
                    <li className="list all-categories">
                        <span className="category-name">Все категории</span>
                        <div className="sub-menu">
                            <div className="container">
                                {/* <div className="close-menu">
                                    <p>Закрыть</p>
                                    <div id="mdiv">
                                        <div className="mdiv">
                                            <div className="md"></div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="wrapper-menu">
                                    <ul>
                                        <li className="category-heading">Для малышей</li>
                                        <li><a href="/">Товары для беременных и ухода за новорожденными</a></li>
                                        <li>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li className="category-heading">Для девочек</li>
                                        <li><a href="/">Верхняя одежда</a></li>
                                        <li><a href="/">Кофты, свитера</a></li>
                                        <li><a href="/">Рубашки, блузки</a></li>
                                        <li><a href="/">Футболки, майки</a></li>
                                        <li><a href="/">Платья, костюмы</a></li>
                                        <li><a href="/">Брюки, юбки, шорты, комбинезоны</a></li>
                                        <li><a href="/">Колготки, носочные изделия</a></li>
                                        <li><a href="/">Головные уборы, аксессуары, украшения</a></li>
                                        <li><a href="/">Нижнее белье, купальники, халаты</a></li>
                                        <li><a href="/">Одежда для сна</a></li>
                                        <li><a href="/">Одежда для близнецов и тройни</a></li>
                                        <li><a href="/"> Костюмы для утренников и праздников</a></li>
                                        <li><a href="/">Оптовая продажа (пакетом)</a></li>
                                        <li><a href="/">Детская обувь</a></li>
                                    </ul>
                                
                                    <ul>
                                        <li className="category-heading">Для мальчиков</li>
                                        <li><a href="/">Верхняя одежда</a></li>
                                        <li><a href="/">Кофты, свитера</a></li>
                                        <li><a href="/">Рубашки, блузки</a></li>
                                        <li><a href="/">Футболки, майки</a></li>
                                        <li><a href="/">Платья, костюмы</a></li>
                                        <li><a href="/">Брюки, юбки, шорты, комбинезоны</a></li>
                                        <li><a href="/">Колготки, носочные изделия</a></li>
                                        <li><a href="/">Головные уборы, аксессуары, украшения</a></li>
                                        <li><a href="/">Нижнее белье, купальники, халаты</a></li>
                                        <li><a href="/">Одежда для сна</a></li>
                                        <li><a href="/">Одежда для близнецов и тройни</a></li>
                                        <li><a href="/"> Костюмы для утренников и праздников</a></li>
                                        <li><a href="/">Оптовая продажа (пакетом)</a></li>
                                        <li><a href="/">Детская обувь</a></li>
                                    </ul>
                                    <ul>
                                        <li className="category-heading">Для всех</li>
                                        <li><a href="/">Аксессуары</a></li>
                                        <li><a href="/">Игрушки, игры</a></li>
                                        <li><a href="/">Коляски</a></li>
                                        <li><a href="/">Детский транспорт</a></li>
                                        <li><a href="/">Автокресла</a></li>
                                        <li><a href="/">Детская мебель</a></li>
                                        <li><a href="/">Канцтовары и всё для школы</a></li>
                                        <li><a href="/">Спортивная одежда и инвентарь</a></li>
                                    </ul>
                                </div>                            
                            </div>
                        </div>
                    </li>

                    <li className="list sub-category-list">
                        <span className="category-name">Для малышей</span>
                        <div className="sub-menu">
                            <div className="container">
                                {/* <div className="close-menu">
                                    <p>Закрыть</p>
                                    <div id="mdiv">
                                        <div className="mdiv">
                                            <div className="md"></div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="wrapper-menu">
                                    <ul>
                                        <li className="category-heading">Для малышей</li>
                                        <li><a href="/">Товары для беременных и ухода за новорожденными</a></li>
                                        <li></li>
                                    </ul>
                                {/* </div className="wrapper-menu">*/}
                            </div>
                        </div>
                    </li>
                    <li className="list sub-category-list">
                        <span className="category-name">Для девочек</span>
                        <div className="sub-menu">
                            <div className="container">
                                {/* <div className="close-menu">
                                    <p>Закрыть</p>
                                    <div id="mdiv">
                                        <div className="mdiv">
                                            <div className="md"></div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="wrapper-menu">
                                    <ul>
                                        <li className="category-heading">Для малышей</li>
                                        <li><a href="/">Товары для беременных и ухода за новорожденными</a></li>
                                        <li></li>
                                    </ul>
                                </div>   
                            </div>
                        </div>
                    </li>
                    <li className="list sub-category-list">
                        <span className="category-name">Для мальчиков</span>
                        <div className="sub-menu">
                            <div className="container">
                                {/* <div className="close-menu">
                                    <p>Закрыть</p>
                                    <div id="mdiv">
                                        <div className="mdiv">
                                            <div className="md"></div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="wrapper-menu">
                                    <ul>
                                        <li className="category-heading">Для малышей</li>
                                        <li><a href="/">Товары для беременных и ухода за новорожденными</a></li>
                                        <li></li>
                                    </ul>
                                </div>   
                            </div>
                        </div>
                    </li>

                    <li className="list special">
                        <span className="category-name">Спецкатегория</span>
                    </li>
                </ul>

                <div className="info-nav">
                    <ul>
                        <li><a href="/">Продавцам</a></li>
                        <li><a href="/">О сервисе</a></li>
                    </ul>
                    <ul className="language">
                        <li><a href="/">Ua</a></li>
                        <li><a href="/">Ru</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>;
}

export default Header;