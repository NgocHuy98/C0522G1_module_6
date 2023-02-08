import {Component, OnInit} from '@angular/core';
import {BottleService} from '../../../service/bottle.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {IBottleHome} from '../../../dto/i-bottle-home';
import {CartService} from '../../../service/cart.service';
import {CustomerService} from '../../../service/customer.service';
import Swal from 'sweetalert2';
import {TokenStorageService} from '../../../service/token-storage.service';

@Component({
  selector: 'app-list-bottle',
  templateUrl: './list-bottle.component.html',
  styleUrls: ['./list-bottle.component.css']
})
export class ListBottleComponent implements OnInit {

  pageSize = 8;
  bottleList$: Observable<IBottleHome[]> | undefined;
  total$: Observable<number>;
  bottleName = '';
  startPrice = 0;
  endPrice = 0;
  action: boolean;
  content: boolean;
  quantityCart = 1;
  bottleId: number;
  username: string;
  roles: string[] = [];
  isCustomer = false;
  isAdmin = false;
  idDelete: number;


  constructor(private bottleService: BottleService,
              private cartService: CartService,
              private tokenStorageService: TokenStorageService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private router: Router) {
    this.title.setTitle('Trang chủ');
  }

  ngOnInit(): void {
    this.username = '';
    this.showUsername();
    this.paginate();
    this.getCustomer();
    // const id = Number(this.activatedRoute.snapshot.params.id);
    // this.bottleService.findById(id).subscribe(value => {
    //   console.log(value.id);
    //   this.bottleId = value.id;
    // });
  }

  back(): void {
    window.location.replace('');
  }

  showUsername() {
    this.username = this.tokenStorageService.getUser().username;
    this.roles = this.tokenStorageService.getUser().roles;
    this.isCustomer = this.roles.indexOf('ROLE_CUSTOMER') !== -1;
    this.isAdmin = this.roles.indexOf('ROLE_ADMIN') !== -1;
  }

  paginate() {
    this.bottleService.findAllListBottle(this.bottleName, this.startPrice, this.endPrice, this.pageSize)
      .subscribe(data => {
        console.log(data);
        if (data != null) {
          this.action = true;
          this.bottleList$ = new BehaviorSubject<IBottleHome[]>(data.content);
          this.total$ = new BehaviorSubject<number>(data.totalElements);
        } else {
          this.action = false;
        }
      });
  }

  getCustomer(): void {
    this.username = this.tokenStorageService.getUser().username;
  }

  addToCart(bottleId: number): void {
    this.bottleService.addToCart(this.quantityCart, this.username, bottleId).subscribe(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'Thêm vào giỏ hàng thành công!'
      }).then(r => {
        location.reload();
      });
    }, error => {
      console.log(error);
    });
  }


  // paginate() {
  //   this.bottleService.findAllListBottle(this.bottleName, this.pageSize)
  //     .subscribe(data => {
  //       console.log(data);
  //       if (data != null) {
  //         this.action = true;
  //         this.bottleList$ = new BehaviorSubject<IBottleHome[]>(data.content);
  //         this.total$ = new BehaviorSubject<number>(data.totalElements);
  //       } else {
  //         this.action = false;
  //       }
  //     });
  // }

  nextPage() {
    this.pageSize += 8;
    this.paginate();
  }

  deleteBottle(id: number): void {
    this.bottleService.deleteBottle(id).subscribe(value => {
      this.ngOnInit();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đã xóa thành công',
        showConfirmButton: false,
        timer: 2700
      });
    }, error => {
    }, () => {
    });
  }
}
