import * as React from "react";
import services from './config';

export const ContextApp = React.createContext();
export const initialState = {
    basketBlocks: [],
    itemsCount: services,
};

export const appReducer = (state, action) => {
    const { payload } = action;
    const { key, count } = payload;
    switch(action.type) {
        case 'SUBTRACT_ITEM':
            return {
                ...state,
                itemsCount: {...state.itemsCount, ...{ [key]: count }}
            };
        case 'ADD_ITEM':
            return {
                ...state,
                itemsCount: {...state.itemsCount, ...{ [key]: count }}
            };
        case 'ADD_BASKET_BLOCK':
            return {
                ...state,
                basketBlocks: [...new Set([...state.basketBlocks, payload])]
            };      
        case 'REMOVE_BASKET_BLOCK':
            const { id } = payload;
            return {
                ...state,
                basketBlocks: state.basketBlocks.filter(b => b.id !== id)
            };
        default:
            return state
    }
};
