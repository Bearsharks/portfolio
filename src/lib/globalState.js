/*
*contextAPI + useReducer로 전역상태를 관리한다.
*상태를 관리할 컴포넌트의 부모로 StateProvider컴포넌트 사용한다.
*StateProvider컴포넌트의 props로 reducer={리듀서}를 전달한다.
*상태를 변경하려면 globalState.dispatch({ type: 'SHOW' });와 같이 액션을 전달한다.
*아래와 같이 사용한다.
*    const globalstore = useContext(store);
*    const globalstate = globalstore.state;
*    const dispatch = globalstore.dispatch;
*    dispatch({ type: 'SHOW' });
*/

/* 
const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return true;
        case 'HIDE':
            return false;
        default:
            throw new Error();
    };
}
*/

import React, { createContext, useReducer } from "react";

const initialState = false;
const store = createContext(initialState);

const StateProvider = ({ children, reducer }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
}

export { store, StateProvider }