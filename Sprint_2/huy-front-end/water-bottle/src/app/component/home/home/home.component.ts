import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {TokenStorageService} from '../../../service/token-storage.service';
import {BottleService} from '../../../service/bottle.service';
import {Router} from '@angular/router';
import {HomeService} from '../../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  roles: string[] = [];
  isCustomer = false;
  isAdmin = false;



  constructor(private router: Router,
              private homeService: HomeService,
              private tokenService: TokenStorageService,
              private movieService: BottleService
  ) {
  }


  ngOnInit(): void {
    this.username = '';
    this.showUsername();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  showUsername() {
    this.username = this.tokenService.getUser().username;
    this.roles = this.tokenService.getUser().roles;
    this.isCustomer = this.roles.indexOf('ROLE_CUSTOMER') !== -1;
    this.isAdmin = this.roles.indexOf('ROLE_ADMIN') !== -1;
  }

  whenLogout() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: ' Đăng xuất thành công !',
      showConfirmButton: false,
      timer: 1000
    });
    this.tokenService.logOut();
    this.router.navigateByUrl('');
    this.username = '';
    this.isCustomer = false;
    this.isAdmin = false;
  }

}
