import React from "react";
import styles from './ContactMe.module.css'

export default class ContactMe extends React.Component {
    render() {
        return <section id="contact">
            <h4 className={styles.contactinfo}>Contact Info</h4>

            <ul className={styles.contactlist}>
                <li>
                    <a className={styles.contactitem} href={"mailto:" + this.props.contactInfo.emailAddress}>
                        <i class="fa-solid fa-envelope"></i> {this.props.contactInfo.emailAddress}
                    </a>
                </li>
                <li>
                    <a className={styles.contactitem}>
                        <i class="fa-solid fa-phone"></i> {this.props.contactInfo.phoneNumber}
                    </a>
                </li>
                <li>
                    <a className={styles.contactitem} target="_blank" href={this.props.contactInfo.linkedInURL}>
                        <i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn
                    </a>
                </li>
            </ul>
        </section>
    }
}
