import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { TopCardComponent } from './components/top-card/top-card.component';
import { NewUserListComponent } from './components/new-user-list/new-user-list.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { GraphSectionComponent } from './components/graph-section/graph-section.component';
import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { RecentOrdersDetailsModalComponent } from './components/recent-orders-details-modal/recent-orders-details-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    TopCardComponent,
    NewUserListComponent,
    RecentOrdersComponent,
    GraphSectionComponent,
    RecentOrdersDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FusionChartsModule,
    NgbModule,
  ],
  exports:[
    RecentOrdersDetailsModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
