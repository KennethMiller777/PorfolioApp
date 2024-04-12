import React from "react";
import styles from "./Section.module.css";

export default class HistorySection extends React.Component {
    render() {
        return <section className={styles.section}>
            <h3>{this.props.sectionInfo.header}</h3>
                {this.props.sectionInfo.orgs.map((org, i) => {
                    return <article>
                        <h4>
                            {org.name + " "} 
                            <small><small><em>
                                {org.dates}
                            </em></small></small>
                        </h4>
                        {org.positions.map((position, i) => {
                            return <>
                                <h5>
                                    {position.title + " "} 
                                    <small><small><em>
                                        {position.dates}
                                    </em></small></small>
                                </h5>
                                <p>{position.description}</p>
                            </>
                        })}
                    </article>
                })}
        </section>
    }
}