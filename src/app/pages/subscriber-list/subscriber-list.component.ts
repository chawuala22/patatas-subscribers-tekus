import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { PatatasSubscribersService } from 'src/app/services/patatas-subscribers.service';
import Swal from 'sweetalert2';
import { SubscriberFormComponent } from 'src/app/components/subscriber-form/subscriber-form.component';

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

  constructor(
    public dialog: MatDialog,
    private apiSubscribe: PatatasSubscribersService
  ) {
    // Create 100 users
    const users = ['id', 'name', 'email', 'phone', 'area'];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createSubscriptor() {
    let dialogRef = this.dialog.open(SubscriberFormComponent, {
      height: '400px',
      width: '600px',
    });
  }

  editSubscriptor(row: any) {
    this.dialog.open(SubscriberFormComponent, {
      width: '30%',
      data: row,
    });
  }

  deleteSubscriptor(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your subscriptor has been deleted.', 'success');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
