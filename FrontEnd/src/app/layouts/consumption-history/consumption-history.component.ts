import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Consumptions } from 'src/app/models/consumptions';
import { ConsumptionHistoryService } from 'src/app/services/consumption-history.service';

@Component({
  selector: 'app-consumption-history',
  templateUrl: './consumption-history.component.html',
  styleUrls: ['./consumption-history.component.css']
})
export class ConsumptionHistoryComponent implements OnInit{
  
  public consumptions: Consumptions[] = [];

  constructor(private ConsumptionHistoryService: ConsumptionHistoryService) {}

  ngOnInit(): void {  
    this.getConsumptions()
  }

  getConsumptions(): void {
    this.ConsumptionHistoryService.getConsumptionHistory().subscribe(
      (res: Consumptions[]) => {
        this.consumptions = res;
      }, 
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    )
  }

  getConsumptionsByCouponCode(searchForm: NgForm): void {   
     
    this.ConsumptionHistoryService.getConsumptionHistoryByCouponCode(searchForm.value.code).subscribe(
      (res: Consumptions[]) => {
        this.consumptions = res;
        searchForm.reset()        
      }, 
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    )
  }

}
 