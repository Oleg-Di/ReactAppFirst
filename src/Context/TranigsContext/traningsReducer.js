
import { ACTIVE_HANDLER, DISACTIVE_HANDLER, ID_CHANGER, CHECK_TRUE, CHECK_FALSE } from './../Types/types';



const handlers = {
    [ACTIVE_HANDLER]: (state, action) => ({...state, active: true}),
    [DISACTIVE_HANDLER]: (state, action) => ({...state, active: false}),
    [ID_CHANGER]: (state, action) => ({...state, id: action.payload}),
    [CHECK_TRUE] : (state, action) => ({...state, progressBar: state.rpogressBar + 100 /6, isChecked: true}),
    [CHECK_FALSE] : (state, action) => ({...state, progressBar: state.rpogressBar - 100/6, isChecked: false}),
    DEFAULT: state => state
}


export const traningsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}