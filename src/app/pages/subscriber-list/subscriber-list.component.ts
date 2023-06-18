import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { SubscriberCreateComponent } from 'src/app/components/subscriber-create/subscriber-create.component';
import { ISubscriber } from 'src/app/models/subscriber';
import { PatatasSubscribersService } from 'src/app/services/patatas-subscribers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.scss'],
})
export class SubscriberListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'area',
    'jobTitle',
    'action',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog, private apiSubscribe: PatatasSubscribersService) {
    // Create 100 users
    const users = ['id', 'name', 'email', 'phone', 'area']

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  openDialog() {
    let dialogRef = this.dialog.open(SubscriberCreateComponent, {
      height: '400px',
      width: '600px',
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // deleteSubscriptor(id: number) {
  //   this.apiSubscribe.deleteSubscriptor(id).subscribe({
  //     next: (res) => {
  //       Swal.fire('Eliminado con exito');
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 2000);
  //     },
  //     error: () => {
  //       Swal.fire('Eliminado sin exito');
  //     },
  //   });
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
