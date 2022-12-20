
import {IBottle} from './i-bottle';
import {ICustomer} from './i-customer';

export interface ICart {
  id?: number;
  dateTime?: string;
  quantity?: number;
  bottleId?: IBottle;
  customerId?: ICustomer;
}
