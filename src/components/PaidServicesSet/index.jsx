import * as React from 'react';
import ServiceSetItems from './ServiceSetItems';

const PaidServicesSet = () => {
    return <section className="paid-services_set">
        <div className="container">
            <div className="services_set__container">
                <h1 className="services_title">Набори послуг</h1>
                <span className="services_label">
                    Будьте помітніші і отримайте більше відгуків за допомогою рекламних пакетів
                </span>
                <ServiceSetItems />
                <div className="arrow prev">
                    <img src="slider_left.svg" alt="" />
                </div>
                <div className="arrow next">
                    <img src="slider_right.svg" alt="" />
                </div>
            </div>            
        </div>
    </section>
}

export default PaidServicesSet;