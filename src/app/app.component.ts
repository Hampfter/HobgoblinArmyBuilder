import { Component } from '@angular/core';
import { Strength } from './models/Strength';
import { Unit } from './models/Unit';
import { Weakness } from './models/Weakness';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HobgoblinArmyBuilder';

  army: { units: Unit[], name: string } = { units: [], name: 'Hobgoblin Army' };

  addUnit(unit: any) {
    unit.strength = unit.defaultStrength.concat(unit.strength);
    unit.weakness = unit.defaultWeakness.concat(unit.weakness);
    this.army.units.push(unit);
  }

  getTotalUnitCost(unit: any) {
    let totalCost = unit.cost;

    unit.strength.filter((s: Strength) => s).forEach((strength: { name: string, cost: number, ignoreMultiplier: boolean }) => {
      if (!strength.ignoreMultiplier) {
        totalCost += (Number(strength.cost) * unit.costMultiplier);
      }
      else {
        totalCost += strength.cost;
      }
    });

    unit.weakness.filter((w: Weakness) => w).forEach((weakness: { name: string, cost: number, ignoreMultiplier: boolean }) => {
      if (!weakness.ignoreMultiplier) {
        totalCost -= (Number(weakness.cost) * unit.costMultiplier);
      }
      else {
        totalCost -= weakness.cost;
      }
    });

    return totalCost;
  }

  concatNames(names: (Strength | Weakness)[]) {
    return names.map((name: { name: string }) => name.name).join(', ');
  }

  getTotalArmyCost() {
    let totalCost = 0;

    this.army.units.forEach((unit: any) => {
      totalCost += this.getTotalUnitCost(unit);
    });

    return totalCost;
  }

  removeUnit(unit: Unit) {
    this.army.units = this.army.units.filter((u: Unit) => u !== unit);
  }

  battleStandardAssigned(): boolean {
    return this.army.units.find(u => u.hasBattleStandard) !== undefined;
  }

  generalAssigned(): boolean {
    return this.army.units.find(u => u.isGeneral) !== undefined;
  }
}
