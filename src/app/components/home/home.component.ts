import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecaudoService } from 'src/app/services/recaudo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadDataForm: FormGroup;

  constructor(private fb: FormBuilder, private _recaudoService: RecaudoService,private router: Router) {
         this.loadDataForm = this.fb.group({
          date: ['', Validators.required],

        });
  }

  ngOnInit(): void {
  }

  loadData() {
      // dateS: this.loadDataForm.get('date')?.value
console.log(this.loadDataForm.get('date')?.value);
      this._recaudoService.loadData(this.loadDataForm.get('date')?.value).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      });

  }
}
