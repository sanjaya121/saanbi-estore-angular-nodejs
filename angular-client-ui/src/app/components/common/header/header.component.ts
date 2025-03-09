import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared-services/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private auth:AuthService){

  }
  ngOnInit(): void {
      
  }
  logOut=()=>{
    this.auth.logOut();
  
  }

}
