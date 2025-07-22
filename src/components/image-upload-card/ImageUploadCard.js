import {useDropzone} from "react-dropzone";
import styles from "./ImageUploadCard.module.css"
import {useState} from "react";
import {usePhraseContext} from "../../hooks/usePhraseContext";
import imgIcon from '../../assets/images/icons8-picture-256.png'

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
                <div className={styles["drop-image"]}>
                    Drop your image
                    {!imagePreview && <img src={imgIcon}/>}
                </div>
            ): (
                <div className={styles["add-image"]}>
                    Select or Drop image
                    {!imagePreview && <img src={imgIcon}/>}
                </div>
            )}
            {imagePreview && <div className={styles["preview"]}>
                <img src={imagePreview}/>
            </div>}
        </div>
    )
}

export default ImageUploadCard;