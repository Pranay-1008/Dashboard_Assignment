import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/share/services/dashboard.service';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {
  @ViewChild('recentDetail', { read: TemplateRef, static: false })
  recentDetail!: TemplateRef<any>;

  @Input() recentOrderData:any;
  closeResult: any;
  passData:any

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openModal(data:any){
    this.passData = data
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      size: 'xl'
    };
    this.modalService.open(this.recentDetail, ngbModalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
