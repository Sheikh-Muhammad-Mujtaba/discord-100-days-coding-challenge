abstract class AbstractItem {
    private static nextId: number = 1; // Private static property to track the next available ID

    constructor(public id: number, protected name: string) {} // Constructor with public id and protected name parameters

    static generateNextId(): number { // Static method to generate the next unique ID
        return AbstractItem.nextId++; // Incrementing and returning the current nextId value
    }

    abstract getItemInfo(): string; // Abstract method to get item information
}

class Item extends AbstractItem {
    constructor(id: number, name: string) { // Constructor to initialize Item instances
        super(id, name); // Calling the parent class constructor with id and name parameters
    }

    getItemInfo(): string { // Implementation of the abstract method to get item information
        return `ID: ${this.id}, Name: ${this.name}`; // Returning item ID and name
    }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget"); // Creating an instance of Item
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget"); // Creating another instance of Item

console.log(item1.getItemInfo()); // Output: ID: 1, Name: Widget
console.log(item2.getItemInfo()); // Output: ID: 2, Name: Gadget
