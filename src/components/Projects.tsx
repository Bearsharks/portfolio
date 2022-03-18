import styles from 'components/Projects.module.scss';
import { ModalKind, ModalKindState } from 'popups/ModalState';
import { useSetRecoilState } from 'recoil';
function Projects() {
    const setModalKind = useSetRecoilState(ModalKindState);
    //todo grid
    //popup
    //popup내용채우기
    return <div className={styles["grid-container"]}>
        <div className={styles["grid-item"]} onClick={() => setModalKind(ModalKind.SMP)}>
            <img src="/portfolio/smpPlaylist.png" alt="간단 뮤직 플레이어"></img>
            <div className={styles["content-name"]}>Simple music player</div>
        </div>
        <div className={styles["grid-item"]} onClick={() => setModalKind(ModalKind.MOSAIC)}>
            <img src="/portfolio/imageMosaicShow2.gif" alt="이미지 모자이크"></img>
            <div className={styles["content-name"]}>Image Mosaic</div>
        </div>
    </div>
}

export default Projects;