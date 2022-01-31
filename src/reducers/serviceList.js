import { nanoid } from "nanoid";
import { 
    ADD_SERVICE,
    REMOVE_SERVICE,
    EDIT_SERVICE,
    CANCEL_EDIT
 } from "../actions/actionsTypes";

const initialState =  {
    selected: null,
    services: [
    {id: nanoid(), name: 'Замена стекла ', price: 21000},
    {id: nanoid(), name: 'Замена дисплея ', price: 25000},
]
};

export default function serviceListReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_SERVICE:
            const {name, price} = payload;
            if (!state.selected) {
                return {
                    ...state,
                    services: [...state.services, {id: nanoid(), name, price: +price}]
                };
            }
            return {
                ...state,
                selected: null,
                services: state.services.map((s) => {
                    return s.id === state.selected ? {...s, name, price: +price} : {...s}
                }),
            };           
        
            case REMOVE_SERVICE:
                return {
                    ...state,
                    selected: payload.id === state.selected ? null : state.selected,
                    services: state.services.filter((service) => service.id !== payload.id),
                };
                
                case EDIT_SERVICE:
                    return {...state, selected: payload.id};

                    case CANCEL_EDIT:
                        return {...state, selected: null};

                default:
                    return state;
     }
}
