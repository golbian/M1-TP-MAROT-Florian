import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  currentCharacter = {
    _id: "",
    firstName: "",
    lastName: "",
    birthYear: 0
  };

  constructor(
    private characterService: CharacterService,
    private messageService:MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getCharacter(this.route.snapshot.paramMap.get('_id'));
  }

  getCharacter(id:any): void {
    this.characterService.get(id)
      .subscribe(
        response => {
          this.currentCharacter = response.data;
          this.messageService.open(response.message)
        },
        error => {
          this.messageService.open(error.message)
        });
  }

  updateCharacter(): void {
    this.characterService.update(this.currentCharacter._id, this.currentCharacter)
      .subscribe(
        response => {
          this.messageService.open(response.message)
        },
        error => {
          this.messageService.open(error.message)
        });
  }

  deleteCharacter(): void {
    this.characterService.delete(this.currentCharacter._id)
      .subscribe(
        response => {
          this.messageService.open(response.message)
          this.router.navigate(['/characters']);
        },
        error => {
          this.messageService.open(error.message)
        });
  }
}
