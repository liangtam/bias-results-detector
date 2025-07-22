import styles from './PhraseCard.module.css'
import InputField from "../input-field/InputField";
import {useState} from "react";

const PhraseCard = () => {
    const [phrase, setPhrase] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setPhrase(e.target.value)
    }
    // console.log(phrase)
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <h2>Type your phrase</h2>
            </div>
            <div className={styles["field"]}>
                <InputField value={phrase} handleChange={handleChange}/>
            </div>
        </div>
    )
}

export default PhraseCard;