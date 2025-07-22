import styles from './Home.module.css'
import ImageUploadCard from "../../components/image-upload-card/ImageUploadCard";
import PhraseCard from "../../components/phrase-card/PhraseCard";
import ResultCard from "../../components/result-card/ResultCard";
import Button from "../../components/button/Button";

const Home = () => {
    return <div className={styles["container"]}>
        <div className={styles["left"]}>
            <div className={styles["phrase-card"]}>
                <PhraseCard/>
            </div>
            <div className={styles["image-card"]}>
                <ImageUploadCard/>
            </div>
            <div className={styles["btn"]}>
                <Button/>
            </div>
        </div>
        <div className={styles["right"]}>
            <ResultCard/>
        </div>

    </div>
}

export default Home;