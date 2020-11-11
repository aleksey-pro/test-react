import * as React from 'react';
import { useContext } from 'react';
import { ContextApp } from '../../reducer';
import groupImg from '../../img/group.svg';
import rectangleImg from '../../img/star.svg';
import starImg from '../../img/rectangle.svg';

const ServiceSetItems = (props) => {
    const { state: { basketBlocks }, dispatch } = useContext(ContextApp);
    const handleAddBlock = (id) => {
        const serviceToAdd = props.services
            .filter(service => service.id === id)
            .map(s => ({ id: 'package', title: s.title, price: s.price }))[0];
        dispatch({
            type: 'ADD_BASKET_BLOCK',
            payload: serviceToAdd,
        });
    }
    const activePackages = basketBlocks.findIndex(b => b.id === "package") >= 0;
    return <><div className={`service_items ${activePackages ? "active" : ""}`} >
        <div className="services">
            <div className="service_names">
                Послуга
            </div>
            { props.heads.map(head => (
                <div className="service_name" key={head.className}>                         
                    <div className="icon">
                        <img className={head.className} src={head.image} alt="" />
                    </div>
                    <span className="name">{head.name}</span>
                </div>
            )) }
        </div>
        { props.services.map((service, idx) => {
            const active = basketBlocks.findIndex(b => b.title === service.title) >= 0;
            return <div className={`service ${active ? 'active' : ''}`} key={idx}>
                <div className="service_label">
                    <div className="service_title">
                        <span className="title">{service.title}</span>
                        <span className="label">{service.label}</span>
                    </div>
                    {  service.offers.map((offer, idx) => (
                        <div className="offer_item" key={idx}>
                            <span className="title">{offer.title}</span>
                        </div>
                    )) }
                    <div className="price">{`${service.price}грн`}</div>
                    <button 
                        className="chosen_item" 
                        data-hide-title="В корзині" 
                        disabled={activePackages}
                        onClick={() => handleAddBlock(service.id)}>
                        Придбати набір
                    </button>
                </div>
            </div>
        }) }
        </div>
        <ul className="nav">
            <li className="selected"></li>
            <li></li>
            <li></li>
        </ul>
    </>
}

ServiceSetItems.defaultProps = {
    heads: [
        { className: "group", image: groupImg, name: "Підняття вгору списку" },
        { className: "rectangle", image: rectangleImg, name: "Топ-оголошення в категорії" },
        { className: "star", image: starImg, name: "VIP-оголошення на головній" },
    ],
    services: [
        { id: 1, value: "basic", title: "Базовый", label: "Легко і просто", offers: [
            { title: "----", label: "" },
            { title: "1 товар", label: "3 дні" },
            { title: "1 товар", label: "3 дні" },
        ], price: 25 },
        { id: 2, value: "optimal", title: "Оптимальный", label: "Найбільш популярний", offers: [
            { title: "3 підняття", label: "3 дні" },
            { title: "5 товари", label: "7 дні" },
            { title: "1 товар", label: "3 дні" },
        ], price: 35 },
        { id: 3, value: "premium", title: "Преміум", label: "Максимальна аудиторія", offers: [
            { title: "7 підняття", label: "7 дні" },
            { title: "7 товари", label: "7 дні" },
            { title: "5 товар", label: "3 дні" },
        ], price: 50 },
    ]
}

export default ServiceSetItems;