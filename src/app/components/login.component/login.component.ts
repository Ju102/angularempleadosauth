import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  @ViewChild('cajauser') cajaUser!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(private _service: EmpleadosService, private _router: Router) { }


  tryLogin(): void {
    let tryUser = this.cajaUser.nativeElement.value;
    let tryPassword = this.cajaPassword.nativeElement.value;

    let tryLogin = new Login(tryUser, tryPassword);

    this._service.login(tryLogin).subscribe((response) => {
      if (response.response) {
        console.log("Credenciales correctas. Redirigiendo a perfil...");
        this._service.saveToken(response.response);
        this._router.navigate(['profile']);
      }
      else {
        alert("Username o password incorrecto.");
      }
    })
  }
}
