import {Component, OnInit} from '@angular/core';
import {BottleService} from '../../../service/bottle.service';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {IBottleHome} from '../../../dto/i-bottle-home';

@Component({
  selector: 'app-list-bottle',
  templateUrl: './list-bottle.component.html',
  styleUrls: ['./list-bottle.component.css']
})
export class ListBottleComponent implements OnInit {

  pageSize = 8;
  movieList$: Observable<IBottleHome[]> | undefined;
  total$: Observable<number>;
  movieNameSearch = '';
  action: boolean;
  numberRecord = 0;
  content: boolean;
  totalRecord = 0;


  constructor(private bottleService: BottleService,
              private title: Title,
              private router: Router) {
    this.title.setTitle('Trang chủ');
  }

  ngOnInit(): void {
    this.paginate(this.movieNameSearch, this.pageSize);
  }

  paginate(movieNameSearch, pageSize) {
    this.bottleService.findAllListBottle(movieNameSearch, pageSize).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.action = true;
        this.movieList$ = new BehaviorSubject<IBottleHome[]>(data.content);
        this.total$ = new BehaviorSubject<number>(data.totalElements);
      } else {
        this.action = false;
      }
    });
  }

}
