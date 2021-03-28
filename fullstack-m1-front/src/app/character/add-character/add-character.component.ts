import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { MessageService } from 'src/app/services/message.service';

import { ICharacter } from '../character.model';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  character: ICharacter= {
    firstName: '',
    lastName: '',
    birthYear: 0
  };
  submitted = false;

  constructor(private characterService: CharacterService, private messageService:MessageService) { }

  ngOnInit(): void {
  }

  saveCharacter(): void {
    const character:ICharacter = {
      firstName: this.character.firstName,
      lastName: this.character.lastName,
      birthYear: this.character.birthYear
    };

    this.characterService.create(character)
      .subscribe(
        response => {
          this.messageService.open(response.message)
          this.submitted = true;
        },
        error => {
          this.messageService.open(error.message)
        });
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      firstName: '',
      lastName: '',
      birthYear: 0
    };
  }

}
