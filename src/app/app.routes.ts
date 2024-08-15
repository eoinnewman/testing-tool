import { Routes } from '@angular/router';
import { TestingDashboardComponent } from './testing-dashboard/testing-dashboard.component';
import { TestPageComponent } from './test-page/test-page.component';

export const routes: Routes = [
    {path: 'testing-page', component: TestPageComponent},
    {path: 'testing-dashboard', component: TestingDashboardComponent} 
];
