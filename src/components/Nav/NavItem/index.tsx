import { compose, IClassNameProps } from "@bem-react/core";

import {NavItem as Base} from "./NavItem";

import { NavItemActive } from "./_active/NavItemActive";

import { ILinkProps } from "../../Link/Link";

export interface INavItem extends ILinkProps, IClassNameProps {
    className?: string;
    active?: boolean
    HandleClick?: any
    url: string,
    content: any,
}


export const NavItem = compose(NavItemActive)(Base);