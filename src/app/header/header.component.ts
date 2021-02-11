import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {}

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
