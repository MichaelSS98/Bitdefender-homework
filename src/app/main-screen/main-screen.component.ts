import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { data } from '../../data/price-data';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {
  allUSDPricesData: any = []; //class variable to hold the data from the API
  yearFilteredPricesData: any = {}; //object in which we store all the pricing information
  dataURL = `https://www.bitdefender.com/bin/checkout.TSMD2021.2.USD.US.consumer.null.json`;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    //extract the data from the API as soon as the component class is instantiated
    //this method does not work due to CORS and is therefore comented out
    // this.configService
    //   .getInformationFromApi(this.dataURL)
    //   .subscribe((data) => console.log(data));

    //we filter the data from the JSON files and only extract the USD currency entries
    this.allUSDPricesData = data.PricingConfigurations[0].Prices.Regular.filter(
      (priceEntry) => priceEntry.Currency === 'USD'
    );

    //we iterate through the filteredArray and construct yearFilteredPricesData
    this.allUSDPricesData.forEach((USDPriceData: any) => {
      //we extract the unit and year using array destructuring
      const [_, units, year] =
        USDPriceData.OptionCodes[0].Options[0].split('-');

      //we dynamically compute the yearFilteredPricesData object
      this.yearFilteredPricesData[year] = {
        ...this.yearFilteredPricesData[year],
        [units]: {
          oldPrice: USDPriceData.Amount.toFixed(2) * 1,
          newPrice: USDPriceData.discountedPrice
            ? USDPriceData.discountedPrice.toFixed(2) * 1
            : USDPriceData.Amount.toFixed(2) * 1,
          storeUrl: USDPriceData.storeUrl,
        },
      };
    });
  }

  //function that returns the column number for completing the bootstrap col-md class
  getNumberOfYears(): number {
    return Math.floor(12 / Object.keys(this.yearFilteredPricesData).length);
  }
}
