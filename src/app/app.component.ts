import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class BodyComponent {

 array1:number[] = [];
 array2:number[] = [];
 array3 = new Array<number>(10);
 numeros : number = 0;
 flag: boolean = false;
 mostrarV1: boolean = false;
 mostrarV2: boolean = false;
 mostrarV3: boolean = false;
  
 constructor() {
  this.initData();
  this.initComparar();
  this.initMirar();
  
  if(this.numeros==1){
  this.flag=true;
  }

  }
  initData(){
    for (let index = 0; index < 1000; index++) {
      this.array1.push(Math.random()* 20);
    }
    for (let index = 0; index < 1000; index++) {
      this.array2.push(Math.random()* 20);
    }
  }

  initComparar(){
    for(let index = 0; index < 1000; index++){
      if(Math.abs(this.array1[index]-this.array2[this.array2.length-1- index])<0.01){
        this.array3[index]=0;
      }
      else if(this.array1[index]>this.array2[this.array2.length-1-index]){
        this.array3[index]=1;
      }
      else if(this.array1[index]<this.array2[this.array2.length-1-index]){
        this.array3[index]=-1;
      }
    }
  }
  initMirar(){
    let index=0;
    while (index<1000 && this.numeros==0) {
      if(this.array3[index]==0){
        this.numeros=1;
      }
     else{
      index++;
      }
    }
  }
}