import * as React from 'react';

import { cn } from '@bem-react/classname';

import './Logo.scss';
import logo from './Logo.svg';

const cnLogo = cn('Logo');

interface ILogo {
    className?: string;
}

const Logo: React.SFC<ILogo> = ({className}) => (
    <a className={cnLogo(null, [className])}>
        <img src={logo} alt="ЯндексДОМ" className={cnLogo("Img")}/>
    </a>
);

export default Logo;