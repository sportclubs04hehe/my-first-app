import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    TasksComponent,
    UserComponent,
    CommonModule
  ]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId)
  }

  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  }

}
