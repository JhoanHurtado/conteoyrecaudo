import { Component, OnInit } from '@angular/core';
import { Recaudo} from '../../interfaces/recaudo';
import { RecaudoService } from "src/app/services/recaudo.service";

@Component({
  selector: 'app-sho-data-table',
  templateUrl: './sho-data-table.component.html',
  styleUrls: ['./sho-data-table.component.css']
})
export class ShoDataTableComponent implements OnInit {

  listReport: Recaudo[] = [];
  limit: number = 10;
  skip: number = 0;

  filterRecaudo  = '';

  constructor(private _recaudoService: RecaudoService) { }

  ngOnInit(): void {
    this.getRecaudo();
  }

  getRecaudo(){
    this._recaudoService.getListRecaudos(this.skip*10,this.limit).subscribe((data: any) => {
      this.listReport = data;
    },(err: any)=>{
      console.log(err);
    });
  }


  paginateNext(){
    this.skip=this.skip+1;
    this.getRecaudo();
  }
  paginateBack(){
    if(this.skip != 0){
      this.skip=this.skip-1;
      this.getRecaudo();
    }
  }

}
