
import { NgModule } from '@angular/core';
import { BaseService } from './service/api-service/base-api.service';
// import { DeactivateGuard } from './guards/deactivate-guard.service';
@NgModule({
  providers: [
    BaseService
  ],

})
export class CoreModule { }