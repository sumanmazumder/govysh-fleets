import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { headerInterceptor } from "../http-interceptor/header-interceptor";
export const headerInterceptorClass = [
    {provide: HTTP_INTERCEPTORS, useClass: headerInterceptor, multi: true}
]
