import styles from './Projects.module.scss'
import ProjectList from './components/ProjectList'
import LinkBtn from './components/LinkBtn';
import imlogo from './im로고.png'
function Projects() {
    const careerList = [{
        logo: (
            <p>
                <div className={styles["sl_subtitle01"]}>업무포털시스템</div>
                <span className={styles["sl_subtitle02"]}>Smart</span>
                <span className={styles["sl_subtitle03"]}>Portal</span>
            </p>
        ),
        info: {
            name: "Smartportal",
            periord: `2019.9 ~ 2020.8`,
            organization: `나눔기술`,
            link: 'http://www.nanum.co.kr/?page_id=165'
        },
        summary: [`그룹웨어 서비스와 사용자를 연결하는 포탈 서비스`],
        tech: [`Jquery, JSP, Spring, Oracle`],
        detail: (
            <ol>
                <li>4개 고객사 포탈 시스템 개발 및 유지보수</li>
                <li>SPA 히스토리, 사용자 정의 게시판 등 각종 기능 개발</li>
                <li>요구분석, 서버 요청 최소화로 초기응답시간 개선, 직관적동작을 통한 UX개선</li>
            </ol>
        )
    }, {
        logo: (
            <p>
                <div className={styles["sl_subtitle01"]}>문서관리시스템</div>
                <span className={styles["sl_subtitle02"]}>Smart</span>
                <span className={styles["sl_subtitle03"]}>EDMS</span>
            </p>
        ),
        info: {
            name: `SmartEDMS`,
            periord: `2020.3 ~ 2020.8`,
            organization: `나눔기술`,
            link: 'http://www.nanum.co.kr/?page_id=166'
        },
        summary: [
            `조직 내 문서를 체계적으로 관리하는 문서관리 시스템`],
        tech: [`Jquery, Servlet, Oracle`],
        detail: (
            <ol>
                <li>구형브라우저(IE)에 맞춰진 시스템을 최신 브라우저를 지원하도록 크로스브라우징 작업</li>
                <li>파일관리, XML파싱 폴리필 작성</li>
                <li>웹표준에 맞춘 개발 및 UX개선</li>
            </ol>
        )
    }];

    const personalList = [{
        logo: (<img style={{ borderRadius: `50%` }} src={imlogo} />),
        info: {
            name: `이미지 모자이크`,
            periord: `2021.5 ~ `,
            organization: `개인프로젝트`,
            link: "https://bearsharks.github.io/99-interactions"
        },
        summary: [`웹상에서 검색된 여러 이미지로 이미지모자이크를`, `실시간으로 생성하는 웹앱입니다.`],
        tech: [`React`, `HTML5 CANVAS`, `Bing image Search API`, `Azure Functions`],
        detail: (
            <div>
                <ul style={{
                    listStyle: `disc`
                }}>
                    <h3>특징</h3>
                    <li>수 만개의 이미지 조각들로 사진모자이크를 동적으로 생성합니다.</li>
                    <li>캐싱, WebWorker를 이용한 병렬처리로 저사양 기기에서도 빠르게 이미지를 처리합니다.</li>
                    <li>사용자는 이미지모자이크와 직관적으로 인터랙션하여 원하는 대로 살펴 볼 수 있습니다.</li>
                    <li>핀치 줌 등의 모바일 인터랙션을 지원하여 다양한 디바이스에서 동일한 UX를 제공합니다.</li>
                    <a
                        href="https://github.com/bearsharks/99-interactions"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        깃허브 링크
                    </a>
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
            name: `웹 포트폴리오`,
            periord: `2021.6 ~ `,
            organization: `개인프로젝트`,
            link: "https://bearsharks.github.io/portfolio"
        },
        summary: [`웹 포트폴리오입니다.`],
        tech: [`React`, `SCSS`, `ReCaptcha v3`, `google oauth2`, `Azure Functions`],
        detail: (
            <ul style={{
                listStyle: `disc`
            }}>
                <h3>특징</h3>
                <li>리액트를 활용한 컴포넌트기반 웹 포트폴리오입니다.</li>
                <li>순수 자바스크립트로 구현한 여러가지 인터액션요소들을 추가하였습니다.</li>
                <li>GitHub Pages로 호스팅하고 있습니다.</li>
                <LinkBtn
                    link="https://github.com/bearsharks/portfolio"
                >
                    깃허브 링크
                </LinkBtn>
            </ul>
        )
    }];
    return (
        <div
            className={styles[`wrapper`]}
        >
            <h1 className={styles[`project__header1`]}>
                Projects
            </h1>

            <h2 className={styles[`project__header2`]}>
                실습을 통해 성장합니다.
                <br />
                이런저런것을 했습니다.
                <br />
            </h2>
            <ul className={styles[`project-lists`]}>
                <h2 className={styles[`project-category-name`]}>
                    Work Experience
                </h2>
                {
                    careerList.map((el, index) => {
                        return (
                            <ProjectList
                                key={index}
                                logo={el.logo}
                                info={el.info}
                                summary={el.summary}
                                tech={el.tech}
                                detail={el.detail}
                                thema={`reverse_blueblack`}
                            >
                            </ProjectList>
                        )
                    })
                }
            </ul>
            <div className={styles[`personal-project-wrapper`]}>

                <ul className={styles[`project-lists`]}>
                    <h2 className={styles[`project-category-name`]}>Side Projects</h2>
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

        </div>
    );
}

export default Projects;
