import React from "react";
import styles from "./Section.module.css";

export default class TextSection extends React.Component {
    render() {
        return <section className={styles.section}>
            <h3>{this.props.sectionInfo.header}</h3>
            <article>
                {this.props.sectionInfo.paragraphs.map((paragraph, i) => {
                    return <p>{paragraph}</p>
                })}
            </article>
        </section>
    }
}