import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';

import MobileDetect from 'mobile-detect';

const isMobile = new MobileDetect(window.navigator.userAgent).mobile();

if (isMobile) {
    import("./components/App/App@mobile").then(({AppMobile}) => {
        ReactDOM.render(<AppMobile/>, document.getElementById("root"));
    });
} else {
    import("./components/App/App@desktop").then(({AppDesktop}) => {
        ReactDOM.render(<AppDesktop/>, document.getElementById("root"));
    });
}