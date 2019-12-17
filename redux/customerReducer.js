import { VisibilityFilters, ADD_LESSON, SET_VISIBILITY_FILTER } from "./customerAction";

const initialState = {
    visibilityFilters: VisibilityFilters.SHOW_ALL,
    lesson: []
}

function lesson (lesson = [], action){
    switch (action.type) {
        case ADD_LESSON:
            return [...lesson, action.lesson]
    }
    
}

function visibilityFilter(visibiltyFilter = SHOW_ALL, action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
        return action.filter
        default:
        return visibilityFilter
    }
}

export default function lessonApp(state=initialState, action){
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilters, action),
        lesson: lesson(state.lesson, action)
    }
}