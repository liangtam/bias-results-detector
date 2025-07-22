import {useDropzone} from "react-dropzone";
import styles from "./ImageUploadCard.module.css"
import {useState} from "react";
import axios from "axios";
import {usePhraseContext} from "../../hooks/usePhraseContext";
import {useResultsContext} from "../../hooks/useResultsContext";

const ImageUploadCard = ({handleResponse}) => {
    const [imagePreview, setImagePreview] = useState(null)
    const {phrase, setPhrase} = usePhraseContext()

    const handleDrop = (files) => {
        const file = files[0]
        if (!file) {
            console.log("No file")
            return;
        }
        const objUrl = URL.createObjectURL(file)
        setImagePreview(objUrl)

        setPhrase({
            ...phrase, image: file
        })
    }

    const {getInputProps, getRootProps, isDragActive} = useDropzone({onDrop: handleDrop})

    return (
        <div {...getRootProps()} className={styles["container"]}>
            <input {...getInputProps()}/>
            {isDragActive ? (
                <p className={styles["drop-image"]}>Drop your image</p>
            ): (
                <p className={styles["add-image"]}>Select or Drop image</p>
            )}
            {imagePreview && <div className={styles["preview"]}>
                <img src={imagePreview}/>
            </div>}
        </div>
    )
}

export default ImageUploadCard;