import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor() { }

  
  @Input() data =[];

  Highcharts = Highcharts;

  chartOptions:{};

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Corona Data'
      },
      subtitle: {
          text: 'Demo'
      },
      tooltip: {
          split: true,
          valueSuffix: ' Millions'
      },
      exporting: {
        enabled : true
      },
      credits:{
        enabled:false
      },

     series: this.data
  };

  HC_exporting(Highcharts);

  setTimeout( () => {
    window.dispatchEvent(
      new Event('resize')
    );
  },300)
  }

}
