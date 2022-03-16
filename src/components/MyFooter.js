
import MiniLinks from "./MiniLinks";
import styles from './MyFooter.module.scss'
function MyFooter(props) {
    return (
        <div className={styles['wrapper']}>
            <MiniLinks />
            <a
                className={styles['mail']}
                href="mailto:iginganza@gmail.com"
            >
                iginganza@gmail.com
            </a>
        </div>
    );
}

export default MyFooter;
