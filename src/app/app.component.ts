import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-rotas';

  
  constructor(private appService: AppService) {

  }

  abreMenuLateral() {
    console.log('aqui Open');
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }
  fecheMenuLateral() {
    console.log('aqui Close');
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  subMenu() {
    console.log('abre sub menu');
    document.getElementById('subItemService').style.display = 'block';
    document.getElementById('subItemService').style.maxHeight = '200px';

    document.getElementById('subItemAbout').style.display = 'block';
    document.getElementById('subItemAbout').style.maxHeight = '400px';

    document.getElementById('subItemAbout2').style.display = 'block';
    document.getElementById('subItemAbout2').style.maxHeight = '200px';
  }

  testeSync() {

    this.funcaoUm((callback) => {
      console.log('passo 1 - ' + callback);

      this.funcaoDois((callback) => {
        console.log('passo 1 - ' + callback);

        this.funcaoTres((callback) => {
          console.log('passo 1 - ' + callback);

          this.funcaoQuatro((callback) => {
            console.log('passo 1 - ' + callback);

            this.funcaoCinco((callback) => {
              console.log('passo 1 - ' + callback);

              this.funcaoSeis((callback) => {
                console.log('passo 1 - ' + callback);
              });
            });
          });
        });
      });
    });


    this.funcaoUm((callback) => {
      console.log('passo 2 - ' + callback);
    });
    this.funcaoDois((callback) => {
      console.log('passo 2 - ' + callback);
    });
    this.funcaoTres((callback) => {
      console.log('passo 2 - ' + callback);
    });
    this.funcaoQuatro((callback) => {
      console.log('passo 2 - ' + callback);
    });
    this.funcaoCinco((callback) => {
      console.log('passo 2 - ' + callback);
    });
    this.funcaoSeis((callback) => {
      console.log('passo 2 - ' + callback);
    });



    this.appService.testeUm('Lilian', (callback) => {
      console.log('passo 3 - ' + callback);

      this.appService.testeDois((callback) => {
        console.log('passo 3 - ' + callback);

        this.appService.testeTres((callback) => {
          console.log('passo 3 - ' + callback);

          this.appService.testeQuatro((callback) => {
            console.log('passo 3 - ' + callback);

            this.appService.testeCinco((callback) => {
              console.log('passo 3 - ' + callback);

              this.appService.testeSeis((callback) => {
                console.log('passo 3 - ' + callback);
              });
            });
          });
        });
      });
    });

  }

  funcaoUm(callback) {
    setTimeout(() => {
      console.log('1');
      return callback('funcaoUm');

    }, 1234);

  }

  funcaoDois(callback) {
    setTimeout(() => {
      console.log('2');
      return callback('funcaoDois');
    }, 100);

  }

  funcaoTres(callback) {
    setTimeout(() => {
      console.log('3');
      return callback('funcaoTres');
    }, 1000);

  }

  funcaoQuatro(callback) {
    setTimeout(() => {
      console.log('4');
      return callback('funcaoQuatro');
    }, 870);

  }

  funcaoCinco(callback) {
    setTimeout(() => {
      console.log('5');
      return callback('funcaoCinco');
    }, 330);

  }

  funcaoSeis(callback) {
    setTimeout(() => {
      console.log('6');
      return callback('funcaoSeis');
    }, 420);

  }

}
