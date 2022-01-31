import { 
    CHANGE_SERVICE_FIELD,
    CLEAR_SERVICE_FIELD,
    EDIT_SERVICE,
    CLEAR_SEARCH,
 } from '../actions/actionsTypes';

const initialState = {
    name: '',
    price: '',
    filter: '',
};

export default function serviceAddReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = payload;
            return {...state, [name]: value};

            case CLEAR_SERVICE_FIELD:
                return {...state, name: '', price: ''};

            case EDIT_SERVICE:                
                return {...state, name: payload.name, price: payload.price};
                
                case CLEAR_SEARCH:
                    return {...state, filter: ''};
                    default:
                        return state;
    }
}
