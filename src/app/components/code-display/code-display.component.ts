import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css']
})
export class CodeDisplayComponent implements OnInit {
  time: Date
  firstCodeNumber:number
  grid:any
  constructor(private gridService:GridService) {
    this.time= new Date()
    this.firstCodeNumber=0
   }

  ngOnInit(): void {
    this.gridService.gridSource.subscribe(g => {
      this.grid = g
    })
    this.getCode()
  }

  getCode() {
    //Get Seconds of Time
    let seconds = this.time.getSeconds()

    console.log(this.time)
    console.log(seconds)
    
    //Get X and Y from the seconds
    let firstNumber: any
    let secondNumber: any
    
    if(seconds < 10) {
      firstNumber = "0"
      secondNumber = String(seconds).charAt(0)
    } else {
      firstNumber = String(seconds).charAt(0)
      secondNumber = String(seconds).charAt(1)
    }

    console.log("x",firstNumber)
    console.log("y",secondNumber)

    console.log("grid",this.grid)
    //Get the letters on the position [x,y] [y,x]
    let firstPosition = this.grid[firstNumber][secondNumber]
    let secondPosition = "C"

    console.log("firstPosition",firstPosition)
    //Count the occurences of the letters
  
    let firstPositionOccurence = 18

    let secondPositionOccurence = 9
    
    let result = this.getNumbers(firstPositionOccurence)
    console.log(result)
  
    console.log(this.firstCodeNumber)
  
  }

  getNumbers(number:any) {
    if(number <= 9) {
      return number
    } else {
      console.log("chegou")
      while(number / 9 > 9 ) { 
        //não está a chegar
        console.log("chegou")
        number = Math.round(number/9)
      }
      return number
    }
  }
}
