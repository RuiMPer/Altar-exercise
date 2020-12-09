import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  grid:any
  cells:any
  numRows:number
  numCols:number
  constructor() {
    this.cells = []
    this.numRows = 10;
		this.numCols = 10;
    this.grid = [
      [0,1,2,3,4,5,6,7,8,9],
      [1,"","","","","","","",""],
      [2,"","","","","","","",""],
      [3,"","","","","","","",""],
      [4,"","","","","","","",""],
      [5,"","","","","","","",""],
      [6,"","","","","","","",""],
      [7,"","","","","","","",""],
      [8,"","","","","","","",""],
      [9,"","","","","","","",""],
    ]
   }

  ngOnInit(): void {

  }

  generateGrid() {
    console.log("Grid")
  }

}
