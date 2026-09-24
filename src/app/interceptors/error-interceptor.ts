import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ngx-yet-another-toast-library';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService: ToastService = inject(ToastService);
  const router: Router = inject(Router);

  console.log("Interceptor de error");
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent){
        toastService.info("Error de conexión");
      }
      toastService.error("Houston tenemos un problema");
      router.navigate(['/error']);
      console.log('tipo de error: ' + error.status);
      console.log('Mensaje: ' + error.statusText);
      //ESTAMOS CAPTURANDO UN ERROR.
      //DEBEMOS DEVOLVER DICHO ERROR SI LO HEMOS CAPTURADO
      return throwError(() => error);
    })
  )
};
