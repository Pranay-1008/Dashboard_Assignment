import { Component, Input } from '@angular/core';
import { DashboardService } from 'src/app/share/services/dashboard.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent {

  @Input() topCardData:any;
  constructor(private dashboardService:DashboardService) {
  }

  ngOnInit(): void {
    // this.getDashBoardData()
  }

  // getDashBoardData() {
  //   try {this.dashboardService.getDashboardData().subscribe(
  //       res => {
  //         this.topCardData = res.top_cards
  //         this.onSelectCard(this.topCardData[0])
  //       },
  //       (err) => {
  //       }
  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  onSelectCard(data:any){
    
  }
}
