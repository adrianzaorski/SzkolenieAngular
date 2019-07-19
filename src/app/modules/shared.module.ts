import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SharedModule {
}
