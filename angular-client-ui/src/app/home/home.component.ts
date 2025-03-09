import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';




@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  /**
   *
   */
  constructor(private homeService: HomeService) {


  }


  ngOnInit(): void {

  }
}
