import type { costumer } from '../../interfaces/costumer.interface';
import { Component, inject, OnInit, signal } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, TableModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  private readonly _storeService = inject(StoreService);
  value = '';
  dataList$ = signal<costumer[]>([]);

  ngOnInit() {
    this.handleClear();
  }

  handleSearch() {
    if (this.value === '') this.handleClear();
    const dataFilter = this.dataList$().filter(
      (data) =>
        data.name.toLowerCase().includes(this.value) ||
        data.lastName.toLowerCase().includes(this.value)
    );
    this.dataList$.set(dataFilter);
  }

  handleClear() {
    const data = this._storeService.getCostumers();
    this.dataList$.set(data());
  }
}
