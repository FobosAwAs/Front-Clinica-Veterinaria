import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServiceMascotaService } from 'src/app/services/service-mascota.service';
import { AgregarEditarMascotaComponent } from '../agregar-editar-mascota/agregar-editar-mascota.component';



@Component({
  selector: 'app-list-mascota',
  templateUrl: './list-mascota.component.html',
  styleUrls: ['./list-mascota.component.css']
})
export class ListMascotaComponent implements OnInit {

  displayedColumns: string[] = ['id_mascota', 'nombre', 'raza', 'fechaN', 'id_celda', 'id_cliente', 'acciones'];

  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private rest: ServiceMascotaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargardatos();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public cargardatos() {
    this.rest.get('http://localhost:1020/mascota/lista').subscribe(respuesta => {
      console.log(respuesta);
      this.dataSource = new MatTableDataSource(respuesta.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarEditarMascotaComponent, {
      width: '550px',
    });
  }

}
