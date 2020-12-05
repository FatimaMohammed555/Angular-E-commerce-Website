import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/Shared/iorder';
import { OrderFromAPIService } from 'src/app/Services/order-from-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orderList:IOrder[];

  constructor(private orderService:OrderFromAPIService) { }

  ngOnInit(): void {

    this.orderService.GetOrdersForUser().subscribe(
      (response) => {
        console.log(response);
        this.orderList = response;
      },
      (err) => {console.log(err); }
    );

  }

}
