import { atom } from 'recoil';
export const isNavActive = atom({
    key: 'isNavActive',
    default: false
});

export const backHistoryExist = atom({
    key: 'backHistoryExist',
    default: false
});

export const headerActive = atom({
    key: 'headerActive',
    default: true
});