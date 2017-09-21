import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';

import { VerticalNavigationComponent } from './vertical-navigation.component';
import { NavigationItemConfig } from './navigation-item-config';

export {
  NavigationItemConfig
}

/**
 * A module containing objects associated with the navigation components
 */
@NgModule({
  imports: [ CommonModule, TooltipModule.forRoot()],
  declarations: [ VerticalNavigationComponent ],
  exports: [ VerticalNavigationComponent ],
  providers: [ TooltipConfig ]
})
export class NavigationModule { }
