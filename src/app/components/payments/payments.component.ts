import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  grid:any
  constructor() {     
    this.grid = [
    [0,1,2,3,4,5,6,7,8,9],
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
  ]}

  ngOnInit(): void {
  }

}
