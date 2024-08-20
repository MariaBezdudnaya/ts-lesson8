interface IPet {
    readonly typeOfPet: string;
    readonly name: string;
}

class Pet implements IPet {
    constructor(readonly typeOfPet: string, readonly name: string, readonly needStreet: boolean) {
    }
}

class PetNew implements IPet {
    constructor(readonly typeOfPet: string, readonly name: string, readonly needStreet: boolean) {
    }
}

interface IPeople {
    pets: IPet[];
    addPet(typeOfPet: string, name: string, needStreet: boolean): void;
    removePet(pet: Pet): void;
    getPetsCount(): number;
}

abstract class People {
    abstract pets: IPet[];
    constructor(protected peopleName: string, protected peopleFlat: number) {
    }

    abstract addPet(typeOfPet: string, name: string, needStreet: boolean): void;
    abstract removePet(pet: IPet): void;
    abstract getPetsCount(): number;
}

interface IPetConstructor { // интерфейс для функции конструктора, как функцию опишем параметры принимаемые конструктором и как результат опишем свойствами тот объект, который возвращается как экземпляр класса
    new (typeOfPet: string, name: string, needStreet: boolean): IPet;
}

class Neighbour extends People implements IPeople {
    protected neighbourPets: IPet[] = [];
    constructor(name: string, flat: number, protected petClass: IPetConstructor) {
        super(name, flat); // вызов конструктора родительского класса People
    }

    addPet(typeOfPet: string, name: string, needStreet: boolean): void {
        const pet = new this.petClass(typeOfPet, name, needStreet);
        this.neighbourPets.push(pet);
    }

    removePet(pet: IPet): void {
        this.neighbourPets = this.neighbourPets.filter(item => item !== pet); // метод filter возвращает новый массив без указанного элемента pet
    }

    get pets() { // используя геттер, сможем получать массив с питомцами, но изменять его не сможем
        return this.neighbourPets;
    }

    getPetsCount(): number {
        return this.neighbourPets.length;
    }
}

const peopleSergey = new Neighbour('Sergey', 1, Pet);
peopleSergey.addPet('cat', 'Tom', false);