import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  //ANTES DE NADA, PREGUNTAMOS SI VIENE EN EL request
  //EL VALOR DE SKIP_TOKEN
  if (req.context.get(SKIP_TOKEN)){
    //NO INCLUIMOS TOKEN, DEVOLVEMOS LA RESPUESTA
    next(req);
  }

  //PASA CUALQUIER PETICION HTTPCLIENT
  const token = localStorage.getItem("TOKEN");
  //PREGUNTAMOS SI EXISTE TOKEN O NO
  if (token){
    //SI EL TOKEN EXISTE, DEBEMOS INCLUIR EN LA CABECERA Authorization
    //Y DEVOLVER DICHA PETICION.  DEBEMOS HACER UNA COPIA DEL request
    const tokenRequest = req.clone({
      setHeaders:{
        Authorization: "bearer " + token
      }
    });
    //DEVOLVEMOS LA RESPUESTA CON EL TOKEN
    return next(tokenRequest);
  }
  return next(req);
};
