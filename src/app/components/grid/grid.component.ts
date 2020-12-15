import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid:any
  
  constructor(private gridService:GridService) {
   
   }

  ngOnInit(): void {
    // this.getSquareContent()
    // this.pushContentToGrid()
    this.gridService.gridSource.subscribe(g => {
      this.grid = g
    })
  }

}
