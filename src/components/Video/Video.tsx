import * as React from 'react';

import {cn} from '@bem-react/classname';
import ReactHLS from 'react-hls';

import './Video.scss';

const cnVideo = cn('Video');


interface IVideo {
    order?: number;
    url?: string;
}

const Video: React.SFC<IVideo> = ({order, url}) => (
    <div className={cnVideo(null, [`Video-${order}`])}>
    <ReactHLS url={url}
              width={'100%'}
              height={'100%'}
              className={cnVideo('Video-Content')}
              autoplay={true}
              videoProps={{ muted : true }}/>
    </div>
);

export default Video;

{/*<>*/}
{/*<video className={cnVideo(null, [`Video-${order}`])}*/}
{/*muted={true}*/}
{/*autoPlay={true}*/}
{/*src={url}/>*/}
{/*<canvas className={cnVideo('Canvas', [`Canvas-${order}`])}/>*/}
{/*</>*/}