import {IMaterial} from '../model/i-material';
import {IBottleType} from '../model/i-bottle-type';

export interface BottleDto {
  id?: number;
  name?: string;
  volume?: string;
  price?: number;
  image?: string;
  description?: string;
  color?: string;
  material?: IMaterial;
  bottleType?: IBottleType;
}
