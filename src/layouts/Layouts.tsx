import React , {Component} from 'react';
import '@assets/styles/global.scss';
import _classnames from 'classnames';
import {Router} from 'react-router-dom';

import history from '../history';
import { devToolsWarning } from '../tools/tools'

import AutoBackToTop from '../components/common/AutoBackToTop/AutoBackToTop';
import Header from '../components/common/Header/Header';
import ScrollToTop from '../components/Widget/ScrollToTop/ScrollToTop';

class Layouts extends Component{


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
                    </div>
                    <ScrollToTop />
                </AutoBackToTop>
            </Router>
        )
    }
}

export default Layouts ; 