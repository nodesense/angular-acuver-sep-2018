import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
// app.module.ts

// module is collection of components
// depencencies to other modules
import {NgModule} from '@angular/core';
import {BrowserModule} from 
                        '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
 // meta data
@NgModule({
    imports: [
        // browser includes common, compiler modules
        BrowserModule,
        SharedModule,
        CartModule
        // InventoryModule, CartModule, etc
    ],

    declarations: [
        // components, directives, pipes
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        // Header, Footer, Home. About, etc
    ],

    bootstrap: [
        // root/main component
        // Step 2: Bootstrap main component
        AppComponent
    ]
})
export class AppModule {

}
