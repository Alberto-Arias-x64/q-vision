import { inject, Injectable, signal } from '@angular/core';
import { costumer } from '../interfaces/costumer.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly _apiService = inject(ApiService);

  private _state = signal<costumer[]>([]);

  addCostumer(costumer: costumer) {
    // DEV
    // this._apiService.createCostumer(costumer).subscribe((res) => {
    //   if (res.ok) {
    //     this._state.update((value) => [...value, costumer]);
    //   } else {
    //     alert('Error creating costumer');
    //   }
    // });
    this._state.update((value) => [...value, costumer]);
  }

  getCostumers() {
    return this._state.asReadonly();
  }

  initStore() {
    this._apiService.getCostumers().subscribe((res) => {
      this._state.set(res);
    });
  }
}
