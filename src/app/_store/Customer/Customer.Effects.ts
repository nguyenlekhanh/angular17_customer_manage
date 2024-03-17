import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../_services/master.service";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { addCustomer, addCustomerSuccess, emptyAction, getCustomer, getCustomerSuccess, loadCustomer, loadCustomerFail, loadCustomerSuccess, showAlert } from "./Customer.Actions";

@Injectable()
export class CustomerEffects {
    constructor(private action$: Actions, private service: MasterService) {

    }

    _loadCustomer = createEffect(() =>
        this.action$.pipe(
            ofType(loadCustomer),
            exhaustMap((action) => {
                return this.service.GetAllCustomer().pipe(
                    map((data) => {
                        return loadCustomerSuccess({ list: data })
                    }),
                    catchError((_err) => of(loadCustomerFail({ errormessage: _err.message })))
                )
            })
        )
    )

    _getCustomer = createEffect(() =>
        this.action$.pipe(
            ofType(getCustomer),
            exhaustMap((action) => {
                return this.service.GetCustomerbycode(action.code).pipe(
                    map((data) => {
                        return getCustomerSuccess({ obj: data })
                    }),
                    catchError((_err) => of(emptyAction()))
                )
            })
        )
    )

    _addCustomer = createEffect(() =>
        this.action$.pipe(
            ofType(addCustomer),
            switchMap((action) => {
                return this.service.CreateCustomer(action.inputdata).pipe(
                    switchMap(() => {
                        return of(addCustomerSuccess(), showAlert({ message: 'Added successfully', resptype: 'pass' }))
                    }),
                    catchError((_err) => of(showAlert({ message: 'Failed to add', resptype: 'fail' })))
                )
            })
        )
    )
}