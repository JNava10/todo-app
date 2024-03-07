import { Component } from '@angular/core';
import {TuiInputModule} from "@taiga-ui/kit";
import {FormsModule} from "@angular/forms";
import {TuiTextfieldControllerModule} from "@taiga-ui/core";

@Component({
  selector: 'app-task-dash',
  standalone: true,
  imports: [
    TuiInputModule,
    FormsModule,
    TuiTextfieldControllerModule
  ],
  templateUrl: './task-dash.component.html',
  styleUrl: './task-dash.component.css'
})
export class TaskDashComponent {
  taskName?: string;

}
