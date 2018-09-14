// main.ts
// bootstrap angular module into browser

import {platformBrowserDynamic} from 
            '@angular/platform-browser-dynamic';
            
import { AppModule } from './app/app.module';

// Step 1: Load Module
platformBrowserDynamic()
            .bootstrapModule(AppModule)