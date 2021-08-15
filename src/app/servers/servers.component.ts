import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  addNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}
}
