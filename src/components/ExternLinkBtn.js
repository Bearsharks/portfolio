import styles from './LinkBtn.module.scss'
import { ReactComponent as Icon } from '../images/expand.svg';
function ExternLinkBtn(props) {
    let thema = 'blueblack';
    if (props.thema === 'reverse_blueblack') thema = 'reverse_blueblack';
    return (
        <a
            href={props.link}
            target={props.openNewTab && "_blank"}
            rel={props.openNewTab && "noopener noreferrer"}

            className={styles["link-btn"] + " " + styles["link-btn--" + thema]}
        >
            {props.children}
            <Icon
                width="20"
                height="20"
                fill={thema === 'reverse_blueblack' ? `#001A23` : `#FFFFFA`}>
            </Icon>
        </a>
    );
}

export default ExternLinkBtn;
