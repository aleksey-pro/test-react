import * as React from 'react';
import { useReducer } from 'react';
import AvailableServices from './components/PaidServices/AvailableServices';
import PaidServicesSet from './components/PaidServicesSet';
import PaymentBasket from './components/PaymentBasket';
import Layout from './components/Layout';
import {ContextApp, initialState, appReducer} from "./reducer.js";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <Layout>
        <div className="paid-service">
          {/* <BreadCrumbs /> */}
          {/* <PaidBanner /> */}
          <AvailableServices />
          <PaidServicesSet />
          {/* <PaidServicesLinks /> */}
          <PaymentBasket />
          </div>

      </Layout>
    </ContextApp.Provider>
  );
}

export default App;
