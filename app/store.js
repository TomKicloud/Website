import { useMemo } from "react";
import { createStore } from "redux";

let store;

const initialState = {
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState);
}

export const initialiseStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
    const store = useMemo(() => initialiseStore(initialState), [initialState])
    return store
  }
