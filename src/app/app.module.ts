import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {RouterModule} from '@angular/router';
import {MapService } from './map.service';
import  { MaterialModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from  './login.service';
import {AuthenticationService} from './authentication.service';
import {AuthGuard} from '../../server/authguard';
import { FormcentruComponent } from './formcentru/formcentru.component';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { AddusersComponent } from './addusers/addusers.component';
import { DeletecenterComponent } from './deletecenter/deletecenter.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddemplComponent } from './addempl/addempl.component';
import { AdduserscenterComponent } from './adduserscenter/adduserscenter.component';
import { AdddonatorComponent } from './adddonator/adddonator.component';
import { SearchdonatorComponent } from './searchdonator/searchdonator.component';
import { AddalarmComponent } from './addalarm/addalarm.component';
import {AddcenterService} from "./addcenter.service";
import {DeletecenterService} from "./deletecenter.service";
import {AddusersService} from "./addusers.service";
import { ProfileComponent } from './profile/profile.component';
import {AlertService} from "./alert.service";
import { RegisterComponent } from './register/register.component';
import {DataTableModule} from "angular2-datatable";
import {AdddonatorService} from "./adddonator.service";
import {SearchdonatorService} from "./searchdonator.service";
import {RegisterService} from "./register.service";

const ROUTES = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },{
        path: 'home',
        component: HomeComponent,
        //canActivate: [AuthGuard]
      },

    {
      path: 'map',
      redirectTo :'map',
      pathMatch: 'full'
     },{
      path :'map',
      component: MapComponent
    },

    {
      path:'login',
      redirectTo:'login',
      pathMatch:'full'
      },
      {
      path:'login',
      component:LoginComponent
    },

    {
        path:'addcenter',
        redirectTo:'addcenter'
      },
      {
        path:'addcenter',
       component: AddcenterComponent

    },

  {
    path:'deletecenter',
    redirectTo:'deletecenter'
  },
  {
    path:'deletecenter',
    component: DeletecenterComponent

  },

  {
    path:'addusers',
    redirectTo:'addusers'
  },
  {
    path:'addusers',
    component: AddusersComponent

  },

  { path:'adduserscenter',
    redirectTo:'adduserscenter'
  },
  {
    path:'adduserscenter',
    component: AdduserscenterComponent
  },


  { path:'addempl',
    redirectTo:'addempl'
  },
  {
    path:'addempl',
    component: AddemplComponent
  },



  { path:'adddonator',
    redirectTo:'adddonator'
  },
  {
    path:'adddonator',
    component: AdddonatorComponent
  },



  { path:'searchdonator',
    redirectTo:'searchdonator'
  },
  {
    path:'searchdonator',
    component: SearchdonatorComponent
  },


  {path:'register',
    redirectTo:'register'},{
    path:'register',
    component: RegisterComponent
  },

  { path:'profile',
    redirectTo:'profile'},
  {
    path:'profile',
    component: ProfileComponent
  },

  {path:'addalarm',
    redirectTo:'addalarm'},{
    path:'addalarm',
    component: AddalarmComponent
  },

  { path:'userprofile',
    redirectTo:'userprofile'},
  {
    path:'userprofile',
    component: UserprofileComponent
  },


];



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    FormcentruComponent,
    AddcenterComponent,
    AddusersComponent,
    DeletecenterComponent,
    UserprofileComponent,
    AddemplComponent,
    AdduserscenterComponent,
    AdddonatorComponent,
    SearchdonatorComponent,
    AddalarmComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DataTableModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBXiIHK5zEiMgNo23ZrNrV5vxMfUAGmQvw',
      libraries: ["places"],


    }),
    ReactiveFormsModule
  ],
  providers: [MapService, LoginService, AuthenticationService,
              AuthGuard,AlertService,
              AddcenterService, DeletecenterService,AddusersService,
              AdddonatorService,SearchdonatorService, RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
