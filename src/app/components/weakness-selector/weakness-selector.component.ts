import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { weakness } from 'src/app/data/weakness';
import { Weakness } from 'src/app/models/Weakness';

@Component({
  selector: 'app-weakness-selector',
  templateUrl: './weakness-selector.component.html',
  styleUrls: ['./weakness-selector.component.scss']
})
export class WeaknessSelectorComponent implements OnInit, OnChanges {

  @Input() selectedweakness: any;
  @Output() selectedweaknessChange = new EventEmitter<any>();

  @Input() disabledWeakness: Weakness[] = [];

  weakness: any[] = weakness;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.weakness.forEach((item) => {
      if (this.disabledWeakness.filter(w =>  w).find(dw => dw.name === item.name)) {
        item.disabled = true;
      } else {
        item.disabled = false;
      }
    });
  }

  weaknessSelected() {
    this.selectedweaknessChange.emit(this.selectedweakness);
  }

}
