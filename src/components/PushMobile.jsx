import * as React from 'react';

const PushMobile = () => {
    return<div className="push-mobile">
      <div className="container">
          <img src="../../img/chat-white.svg" alt="" />
          <p>У Вас 5 новых сообщений</p>
          <a href="/" className="btn-light read-msg">Читать</a>
      </div>
  </div>
}

export default PushMobile;

