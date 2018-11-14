import * as React from 'react';

import {cn} from '@bem-react/classname';
import './Nav.scss';

import {INavItem} from "../../typings/interfaces";
import {Link} from "../Link/Link";


const cnNav = cn("Nav");


interface INav {
    className?: string;
    items: INavItem[];
    activeItem?: string
}



const Nav: React.SFC<INav> = ({className, items, activeItem}) => (
    <nav className={cnNav(null, [className])}>
        <ul className={cnNav("Items")}>
            {items.map((item: INavItem, idx: number) =>
                <li className={cnNav("Item", {active: activeItem === item.url})} key={idx}>
                    <Link url={item.url} target={item.target}>{item.content}</Link>
                </li>
            )}
        </ul>
    </nav>
);
export default Nav;
