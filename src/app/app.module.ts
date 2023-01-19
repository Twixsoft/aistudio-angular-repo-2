import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { SignupComponent } from './modules/signup/signup01/signup.component';
import { Signup02Component } from './modules/signup/signup02/signup02.component';
import { Signup03Component } from './modules/signup/signup03/signup03.component';
import { HostingComponent } from './modules/hosting/hosting.component';
import { MainComponent } from './modules/main/main/main.component';
import { MainHeaderComponent } from './core/header/main-header/main-header.component';
import { MainAddNewDataConnectionComponent } from './modules/main/main-add-new-data-connection/main-add-new-data-connection.component';
import { MainAwsAuthenaComponent } from './modules/main/main-aws-authena/main-aws-authena.component';
import { MainAwsAuthenaUrlComponent } from './modules/main/main-aws-authena-url/main-aws-authena-url.component';
import { MainDataSourcePanelComponent } from './modules/main/main-data-source-panel/main-data-source-panel.component';
import { MainLearnMoreComponent } from './modules/main/main-learn-more/main-learn-more.component';
import { Statistics06Component } from './modules/statistics/statistics06/statistics06.component';
import { Statistics06expandedComponent } from './modules/statistics/statistics06expanded/statistics06expanded.component';
import { Advanceoption01Component } from './modules/advance-options/advanceoption01/advanceoption01.component';
import { Advanceoption02Component } from './modules/advance-options/advanceoption02/advanceoption02.component';
import { Advanceoption03Component } from './modules/advance-options/advanceoption03/advanceoption03.component';
import { Advanceoption04Component } from './modules/advance-options/advanceoption04/advanceoption04.component';
import { ProjectUpdatesComponent } from './modules/project-updates/project-updates.component';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';
import { Overview01Component } from './modules/overview/overview01/overview01.component';
import { OverviewComponent } from './modules/overview/overview/overview.component';
import { Overview02Component } from './modules/overview/overview02/overview02.component';
import { Model01Component } from './modules/model/model01/model01.component';
import { Model02Component } from './modules/model/model02/model02.component';
import { Experiment01Component } from './modules/experiments/experiment01/experiment01.component';
import { Experiment02Component } from './modules/experiments/experiment02/experiment02.component';
import { Experiment03Component } from './modules/experiments/experiment03/experiment03.component';
import { Model03Component } from './modules/model/model03/model03.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    Signup02Component,
    Signup03Component,
    HostingComponent,
    MainComponent,
    MainHeaderComponent,
    MainAddNewDataConnectionComponent,
    MainAwsAuthenaComponent,
    MainAwsAuthenaUrlComponent,
    MainDataSourcePanelComponent,
    MainLearnMoreComponent,
    Statistics06Component,
    Statistics06expandedComponent,
    Advanceoption01Component,
    Advanceoption02Component,
    Advanceoption03Component,
    Advanceoption04Component,
    ProjectUpdatesComponent,
    ProjectDetailsComponent,
    Overview01Component,
    OverviewComponent,
    Overview02Component,
    Model01Component,
    Model02Component,
    Experiment01Component,
    Experiment02Component,
    Experiment03Component,
    Model03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
