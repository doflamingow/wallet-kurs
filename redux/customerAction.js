export const ADD_LESSON = 'ADD_LESSON'
export const UPDATE_LESSON = 'ADD_LESSON'
export const DELETE_LESSON = 'ADD_LESSON'
export const SET_VISIBILITY_FILTER = 'ADD_LESSON'

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}

export function addLesson(lesson){
    return {type: ADD_LESSON, lesson}
}

export function updateLesson(lesson){
    return {type: UPDATE_LESSON, lesson}
}

export function deleteLesson(lesson){
    return {type: DELETE_LESSON, lesson}
}

export function setVisibilityFilter(filter){
    return {type: SET_VISIBILITY_FILTER, lesson}
}