import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: any;
  currentCharacter = {
    _id: 0,
    firstName:"",
    lastName: "",
    birthYear:0
  };
  currentIndex = -1;
  firstName = '';

  constructor(private characterService: CharacterService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void {
    this.characterService.getAll()
      .subscribe(
        response => {
          this.characters = response.data;
          this.messageService.open(response.message)
        },
        error => {
          this.messageService.open(error.message)
        });
  }

  refreshList(): void {
    this.retrieveCharacters();
    this.currentIndex = -1;
  }

  setActiveCharacter(character:any, index:number): void {
    this.currentCharacter = character;
    this.currentIndex = index;
  }

  searchFirstName(): void {
    this.characterService.findByFirstName(this.firstName)
      .subscribe(
        response => {
          this.characters = response.data;
          this.messageService.open(response.message)
        },
        error => {
          this.messageService.open(error.message)
        });
  }
}
