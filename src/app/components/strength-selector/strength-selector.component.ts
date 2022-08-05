import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { strength } from 'src/app/data/strength';
import { Strength } from 'src/app/models/Strength';

@Component({
  selector: 'app-strength-selector',
  templateUrl: './strength-selector.component.html',
  styleUrls: ['./strength-selector.component.scss']
})
export class StrengthSelectorComponent implements OnInit, OnChanges {

  @Input() selectedStrength: any;
  @Output() selectedStrengthChange = new EventEmitter<any>();

  @Input() disabledStrength: Strength[] = [];

  strength: any[] = strength;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    this.strength.forEach((item) => {
      if (this.disabledStrength.find(ds => ds.name === item.name)) {
        item.disabled = true;
      } else {
        item.disabled = false;
      }
    });
  }

  ngOnInit(): void {

  }

  strengthSelected() {
    this.selectedStrengthChange.emit(this.selectedStrength);
  }

}
