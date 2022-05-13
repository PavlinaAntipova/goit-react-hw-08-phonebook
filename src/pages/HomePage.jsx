import React from 'react';

import WelcomeIcon from '../img/illo.svg';
import BubbleIcon from '../img/bubble.svg';

import s from './pages.module.css';

export default function HomePage() {
    return (
        <div className={s.Home}>
            <div className={s.titleBox}>
                <h1 className={s.title}><span className={s.titleSpan}>My</span> Contacts</h1>
                <img className={s.titleIcon} width="205" height="140" src={BubbleIcon} alt="bubble"/>
            </div>
            <img width="600" height="300" src={WelcomeIcon} alt="illustration"/>
        
        </div>
    )


}
