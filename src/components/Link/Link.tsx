import * as React from 'react';

import { cn } from '@bem-react/classname';
import './Link.scss';

const cnLink = cn('Link');

export interface ILinkProps {
    url: string;
    target?: string;
    className?: string;
}

export const Link: React.SFC<ILinkProps> = (props) => (
    <a className={cnLink(null, [props.className])} href={props.url} target={props.target}>{props.children}</a>
);