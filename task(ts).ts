class Cat {
    name: string;
    surname: string;
    favouriteFood?: Food;

    constructor(catName: string, catSurname: string, catFood?: Food) {
        this.name = catName;
        this.surname = catSurname;

        if (catFood) {
            this.favouriteFood = catFood;
        }
    }

    public run(): void {
        console.log(this.all() + ' беги!');
    }

    public all(): string {
        return this.name + ' ' + this.surname;
    }

    public changeName(newName: string, newSurname?: string): void {
        this.name = newName;

        if (newSurname) {
            this.surname = newSurname;
        }
    }

    public changeFood(catFood: Food): void {
        this.favouriteFood = catFood;
    }
}

interface Food {
    name: string,
    isExpensive: boolean
}

class SuperHellCat extends Cat {
    action: string = 'test';

    public hero(superNaturalHappenings: string): void {
        this.action = 'а я умею летать!'
    }
}

const cat1: Cat = new Cat('Барсик', 'Иванович', {name: 'apple', isExpensive: true});
const cat2: Cat = new Cat('Мурзик', 'Николаевич');
const hellCat: SuperHellCat = new SuperHellCat('Адский Персик', 'Супергеройский');
hellCat.hero('а я умею летать!')
hellCat.changeName('Мотроскин')
console.log(hellCat)
cat1.run();
cat2.run();
cat1.changeName('Персик');
cat2.changeName('Персик', 'Адский');
cat1.changeFood({name: 'corn', isExpensive: false})

console.log(cat1);
console.log(cat2);
