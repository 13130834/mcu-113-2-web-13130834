import { Component} from '@angular/core';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { ProductCardComponent } from "./product-card/product-card.component";


@Component({
  selector: 'app-root',
  imports: [ProductCardListComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
