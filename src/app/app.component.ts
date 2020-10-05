import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //numeros : number[] = [];
  numeros = new Array <number>(1000);
  comptadors = new Array <number>(21) ;
  constructor (){
    // inicialitzar les dades
      this.initData();

      this.initCounters();

      this.computeHistograms();
        

      }

    initData() {
      //for (let index = 0; index < 1000; index++) {
      //this.numeros.push(Math.round(Math.random()*20));
      for (let index = 0; index < this.numeros.length; index++) {
        this.numeros[index] = Math.round(Math.random() * 20);
    }
  }

    initCounters() {
      for (let index = 0; index < this.comptadors.length; index++) {
        this.comptadors[index] = 0;
        
      }
    }

    computeHistograms(){
      for (let index = 0; index < this.numeros.length; index++) {
        this.comptadors[this.numeros[index]] += 1;
    }
  }

    trobar(){
      var trobat : boolean;
      var index = 0;
      while (index < this.numeros.length && !trobat ) {
        if (this.numeros[index] > this.numeros[index + 1]) {
          trobat = true;
        }
        else{
          index ++;
        }
      }
    }

    ngOnInit(){
    
    }

  }

  
