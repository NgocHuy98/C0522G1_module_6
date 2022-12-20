import {Component, OnInit} from '@angular/core';
import {BottleDto} from '../../../dto/bottle-dto';
import {DomSanitizer, SafeResourceUrl, Title} from '@angular/platform-browser';
import {BottleService} from '../../../service/bottle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../../../service/cart.service';
import {ICustomer} from '../../../model/i-customer';
import {IBottle} from '../../../model/i-bottle';
import {CustomerService} from '../../../service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  bottles: BottleDto;
  url: SafeResourceUrl;
  quantityCart = 1;
  customerId1: number;
  bottleId: number;

  constructor(private bottleService: BottleService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService,
              private customerService: CustomerService,
              private domSanitizer: DomSanitizer,
              private title: Title,
              private router: Router) {
  }

  ngOnInit(): void {
    this.title.setTitle('Chi tiết sản phẩm');
    this.getCustomer();
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.bottleService.findById(id).subscribe(value => {
      console.log(value);
      this.bottles = value;
      this.bottleId = value.id;
      // this.url = this.transform(this.bottles.trailer);
    });
  }

  getCustomer(): void {
    this.customerService.findCustomerByUsername().subscribe(customer => {
      console.log(customer);
      this.customerId1 = customer.id;

    });
  }

  addToCart(): void {
    this.bottleService.addToCart(this.quantityCart, this.customerId1, this.bottleId).subscribe(() => {
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


}
