import { Todo } from './../../Todo';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  todos: Todo[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTodos().subscribe((todos) => {
      todos.forEach((todo) => (todo.open = false));
      this.todos = todos;
    });
  }

  receiveTodo($event) {
    this.todos.unshift($event);
  }
  editMessages($event) {
    this.dataService.updateTodo($event).subscribe((todo) => {
      this.todos.forEach((t, index) => {
        if (t.id === todo.id) {
          this.todos.splice(index, 1, todo);
        }
      });
    });
  }

  removeMessage($event) {
    this.dataService.removeTodo($event).subscribe(() => {
      this.todos.forEach((t, index) => {
        if (t.id === $event) {
          this.todos.splice(index, 1);
        }
      });
    });
  }
  receiveCompleted($event) {
    this.dataService.updateCompleted($event).subscribe((todo) => {
      this.todos.forEach((t, index) => {
        if (t.id === todo.id) {
          this.todos.splice(index, 1, todo);
        }
      });
    });
  }
}
