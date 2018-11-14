import {cn} from '@bem-react/classname';
import * as React from 'react';
import './Content.scss';

import {Component} from "react";
import Video from "../Video/Video";


const cnContent = cn("Content");

interface IContent {
    className?: string;
}

const urls: string[] = [
    'http://live-bumtv.cdnvideo.ru/bumtv-live/smil:bumtv.smil/chunklist_b4192000.m3u8',
    'http://highvolume03.streampartner.nl:1935/vleugels_hd4/livestream/playlist.m3u8',
    'http://live-bumtv.cdnvideo.ru/bumtv-live/smil:bumtv.smil/chunklist_b4192000.m3u8',
    'http://highvolume03.streampartner.nl:1935/vleugels_hd4/livestream/playlist.m3u8',
];

class Content extends Component<IContent> {

    public render() {
        const {className} = this.props;
        return (
            <div className={cnContent(null, [className])}>
                <h1 className={cnContent('Title')}>Видеонаблюдение</h1>
                <div className={cnContent('Videos')}>
                    {urls.map((url, idx) => <Video url={url} order={idx+1} key={idx}/>)}
                </div>
            </div>
        )
    }
}

export default Content;
