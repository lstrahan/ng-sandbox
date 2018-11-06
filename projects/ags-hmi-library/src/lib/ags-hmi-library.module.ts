import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { DateFormatPipe, TruncatePipe, OrderByPipe, HighlightPipe, RemoveItemPipe } from './other/pipes';
import { AnnotationComponent } from './components/annotation/annotation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TitleComponent } from './components/title/title.component';
import { LoginComponent } from './components/login/login.component';
import { EmptyComponent } from './components/empty/empty.component';
import { EntitySelectorComponent } from './components/entity-selector/entity-selector.component';
import { ChipDisplayComponent } from './components/chip-display/chip-display.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule,
    CommonModule, OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  declarations: [
    AnnotationComponent,
    ChipDisplayComponent,
    DateFormatPipe,
    DateTimePickerComponent,
    EmptyComponent,
    EntitySelectorComponent,
    HighlightPipe,
    LoginComponent,
    OrderByPipe,
    RemoveItemPipe,
    PageNotFoundComponent,
    ProgressComponent,
    TitleComponent,
    TruncatePipe
  ],
  exports: [
    AnnotationComponent,
    ChipDisplayComponent,
    DateFormatPipe,
    DateTimePickerComponent,
    EmptyComponent,
    EntitySelectorComponent,
    HighlightPipe,
    LoginComponent,
    OrderByPipe,
    RemoveItemPipe,
    PageNotFoundComponent,
    ProgressComponent,
    TitleComponent,
    TruncatePipe
  ],
  entryComponents: [
  ]
})
export class AgsHmiLibraryModule { }
