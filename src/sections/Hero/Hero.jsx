import styles from './HeroStyles.module.css';
import lauraAvatar from '../../assets/laura_avatar.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img
                className={styles.hero}
                src={lauraAvatar}
                alt="Profile picture"
            />
            <img
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>Laura<br />Hwa</h1>
            <h2>Creator, Data Scientist</h2>
            <span>
                <a href="https://github.com/" target="lauraahwa">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://linkedin.com/in/" target="laurahwa">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p>
                I'm curious about how tech affects the way humans respond to the world <br></br>
                and how data-driven insights can power changes in human behavior.
            </p>

        </div>
    </section>)
}

export default Hero
