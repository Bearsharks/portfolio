import styles from './Projects.module.scss'
import ProjectList from './components/ProjectList'
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
            link: 'link'
        },
        summary: [`그룹웨어 서비스와 사용자를 연결하는 포탈 서비스`, `주요 기술 : Jquery, JSP, Spring, Oracle`],
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
                <div className={styles["sl_subtitle01"]}>문서관리 시스템</div>
                <span className={styles["sl_subtitle02"]}>Smart</span>
                <span className={styles["sl_subtitle03"]}>EDMS</span>
            </p>
        ),
        info: {
            name: `SmartEDMS`,
            periord: `2020.3 ~ 2020.8`,
            organization: `나눔기술`,
            link: 'link'
        },
        summary: [
            `조직 내 산재되어 있는 비정형/정형 문서를`, `체계적으로 관리하는 문서관리 시스템`,
            `주요 기술 : Jquery, servlet, oracle`,
        ],
        detail: (
            <ol>
                <li>구형브라우저(IE)에 맞춰진 시스템 업데이트 및 크로미움기반 브라우저 크로스브라우징 작업</li>
                <li>파일관리, XML파싱 폴리필 작성</li>
                <li>웹표준에 맞춘 개발 및 UX개선</li>
            </ol>
        )
    }];

    const personalList = [{
        logo: `로고`,
        info: {
            periord: `2021.6 ~ `,
            organization: `개인프로젝트`
        },
        summary: [`이런저런`, `이런저런`],
        detail: (<div>성과나 자랑거리 자세한 설명</div>)
    }, {
        logo: `로고`,
        info: {
            periord: `2021.6 ~ `,
            organization: `개인프로젝트`
        },
        summary: [`이런`, `저런 기술`],
        detail: (<div>성과나 자랑거리 자세한 설명</div>)
    }];
    return (
        <div
            className={styles[`wrapper`]}
        >
            <br></br>
            <h1 className={styles[`project__header1`]}>
                Projects
            </h1>

            <h2 className={styles[`project-category-name`]}>
                경력 및 회사프로젝트
            </h2>
            <ul className={styles[`project-lists`]}>
                {
                    careerList.map((el, index) => {
                        return (
                            <ProjectList
                                key={index}
                                logo={el.logo}
                                info={el.info}
                                summary={el.summary}
                                detail={el.detail}
                            >
                            </ProjectList>
                        )
                    })
                }
            </ul>
            <div className={styles[`personal-project-wrapper`]}>
                <h2>개인프로젝트</h2>
                <h3>
                    실습을 통해 배우고 이전보다 더 성장합니다.
                </h3>
                <ul>
                    {
                        personalList.map((el, index) => {
                            return (
                                <ProjectList
                                    key={index}
                                    logo={el.logo}
                                    info={el.info}
                                    summary={el.summary}
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
