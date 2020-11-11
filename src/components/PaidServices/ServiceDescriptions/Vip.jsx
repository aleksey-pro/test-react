import * as React from 'react';
import { useContext } from 'react';
import { ContextApp } from '../../../reducer';
import CounterControl from '../../CounterControl';
import upliftImg from '../../../img/uplift.svg';
import groupImg from '../../../img/group.svg';
import useCounter from '../../../hooks/useCounter';

const Vip = ({ sId = "vip" }) => {
    const { state: { itemsCount, basketBlocks }, dispatch } = useContext(ContextApp);
    const count = itemsCount[sId];
    const { subtractHandler, addHandler } = useCounter(sId, count);
    const handleAddBlock = () => {
        dispatch({
            type: 'ADD_BASKET_BLOCK',
            payload: { id: sId, title: "Vip", price: count * 10 },
        });
    }
    return <div className="service_items__discription">
        <div className="icon">
            <img src={groupImg} alt="" />
        </div>
        <div className="discription_text">
            <div className="text">
                VIP — в результатах поиска объявление показывается выше объявлений, для которых поднятие не включено.
                Поднятые объявления выглядят, как обычные, просто показываются первыми в результатах поисковой выдачи.
            </div>  
            <div className="block_counter">
                <CounterControl subtractHandler={subtractHandler} addHandler={addHandler} count={count}/>
                <div className="price">{count * 10} грн</div>
                <div className="discription_changed">
                    <input 
                        type="checkbox" 
                        id="1" 
                        className="js_checkbox" 
                        onChange={handleAddBlock} disabled={basketBlocks.findIndex(b => b.id === sId) >= 0}/>
                    <label htmlFor="1" className="changed" data-hide-title="В корзині">Придбати</label>
                </div>
            </div>
        </div>
        <div className="img_banner">
            <img src={upliftImg} alt="" />
        </div>
    </div>
}

export default Vip;

