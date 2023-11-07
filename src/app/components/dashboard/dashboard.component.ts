import { Component } from '@angular/core';
import { DashboardService } from 'src/app/share/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  topCardData:any;
  recentOrderData:any;
  newUserData:any;
  
  constructor(private dashboardService:DashboardService) {
  }

  ngOnInit(): void {
    this.getDashBoardData()
  }

  getDashBoardData() {
    try {this.dashboardService.getDashboardData().subscribe(
        res => {
          this.topCardData= res.top_cards,
          this.recentOrderData=res.recent_orders,
          this.newUserData=res.new_users
          
        },
        (err) => {
        }
      )
    } catch (error) {
      console.log(error)
    }
  }
}
