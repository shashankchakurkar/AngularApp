import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule }   from '@angular/forms';
// import { Http } from '@angular/http';
import { PersonComponent } from './person/person.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PersonComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        canActivate:[AuthGuard],
        component: AdminComponent
      },
      
      {
        path: 'person',
        canActivate:[AuthGuard],
        component: PersonComponent
      },
      {
        path:'registration',
        component:RegistrationComponent
      }
      ,{
        path:'login',
        component:LoginComponent
      }

      ,{
        path:'',
        component:LoginComponent
      }

    ])
  ],
  providers: [ UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
