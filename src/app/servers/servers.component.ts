import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  addNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverInputName = '';

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}

  onServerCreation = () => {
    this.serverCreationStatus = 'Server was created!';
  };

  onServerInputChange = (e: Event) => {
    // explicity type casting
    this.serverInputName = (<HTMLInputElement>e.target).value;
  };
}
