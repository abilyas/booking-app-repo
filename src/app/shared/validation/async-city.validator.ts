import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[flightAsyncCity]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncCityValidatorDirective,
            multi: true
        }]
})
export class AsyncCityValidatorDirective {

    validate(ctrl: AbstractControl): Promise<any> {

        return new Promise((resolve: Function) => {
            setTimeout(() => {

                if (ctrl.value === 'Amsterdam' || ctrl.value === 'Brussel') {
                    resolve({});
                    return;
                }

                resolve({'async-city': false});

            }, 100);
        });

    }

}
