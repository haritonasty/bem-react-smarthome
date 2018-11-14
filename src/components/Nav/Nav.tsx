import * as React from 'react';

import {cn} from '@bem-react/classname';
import './Nav.scss';

import {INavItem} from "../../typings/interfaces";

import {NavItem} from "./NavItem";


const cnNav = cn("Nav");


interface INav {
    className?: string;
    items: INavItem[];
    activeItem?: string
    HandleClick?: any
}

const Nav: React.SFC<INav> = ({className, items, activeItem, HandleClick}) => (
    <nav className={cnNav(null, [className])}>
        <ul className={cnNav("Items")}>
            {items.map((item: INavItem, idx: number) =>
                <NavItem className={cnNav("Item")}
                key={idx}
                HandleClick={HandleClick}
                active={activeItem === item.url}
                url={item.url}
                content={item.content}/>
            )}
        </ul>
    </nav>
);
export default Nav;