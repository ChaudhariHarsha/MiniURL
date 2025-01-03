import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';

const routes: Routes = [
  { path: '', redirectTo: '/mini-url', pathMatch: 'full' },
  { path: 'mini-url', component: UrlShortenerComponent, children:[
    { path: 'analytics', component: UrlShortenerComponent}
  ] },
  { path: '**', redirectTo: '/mini-url', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
