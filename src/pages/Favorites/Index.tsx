import { useContext } from "react";
import context from '../../context/CardContext'
import Card from "../../components/Card/Index";
import styles from '../Favorites/Favorites.module.css'
import heart_f from '../../images/heart_f.svg';
import heart_n from '../../images/heart_nf.svg';
import { useFavorites } from "../../utils/useFavorites";
import { useNavigate } from "react-router-dom";


function Favorites() {

    useFavorites()
    const navigate = useNavigate()
    const { favorite } = useContext(context)

    return (
        <>
            <div className={styles.container_favorite}>
                <button onClick={() => navigate('/')}>Página Inicial</button>
            </div>
            <h1 className={styles.title_favorites}>Minhas Notícias Favoritas</h1>
            <section data-testid='section_favorites' className={styles.container_card}>
                {favorite.map((info) => (
                    <div key={info.id} className={styles.card}>
                        <div className={styles.container_image_card}>
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
        </>

    )

}

export default Favorites;