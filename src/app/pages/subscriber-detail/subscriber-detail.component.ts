import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubscriber } from 'src/app/interfaces/subscriber';
import { PatatasSubscribersService } from 'src/app/services/patatas-subscribers.service';

@Component({
  selector: 'app-subscriber-detail',
  templateUrl: './subscriber-detail.component.html',
  styleUrls: ['./subscriber-detail.component.scss'],
})
export class SubscriberDetailComponent implements OnInit {
  subscriber: ISubscriber | undefined;
  countryCode: string = '';
  countryName: string = '';
  countries: any[] = [];

  constructor(
    private apiSubscribers: PatatasSubscribersService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.getSubscriptor();
    this.getcountries();
  }

  /* Function to obtain a subscriber, the id is received by parameter */
  getSubscriptor() {
    const idSubscriber = this.activatedRoute.snapshot.params['id'];
    this.apiSubscribers
      .getSubscriptor(idSubscriber)
      .subscribe((res: ISubscriber) => {
        this.subscriber = res;
        this.countryCode = this.subscriber.CountryCode;
      });
  }
/* Function to get the countryName to display it in the view */
  getcountries() {
    this.apiSubscribers.getCountry().subscribe((res) => {
      this.countries = res.Data;
      let matchingCountry;
      this.countries.forEach((country) => {
        if (country.Code === this.countryCode) {
          matchingCountry = country;
          this.countryName = matchingCountry.Name;
        }
      });
    });
  }
/* back function */
  back() {
    window.history.back();
  }
}
