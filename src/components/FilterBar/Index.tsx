import styles from './FilterBar.module.css'
import context from '../../context/CardContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function FilterBar() {

  const navigate = useNavigate();

  const { infoData } = useContext(context)

  return (
    <div className={styles.container_nav}>
      <nav className={styles.menu_nav}>
        <a href={infoData[0].link}><button className={styles.recentes}>Mais Recente</button></a>
        <button className={styles.favorite} onClick={() => navigate('/favorites')}>Favoritas</button>
      </nav>
    </div>
  )

}
export default FilterBar;