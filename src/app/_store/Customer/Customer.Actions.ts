import { createAction, props } from "@ngrx/store"
import { Customer } from "../../../_model/Customer"

export const LOAD_CUSTOMER = '[customer] load customer'
export const LOAD_CUSTOMER_SUCCESS = '[customer] load customer success'
export const LOAD_CUSTOMER_FAIL = '[customer] load customer fail'

export const loadCustomer = createAction(LOAD_CUSTOMER)
export const loadCustomerSuccess = createAction(LOAD_CUSTOMER_SUCCESS, props<{ list: Customer[] }>())
export const loadCustomerFail = createAction(LOAD_CUSTOMER_FAIL, props<{ errormessage: string }>())