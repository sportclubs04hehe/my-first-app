import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { SharedComponent } from '../shared/shared.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => './assets/' + this.user.avatar);

  onSelectedUser() {
    this.select.emit(this.user.id);
  }

}
