import styles from './Card.module.css';
import ButtonLeia from '../ButtonLeia/Index';
import { useContext, useState } from 'react';
import context from '../../context/CardContext';
import { CardProps, TypeInfoData } from '../../type';
import { functionDate } from '../../utils/functionDate';


function Card({ id, titulo, introducao, formattedDate, link, heartChecked, heartEmpty }: CardProps) {

  const { infoData } = useContext(context)
  const [checked, setChecked] = useState(false)

  const handleLike = (noticeId: number) => {
    const notice = infoData.find(({ id }) => id === noticeId);
    let favorited = JSON.parse(localStorage.getItem('favoriteNotices') || '[]');

    if (notice) {
      const isFavorited = favorited.some((idFav: TypeInfoData) => idFav.id === notice.id);

      if (isFavorited) {
        favorited = favorited.filter((idFav: TypeInfoData) => idFav.id !== notice.id);
        setChecked(false)
      } else {
        favorited = [...favorited, notice];
        setChecked(true);
      }

      localStorage.setItem('favoriteNotices', JSON.stringify(favorited));
    }
    return favorited;
  };

  return (
    <>
      <div>
        <a className={styles.link_not} href={link}>
          <h1 data-testid={`notice-title`} className={styles.title}>{titulo}</h1>
        </a>
        <p data-testid={'notice'} className={styles.subtitle}>{introducao}</p>
      </div>
      <div className={styles.container_but}>
        <div data-testid={`date`} className={styles.data}>{functionDate(formattedDate)}</div>
        <ButtonLeia link={link} />
      </div>
      <div className={styles.favorite}>
        <button data-testid={`favorite-button`} onClick={() => handleLike(id)}
          className={styles.img_heart}>{checked
            ? <img src={heartChecked} alt="favorite" /> : <img src={heartEmpty} alt="No favorite" />
          }</button>
      </div>
    </>

  )
}

export default Card;