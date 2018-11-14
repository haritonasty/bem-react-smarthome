import {cn} from '@bem-react/classname';
import * as React from 'react';

import {INavItem} from "../../typings/interfaces";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import './Header.scss';


const cnHeader = cn("Header");


interface IHeader {
    className?: string;
}

const headerNav: INavItem[] = [
    {
        content: 'События',
        url: '#events'
    },
    {
        content: 'Видеонаблюдение',
        url: '#video'
    },
    {
        content: 'Сводка',
        url: '#svodka'
    },
    {
        content: 'Устройства',
        url: '#devices'
    },
    {
        content: 'Сценарии',
        url: '#scenarios'
    },
];

const Header: React.SFC<IHeader> = ({className}) => (
    <div className={cnHeader(null, [className])}>
        <div className={cnHeader("Inner")}>
            <Logo className={cnHeader('Logo')}/>
            <Nav items={headerNav}
                 className={cnHeader("Nav")}
                 activeItem={'#video'}/>
        </div>
    </div>
);
export default Header;
