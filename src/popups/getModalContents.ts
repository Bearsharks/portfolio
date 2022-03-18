import { ModalKind } from "./ModalState";

export enum ItemKind {
    TEXT, IMG
}
export interface ModalMetaData {
    title: string,
    description: string,
    tech: string[],
    feature: string[],
    image: string,
    GitLink: string,
    link: string,
    p: {
        title: string,
        items: string[],
        kinds: ItemKind[]
    }[]
}
const mosaicProblem = `
    저사양 기기에서 모자이크를 생성하는 과정에서 탭이 계속 새로고침되는 문제가 있었습니다.
    이 문제의 원인은 하나의 웹 워커가 하나의 이미지를 맡아 평균 밝기를 바꾸고 
    이를 메시지에 담아 메인쓰레드로 보내는 것을 반복하면서,
    워커마다 밝기 값이 다른 이미지를 30장 정도 생성하게 되므로 병목이 발생했고, 
    테스크 큐에 쌓인 메시지로 인해 메모리가 부족하여 발생한 현상이었습니다.
`
const contents: ModalMetaData[] = [{
    title: "Simple Music Player",
    description: `유튜브 뮤직 클론 프로젝트로 검색, 재생목록URL,
        동영상URL로 재생목록을 만들 수 있는 간단한 뮤직플레이어 입니다`,
    tech: ["React", "Typescript", "Recoil", "Express", "Youtube Data API"],
    feature: [
        "OAuth2.0를 활용한 소셜로그인(구글) 기능 구현",
        "Github Actions, Github Page를 활용한 CI/CD",
        "반응형 웹 디자인 적용"
    ],
    image: "/portfolio/smpPlaylist.png",
    GitLink: "https://github.com/Bearsharks/simple-music-player",
    link: "https://bearsharks.github.io/simple-music-player",
    p: [{
        title: "",
        items: ["/portfolio/searchMusicList.png"],
        kinds: [ItemKind.IMG]
    }, {
        title: "개발과정",
        items: [
            `해당 프로젝트를 하면서 제가 배우고자 했던 것은 
            프로젝트 관리를 어떻게 해야 하는지에 대한 방법론이었습니다. 
            제가 앞으로 다른 사람들과 협업을 할 때에도 정해진 절차에 따라 
            개발하는 경험이 많은 도움이 될 것이라고 생각했고,
            짜임새 있는 개발절차를 따라 개발하는 것이 더 효율적이고 
            좋은 품질로 프로젝트를 완성할 수 있다고 생각했기 때문입니다.`
            ,
            `이를 위해 주요개발언어로 타입스크립트를 선택하였고, 
            개인프로젝트였기 때문에 간단한 흐름이 특징인 Github Flow를 따라, 
            우선 순위에 맞춰 각 기능별로 Branch를 생성하고 개발 후 Pull request (PR)를 
            하며 기능을 추가해 나갔습니다.  Github Actions로 PR마다 빌드 테스트를 하고,
            성공 시 Merge하여 Master branch를 관리하였고, master branch에 Merge시
            Github page로 자동 배포하도록 CI/CD를 구성하였습니다.`
            ,
            `현재 자동 테스트는 Recoil 상태에 관해서만 구성하였고, 
            실제 화면에 대한 테스트는 몇몇 컴포넌트를 Recoil상태와 
            분리하여 Stotybook을 통해 수동으로 테스트하고 있습니다. 
            향후 실제 서비스환경에서 통합테스트를 구성할 계획입니다.`
        ],
        kinds: [ItemKind.TEXT, ItemKind.TEXT, ItemKind.TEXT]
    }]
}, {
    title: "Image mosaic",
    description: "웹상에서 검색된 여러 이미지로 사진모자이크를 실시간으로 생성하는 웹앱입니다.",
    tech: ["React", "HTML5 CANVAS", "WebWorker", "Bing image Search API", "Azure Functions"],
    feature: [
        "수 만개의 이미지 조각들로 사진모자이크를 동적으로 생성합니다.",
        "캐싱, WebWorker를 이용한 병렬처리로 저사양 기기에서도 빠르게 이미지를 처리합니다.",
        "사용자는 스크롤, 드래그, 클릭 등 직관적 동작으로 사진모자이크와 인터랙션 할 수 있습니다.",
        "핀치 줌 등의 모바일 인터랙션도 지원하여 다양한 디바이스에서 동일한 UX를 제공합니다."
    ],
    image: "/portfolio/imageMosaicShow2.gif",
    GitLink: "https://github.com/Bearsharks/99-interactions",
    link: "https://bearsharks.github.io/99-interactions",
    p: [{
        title: "",
        items: ["/portfolio/imageMosaicShow1.gif"],
        kinds: [ItemKind.IMG]
    }, {
        title: "문제해결사례",
        items: [
            `저사양 기기에서 모자이크를 생성하는 과정에서 탭이 계속 새로고침되는 문제가 있었습니다.
            이 문제의 원인은 하나의 웹 워커가 하나의 이미지를 맡아 평균 밝기를 바꾸고 
            이를 메시지에 담아 메인쓰레드로 보내는 것을 반복하면서,
            워커마다 밝기 값이 다른 이미지를 30장 정도 생성하게 되므로 병목이 발생했고, 
            테스크 큐에 쌓인 메시지로 인해 메모리가 부족하여 발생한 현상이었습니다.`
            , `이를 해결하기 위해 웹워커는 이미지의 흑백화와 평균 밝기 계산만 맡고,
            메인 쓰레드는 이를 받아 차례차례 각 이미지를 같은 밝기를 가진 모자이크 조각에 맵핑하고,
            이후 비어있는 모자이크 조각에 밝기 값이 가장 비슷한 이미지를 찾도록 수정하였습니다.
            다시 말해 이미지를 모아서 한번에 처리하기 보다 
            그때 그때 처리하여 부하를 분산시키도록 로직을 수정하여 약간의 성능은 포기하되,
            여러기기에서 동일한 UX를 가질 수 있도록 하였습니다.`],
        kinds: [ItemKind.TEXT, ItemKind.TEXT]
    }]
}];
const m = new Map<ModalKind, number>();
m.set(ModalKind.SMP, 0);
m.set(ModalKind.MOSAIC, 1);

export default function getContents(kind: ModalKind): ModalMetaData {
    const idx = m.get(kind);
    if (typeof idx === 'number') return contents[idx];
    return {} as ModalMetaData;
};