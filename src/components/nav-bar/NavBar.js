import styles from './NavBar.module.css'
import strandGlitchLogo from '../../assets/images/Strand_Glitch_Animated.gif'
const NavBar = () => {
    return <div className={styles['nav-container']}>
        <div className={styles['logo']}>
            <img src={strandGlitchLogo} alt={"strand logo"}></img>
        </div>
        <div className={styles['name']}>
            <h1>Offensive Or Not?</h1>
        </div>
    </div>
}

export default NavBar;