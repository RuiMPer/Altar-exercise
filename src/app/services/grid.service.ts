import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private gridSource = new BehaviorSubject([]);
  gridMessage = this.gridSource.asObservable();

  constructor() { }
  
  changeMessage(grid: []) {
    this.gridSource.next(grid)
  }
}
