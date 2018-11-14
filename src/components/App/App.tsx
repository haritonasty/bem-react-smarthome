import {cn} from '@bem-react/classname';
import * as React from 'react';
import './App.scss';

import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const cnApp = cn("Page");


const App: React.SFC = () => (
    <div className={cnApp()}>
        <Header className={cnApp("Header")}/>
        <Content  className={cnApp("Content")}/>
        <Footer  className={cnApp("Footer")}/>
    </div>
);

export default App;
