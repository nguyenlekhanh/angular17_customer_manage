import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../_services/master.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import { loadCustomer, loadCustomerFail, loadCustomerSuccess } from "./Customer.Actions";

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
}