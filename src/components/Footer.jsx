import * as React from 'react';

const Footer: React.FC = () => {
    return <footer className="footer">
        <div className="subscribe">
            <div className="container">
                <p className="subscribe-heading">Подпишитесь на рассылку и всегда узнавайте о новинках первыми!</p>
                <form className="subscribe-form">
                    <div className="input-submit">
                        <input type="text" placeholder="Ваша электроная почта" />
                        <button type="submit" className="btn-dark submit-subscribe">Подписаться</button>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="agreement" />
                        <label htmlFor="agreement">
                            Нажимая кнопку «Подписаться» я соглашаюсь со
                            <a href="/"> следующим</a>
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <div className="footer-nav">
            <div className="container">
                <div className="contact-info">
                    <a href="/" className="logo"><img alt="" /></a>
                    <div>
                        <a href="tel:+1234567890">+123-456-78-90</a>
                        <a href="mailto:info@babybazaar.com.ua">info@babybazaar.com.ua</a>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li><a className="category-heading" href="/">О нас</a></li>
                        <li><a className="category-heading" href="/">Покупателям</a></li>
                        <li><a className="category-heading" href="/">Продавцам</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Политика конфиденциальности</a></li>
                        <li><a href="/">Публичное предложение</a></li>
                        <li><a href="/">Сбор данных</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright-social">
            <div className="container">
                <div className="social">
                    <a href="/"><img src="../../img/facebook_footer.svg" alt="" /></a>
                    <a href="/"><img src="../../img/instagram_footer.svg" alt="" /></a>
                </div>
                <div className="copyright-language">
                    <ul className="language">
                        <li><a href="/">Ua</a></li>
                        <li><a href="/">Ru</a></li>
                    </ul>
                    © BabyBazaar.com.ua, 2019
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;