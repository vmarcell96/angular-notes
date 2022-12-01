import { Injectable } from '@angular/core';
import { NOTES } from './mock-notes';
import { Note } from './note';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  getNotes(): Observable<Note[]> {
    const notes = of(NOTES);
    this.messageService.add('NoteService: fetched notes');
    return notes;
  }

  constructor(private messageService: MessageService) { }
}
