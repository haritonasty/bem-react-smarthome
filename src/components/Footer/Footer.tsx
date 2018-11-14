import {cn} from '@bem-react/classname';
import * as React from 'react';

import {INavItem} from "../../typings/interfaces";
import Nav from "../Nav/Nav";

import './Footer.scss';

const cnFooter = cn("Footer");


interface IFooter {
    className?: string;
}

const footerNav: INavItem[] = [
    {
        content: 'Помощь',
        url: '#help'
    },
    {
        content: 'Обратная связь',
        url: '#write-us'
    },
    {
        content: 'Разработчикам',
        url: '#developers'
    },
    {
        content: 'Условия использования',
        url: '#rules'
    },
    {
        content: 'Лицензия',
        target: '_blank',
        url: 'https://docviewer.yandex.ru/view/1130000031416102/?*=q9n3dTgayaA3Vk%2Br%2BG2IAejdiVt7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxMDIiLCJ5dSI6Ijg4NzU0ODk3MDE1MzUyODIzMjkiLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4OTE0MTM4Njg3fQ%3D%3D">'
    },
];

const Footer: React.SFC<IFooter> = ({className}) => (
    <div className={cnFooter(null, [className])}>
            <Nav items={footerNav} className={cnFooter("Nav")}/>
            <div className={cnFooter('Copyright')}><span>© 2001–2017  ООО «Яндекс»</span></div>
    </div>
);
export default Footer;
