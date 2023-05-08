import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { PlaceOrderComponent } from './BuyBook/place-order/place-order.component';

import { ShoppingCartComponent } from './BuyBook/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './BuyBook/wishlist/wishlist.component';

const routes: Routes = [
  {
    path:"books",
    component:AllBooksComponent
  },
  {
    path:"NewBookAdded",
    component:AllBooksComponent
  },
  {
    path:"SelectedBook",
    component:ShoppingCartComponent
  },
  {
    path:"WishlistBook",
    component:WishlistComponent
  },
  {
    path:"place-orderBook",
    component:PlaceOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
