import React , {Component} from 'react';
// import { observer, inject } from 'mobx-react';
import '@assets/styles/global.scss';
import _classnames from 'classnames';
import {Router} from 'react-router-dom';

import history from '../history';
import { devToolsWarning } from '../tools/tools'

import AutoBackToTop from '../components/common/AutoBackToTop/AutoBackToTop';
import Header from '../components/common/Header/Header';
import Routers from '../Routers';
import ScrollToTop from '../components/Widget/ScrollToTop/ScrollToTop';
// import Loading from '../components/common/Loading/Loading';

// import { LayoutProps } from '../types/layouts';

// import stores from '../stores/index';


// @inject('layoutStore')
// @observer
class Layouts extends Component<{},{}> {


    constructor(props : any ) {
        super( props);
        this.state={};
    }

    public UNSAFE_componentWillMount(){
        devToolsWarning();
    }

    public render() {
        const isGray = false ; 
        return (
            <Router history={history}> 
                <AutoBackToTop>
                    <div className={_classnames(
                        isGray ? 'full_site_gray' : '', 'content' )}
                    >
                        <Header />
                        <Routers />
                        <div>咋回事啊,小老弟</div>
                    </div>
                    <ScrollToTop />
                </AutoBackToTop>
            </Router>
        )
    }
}

export default Layouts ; 