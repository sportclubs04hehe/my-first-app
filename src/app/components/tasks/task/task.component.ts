import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { SharedComponent } from '../../shared/shared.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SharedComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }

}
