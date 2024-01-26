import styles from './ButtonLeia.module.css'
import { PropsButton } from '../../type';



function ButtonLeia ({link}:PropsButton) {

      
    return (
        <a href={link} target='_blank'>
            <button className={styles.ButtonLeia}>
                Leia a notícia aqui
            </button></a>
    )
}


export default ButtonLeia;