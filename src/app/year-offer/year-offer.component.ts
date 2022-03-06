import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-year-offer',
  templateUrl: './year-offer.component.html',
  styleUrls: ['./year-offer.component.scss'],
})
export class YearOfferComponent implements OnInit {
  // receive all data from the main screen component
  @Input() priceData: any;
  @Input() isFirst: boolean = false;

  years: string = '';
  months: string = '';

  //chosenUnitKey points to an object in priceData.value where the prices are located
  chosenUnitKey: string = '';

  constructor() {}

  ngOnInit(): void {
    //extract the number of years used in this deal and number of months for special cases
    [this.years, this.months] = this.priceData.key.split(/[ym]/g);

    //the first chosenUnitKey is the first key in the priceData.value object
    this.chosenUnitKey = Object.keys(this.priceData.value).sort(
      (leftKey, rightKey) => {
        const leftValue = parseInt(leftKey.split('u')[0]);
        const rightValue = parseInt(rightKey.split('u')[0]);

        return leftValue > rightValue ? 1 : -1;
      }
    )[0];
  }

  //function that ensures original order of the object keys in ngFor
  onCompare(
    _left: KeyValue<string, any>,
    _right: KeyValue<string, any>
  ): number {
    const leftValue = parseInt(_left.key.split('u')[0]);
    const rightValue = parseInt(_right.key.split('u')[0]);

    return leftValue > rightValue ? 1 : -1;
  }

  //function that returns the plan for this deal
  changeDisplayedYearPlan(): string {
    if (this.months && parseInt(this.years) > 1 && parseInt(this.months) > 1) {
      return `${this.years}-Years And ${this.months}-Months Plan`;
    } else if (
      this.months &&
      parseInt(this.years) > 1 &&
      parseInt(this.months) === 1
    ) {
      return `${this.years}-Years And ${this.months}-Month Plan`;
    } else if (
      this.months &&
      parseInt(this.years) === 1 &&
      parseInt(this.months) > 1
    ) {
      return `${this.years}-Year And ${this.months}-Months Plan`;
    } else if (
      this.months &&
      parseInt(this.years) === 1 &&
      parseInt(this.months) === 1
    ) {
      return `${this.years}-Year And ${this.months}-Month Plan`;
    } else if (!this.months && parseInt(this.years) > 1) {
      return `${this.years}-Years Plan`;
    }

    return `${this.years}-Year Plan`;
  }

  //function that calculates the discount in percentages
  calculateDiscountPercentage(): number {
    return Math.round(
      ((this.priceData.value[this.chosenUnitKey].oldPrice -
        this.priceData.value[this.chosenUnitKey].newPrice) /
        this.priceData.value[this.chosenUnitKey].oldPrice) *
        100
    );
  }

  //function that calculates the money saved with this deal
  calculateSave(): number {
    return Math.round(
      this.priceData.value[this.chosenUnitKey].oldPrice -
        this.priceData.value[this.chosenUnitKey].newPrice
    );
  }

  //getUnitCount and changeUnitCount are handlers for the number of units buttons
  //function that returns the number of devices of this deal in a string format
  getUnitCount(unitKey: any): string {
    return unitKey.split('u')[0];
  }

  //function that changes the chosenUnitKey
  changeUnitCount(unitKey: any): void {
    this.chosenUnitKey = unitKey;
  }
}
