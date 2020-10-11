import { async } from '@angular/core/testing';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    // public alertController: AlertController,
    public alertController: ActionSheetController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.geteRecipe(recipeId);

      if( !this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }
    });
  }

  async onDeleteClick(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm message',
      // subHeader: 'Are you sure?',
      // message: 'Do you want to remove a recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['recipes']);
        }
      }
    ]
    });
    await alert.present();
  }

}
