import { Todo } from './../../Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() complete: boolean;
  @Input() active: boolean;
  @Output() editMessage: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() removeMessage: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() sendCompleted: EventEmitter<Todo> = new EventEmitter<Todo>();
  titleEdit: string;
  currentTodo: Todo = {
    id: 0,
    title: '',
    completed: false,
    open: false,
  };
  isOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  editTodo(id) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.open = !todo.open;
        this.titleEdit = todo.title;
      }
    });
  }
  sendEditTodo(id) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.open = !open;
        this.currentTodo.id = todo.id;
        this.currentTodo.title = this.titleEdit;
        this.editMessage.emit(this.currentTodo);
        this.currentTodo = {
          id: 0,
          title: '',
          completed: false,
          open: false,
        };
      }
    });
  }

  removeTodo(id) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        this.removeMessage.emit(id);
      }
    });
  }
  completeTodo(id, completed) {
    this.todos.forEach((todo) => {
      if (todo.id == id) {
        const buffer = {
          completed: !completed,
          id: todo.id,
          title: todo.title,
        };
        this.sendCompleted.emit(buffer);
      }
    });
  }
}
