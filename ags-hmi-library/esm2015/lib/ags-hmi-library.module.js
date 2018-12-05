/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { StateIconComponent, UciStateIconComponent } from './components/state-icon/state-icon.component';
export class AgsHmiLibraryModule {
}
AgsHmiLibraryModule.decorators = [
    { type: NgModule, args: [{
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
                    PageNotFoundComponent,
                    ProgressComponent,
                    RemoveItemPipe,
                    StateIconComponent,
                    TitleComponent,
                    TruncatePipe,
                    UciStateIconComponent
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
                    PageNotFoundComponent,
                    ProgressComponent,
                    RemoveItemPipe,
                    StateIconComponent,
                    TitleComponent,
                    TruncatePipe,
                    UciStateIconComponent
                ],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdzLWhtaS1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9hZ3MtaG1pLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBNkN6RyxNQUFNLE9BQU8sbUJBQW1COzs7WUEzQy9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGdCQUFnQjtvQkFDMUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QjtpQkFDekQ7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLHVCQUF1QjtvQkFDdkIsY0FBYztvQkFDZCx1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxXQUFXO29CQUNYLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxZQUFZO29CQUNaLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLHVCQUF1QjtvQkFDdkIsY0FBYztvQkFDZCx1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxXQUFXO29CQUNYLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxZQUFZO29CQUNaLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsZUFBZSxFQUFFLEVBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IE93bERhdGVUaW1lTW9kdWxlLCBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSB9IGZyb20gJ25nLXBpY2stZGF0ZXRpbWUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUZvcm1hdFBpcGUsIFRydW5jYXRlUGlwZSwgT3JkZXJCeVBpcGUsIEhpZ2hsaWdodFBpcGUsIFJlbW92ZUl0ZW1QaXBlIH0gZnJvbSAnLi9vdGhlci9waXBlcyc7XHJcbmltcG9ydCB7IEFubm90YXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbXB0eUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lbXB0eS9lbXB0eS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lbnRpdHktc2VsZWN0b3IvZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoaXBEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoaXAtZGlzcGxheS9jaGlwLWRpc3BsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0YXRlSWNvbkNvbXBvbmVudCwgVWNpU3RhdGVJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRlLWljb24vc3RhdGUtaWNvbi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIE1hdGVyaWFsTW9kdWxlLCBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLCBPd2xEYXRlVGltZU1vZHVsZSwgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQW5ub3RhdGlvbkNvbXBvbmVudCxcclxuICAgIENoaXBEaXNwbGF5Q29tcG9uZW50LFxyXG4gICAgRGF0ZUZvcm1hdFBpcGUsXHJcbiAgICBEYXRlVGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIEVtcHR5Q29tcG9uZW50LFxyXG4gICAgRW50aXR5U2VsZWN0b3JDb21wb25lbnQsXHJcbiAgICBIaWdobGlnaHRQaXBlLFxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBPcmRlckJ5UGlwZSxcclxuICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ29tcG9uZW50LFxyXG4gICAgUmVtb3ZlSXRlbVBpcGUsXHJcbiAgICBTdGF0ZUljb25Db21wb25lbnQsXHJcbiAgICBUaXRsZUNvbXBvbmVudCxcclxuICAgIFRydW5jYXRlUGlwZSxcclxuICAgIFVjaVN0YXRlSWNvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQW5ub3RhdGlvbkNvbXBvbmVudCxcclxuICAgIENoaXBEaXNwbGF5Q29tcG9uZW50LFxyXG4gICAgRGF0ZUZvcm1hdFBpcGUsXHJcbiAgICBEYXRlVGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIEVtcHR5Q29tcG9uZW50LFxyXG4gICAgRW50aXR5U2VsZWN0b3JDb21wb25lbnQsXHJcbiAgICBIaWdobGlnaHRQaXBlLFxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBPcmRlckJ5UGlwZSxcclxuICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ29tcG9uZW50LFxyXG4gICAgUmVtb3ZlSXRlbVBpcGUsXHJcbiAgICBTdGF0ZUljb25Db21wb25lbnQsXHJcbiAgICBUaXRsZUNvbXBvbmVudCxcclxuICAgIFRydW5jYXRlUGlwZSxcclxuICAgIFVjaVN0YXRlSWNvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWdzSG1pTGlicmFyeU1vZHVsZSB7IH1cclxuIl19