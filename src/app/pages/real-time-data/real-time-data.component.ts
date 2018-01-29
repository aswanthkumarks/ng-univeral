import { Component, OnInit, OnDestroy } from '@angular/core';
import { People, gender } from '../../interfaces/people';
import { RtDataService } from '../../services/rt-data.service';

@Component({
  selector: 'app-real-time-data',
  templateUrl: './real-time-data.component.html',
  styleUrls: ['./real-time-data.component.scss']
})
export class RealTimeDataComponent implements OnInit, OnDestroy {
  peoples: Array<People> = [];
  subscriptionFlag: any;

  constructor(private dataService: RtDataService) { }

  ngOnInit() {
    this.subscriptionFlag = this.dataService.getData().subscribe(
      (data: Array<People>) => {
        this.peoples = data;
      }
    );
    this.dataService.doConnect();
  }

  ngOnDestroy() {
    this.subscriptionFlag.unsubscribe();
  }

}
