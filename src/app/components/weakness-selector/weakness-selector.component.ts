import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { weakness } from 'src/app/data/weakness';

@Component({
  selector: 'app-weakness-selector',
  templateUrl: './weakness-selector.component.html',
  styleUrls: ['./weakness-selector.component.scss']
})
export class WeaknessSelectorComponent implements OnInit {

  @Input() selectedweakness: any;
  @Output() selectedweaknessChange = new EventEmitter<any>();

  weakness: any[] = weakness;

  constructor() { }

  ngOnInit(): void {

  }

  weaknessSelected() {
    this.selectedweaknessChange.emit(this.selectedweakness);
  }

}
