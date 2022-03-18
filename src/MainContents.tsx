import styles from './MainContents.module.scss'
import Projects from 'components/Projects';
function MainContents() {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["project"]}>
                <h2 className={styles["project-category-name"]}>Projects</h2>
                <div className={styles["personal-project-wrapper"]}>
                    <Projects></Projects>
                </div>
            </div>
        </div>

    );
}

export default MainContents;
