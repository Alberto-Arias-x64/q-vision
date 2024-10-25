import { StoreService } from '../../services/store.service';
import { InputTextModule } from 'primeng/inputtext';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _storageService = inject(StoreService);
  private readonly _router = inject(Router);

  form = this._formBuilder.group({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
  });

  handleSubmit(form: FormGroup) {
    if (form.invalid) {
      alert('Invalid form');
      form.markAllAsTouched();
      return;
    }
    this._storageService.addCostumer(form.value);
    alert('Costumer added');
    form.reset();
    this._router.navigate(['/search']);
  }
}
