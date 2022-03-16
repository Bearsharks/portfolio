import styles from './MainContents.module.scss'
import ProjectList from 'components/ProjectList'
import ExternLinkBtn from 'components/ExternLinkBtn';
import imlogo from 'images/imlogo.png'
import imshow1 from 'images/imageMosaicShow1.gif'
import imshow2 from 'images/imageMosaicShow2.gif'
import Projects from 'components/Projects';
function MainContents() {
    const personalList = [{
        logo: (<img style={{ borderRadius: "50%", width: "100%", height: "100%" }} src={imlogo} alt={"mosaic logo"} />),
        info: {
            name: "이미지 모자이크",
            periord: "2021.5 ~ ",
            organization: "개인프로젝트",
            link: "https://bearsharks.github.io/99-interactions"
        },
        summary: ["웹상에서 검색된 여러 이미지로 사진모자이크를", "실시간으로 생성하는 웹앱입니다."],
        tech: ["React", "HTML5 CANVAS", "WebWorker", "Bing image Search API", "Azure Functions"],
        detail: (
            <div>
                <ul>
                    <h3>특징</h3>
                    <li>수 만개의 이미지 조각들로 사진모자이크를 동적으로 생성합니다.</li>
                    <img className={styles["list-image"]} src={imshow1} alt="이미지 모자이크 보여주기"></img>
                    <li>캐싱, WebWorker를 이용한 병렬처리로 저사양 기기에서도 빠르게 이미지를 처리합니다.</li>
                    <img className={styles["list-image"]} src={imshow2} alt="이미지 모자이크 보여주기"></img>
                    <li>사용자는 스크롤, 드래그, 클릭 등 직관적 동작으로 사진모자이크와 인터랙션 할 수 있습니다.</li>
                    <li>핀치 줌 등의 모바일 인터랙션도 지원하여 다양한 디바이스에서 동일한 UX를 제공합니다.</li>
                    <ExternLinkBtn
                        link="https://github.com/bearsharks/99-interactions"
                        openNewTab={true}
                    >
                        깃허브 링크
                    </ExternLinkBtn>
                </ul>
            </div>

        )
    }, {
        logo: (
            <div className={styles["portfolio-logo"]}>
                <div className={styles["portfolio-logo__wc"]}>Write code for</div>
                <div className={styles["portfolio-logo__hu"]}>Humans!</div>
            </div>
        ),
        info: {
            name: "웹 포트폴리오",
            periord: "2021.6 ~ ",
            organization: "개인프로젝트",
            link: "https://bearsharks.github.io/portfolio"
        },
        summary: ["웹 포트폴리오입니다."],
        tech: ["React", "SCSS", "ReCaptcha v3", "Google OAuth2", "Azure Functions"],
        detail: (
            <ul style={{
                listStyle: "disc"
            }}>
                <h3>특징</h3>
                <li>리액트를 활용한 컴포넌트기반 웹 포트폴리오입니다.</li>
                <li>자바스크립트로 구현한 여러가지 인터액션요소들로 구성되어 있습니다.</li>
                <li>반응형 디자인과 크로스브라우징을 적용하여 다양한 환경에서 동일한 UX를 제공합니다. </li>
                <li>GitHub Pages로 호스팅하고 있습니다.</li>
                <ExternLinkBtn
                    link="https://github.com/bearsharks/portfolio"
                    openNewTab={true}
                >
                    깃허브 링크
                </ExternLinkBtn>
            </ul>
        )
    }];
    return (
        <div className={styles["wrapper"]}>
            <h3>Projects</h3>
            <div className={styles["personal-project-wrapper"]}>
                <Projects></Projects>
                <ul className={styles["project-lists"]}>
                    <h2 className={styles["project-category-name"]}>Side Projects</h2>
                    {
                        personalList.map((el, index) => {
                            return (
                                <ProjectList
                                    key={index}
                                    logo={el.logo}
                                    info={el.info}
                                    summary={el.summary}
                                    tech={el.tech}
                                    detail={el.detail}
                                >
                                </ProjectList>
                            )
                        })
                    }
                </ul>
            </div>

            <h1 className={styles["project__header1"]}>

            </h1>

            <h2 className={styles["project__header2"]}>
                안녕하세요.
                <br />
                조성빈입니다
                <br />
                프론트엔드 개발자로서 최고의 사용자경험을 제공하는 것을 목표로 하고있습니다.
                <br />
                사용자의 입장에서 서비스를 바라보고 불편함을 발견하면 하나씩 개선하는 과정을 즐기며,
                <br />
                발전하는 서비스를 보며 보람을 느낍니다.
                <br />
                매일 개인프로젝트를 하면서 실습을 통해 더 나은 개발자가 되고자 합니다.
                <br />
                아래에서 다양한 문제를 고민하고 개선한 경험들을 소개합니다!
            </h2>
        </div>
    );
}

export default MainContents;
