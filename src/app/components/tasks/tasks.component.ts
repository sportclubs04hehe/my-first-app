import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {
    
  }

  get selectedUserTasks() {
    return this.taskService.selectedUserTasks(this.userId);
  }

  onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
