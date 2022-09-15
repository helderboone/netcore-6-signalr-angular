import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        min: 0
      }
    }
  };
  chartLabels: string[] = ['Real time data for the chart'];
  public chartType: ChartType = 'bar';
  chartLegend: boolean = true;

  constructor(public signalRService: SignalRService, private http: HttpClient) {}

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:5001/api/chart')
      .subscribe(res => {
        console.log(res);
      });
  }
}
