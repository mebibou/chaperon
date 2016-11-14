import { Injectable }     from '@angular/core';

@Injectable()
export class MyToursService {
  public tours: Array<Object> = [{
    type: 'offer',
    title: 'Discover Hong Kong in 1 day',
    category: 'Tour',
    description: 'Best places to visit in just one day',
    published: true,
    expiryDate: '2016-12-20',
    expiryTime: '10:20',
    price: {
      lower: 200,
      upper: 500
    },
    currency: 'HKD'
  }];

  constructor() {}
}
