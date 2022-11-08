import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServiceMascotaService } from 'src/app/services/service-mascota.service';






@Component({
  selector: 'app-list-mascota',
  templateUrl: './list-mascota.component.html',
  styleUrls: ['./list-mascota.component.css']
})
export class ListMascotaComponent implements OnInit {

  displayedColumns: string[] = ['id_mascota', 'nombre', 'raza', 'fechaN','id_celda','id_cliente'];
  dataSource = new MatTableDataSource();

  constructor(private rest: ServiceMascotaService) { }

  ngOnInit(): void {
    this.cargardatos();
  }

  public cargardatos(){
    this.rest.get('http://localhost:1020/mascota/lista').subscribe(respuesta => {
      console.log(respuesta);
      this.dataSource = new MatTableDataSource(respuesta.data);
    })
  }
}

