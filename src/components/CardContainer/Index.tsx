import styles from './CardContainer.module.css';
import FilterBar from '../FilterBar/Index';
import Hero from '../Hero/Index';
import { useContext } from 'react';
import context from '../../context/CardContext';
import Card from '../Card/Index';
import heart_f from '../../images/heart_f.svg';
import heart_n from '../../images/heart_nf.svg';
import ImagemCard from '../ImagemCard/Index';

function CardContainer() {

    const { infoData, src } = useContext(context)
    const infData = infoData.filter((info, index) => index !== 0);
    const srcData = src.filter((info, index) => index !== 0);


    return (

        <div className={styles.container}>
            <Hero />
            <FilterBar />
            <section data-testid='section' className={styles.container_card}>
                {infData.map((info, index) => (
                    <div key={info.id} className={styles.card}>
                        <div className={styles.container_image_card}>
                            <ImagemCard
                                src={srcData[index]}
                            />
                        </div>
                        <Card
                            id={info.id}
                            introducao={info.introducao}
                            link={info.link}
                            titulo={info.titulo}
                            heartChecked={heart_f}
                            heartEmpty={heart_n}
                            formattedDate={info.data_publicacao}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default CardContainer;