import { useRecoilState } from 'recoil'
import styles from './Modal.module.scss'
import { ModalKind, ModalKindState } from './ModalState';
import getModalContents, { ItemKind } from './getModalContents';
import ExternLinkBtn from 'components/ExternLinkBtn';
function Modal() {
    const [modalKind, setModalKind] = useRecoilState(ModalKindState);
    return (modalKind === ModalKind.Closed) ? <></> : <div>
        <div className={styles['contents-wrapper']}>
            <ModalContents kind={modalKind} />
        </div>
        <div
            className={styles['overlay-backdrop']}
            onClick={() => setModalKind(ModalKind.Closed)}
        ></div>
    </div>
}
function Paragraph({ title, items, kinds }: { title: string, items: string[], kinds: ItemKind[] }) {
    return <div>
        <h3>{title}</h3>
        {kinds.map((kind, idx) => kind === ItemKind.TEXT ?
            <><div key={idx}>{items[idx]}</div><br /></> :
            <><img key={idx} src={items[idx]} alt={title} className={styles['paragraph-image']}></img><br /></>
        )}
    </div>
}

function ModalContents({ kind }: { kind: ModalKind }) {
    const meta = getModalContents(kind);
    return !meta ? <></> :
        <article className={styles['project-article']}>
            <h1 className={styles['title']}>{meta.title}</h1>
            <h2 className={styles['desc']}>{meta.description}</h2>
            <img className={styles['main-image']} src={meta.image} alt={meta.title}></img>
            <div>
                <ul className={styles['tech']}>
                    <h3>
                        사용기술
                    </h3>
                    <li>{meta.tech.join(', ')}</li>
                </ul>
                <ul className={styles['feat']}>
                    <h3>
                        특징
                    </h3>
                    {meta.feature.map((feat, idx) =>
                        <li key={idx}>{feat}</li>)}
                </ul>
                <div className={styles['links']}>
                    <ExternLinkBtn
                        link={meta.link}
                        openNewTab={true}
                    >
                        링크
                    </ExternLinkBtn>
                    <ExternLinkBtn
                        link={meta.GitLink}
                        openNewTab={true}
                    >
                        깃허브 링크
                    </ExternLinkBtn>
                </div>
            </div>

            <div className={styles['p']}>{meta.p.map((data) =>
                <Paragraph
                    key={data.title}
                    title={data.title}
                    items={data.items}
                    kinds={data.kinds} />)}
            </div>

        </article>
        ;
}
export default Modal;
