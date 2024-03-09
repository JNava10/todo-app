import { Component } from '@angular/core';
import {TuiInputModule} from "@taiga-ui/kit";
import {FormsModule} from "@angular/forms";
import {TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TaskService} from "../../services/task.service";

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
  constructor(private taskService: TaskService) {}

  taskName?: string;

  add(name: string): void {
    // this.taskService.createTask(name)
  }

}
