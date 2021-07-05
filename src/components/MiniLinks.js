import styles from './MiniLinks.module.scss'
import { ReactComponent as WIcon } from '../images/W.svg';
import { ReactComponent as GithubIcon } from '../images/Github.svg';
import { ReactComponent as EmailIcon } from '../images/Email.svg';
function MiniLinks(props) {
    const linkSize = props.linkSize ? props.linkSize : 30;
    return (
        <div className={styles['links']}>
            <a
                href="mailto:iginganza@gmail.com"
                className={styles['links__link']}
                target="_blank"
                rel="noopener noreferrer"
                title="iginganza@gmail.com"
            >
                <EmailIcon width={linkSize + 5} height={linkSize + 5} fill="#FFFFFF"></EmailIcon>

            </a>

            <a
                href="https://github.com/bearsharks"
                className={styles['links__link']}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
            >
                <GithubIcon width={linkSize} height={linkSize} fill="#FFFFFF"></GithubIcon>
            </a>
            <a
                href="https://github.com/Bearsharks/dev-note/wiki"
                className={styles['links__link']}
                target="_blank"
                rel="noopener noreferrer"
                title="개인 위키"
            >

                <WIcon width={linkSize} height={linkSize} fill="#FFFFFF"></WIcon>
            </a>

        </div>
    );
}

export default MiniLinks;
