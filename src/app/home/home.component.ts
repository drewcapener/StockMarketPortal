import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Stock } from '../stock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = new User('', '');
  stocks = [new Stock('TSLA'), new Stock('AMZN'), new Stock('NVDA'), new Stock('TSLA'), new Stock('AMZN'), new Stock('NVDA')];
  usernameValid: boolean = false;
  passwordValid: boolean = false;
  isOn: boolean = false;
  isValidUser: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  checkUsername(): void {
    if (this.user.username !== '') {
      this.usernameValid = true;
    }
  }

  checkPassword(): void {
    if (this.user.password !== '') {
      this.passwordValid = true;
    }
  }

  stopClick(): void {
    this.isOn = false;
  }

  onSubmit(): void {
    this.isValidUser = this.verifyUser(this.user.username, this.user.password);
  }

  verifyUser(username: string, password: string): boolean {
    if (username === 'drew' && password === 'drew') {
      return true;
    } else { 
      return false;
    }
  }

}
