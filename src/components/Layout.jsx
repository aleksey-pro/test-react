import * as React from 'react';
import PushMobile from './PushMobile';
import HeaderMobile from './HeaderMobile';
import SidebarMobile from './SidebarMobile';
import MobileApp from './MobileApp';

const Layout = ({ children }) => {
    return <>
        <PushMobile />
        <HeaderMobile />
        <SidebarMobile />
        {children}
        <MobileApp />
    </>
}

export default Layout;