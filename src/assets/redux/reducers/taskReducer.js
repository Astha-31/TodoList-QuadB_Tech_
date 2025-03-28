import { ADD_TASK, DELETE_TASK, SET_TASKS, SET_ERROR } from "../actions/taskActions";

const initialState = {
    tasks: [],
    error: null,
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case SET_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default taskReducer;