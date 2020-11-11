import * as React from 'react';
import { useContext } from 'react';
import { ContextApp } from '../reducer';
import CounterControl from './CounterControl';
import editbasketImg from '../img/edit-basket.svg';
import closeImg from '../img/close-item.svg';

const PaymentBasket = () => {
    const { state: { itemsCount, basketBlocks = []}, dispatch } = useContext(ContextApp);
    const serviceBlocks = basketBlocks.filter(b => b.id !== "package");
    const packageBlock = basketBlocks.filter(b => b.id === "package")[0];
    const getserviceSum = () => {
        let res = 0;
        for (let c in itemsCount) {
            if(basketBlocks.findIndex(b => b.id === c) >= 0) {
                res += itemsCount[c];
            }
        }
        return res * 10;
    }
    const total = getserviceSum() + (packageBlock ? packageBlock.price : 0);
    const removeBasketBlock = (id) => {
        dispatch({
            type: 'REMOVE_BASKET_BLOCK',
            payload: { id },
        })
    };
    const subtractHandler = (sId, count) => {
        dispatch({
            type: "SUBTRACT_ITEM",
            payload: { key: sId, count: count - 1 },
        })
    }
    const addHandler = (sId, count) => {
        dispatch({
            type: "ADD_ITEM",
            payload: { key: sId, count: count + 1 },
        })
    }
    return <section className="payment_basket">
        <div className="container">
            <div className="backet_container">
                <div className="basket_up">
                    <h1 className="basket_title">Корзина</h1>
                    {/* <a href="basket_edit" className="basket_edit">
                        <img src={editbasketImg} alt="" />
                        <span>Редагувати корзину</span>
                    </a> */}
                </div>
                <form className="basket">
                    {serviceBlocks && serviceBlocks.map(service => {
                        const count = itemsCount[service.id];
                        return <div className="basket_item" key={service.id}>
                            <div className="basket_service">{service.title}</div>
                            <div className="basket_group">
                                {service.id !== "fifty" && <CounterControl 
                                    subtractHandler={() => subtractHandler(service.id, count)} 
                                    addHandler={() => addHandler(service.id, count)}
                                    count={count}
                                />}
                                <div className="price">{`${itemsCount[service.id] * 10}грн`}</div>
                                <button type="button" className="delete" onClick={() => removeBasketBlock(service.id)}>
                                    <img src={closeImg} alt="" />
                                </button>
                            </div>
                        </div>
                    })}
                    {packageBlock && Object.keys(packageBlock).length > 0 && 
                        <div className="basket_item">
                            <div className="basket_service">{packageBlock.title}</div>
                            <div className="basket_group">
                                <div className="price">{`${packageBlock.price}грн`}</div>
                                <button type="button" className="delete" onClick={() => removeBasketBlock(packageBlock.id)}>
                                    <img src={closeImg} alt="" />
                                </button>
                            </div>
                        </div>}
                    <div className="basket_total">
                        <div className="basket_service__total">Всього до сплати</div>
                        <div className="basket_group">
                            <div className="price">{`${total}грн`}</div>
                        </div>
                    </div>
                </form>
            </div>

            {/* <div className="payment_container">
                <h1 className="payment_title">Оберіть спосіб оплати</h1>
                <div className="payment_block">
                    <div className="card_payment">
                        <form className="card_form">
                            <div className="form_title">Введіть реквізити платіжної картки</div>
                            <div className="input_items">
                                <div className="input-label">
                                    <label for="1">Номер платіжної карти*</label>
                                    <input type="text" id="1">
                                </div>
                                <div className="items_bottom">
                                    <div className="input-label">
                                        <label for="21">Термін дії*</label>
                                        <input type="text" id="2">
                                        <span>мм/рр</span>
                                    </div>
                                    <div className="input-label">
                                        <label for="3">CVV*</label>
                                        <input type="text" id="3">
                                        <a href="#">Що це?</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="bank_payment">
                        <img src="../../img/privar-bank.svg" alt="">
                    </div>
                </div>
            </div> */}
        </div>
    </section>
}

export default PaymentBasket;
