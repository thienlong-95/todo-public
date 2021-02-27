import { DataService } from './../../services/data.service';
import { Todo } from './../../Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss'],
})
export class ActiveComponent implements OnInit {
  todos: Todo[];
  active: boolean = true;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTodos().subscribe((todos) => {
      this.todos = todos.filter((todo) => !todo.completed);
    });
  }
}
