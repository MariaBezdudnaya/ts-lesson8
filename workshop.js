"use strict";
class Pet {
    constructor(typeOfPet, name, needStreet) {
        this.typeOfPet = typeOfPet;
        this.name = name;
        this.needStreet = needStreet;
    }
}
class PetNew {
    constructor(typeOfPet, name, needStreet) {
        this.typeOfPet = typeOfPet;
        this.name = name;
        this.needStreet = needStreet;
    }
}
class People {
    constructor(peopleName, peopleFlat) {
        this.peopleName = peopleName;
        this.peopleFlat = peopleFlat;
    }
}
class Neighbour extends People {
    constructor(name, flat, petClass) {
        super(name, flat); // вызов конструктора родительского класса People
        this.petClass = petClass;
        this.neighbourPets = [];
    }
    addPet(typeOfPet, name, needStreet) {
        const pet = new this.petClass(typeOfPet, name, needStreet);
        this.neighbourPets.push(pet);
    }
    removePet(pet) {
        this.neighbourPets = this.neighbourPets.filter(item => item !== pet); // метод filter возвращает новый массив без указанного элемента pet
    }
    get pets() {
        return this.neighbourPets;
    }
    getPetsCount() {
        return this.neighbourPets.length;
    }
}
const peopleSergey = new Neighbour('Sergey', 1, Pet);
peopleSergey.addPet('cat', 'Tom', false);
