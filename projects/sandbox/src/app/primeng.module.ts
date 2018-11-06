import {NgModule} from '@angular/core';
import { InputTextareaModule, CalendarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    InputTextareaModule, CalendarModule
    
  ],
  exports: [
    InputTextareaModule, CalendarModule
    
  ]
})
export class PrimeNgModule {}
