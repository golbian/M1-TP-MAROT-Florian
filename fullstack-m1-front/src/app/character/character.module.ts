import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AddCharacterComponent,
    CharacterDetailsComponent,
    CharacterListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    AddCharacterComponent,
    CharacterDetailsComponent,
    CharacterListComponent
  ]
})
export class CharacterModule { }
