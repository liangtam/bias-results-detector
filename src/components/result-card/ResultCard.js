import styles from './ResultCard.module.css'
import {useResultsContext} from "../../hooks/useResultsContext";

const ResultCard = () => {
    const {data} = useResultsContext()

    return (
        <div className={styles["container"]}>
            <h1>Results</h1>
            {data &&
                <div className={styles["results"]}>
                    {data}
                </div>
            }
        </div>
    )
}

export default ResultCard;