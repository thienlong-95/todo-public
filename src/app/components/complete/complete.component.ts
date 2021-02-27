import { DataService } from './../../services/data.service';
import { Todo } from './../../Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
})
export class CompleteComponent implements OnInit {
  todos: Todo[];
  complete: boolean = true;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTodos().subscribe((todos) => {
      this.todos = todos.filter((todo) => todo.completed);
    });
  }
}
