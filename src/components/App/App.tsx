import {cn} from '@bem-react/classname';
import * as React from 'react';
import './App.scss';

import Content from "../Content/Content";
import Footer from "../Footer/Footer";

import {RegistryConsumer} from "@bem-react/di";
// import Header from "../Header/Header";


const cnApp = cn("Page");


const App: React.SFC = () => (
    <RegistryConsumer>
        {registries => {
            const registry = registries[cnApp()];
            const Header = registry.get(cnApp('Header'));
            return (
                <div className={cnApp()}>
                    <Header/>
                    <Content className={cnApp("Content")}/>
                    <Footer className={cnApp("Footer")}/>
                </div>
            )
        }}
    </RegistryConsumer>
);

export default App;
