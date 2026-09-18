import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  const reqWithHeader = req.clone({
    headers: req.headers
    .set('Authorization', '*** Aquí va mi super Token ***')
    .set('Content-Type','application/json')
  })

  console.warn(reqWithHeader.headers)
  return next(reqWithHeader);
};
