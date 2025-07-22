import styles from './InputField.module.css'
import {usePhraseContext} from "../../hooks/usePhraseContext";
const InputField = () => {
    const {phrase, setPhrase} = usePhraseContext()

    const handleChange = (e) => {
        e.preventDefault()
        setPhrase({...phrase, phrase: e.target.value})
    }

    return (
        <div className={styles["container"]}>
            <input type={"text"} value={phrase.phrase} onChange={handleChange}/>
        </div>
    )
}

export default InputField;