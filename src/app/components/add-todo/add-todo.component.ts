import { Todo } from './../../Todo';
import { DataService } from './../../services/data.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() sendTodo: EventEmitter<Todo> = new EventEmitter();
  @ViewChild('inputAdd') inputAdd: ElementRef<HTMLInputElement>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.inputAdd.nativeElement.focus();
  }

  onSubmit(e) {
    if (e.type === 'submit') return;
  }
  addTodo(title) {
    if (!title) {
      alert('Please add Todo');
    } else {
      this.dataService
        .saveTodos({
          id: Math.floor(Math.random() * 1000) + 1,
          title,
          completed: false,
          open: false,
        } as Todo)
        .subscribe((todo) => this.sendTodo.emit(todo));
      this.inputAdd.nativeElement.value = '';
    }
  }
}
