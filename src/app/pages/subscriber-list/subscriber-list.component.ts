import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PatatasSubscribersService } from 'src/app/services/patatas-subscribers.service';
import Swal from 'sweetalert2';
import { SubscriberFormComponent } from 'src/app/components/subscriber-form/subscriber-form.component';
import { IResult, ISubscriber } from 'src/app/interfaces/subscriber';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.scss'],
})
export class SubscriberListComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'area',
    'jobTitle',
    'action',
  ];
  dataSource!: MatTableDataSource<ISubscriber>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  suscribersList: ISubscriber[] = [];

  constructor(
    public dialog: MatDialog,
    private apiSubscribe: PatatasSubscribersService,
    private router:Router
  ) {
    this.getAllSubscribers();
  }

  getAllSubscribers() {
    this.apiSubscribe.getAllSubscriptor().subscribe((result: IResult) => {
      this.suscribersList = result.Data;
      this.dataSource = new MatTableDataSource(this.suscribersList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  createSubscriptor() {
    let dialogRef = this.dialog.open(SubscriberFormComponent, {
      height: '400px',
      width: '600px',
    });
  }

  editSubscriptor(row: any) {
    this.dialog.open(SubscriberFormComponent, {
      height: '400px',
      width: '600px',
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
        this.apiSubscribe.deleteSubscriptor(id).subscribe(() => {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your subscriptor has been deleted.',
            icon: 'success',
            timer: 3000,
          }).then(() => {
            this.getAllSubscribers();
          });
        });
      }
    });
  }

  viewSubscriptor(id: number) {
    this.router.navigateByUrl('/subscriber-detail/'+ id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
