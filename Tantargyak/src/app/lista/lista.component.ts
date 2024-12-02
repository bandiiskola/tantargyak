import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent{

  constructor(private apiService: ApiService){}
  id:string|null=null;
  adatok:any[] =[];

  ngOnInit(): void {
      const url=`localhost:3000/tantargyak`;
      console.log(url);
      this.apiService.getCucc(url).subscribe(
        response =>{
          console.log('Api válasz: ',response);
          this.adatok = response
        },
        error =>{
          console.error('Hiba az API hívás során:')
        }
      )
  }
}
