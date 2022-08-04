import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { strength } from 'src/app/data/strength';

@Component({
  selector: 'app-strength-selector',
  templateUrl: './strength-selector.component.html',
  styleUrls: ['./strength-selector.component.scss']
})
export class StrengthSelectorComponent implements OnInit {

  @Input() selectedStrength: any;
  @Output() selectedStrengthChange = new EventEmitter<any>();

  strength: any[] = strength;

  constructor() { }

  ngOnInit(): void {

  }

  strengthSelected() {
    this.selectedStrengthChange.emit(this.selectedStrength);
  }

}
