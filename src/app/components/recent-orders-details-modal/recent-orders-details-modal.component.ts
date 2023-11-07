import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recent-orders-details-modal',
  templateUrl: './recent-orders-details-modal.component.html',
  styleUrls: ['./recent-orders-details-modal.component.scss']
})
export class RecentOrdersDetailsModalComponent {

  @Input() passData:any;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }
}
