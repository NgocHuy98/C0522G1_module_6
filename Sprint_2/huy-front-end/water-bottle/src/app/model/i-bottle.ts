import {IMaterial} from './i-material';
import {IBottleType} from './i-bottle-type';

export interface IBottle {
id?: number;
name?: string;
volume?: string;
color?: string;
price?: number;
image?: string;
description?: string;
quantity?: number;
material?: IMaterial;
  bottleType?: IBottleType;

}
