import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {

  public empleado!: Empleado;
  public id!: number;

  constructor(private _service: EmpleadosService, private _router: Router) { }

  ngOnInit(): void {
    if (this._service.getToken() == null) {
      this._router.navigate(['/login']);
    }
    else {
      this._service.getEmpleado().subscribe((data) => {
        this.empleado = data;
      });
    }
  }

  logout() {
    this._service.logout();
    this._router.navigate(['/']);
  }
}
