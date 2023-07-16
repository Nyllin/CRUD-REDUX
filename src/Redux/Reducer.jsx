import { MAKE_REQUEST,FAIL_REQUEST,GET_USER,DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ } from "./ActionType";

const initialState = {
    loading:true,
    err:'',
    userlist:[],
    userObj:{}
}
export const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case MAKE_REQUEST:return {
            ...state,
            loading:true
        };
        case FAIL_REQUEST:return {
            ...state,
            loading:false,
            err:action.payload
        };
        case GET_USER:return {
            loading:false,
            userlist:action.payload,
            err:'',
            userObj:{}

        };
        case DELETE_USER:
            return {
                ...state,
                loading:false
            }
        case ADD_USER:
            return {
                ...state,
                loading:false
            }
        case UPDATE_USER:
            return {
                ...state,
                loading:false
            }
        case GET_USER_OBJ:
            return{
                ...state,
                loading:false,
                userObj:action.payload
            }
        default:return state;
    }
}