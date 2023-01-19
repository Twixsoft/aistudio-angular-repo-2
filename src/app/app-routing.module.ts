import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Advanceoption01Component } from './modules/advance-options/advanceoption01/advanceoption01.component';
import { Advanceoption02Component } from './modules/advance-options/advanceoption02/advanceoption02.component';
import { Advanceoption03Component } from './modules/advance-options/advanceoption03/advanceoption03.component';
import { Advanceoption04Component } from './modules/advance-options/advanceoption04/advanceoption04.component';
import { Experiment01Component } from './modules/experiments/experiment01/experiment01.component';
import { Experiment02Component } from './modules/experiments/experiment02/experiment02.component';
import { Experiment03Component } from './modules/experiments/experiment03/experiment03.component';
import { HostingComponent } from './modules/hosting/hosting.component';
import { LoginComponent } from './modules/login/login.component';
import { MainAddNewDataConnectionComponent } from './modules/main/main-add-new-data-connection/main-add-new-data-connection.component';
import { MainAwsAuthenaUrlComponent } from './modules/main/main-aws-authena-url/main-aws-authena-url.component';
import { MainAwsAuthenaComponent } from './modules/main/main-aws-authena/main-aws-authena.component';
import { MainDataSourcePanelComponent } from './modules/main/main-data-source-panel/main-data-source-panel.component';
import { MainLearnMoreComponent } from './modules/main/main-learn-more/main-learn-more.component';
import { MainComponent } from './modules/main/main/main.component';
import { Model01Component } from './modules/model/model01/model01.component';
import { Model02Component } from './modules/model/model02/model02.component';
import { Model03Component } from './modules/model/model03/model03.component';
import { OverviewComponent } from './modules/overview/overview/overview.component';
import { Overview01Component } from './modules/overview/overview01/overview01.component';
import { Overview02Component } from './modules/overview/overview02/overview02.component';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';
import { ProjectUpdatesComponent } from './modules/project-updates/project-updates.component';
import { SignupComponent } from './modules/signup/signup01/signup.component';
import { Signup02Component } from './modules/signup/signup02/signup02.component';
import { Signup03Component } from './modules/signup/signup03/signup03.component';
import { Statistics06Component } from './modules/statistics/statistics06/statistics06.component';
import { Statistics06expandedComponent } from './modules/statistics/statistics06expanded/statistics06expanded.component';


const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: 'screen2', component: SignupComponent },
  { path: 'screen3', component: Signup02Component },
  { path: 'screen4', component: Signup03Component },
  { path: 'screen5', component: HostingComponent }, 
  { path: 'screen6', component: MainComponent },
  { path: 'screen7', component: MainAddNewDataConnectionComponent },
  { path: 'screen8', component: MainAwsAuthenaComponent },
  { path: 'screen9', component: MainAwsAuthenaUrlComponent },
  { path: 'screen10', component: MainDataSourcePanelComponent },
  { path: 'screen11', component: MainLearnMoreComponent },
  { path: 'screen12', component: Statistics06Component },
  { path: 'screen13', component: Statistics06expandedComponent },
  { path: 'screen14', component: Advanceoption01Component },
  { path: 'screen15', component: Advanceoption02Component },
  { path: 'screen16', component: Advanceoption03Component },
  { path: 'screen17', component: Advanceoption04Component },
  { path: 'screen18', component: ProjectUpdatesComponent },
  { path: 'screen19', component: ProjectDetailsComponent },
  { path: 'screen20', component: OverviewComponent },
  { path: 'screen21', component: Overview01Component },
  { path: 'screen22', component: Overview02Component },
  { path: 'screen23', component: Model01Component },
  { path: 'screen24', component: Model02Component },
  { path: 'screen25', component: Model03Component },
  { path: 'screen26', component: Experiment01Component },
  { path: 'screen27', component: Experiment02Component },
  { path: 'screen28', component: Experiment03Component },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }