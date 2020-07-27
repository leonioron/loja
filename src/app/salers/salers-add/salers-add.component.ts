import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SalersService } from '../salers.service';

@Component({
  selector: 'app-salers-add',
  templateUrl: './salers-add.component.html',
  styleUrls: ['./salers-add.component.css']
})
export class SalersAddComponent implements OnInit {

  protected router: Router;
  private saler: any = {
    name: '',
    address: '',
    age: 0
  };

  constructor(injector: Injector, private salersService: SalersService) {
    this.router = injector.get(Router);
  }

  ngOnInit(): void {
  }

  changeName(event: any) {
    this.saler.name = event.target.value;
  }

  changeAddress(event: any) {
    this.saler.address = event.target.value;
  }

  changeAge(event: any) {
    this.saler.age = event.target.value;
  }

  back() {
    this.router.navigate(['salers']);
  }

  save() {
    console.log(this.saler);
  }
}
