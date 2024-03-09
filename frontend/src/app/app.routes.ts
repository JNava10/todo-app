import { Routes } from '@angular/router';
import {TaskDashComponent} from "./components/task-dash/task-dash.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  { path: 'my-tasks', component: TaskDashComponent },
  { path: 'login', component: LoginComponent },
];
