import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRlc3QiLCJyb2xlIjoidXNlciIsIm5iZiI6MTcxMDY5MzQ5OSwiZXhwIjoxNzEwNjkzNzk5LCJpYXQiOjE3MTA2OTM0OTl9.tYHX8S44dQu4wnvZ7I62wfPPH6BMjTs_T9VwIp-4jJE';

  let jwtToken = req.clone({
    setHeaders: {
      Authorization: 'bearer ' + _token
    }
  });

  return next(jwtToken);
};
