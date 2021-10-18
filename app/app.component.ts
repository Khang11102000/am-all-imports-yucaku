import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges{
  selectedDate: any;

  datesToHighlight = [];

  constructor() {}

  ngOnInit() {}

  onSelect(event) {
    this.selectedDate = event;
    this.datesToHighlight.push(this.selectedDate);
  }
  ngOnChanges(){}
  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map((strDate) => new Date(strDate))
        .some(
          (d) =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
        );

      return highlightDate ? 'special-date' : '';
    };
  }
}
