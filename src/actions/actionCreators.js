import { nanoid } from 'nanoid';
import { 
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE,
    CLEAR_SERVICE_FIELD,
    CANCEL_EDIT,
    CLEAR_SEARCH
} from './actionsTypes';

export function addService(name, price, id = nanoid()) {
    return {type: ADD_SERVICE, payload: {name, price, id}};
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function editService(name, price, id) {
    return {type: EDIT_SERVICE, payload: {name, price, id}};
}

export function clearServiceField() {
    return {type: CLEAR_SERVICE_FIELD};
}

export function cancelEdit() {
    return {type: CANCEL_EDIT};
}

export function clearSearch() {
    return {type: CLEAR_SEARCH};
}
