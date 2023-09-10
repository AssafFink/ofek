import { Dispatch, PayloadAction } from "@reduxjs/toolkit";

function logActions(store: any) {
    return function(next: Dispatch) {
        return function(action: PayloadAction) {
            
            console.log(`Before: Action = ${action.type}, State:`);
            console.log(store.getState());

            next(action); // If not invoked, the Dispatch won't be done.
            
            console.log(`After: Action = ${action.type}, State:`);
            console.log(store.getState());
            
        }
    }
}

export default logActions;