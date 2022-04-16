import styles from './Intro.module.scss';
function Intro() {
    return <div className={styles["wrapper"]}>
        <div className={styles["intro"]}>
            프론트엔드 개발자로서 최고의 사용자경험을 제공하는 것을 목표로 하고있습니다.<br />
            사용자의 관점에서 서비스의 불편함을 발견해 이를 개선하는 과정을 즐기며,<br /> 발전하는 서비스에서 보람을 느낍니다.<br />
            <br />매일 개인프로젝트를 수행하며 실습을 통해 프론트엔드 역량을 향상하고 있습니다.
            <br />
            다양한 문제를 고민하고 개선한 저의 경험을 소개합니다.
        </div>
    </div>
}
export default Intro;