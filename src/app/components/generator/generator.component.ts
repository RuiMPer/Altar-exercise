import { Component, OnInit,  } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';



@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  grid:any
  constructor(private gridService:GridService) {
    
   }

  ngOnInit(): void {
    this.gridService.gridSource.subscribe(g => {
      this.grid = g
    })
  }

  getGrid() {
    this.gridService.getGrid()
  }

}
