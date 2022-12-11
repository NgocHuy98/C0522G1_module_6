import { Component, OnInit } from '@angular/core';
import {BottleService} from '../../../service/bottle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl, Title} from '@angular/platform-browser';
import {IBottle} from '../../../model/i-bottle';
import {IBottleDto} from '../../../dto/i-bottle-dto';
import {BottleDto} from '../../../dto/bottle-dto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  bottles: BottleDto;
  url: SafeResourceUrl;

  constructor(private bottleService: BottleService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private title: Title,
              private router: Router) {
  }

  ngOnInit(): void {
    this.title.setTitle('Chi tiết sản phẩm');
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.bottleService.findById(id).subscribe(value => {
      console.log(value);
      this.bottles = value;
      // this.url = this.transform(this.bottles.trailer);
    });
  }

}
