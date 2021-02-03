import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./recipes/recipes-resolver.service";

const appRoutes : Routes = [
    { path: '' , redirectTo: 'recipes' , pathMatch : 'full'},
    { path: 'recipes' , component: RecipesComponent, children : [
        {path: '', component: RecipeStartComponent },
        {path: 'new', component : RecipeDetailComponent },
        {path: ':id', component : RecipeDetailComponent, resolve : [RecipeResolverService] },
        {path: ':id/edit', component : RecipeDetailComponent, resolve : [RecipeResolverService] }
    ] },
    { path: 'shopping-list' , component: ShoppingListComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
