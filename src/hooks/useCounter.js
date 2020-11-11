import { useContext } from 'react';
import { ContextApp } from '../reducer';

const useCounter = (sId, count) => {
    const { dispatch } = useContext(ContextApp);
    const subtractHandler = () => {
        dispatch({
            type: "SUBTRACT_ITEM",
            payload: { key: sId, count: count - 1 },
        })
    }
    const addHandler = () => {
        dispatch({
            type: "ADD_ITEM",
            payload: { key: sId, count: count + 1 },
        })
    }
    return { subtractHandler, addHandler };
}

export default useCounter;