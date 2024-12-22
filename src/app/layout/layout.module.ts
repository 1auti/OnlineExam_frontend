  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FooterComponent } from './footer/footer.component';
  import { NavbarComponent } from './navbar/navbar.component';
  import { HomeComponent } from './home/home.component';



  @NgModule({
    declarations: [
      FooterComponent,
      NavbarComponent,
      HomeComponent
    ],
    imports: [
      CommonModule,
      
    ],
    exports:[
      NavbarComponent,
      FooterComponent,
      HomeComponent
    ]

  })
  export class LayoutModule { }
