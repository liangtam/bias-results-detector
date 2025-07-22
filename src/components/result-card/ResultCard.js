import styles from './ResultCard.module.css'
import {useResultsContext} from "../../hooks/useResultsContext";

const ResultCard = () => {
    const {data} = useResultsContext()

    const round = (num) => {
        return num.toFixed(4) * 100
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>
                {!data &&
                    <h1>Boring...</h1>
                }
                { data &&
                    (() => {
                        const score = round(data.data.offensiveness_score);
                        if (score > 75) {
                            return <h1>#Cancelled</h1>;
                        } else if (score > 50) {
                            return <h2>Suspicious</h2>;
                        } else {
                            return <h2>You're good.</h2>;
                        }
                    })()
                }
            </div>
            <div className={styles["content"]}>
                {data &&
                    <div className={styles["results"]}>
                        <div className={styles["score"]}>
                            <h2>Offensiveness: </h2>
                            <h2 className={styles["score-num"]}>{round(data.data.offensiveness_score)}%</h2>
                        </div>
                        <div className={styles["judgment"]}>
                            {
                                (() => {
                                    const score = round(data.data.offensiveness_score);
                                    if (score > 85) {
                                        return <div>Go to the corner and reflect on yourself. How can you be this rude?</div>;
                                    } else if (score > 75) {
                                        return <div>You seem to be implying something... 😒</div>;
                                    } else {
                                        return <div>Nothing suspicious here. You are dismissed.</div>;
                                    }
                                })()
                            }
                        </div>
                    </div>
                }
                {!data &&
                    <div className={styles["no-data"]}>
                        <p>You're not offensive because you haven't submitted anything.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ResultCard;