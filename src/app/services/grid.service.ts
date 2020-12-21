import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  grid:any
  gridSource: BehaviorSubject<Array<Array<String>>>
  time: Date
  squareContent: Array<String>
  characterArray:Array<String>
  firstNumber: any
  secondNumber: any
  codeNumber: String

  constructor() { 
    this.grid = [
      ["",0,1,2,3,4,5,6,7,8,9],
      [0],
      [1],
      [2],
      [3],
      [4],
      [5],
      [6],
      [7],
      [8],
      [9],
    ]
    this.squareContent=[]
    this.time= new Date()
    this.characterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    this.gridSource = new BehaviorSubject(this.grid)
    this.codeNumber = ""
  }

  getCode(firstNumber:any, secondNumber:any) {
    let codeDisplay = this.grid[firstNumber][secondNumber]
    
    console.log(codeDisplay)
  }
  getGrid() {
    this.getSquareContent()
    this.pushContentToGrid()
  }
  
  pushContentToGrid(): Promise<any> {
    return new Promise(()=> {
      let copySquareContent=this.squareContent
      let newGrid=this.grid
      // console.log(newGrid)
      for(let l=1; l<this.grid.length;l++) {
        // console.log("this",l)
        let arrayCopy = copySquareContent.splice(0,10)
        // console.log("arraycopy",arrayCopy)

        let concatGrid = newGrid[l].concat(arrayCopy)
        // console.log("concat",newGrid[l].concat(arrayCopy))
        newGrid[l] = concatGrid
      }
    })
  }
  getSquareContent() {
    j:Number
    for(let j=0; j<=99; j++) {
      let character = this.getRandomCharacter()
      this.squareContent.push(character)
    }
    
    // console.log("content",this.squareContent)
  }

  getRandomCharacter() {
    randomCharacter: String

    let randomCharacter = Math.floor(Math.random()* this.characterArray.length)

    return this.characterArray[randomCharacter]
  }
  getSecondsNumbers() {
    //Get Seconds of Time
     let seconds = this.time.getSeconds()
   
     console.log(this.time)
     console.log(seconds)
    
     //Get X and Y from the seconds
     
    
     if(seconds < 10) {
       this.firstNumber = 0
       this.secondNumber = parseInt(String(seconds).charAt(0))
     } else {
       this.firstNumber = parseInt(String(seconds).charAt(0))
       this.secondNumber = parseInt(String(seconds).charAt(1))
     }
     console.log("x",this.firstNumber)
     console.log("y",this.secondNumber)
     return this.firstNumber || this.secondNumber
    }

    getPosition() {
      this.getSecondsNumbers()
  
      console.log("grid",this.grid)
    
      //Get the letters on the position [x,y] [y,x]
      console.log(this.grid[this.firstNumber+1])
  
      let firstPosition = this.grid[this.firstNumber+1][this.secondNumber+1].toUpperCase()
      let secondPosition = this.grid[this.secondNumber+1][this.firstNumber+1].toUpperCase()
  
      console.log("firstPosition",firstPosition)
      console.log("secondPosition",secondPosition)
      //Count the occurences of the letters
      
      let codeNumber=firstPosition + "" + secondPosition
      console.log(codeNumber)
      return codeNumber
    
    }
  }
