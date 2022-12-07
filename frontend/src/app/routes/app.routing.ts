import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/unique/home/home.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent }
    // {path:'login', component:HomeComponent},
    // {path:'register', component:HomeComponent},
    // {path:'product',component:ProductComponent},
    // {path:'products',component:ProductsComponent},
    // {path:'purchases',component:PurchasesComponent},
    // {path:'cart', component:CartMainComponent},
    // {path: 'viewproduct', component: ViewProductComponent}
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [];
