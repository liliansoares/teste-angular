import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }


  testeUm(teste, callback) {
    setTimeout(() => {
      console.log(teste + '*1');
      return callback('testeUm');

    }, 1234);

  }

  testeDois(callback) {
    setTimeout(() => {
      console.log('*2');
      return callback('testeDois');
    }, 100);

  }

  testeTres(callback) {
    setTimeout(() => {
      console.log('*3');
      return callback('testeTres');
    }, 1000);

  }

  testeQuatro(callback) {
    setTimeout(() => {
      console.log('*4');
      return callback ('testeQuatro');
    }, 870);

  }

  testeCinco(callback) {
    setTimeout(() => {
      console.log('*5');
      return callback('testeCinco');
    }, 330);

  }

  testeSeis(callback) {
    setTimeout(() => {
      console.log('*6');
      return callback('testeSeis');
    }, 420);

  }


}
