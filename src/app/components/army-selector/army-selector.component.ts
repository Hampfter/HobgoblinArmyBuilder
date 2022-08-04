import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { units } from 'src/app/data/units';

@Component({
  selector: 'app-army-selector',
  templateUrl: './army-selector.component.html',
  styleUrls: ['./army-selector.component.scss']
})
export class ArmySelectorComponent implements OnInit {

  selectedUnit: any;
  @Output() selectedUnitChange = new EventEmitter<any>();
  @Output() onAddUnit = new EventEmitter<any>();

  units: any[] = units;

  constructor() { }

  ngOnInit(): void {

  }

  unitSelected() {
    this.selectedUnit.strength = [];
    this.selectedUnit.weakness = [];
    this.selectedUnitChange.emit(this.selectedUnit);
  }


  getTotalCost() {
    let totalCost = this.selectedUnit.cost;

    this.selectedUnit.strength.filter((s: any) => s).forEach((strength: { name: string, cost: number, ignoreMultiplier: boolean }) => {
      if (!strength.ignoreMultiplier) {
        totalCost += (Number(strength.cost) * this.selectedUnit.costMultiplier);
      }
      else {
        totalCost += strength.cost;
      }
    });

    this.selectedUnit.weakness.filter((w: any) => w).forEach((weakness: { name: string, cost: number, ignoreMultiplier: boolean }) => {
      if (!weakness.ignoreMultiplier) {
        totalCost -= (Number(weakness.cost) * this.selectedUnit.costMultiplier);
      }
      else {
        totalCost -= weakness.cost;
      }
    });

    return totalCost;
  }

  addUnit() {

    this.selectedUnit.weakness = this.selectedUnit.weakness.filter((weakness: any) => weakness);
    this.selectedUnit.strength = this.selectedUnit.strength.filter((strength: any) => strength);

    this.onAddUnit.emit({...this.selectedUnit});
    this.selectedUnit = null;
  }

}
