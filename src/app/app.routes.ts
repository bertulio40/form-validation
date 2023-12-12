import { ApplicationConfig } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    RouterModule.forRoot(routes),  // Configurar as rotas usando RouterModule.forRoot
    provideClientHydration()
  ]
};
