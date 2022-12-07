//system library
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//main library
import { AppComponent } from "./app.component";

//general library
import { NavbarComponent } from "./components/general/navbar/navbar.component";
import { FooterComponent } from "./components/general/footer/footer.component";
import { MyProfileComponent } from "./components/general/my-profile/my-profile.component";
import { LoginComponent } from "./components/general/login/login.component";
import { RegisterComponent } from "./components/general/register/register.component";
import { LogoutComponent } from "./components/general/logout/logout.component";

//utils modal
import { ModalComponent } from "./components/utils/modal/modal/modal.component";
import { LabelSelectComponent } from "./components/utils/modal/label-select/label-select.component";
import { LabelInputComponent } from "./components/utils/modal/label-input/label-input.component";
import { LabelHiddenInputComponent } from "./components/utils/modal/label-hidden-input/label-hidden-input.component";

//routing
import { AppRoutingModule, RoutingComponents } from "./routes/app.routing";

@NgModule({
    declarations: [
        //main
        AppComponent,

        //router
        RoutingComponents,

        //general
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        MyProfileComponent,

        //modal
        ModalComponent,
        LabelSelectComponent,
        LabelInputComponent,
        LabelHiddenInputComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
