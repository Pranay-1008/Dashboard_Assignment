import { Component, Input } from '@angular/core';
import { DashboardService } from 'src/app/share/services/dashboard.service';

@Component({
  selector: 'app-new-user-list',
  templateUrl: './new-user-list.component.html',
  styleUrls: ['./new-user-list.component.scss']
})
export class NewUserListComponent {

  @Input() newUserData:any;
  constructor() {
  }

  ngOnInit(): void {
  }

 getColor(progress:any) {
    if(progress <= 20){
      return 'red';
    }
    else if(progress > 20 && progress <= 40){
      return 'blue';
    }
    else if(progress > 40 && progress <= 60){
      return 'green';
    }
    else if(progress > 60 && progress <= 80){
      return 'orange';
    }
    else if(progress > 80 && progress <= 100){
      return 'gray';
    }
    return
  }
}
