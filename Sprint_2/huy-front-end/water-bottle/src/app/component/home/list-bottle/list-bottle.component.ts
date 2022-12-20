import {Component, OnInit} from '@angular/core';
import {BottleService} from '../../../service/bottle.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {IBottleHome} from '../../../dto/i-bottle-home';
import {CartService} from '../../../service/cart.service';
import {CustomerService} from '../../../service/customer.service';
import Swal from 'sweetalert2';

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
  customerId1: number;
  bottleId: number;


  constructor(private bottleService: BottleService,
              private cartService: CartService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private router: Router) {
    this.title.setTitle('Trang chủ');
  }

  ngOnInit(): void {
    this.paginate();
    this.getCustomer();
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.bottleService.findById(id).subscribe(value => {
      console.log(value.id);
      this.bottleId = value.id;
    });
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
    this.customerService.findCustomerByUsername().subscribe(customer => {
      console.log(customer);
      this.customerId1 = customer.id;
    });
  }

  addToCart(bottleId: number): void {
    this.bottleService.addToCart(this.quantityCart, this.customerId1, bottleId).subscribe(() => {
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
}
