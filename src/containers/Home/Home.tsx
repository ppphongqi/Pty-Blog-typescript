import * as React from 'react';
import Title from '../../components/common/Title/Title';

import styles from './Home.module.scss';
import svgIcons from '../../assets/images/pty-blog-svg-icons.svg';
import {svgSprite} from '../../constants/constants'

import _classnames from 'classnames';

class Home extends React.Component<{},{}>{
    constructor(props:any){
        super(props);
        this.state = {} ;
    }

    public render(){
        return (
            <main className={styles.pty_blog_home}>
              <Title title="Pty Official Blog"></Title>
              <div className={styles.ad_wrapper}/>

              <div className={styles.home_slogon}> 
                  <div className={_classnames(styles.glitch,'no-user-select')} data-value="HI！ (ง•o•)ง">
                  HI！ (ง•o•)ง
                  </div>

                  <div className={styles.social_media_container}>
                      <div className={styles.up_triangle}/>
                      <p className={_classnames(styles.social_media_motto, 'no-user-select')}>
                      <svg className={_classnames(styles.icon, styles.left_quote)}>
                        <use xlinkHref={`${svgIcons}${svgSprite.leftQuote}`} />
                      </svg>

                      <span className={styles.motto_content}>每天起床第一句，先给自己打个气！</span>

                      <svg className={_classnames(styles.icon, styles.right_quote)}>
                        <use xlinkHref={`${svgIcons}${svgSprite.rightQuote}`} />
                      </svg>

                      </p>
                  </div>


              </div>


            </main>
        )
    }
}

export default Home;