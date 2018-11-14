import {cn} from '@bem-react/classname';
import * as React from 'react';

import Logo from "../Logo/Logo";

import './Header@mobile.scss';


const cnHeader = cn("Header");


interface IHeaderProps {
    className?: string;
}


class Header extends React.PureComponent<IHeaderProps> {
    constructor(props: IHeaderProps) {
        super(props);

    }

    public render() {

        return (
            <div className={cnHeader(null, [this.props.className])}>
                <div className={cnHeader("Inner")}>
                    <Logo className={cnHeader('Logo')}/>
                    <button className={cnHeader('BurgerMenu')} type="button">
                        <span className="visually-hidden">Открыть меню</span>
                    </button>
                </div>
            </div>
        )
    }


}

export default Header;
