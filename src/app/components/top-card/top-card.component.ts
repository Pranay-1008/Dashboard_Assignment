import { Component, Input } from '@angular/core';
import { DashboardService } from 'src/app/share/services/dashboard.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent {

  @Input() topCardData:any;
  constructor() {
  }

  ngOnInit(): void {
  }

}
