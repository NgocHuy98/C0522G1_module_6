import {IMaterial} from '../model/i-material';
import {IBottleType} from '../model/i-bottle-type';

export interface IBottleDto {
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
