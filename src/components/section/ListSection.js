import React from "react";
import styles from "./Section.module.css";

export default class ListSection extends React.Component {
    render() {
        return <section className={styles.section}>
            <h3>{this.props.sectionInfo.header}</h3>
            <article>
                {this.props.sectionInfo.items.map((item, i) => {
                    return <ul>
                        <li>
                            {item.url ? (
                                <a target="_blank" href={item.url}>{item.name}</a>
                            ) : (
                                <p>{item.name}</p>
                            )}
                        </li>
                    </ul>
                })}
            </article>
        </section>
    }
}