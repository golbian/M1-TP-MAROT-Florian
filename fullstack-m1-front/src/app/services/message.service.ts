import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
  })
export class MessageService {

    constructor(
      public snackBar: MatSnackBar,
      private zone: NgZone
    ) {}

    public open(message:string) {
        this.zone.run(() => {
            this.snackBar.open(message, undefined ,  {
                duration: 3000
              });
        });
    }
}