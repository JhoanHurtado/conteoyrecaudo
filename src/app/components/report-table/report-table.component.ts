import { Component, OnInit } from '@angular/core';
import { RecaudoService } from "src/app/services/recaudo.service";
import { Reporte } from 'src/app/interfaces/reporte';


@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  report!: Reporte;

  constructor(private _recaudoService: RecaudoService) { }

  ngOnInit(): void {
    this.getReport();
  }

  getReport(){
    this._recaudoService.getListReport().subscribe((data: any) => {
      this.report = data;
    },(err: any)=>{
      console.log(err);
    });
  }

}
