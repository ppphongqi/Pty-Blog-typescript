import React , {Component} from 'react';
import '@assets/styles/global.scss';
import _classnames from 'classnames';
import {Router} from 'react-router-dom';

import history from '../history';
import { devToolsWarning } from '../tools/tools'

import AutoBackToTop from '../components/common/AutoBackToTop/AutoBackToTop';

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
                    > Welcome Back! </div>
                </AutoBackToTop>
            </Router>
        )
    }
}

export default Layouts ; 