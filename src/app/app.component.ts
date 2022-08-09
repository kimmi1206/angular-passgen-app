import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  // value.match(/^[0-9.,]+$/)
  onChangeLength(eventTarget: EventTarget | null) {
    const value = (eventTarget as HTMLInputElement).value;
    const isValidValue = value.match(/^[0-9]+$/);
    const parsedValue = isValidValue ? parseInt(value) : 0;
    this.length = parsedValue <= 4096 ? parsedValue : 4096;
    // this.length = !isNaN(parsedValue) ? parsedValue : 0;
    // console.log(this.length);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    // console.log("Letters", this.includeLetters);
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    // console.log("Numbers", this.includeNumbers);
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    // console.log("Symbols", this.includeSymbols);
  }

  // getPassword() : string {
  //   return this.password;
  // }

  // public get getPassword() : string {
  //   return this.password;
  // }
}
