import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRlc3QiLCJyb2xlIjoidXNlciIsIm5iZiI6MTcxMDY0NDI0MCwiZXhwIjoxNzEwNjQ0NTQwLCJpYXQiOjE3MTA2NDQyNDB9.GNm8xIhKrreRzPq_ZPAvpnC_HIm2rypClgHzx7Wqjl0';

  let jwtToken = req.clone({
    setHeaders: {
      Authorization: 'bearer ' + _token
    }
  });

  return next(jwtToken);
};
