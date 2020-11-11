import * as React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tabs/Tab';

import Propagation from './ServiceDescriptions/Propagation';
import Top from './ServiceDescriptions/Top';
import Vip from './ServiceDescriptions/Vip';
import Fifty from './ServiceDescriptions/Fifty';

const AvailableServices = () => {
    return <section className="paid-services_available">
        <div className="container">
            <div className="services_available__container">
                <h1 className="title">Вам доступні такі послуги:</h1>
                <div className="services_available">
                    <Tabs activeTab={0} >
                        <Tab label='Підняття' id="tab1">
                            <Propagation />
                        </Tab>
                        <Tab label='ТОП' id="tab2">
                            <Top />
                        </Tab>
                        <Tab label='VIP' id="tab3">
                            <Vip />
                        </Tab>
                        <Tab label='+50' id="tab4">
                            <Fifty />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
}

export default AvailableServices;