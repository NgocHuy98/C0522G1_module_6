import {Component, OnInit} from '@angular/core';
import {BottleService} from '../../../service/bottle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl, FormGroup} from '@angular/forms';
import {IBottle} from '../../../model/i-bottle';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {IBottleType} from '../../../model/i-bottle-type';
import {IMaterial} from '../../../model/i-material';

@Component({
  selector: 'app-edit-bottle',
  templateUrl: './edit-bottle.component.html',
  styleUrls: ['./edit-bottle.component.css']
})
export class EditBottleComponent implements OnInit {

  bottleFormGroup: FormGroup;
  bottleId: number;
  bottle: IBottle;
  bottleTypes: IBottleType[];
  selectedImage: any = null;
  username: string;
  imgUrl: string | ArrayBuffer;
  submitCheck = false;
  materials: IMaterial[];

  constructor(private bottleService: BottleService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.bottleId = Number(this.activatedRoute.snapshot.params.id);
    this.bottleService.getById(this.bottleId).subscribe(value => {
      this.bottle = value;
      this.bottleFormGroup.patchValue(this.bottle);
      this.imgUrl = this.bottle.image;
      console.log(this.bottleFormGroup);
    });

    this.bottleFormGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      volume: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(''),
      material: new FormControl(''),
      bottleType: new FormControl(''),
      image: new FormControl('')
    });
  }

  editBottle() {
    this.bottle = this.bottleFormGroup.value;
    if (this.selectedImage) {
      const imgs = this.getCurrentDateTime() + this.selectedImage.name;
      const fileRef = this.storage.ref(imgs);
      this.storage.upload(imgs, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.bottleFormGroup.patchValue({image: url});
            this.bottle.image = url;
            this.bottleService.updateBottle(this.bottle).subscribe(() => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Nhân viên: ' + this.bottle.name,
                title: 'Đã chỉnh sửa thành công',
                showConfirmButton: false,
                timer: 2700
              });
              this.router.navigateByUrl('');
            });
          });
        })
      ).subscribe();
    } else {
      this.imgUrl = this.bottle.image;
      this.bottleService.updateBottle(this.bottle).subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Sản phẩm: ' + this.bottle.name,
          title: 'Đã chỉnh sửa thành công',
          showConfirmButton: false,
          timer: 2700
        });
        this.router.navigateByUrl('');
      });
    }
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imgUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }


}
