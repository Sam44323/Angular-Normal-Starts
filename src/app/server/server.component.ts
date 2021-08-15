import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  serverId: number = Math.round(Math.random() * 10e6);
  private serverStatus: string = ['online', 'offline'][
    Math.round(Math.random() * 1)
  ];

  getServerStatus = () => {
    return this.serverStatus;
  };
  constructor() {}

  ngOnInit(): void {}
}
