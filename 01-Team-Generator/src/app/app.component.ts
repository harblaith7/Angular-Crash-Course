import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  members: string[] = [];
  newMemberText = '';
  teams: string[][] = [];
  numberOfTeams: '' | number = '';
  errorMessage = '';

  onInput(value: string) {
    this.newMemberText = value;
  }

  onTeamSizeInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  onClick() {
    if (!this.newMemberText.length) {
      this.errorMessage = "Name can't be empty";
      return;
    }

    this.errorMessage = '';
    this.members.push(this.newMemberText);
    this.newMemberText = '';
  }

  generateTeams() {
    this.teams = [];
    const allMembers = [...this.members];

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    this.errorMessage = '';

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
