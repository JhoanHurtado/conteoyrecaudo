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
  constructor(private _recaudoService: RecaudoService) { }

  ngOnInit(): void {
    this.getRecaudo();
  }

  getRecaudo(){
    this._recaudoService.getListRecaudos(0,30).subscribe((data: any) => {
      console.log(data);      
      this.listReport = data;
    },(err: any)=>{
      console.log(err);      
    });
    
  }

}
