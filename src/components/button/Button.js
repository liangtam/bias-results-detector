import axios from "axios";
import {usePhraseContext} from "../../hooks/usePhraseContext";
import {useResultsContext} from "../../hooks/useResultsContext";
import styles from './Button.module.css'

const Button = () => {
    const {phrase} = usePhraseContext()
    const {setData} = useResultsContext()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("file", phrase.image)
        formData.append("phrase", phrase.phrase)
        console.log("Sending ", formData)
        try {
            const response = await axios.post(
                "http://localhost:8000/offensiveness/prediction",
                formData,
                {
                    headers: {
                        'Content-Type': "multipart/form-data"
                    }
                }
            );
            console.log("Successfully called API: ", response)
            setData(response.data.offensiveness_score)
        } catch (err) {
            console.error("API call failed: ", err);
        }
    }

    return (
        <div className={styles["container"]}>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Button;