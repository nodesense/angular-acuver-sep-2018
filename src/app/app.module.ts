import { ProductModule } from './product/product.module';
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
import { NotFoundComponent } from './components/not-found/not-found.component';

import {Routes, RouterModule} from '@angular/router';

// ng 4.3 onwards
import {HttpClientModule} from '@angular/common/http';


// step 1: configure url to component mapping
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];

// meta data
@NgModule({
    imports: [
        // browser includes common, compiler modules
        BrowserModule,
        // Step 2: apply route config to Angular
        // forRoot create a dynamic route module
        // based on routes
        RouterModule.forRoot(routes),
        HttpClientModule,
        SharedModule,
        CartModule, // also include cart routes
        ProductModule
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
        NotFoundComponent,
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
