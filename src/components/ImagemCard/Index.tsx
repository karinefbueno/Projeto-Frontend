
import { PropImagem } from '../../type';
import styles from '../ImagemCard/ImagemCard.module.css'
    


function ImagemCard ({src}:PropImagem){

   return(
    <img className={styles.card_img} src={src} alt="favorite" />  
    )
}

export default ImagemCard;