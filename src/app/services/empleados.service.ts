import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/Login";
import { environment } from "../../environments/environment.development";
import { Empleado } from "../models/Empleado";

@Injectable()
export class EmpleadosService {

    private readonly token_key: string = "API_KEY";

    constructor(private _http: HttpClient) { }

    getEmpleado(): Observable<Empleado> {
        let request = "api/empleados/perfilempleado";
        let url = environment.apiEmpleados + request;

        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        let token = this.getToken();
        header = header.set("Authorization", "Bearer " + token);

        return this._http.get<Empleado>(url, { headers: header });

    }

    getSubordinados(): Observable<Array<Empleado>> {
        let request = "api/empleados/subordinados";
        let url = environment.apiEmpleados + request;

        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        let token = this.getToken();
        header = header.set("Authorization", "Bearer " + token);

        return this._http.get<Array<Empleado>>(url, { headers: header });
    }

    login(user: Login): Observable<any> {
        let json = JSON.stringify(user);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");

        let request = "auth/login";
        let url = environment.apiEmpleados + request;

        return this._http.post<any>(url, json, { headers: header });
    }

    saveToken(token: string): void {
        localStorage.setItem(this.token_key, token);
    }

    getToken(): string | null {
        let token = localStorage.getItem(this.token_key);
        return token;
    }

    logout(): void {
        localStorage.removeItem(this.token_key);
    }
}