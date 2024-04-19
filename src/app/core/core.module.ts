import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./components/header/header.component";

const GUARDS = [];

const NATIVE_PLUGINS = [];

const MATERIAL_MODULES = [];

const SERVICES = [];

const COMPONENTS = [
  HeaderComponent,
];

const DIRECTIVES = [];

@NgModule({
  declarations: [
    //DIRECTIVES,
    COMPONENTS
  ],
  exports: [
    //DIRECTIVES,
    COMPONENTS
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    RouterModule,
    //MATERIAL_MODULES
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CoreModule { }
