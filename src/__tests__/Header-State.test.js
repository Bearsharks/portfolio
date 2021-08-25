// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import App from "../App"
import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { headerActive } from '../atoms/atoms';
describe('app test', () => {

    const { result } = renderHook(() => useRecoilValue(headerActive), {
        wrapper: RecoilRoot
    });
    it('헤더의 초기상태는 보임이다.', () => {

        expect(result.current).toEqual(true);
    });
    it('헤더는 휠을 내리면 안보임 상태가 되고 올리면 보임 상태가 된다.', () => {
        const { container } = render(<RecoilRoot><App /></RecoilRoot>);
        let tgt = container.querySelector('main');

        fireEvent.wheel(
            tgt,
            {
                bubbles: true,
                cancelable: true,
                deltaY: 100
            }
        )
        expect(result.current).toEqual(true);
        fireEvent.wheel(
            tgt,
            {
                bubbles: true,
                cancelable: true,
                deltaY: -100
            }
        )
        expect(result.current).toEqual(true);

    });
});