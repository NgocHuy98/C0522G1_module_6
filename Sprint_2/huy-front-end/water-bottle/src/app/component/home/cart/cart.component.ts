import {Component, OnInit} from '@angular/core';
import {BottleService} from '../../../service/bottle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SafeResourceUrl, Title} from '@angular/platform-browser';
import {CartService} from '../../../service/cart.service';
import {ICartDto} from '../../../dto/i-cart-dto';
import {CustomerService} from '../../../service/customer.service';
import {render} from 'creditcardpayments/creditCardPayments';
import Swal from 'sweetalert2';
import {TokenStorageService} from '../../../service/token-storage.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  url: SafeResourceUrl;
  cart: ICartDto[];
  cartDto: ICartDto;
  totalProducts: number;
  totalPrice: number;
  price: number;
  totalPay: number;
  action = true;
  checkList: boolean;
  // customerId: number;
  username: string;

  constructor(private cartService: CartService,
              private customerService: CustomerService,
              private tokenStorageService: TokenStorageService,
              private bottleService: BottleService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private title: Title) {
  }

  ngOnInit(): void {
    this.getCustomer();
    this.getTotalPay();

    // this.title.setTitle('Chi tiết sản phẩm');
    // const id = Number(this.activatedRoute.snapshot.params.id);
    // this.cartService.findCartByUser(id).subscribe(value => {
    //   console.log(value);
    //   this.cart = value;
    //   // this.url = this.transform(this.bottles.trailer);
    // });
  }

  // getCustomer(): void {
  //   this.customerService.findCustomerByUsername().subscribe(customer => {
  //     // console.log(customer);
  //     if (customer != null) {
  //       this.cartService.getTotalPay(customer.id).subscribe(value1 => {
  //         this.totalPrice = value1;
  //         // console.log(this.totalPrice);
  //       });
  //       this.cartService.findCartByUser(customer.id).subscribe(value => {
  //         if (value != null) {
  //           this.checkList = true;
  //           this.cart = value;
  //         } else {
  //           this.checkList = false;
  //           this.action = false;
  //         }
  //         // console.log(value);
  //
  //         // for (const item of value) {
  //         //   this.totalPrice += item.discountMoney * item.quantity;
  //         //   // this.finalPrice += item.discountMoney * item.quantity;
  //         // }
  //       });
  //     }
  //   });
  // }

  getTotalPay(): void {
    this.username = this.tokenStorageService.getUser().username;
    this.cartService.getTotalPay(this.username).subscribe(value1 => {
      console.log(value1);
      this.totalPay = value1.totalPay;
      this.totalProducts = value1.totalProduct;
      // console.log(this.totalPrice);
    });
  }

  getCustomer(): void {
    this.username = this.tokenStorageService.getUser().username;
    // console.log(customer);
    if (this.username != null) {
      this.cartService.findCartByUser(this.username).subscribe(value => {
        if (value != null) {
          this.checkList = true;
          this.cart = value;
        } else {
          this.checkList = false;
          this.action = false;
        }
        // console.log(value);

        // for (const item of value) {
        //   this.totalPrice += item.discountMoney * item.quantity;
        //   // this.finalPrice += item.discountMoney * item.quantity;
        // }
      });
    }
  }

  increase(id: number): void {
    this.cartService.increase(id).subscribe(value => {
      this.ngOnInit();
      // window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  decrease(id: number): void {
    this.cartService.decrease(id).subscribe(value => {
      this.ngOnInit();
      // window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  payment(): void {
    this.action = false;
    render(
      {
        id: '#myPaypal',
        value: String((this.totalPay / 23580).toFixed()),
        currency: 'VND',
        onApprove: (details) => {
          this.paid();
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Cảm ơn quý khách !',
            timer: 2000,
            title: 'Đã thanh toán thành công',
            showConfirmButton: false,
          });
          this.router.navigateByUrl('cart');
        }
      }
    );

  }

  paid(): void {
    this.username = this.tokenStorageService.getUser().username;

    console.log(this.username);
    this.cartService.paid(this.username).subscribe(value => {
      console.log(value);
      window.setTimeout(this.loadPage, 500);
    });
  }

  deleteCart(id: number): void {
    this.cartService.deleteCart(id).subscribe(value => {
      window.setTimeout(this.loadPage, 500);
    }, error => {
      console.log(error);
    });
  }

  loadPage(): void {
    window.location.replace('/cart');
  }


}
