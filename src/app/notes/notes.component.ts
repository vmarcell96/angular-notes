import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  selectedNote?: Note;

  onSelect(note: Note): void {
    this.selectedNote = note;
    this.messageService.add(`NotesComponent: Selected note id=${note.id}`);
  }

  constructor(private messageService: MessageService ,private noteService: NoteService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }

}
