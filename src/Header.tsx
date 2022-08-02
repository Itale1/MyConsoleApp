import * as React from 'react';
import styles from './header.css';


export function Header() {
    console.log(styles, styles.example);
    return (
        <header>
            <h1 className={styles.example} >A888</h1>
        </header>
    );
}