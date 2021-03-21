
export const REDUX_KEY = "Global"
export enum ActionTypes {
    setSelectedPage = "SET_SELECTED_PAGE"
}

const rootState = {
    selectedPage: "none"
}

export const actions = {
    setSelectedPage: (page: string) => {
        return {
            type: ActionTypes.setSelectedPage,
            page: page
        }
    }
}

export const reducer = (state = rootState, action) => {
    switch (action.type) {
        case ActionTypes.setSelectedPage:
            state = { ...state, selectedPage: action.page }
            break;
    }
    return state;
}