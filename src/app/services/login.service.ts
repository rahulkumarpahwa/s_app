import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    //   private readonly STORAGE_KEY = 'notes';
    //   private notes: Note[] = [];

    //   constructor() {
    //     this.loadNotes();
    //   }

    //   getNotes(): Note[] {
    //     return this.notes;
    //   }

    //   addNote(title: string, content: string): void {
    //     const note: Note = {
    //       id: Date.now(),
    //       title,
    //       content,
    //       createdAt: new Date()
    //     };

    //     this.notes.unshift(note);
    //     this.saveNotes();
    //   }

    //   deleteNote(id: number): void {
    //     this.notes = this.notes.filter(n => n.id !== id);
    //     this.saveNotes();
    //   }

    //   private saveNotes(): void {
    //     localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.notes));
    //   }

    //   private loadNotes(): void {
    //     const data = localStorage.getItem(this.STORAGE_KEY);
    //     this.notes = data ? JSON.parse(data) : [];
    //   }

    async onLogin(email: string, password: string) {
        try {
            // console.log(email);
            // console.log(password);
            const response = await axios.post(environment.apiUrl + "/login", { email: email, password: password }, { withCredentials: true, });
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
}