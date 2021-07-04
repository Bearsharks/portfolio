import { NavLink } from 'react-router-dom';
import styles from '../Projects.module.scss'
import LinkBtn from './LinkBtn';
function ProjectList(props) {
    return (
        <div className={styles[`project-list`]}>
            <div className={styles[`project-list-header`]}>
                <div className={styles[`project-list__name`]}>
                    <div className={styles[`project-list__logo`]}>
                        {props.logo}
                    </div>
                    <div className={styles[`project-list__info`]}>
                        <br />
                        <div >{props.info.name}</div>
                        <div>{props.info.periord}</div>
                        <div >{props.info.organization}</div>
                        {props.info.link &&
                            <LinkBtn
                                link={props.info.link}
                                thema={props.thema}
                                openNewTab={true}
                            > 링크 </LinkBtn>

                        }
                    </div>
                </div>
                <div className={styles[`project-list__summary`]}>
                    <div style={{
                        transform: `translate(-5px)`,
                        marginBottom: `10px`,

                    }}>
                        프로젝트 소개 :
                    </div>
                    {props.summary.map((el, index) => (<div key={index}>{el}</div>))}
                    <br />
                    <div style={{
                        transform: `translate(-5px)`,
                        marginBottom: `10px`,

                    }}>
                        주요 기술 :
                    </div>
                    <div>
                        {props.tech.join(', ')}
                    </div>
                </div>
            </div>
            <div className={styles[`project-list__detail`]}>
                {props.detail}
            </div>
        </div >
    );
}

export default ProjectList;
