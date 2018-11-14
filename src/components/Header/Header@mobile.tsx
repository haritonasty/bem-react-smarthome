import {cn} from '@bem-react/classname';
import * as React from 'react';

import {INavItem} from "../../typings/interfaces";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import './Header@mobile.scss';


const cnHeader = cn("Header");


interface IHeaderProps {
    className?: string;
}

interface IHeaderState {
    activeUrl?: string;
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

class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);


        this.state = {
            activeUrl: '#video'
        };

        this.onNavItemChange = this.onNavItemChange.bind(this);

    }

    public render() {
        const {activeUrl} = this.state;

        return (
            <div className={cnHeader(null, [this.props.className])}>
                <div className={cnHeader("Inner")}>
                    <Logo className={cnHeader('Logo')}/>
                    <Nav items={headerNav}
                         className={cnHeader("Nav")}
                         activeItem={activeUrl}
                         HandleClick={this.onNavItemChange}/>
                </div>
            </div>
        )
    }

    protected onNavItemChange(e: Event) {
        const activeUrl = e.target ? (e.target as any).hash : '';
        if  (activeUrl !== '' && this.state.activeUrl !== activeUrl) {
            this.setState({activeUrl});
        }
    }
}

export default Header;
