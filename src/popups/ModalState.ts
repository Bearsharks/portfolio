import { atom } from "recoil";

export enum ModalKind {
    Closed, SMP, MOSAIC
}
export const ModalKindState = atom<ModalKind>({
    key: "ModalKind",
    default: ModalKind.Closed
})