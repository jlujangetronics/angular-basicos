import { Component } from '@angular/core';



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent{
    nombre: string ='Ironman';
    edad: number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
    
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        if(this.nombre == 'Spiderman'){
            this.nombre = 'Ironman'
        }else{
        this.nombre = 'Spiderman';
        }
    }

    cambiarEdad():void{
        if(this.edad == 25){
            this.edad = 45;
        }else{
            this.edad = 25;
        }
    }
}