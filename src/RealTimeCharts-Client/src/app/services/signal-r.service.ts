import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'
import { ChartModel } from '../_interfaces/chartmodel.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  public data: ChartModel[] | undefined;

  private hubConnection : signalR.HubConnection | undefined;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/chart')
    .build();

    this.hubConnection
    .start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection?.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    })
  }
}
