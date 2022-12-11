import {IMaterial} from './i-material';
import {IBottleType} from './i-bottle-type';

export interface Bottle {
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
