import { NavLink } from 'react-router-dom';
import styles from './ProjectList.module.scss'

function ProjectList(props) {
    return (
        <li className={styles[`project-list`]}>
            <div className={styles[`project-list-header`]}>
                <div className={styles[`project-list__name`]}>
                    <div className={styles[`project-list__logo`]}>
                        {props.logo}
                    </div>
                    <div className={styles[`project-list__info`]}>
                        <div >{props.info.name}</div>
                        <div>{props.info.periord}</div>
                        <div >{props.info.organization}</div>
                        {props.info.link &&
                            <NavLink to={`#props.info.link`} target="_blank" rel="noopener noreferrer"> 링크 </NavLink>
                        }
                    </div>
                </div>
                <div className={styles[`project-list__summary`]}>
                    {props.summary.map((el, index) => (<div key={index}>{el}</div>))}
                </div>
            </div>
            <div className={styles[`project-list__detail`]}>
                {props.detail}
            </div>
        </li>
    );
}

export default ProjectList;
