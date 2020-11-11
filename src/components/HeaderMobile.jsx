
import * as React from 'react';

const HeaderMobile = () => {
    return <header className="header-mobile">
      {/* <div className="support">
          <div className="container">
              <a target="_blank" href="http://babybazaar.com.ua/beta">Хотите помочь сделать проект лучше?</a>
          </div>
      </div> */}
      <div className="top">
          <div className="container">
              <div className="hamburger hamburger--3dx">
                  <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                  </div>
              </div>
              <a href="/" className="logo">
                  <img src="../../img/logo-mobile.png" alt="" />
              </a>
              <div className="icon-group">
                  <a href="/" className="like"><img src="../../img/heart.svg" alt="" /><span className="sum empty">0</span></a>
                  <a href="/" className="cart"><img src="../../img/cart.svg" alt="" /><span className="sum">7</span></a>
                  <a href="/" className="add"><img src="../../img/add.svg" alt="" /></a>
              </div>
              <div className="user-register">
                  <a href="/" className="avatar"><img src="../../img/user-register.svg" alt="" /></a>
              </div>
          </div>
      </div>
      <div className="bottom">
          <div className="container">
              <div className="search-group">
                  <input className="search" placeholder="Что вы ищите" />
                  <button><img src="../../img/search.svg" alt="" /></button>
              </div>
          </div>
      </div>
  </header>
}

export default HeaderMobile;