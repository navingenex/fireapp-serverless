import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firapp-serverless';
  data: any = [];
  constructor(private firebas: FirebaseService) { }
  ngOnInit() {

    this.firebas.getItem().subscribe((res: any) => {
      for (var key in res) {
        this.data.push(res[key]);
      }
    });

  }
}
