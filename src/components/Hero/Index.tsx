import { useContext } from 'react';
import heart_f from '../../images/heart_f.svg'
import heart_n from '../../images/heart_nf.svg'
import Card from '../Card/Index';
import context from '../../context/CardContext';
import styles from './Hero.module.css'



function Hero() {

    const { infoData, src } = useContext(context)

    return (
        <div className={styles.hero}>
            <div className={styles.container_hero}>
                <img id={styles.hero_1} className={styles.img_hero} src={src[0]} alt="" />
                <div className={styles.container_card_hero}>
                    <div className={styles.card_hero1}>
                        <Card
                            id={infoData[0].id}
                            titulo={infoData[0].titulo}
                            introducao={infoData[0].introducao}
                            link={infoData[0].link}
                            formattedDate={infoData[0].data_publicacao}
                            heartChecked={heart_f}
                            heartEmpty={heart_n}
                        />
                        <h5 className={styles.noticia_recente}>Notícia mais recente</h5>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;