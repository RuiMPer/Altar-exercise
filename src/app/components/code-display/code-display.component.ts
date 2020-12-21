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
  firstNumber: any
  secondNumber: any
  codeNumber: String
  constructor(private gridService:GridService) {
    this.time= new Date()
    this.firstCodeNumber=0
    this.codeNumber=""
   }

  ngOnInit(): void {
    this.gridService.gridSource.subscribe(g => {
      this.grid = g
    })
    // this.getSecondsNumber()
    this.getPosition()
  }

  getPosition() {
    this.codeNumber = this.gridService.getPosition()
    
    return this.codeNumber
  }
  getSecondsNumber() {
    this.gridService.getSecondsNumbers()
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
