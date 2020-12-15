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
}
