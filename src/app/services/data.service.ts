import { Todo } from './../Todo';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[];
  todoUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl);
  }
  saveTodos(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }
  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`;

    return this.http.put<Todo>(url, todo, httpOptions);
  }

  removeTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todoUrl}/${id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  updateCompleted(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`;

    return this.http.put<Todo>(url, todo, httpOptions);
  }
}
