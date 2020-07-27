import { Component, OnInit, Injector } from '@angular/core';
import { SalersService } from 'src/app/salers/salers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salers-index',
  templateUrl: './salers-index.component.html',
  styleUrls: ['./salers-index.component.css']
})
export class SalersIndexComponent implements OnInit {

  protected router: Router;
  salers = [];

  constructor(injector: Injector, private salersService: SalersService) {
    this.router = injector.get(Router);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.salersService.getAllSalers()
      .subscribe(data => {
        if (data.rows) {
          this.salers = data.rows;
        }
      });
  }

  addSaler() {
    this.router.navigate(['salers/add']);
  }

  editSaler() {
    this.router.navigate(['salers/edit']);
  }
}
