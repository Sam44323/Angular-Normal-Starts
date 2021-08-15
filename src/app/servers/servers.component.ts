import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  addNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  showServerName: boolean = false;
  serverInputName = '';
  showServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}

  onServerCreation = () => {
    this.showServerName = true;
  };

  onServerInputChange = (e: Event) => {
    // explicit type casting
    this.serverInputName = (<HTMLInputElement>e.target).value;
  };
}
