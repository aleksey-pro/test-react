import * as React from 'react';
import { useContext } from 'react';
import { ContextApp } from '../../../reducer';
import upliftImg from '../../../img/uplift.svg';
import groupImg from '../../../img/group.svg';

const Fifty = ({ sId = "fifty" }) => {
    const { state: { basketBlocks }, dispatch } = useContext(ContextApp);
    const handleAddBlock = () => {
        dispatch({
            type: 'ADD_BASKET_BLOCK',
            payload: { id: sId, title: "+50", price: 50 },
        });
    }
    return <div className="service_items__discription">
        <div className="icon">
            <img src={groupImg} alt="" />
        </div>
        <div className="discription_text">
            <div className="text">
                +50 — в результатах поиска объявление показывается выше объявлений, для которых поднятие не включено.
                Поднятые объявления выглядят, как обычные, просто показываются первыми в результатах поисковой выдачи.
            </div> 
            <div className="block_counter">
                <div className="discription_changed" style={{ marginLeft: 0 }}>
                    <input 
                        type="checkbox" 
                        id="1" 
                        className="js_checkbox" 
                        onChange={handleAddBlock} 
                        disabled={basketBlocks.findIndex(b => b.id === sId) >= 0}/>
                    <label htmlFor="1" className="changed" data-hide-title="В корзині">Придбати</label>
                </div>
            </div>
        </div>
        <div className="img_banner">
            <img src={upliftImg} alt="" />
        </div>
    </div>
}

export default Fifty;
