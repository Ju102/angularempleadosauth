import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-subordinates',
  standalone: false,
  templateUrl: './subordinates.component.html',
  styleUrl: './subordinates.component.css',
})
export class SubordinatesComponent implements OnInit {

  public empleados!: Array<Empleado>;

  constructor(private _router: Router, private _service: EmpleadosService) { }

  ngOnInit(): void {
    if (this._service.getToken() == null) {
      this._router.navigate(['/login']);
    }
    else {
      this._service.getSubordinados().subscribe((response) => {
        this.empleados = response;
      })
    }
  }

  logout() {
    this._service.logout();
    this._router.navigate(['/']);
  }
}
