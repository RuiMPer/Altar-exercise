import { Component, OnInit,  } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';
import { GridComponent } from '../grid/grid.component';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  grid:any
  message:string
  constructor(private data:GridService) {
    this.message=""
    this.grid=new GridComponent
   }

  ngOnInit(): void {
    
  }

  generateGrid() {
    console.log("ESTE",this.grid)
    
  }

}
