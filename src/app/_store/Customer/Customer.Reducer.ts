import { createReducer, on } from "@ngrx/store";
import { customerState } from "./Customer.State";
import { deleteCustomerSuccess, getCustomerSuccess, loadCustomerFail, loadCustomerSuccess } from "./Customer.Actions";

const _CustomerReducer = createReducer(customerState,
    on(loadCustomerSuccess, (state, action) => {
        return {
            ...state,
            list: action.list,
            errormessage: '',
            editdata:{
                code: "",
                name: "",
                email: "",
                phone: ""
            }
        }
    }),
    on(loadCustomerFail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    }),
    on(getCustomerSuccess, (state, action) => {
        return {
            ...state,
            errormessage: '',
            editdata:action.obj
        }
    }),
    on(deleteCustomerSuccess, (state, action) => {
        let _newdata=state.list.filter(o=>o.code!=action.code);
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    })

)


export function CustomerReducer(state: any, action: any) {
    return _CustomerReducer(state, action)
}