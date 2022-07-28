import * as React from 'react';
import styles from './header.less';


export function Header() {
    console.log(styles, styles.example);
    return (
        <header>
            <h1 className={styles.example} >A5</h1>
        </header>
    );
}