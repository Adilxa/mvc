class GenericList<T> {

    private items: T[] = [];


    add(item: T): void {
        this.items.push(item);
    }


    getItems(): T[] {
        return this.items;
    }
}


const numberList = new GenericList<number>();
numberList.add(1);
numberList.add(2);
console.log(numberList.getItems()); // [1, 2]


const stringList = new GenericList<string>();
stringList.add("Hello");
stringList.add("World");
console.log(stringList.getItems()); // ["Hello", "World"]
