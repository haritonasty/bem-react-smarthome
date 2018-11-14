import * as React from 'react';
import {Link} from "../../Link/Link";

import './NavItem.scss';
interface INavItem{
    className?: string;
    active?: boolean
    HandleClick?: any
    url: string,
    content: any;
}


export const NavItem: React.SFC<INavItem> = ({className, active, HandleClick, url, content}) => (
    <li className={className} onClick={HandleClick}>
        <Link url={url}>{content}</Link>
    </li>
);

