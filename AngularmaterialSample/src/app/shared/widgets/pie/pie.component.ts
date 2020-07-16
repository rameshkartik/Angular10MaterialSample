import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions:{};

  @Input() data =[];
  
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          backgroundColor:null,
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          style: {
            color: "white"
        }

      },
      title: {
          text: 'Random Data'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  color: 'white',
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting: {
        enabled:true
      },
      credits: {
        enabled:true
      },
      series: this.data
  }
  HC_exporting(Highcharts);
  
  setTimeout( () => {
    window.dispatchEvent(
      new Event('resize')
    );
  },300);
  }

}
