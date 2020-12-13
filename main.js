const moment = require('moment');
const axios = require('axios');
const _ = require('lodash');
//console.log(date.diff(moment('2020-10-20'), 'days'));

class EventSchedule {
  constructor() {
    this.firstDayOfTheYear = moment('2017-01-01');
    this.days = 365;
    this.dates = [];

    for (let i = 0; i < this.days; i++) {
      this.dates.push([]);
    }
  }

  getAvailableDate = () => {
    let startDate = null;
    let maxAttendees = 0;
    let prevCount = this.dates[0].length;

    for (let i = 1; i < this.days; i++) {
      let currCount = this.dates[i].length;
      let availableBothDays = _.intersection(this.dates[i] - this.dates[i - 1]);
      //console.log(availableBothDays);
      let totalCountBothDays = availableBothDays.length;
      if (totalCountBothDays > maxAttendees && prevCount > 0 && currCount > 0) {
        maxAttendees = totalCountBothDays;
        startDate = moment(this.firstDayOfTheYear).add(i - 1, 'days');
      }
      prevCount = currCount;
    }
    return startDate;
  };

  mapDate = (date) => date.diff(this.firstDayOfTheYear, 'days');

  setMapData = (email, date) => {
    this.dates[this.mapDate(moment(date))].push(email);
    console.log(this.dates);
  };

  getAttendees = (date) => this.dates(this.mapDate(moment(date)));
}

axios
  .get(
    'https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=bd5bc96bc54086346a1b6830f815'
  )
  .then((res) => {
    const { data } = res;
    const { partners } = data;

    const countries = {};

    partners.forEach((partner) => {
      if (!countries[partner.country]) {
        countries[partner.country] = new EventSchedule();
      }

      partner.availableDates.forEach((date) =>
        countries[partner.country].setMapData(partner.email, date)
      );
    });

    Object.keys(countries).forEach((country) => {
      //console.log(country);
      let availableDate = countries[country].getAvailableDate();
      // console.log(availableDate);
      availableDate = availableDate.format('YYYY-MM-DD');
      let attendees = countries[country].getAttendees(availableDate);
      if (!attendees) attendees = [];
      res = {
        countries: [],
      };

      payloadData = {
        attendeeCount: attendees.length,
        attendees: attendees,
        name: country,
        startDate: availableDate,
      };

      res.countries.push(payloadData);
      console.log(res);
    });
  })
  .catch((err) => console.log(err));

/* axios
  .post('https://jsonplaceholder.typicode.com/users/posts', myPost)
  .then((res) => {
    const { data } = res;
    console.log(data);
  })
  .catch((err) => console.log(err)); */
