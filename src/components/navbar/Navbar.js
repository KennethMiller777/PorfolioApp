import React from "react";
import styles from './Navbar.module.css'

export default class Navbar extends React.Component {
    render() {
        return <nav className={styles.navbar}>
        <ul className={styles.navlist}>
            {this.props.sections.map((section, i) => {
                return <li  className={styles.navitem}>
                    <a href={'#' + section.id}>{section.header}</a>
                </li>
            })}

            <li className={styles.navitem}><a href="#contact">Contact Me</a></li>
        </ul>
    </nav>
    }
}