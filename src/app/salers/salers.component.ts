import { Component, OnInit } from '@angular/core';
import { SalersService } from '../services/salers.service';

@Component({
  selector: 'app-salers',
  templateUrl: './salers.component.html',
  styleUrls: ['./salers.component.css']
})
export class SalersComponent implements OnInit {

  salers = [];

  constructor(private salersService: SalersService) { }

  ngOnInit(): void {
    // this.getSalers();
  }

  getSalers(): void {
    this.salersService.getSalers()
      .subscribe(data => {
        console.log(data);
        this.salers = data;
      });
  }

}
