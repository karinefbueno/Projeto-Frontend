import logo from '../../images/logo.svg';
import styles from './header.module.css';

function Header (){
    return (
        <header className={styles.header_container}>
            <div><img className= {styles.logo_trybe}src={logo} alt='logo-trybe' /></div>
            <div  className={styles.title} >
                <h1>Trybe News</h1>
            </div>
        </header>

    )
}

export default Header;