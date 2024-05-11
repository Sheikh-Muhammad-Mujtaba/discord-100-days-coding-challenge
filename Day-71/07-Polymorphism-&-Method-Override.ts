// Define an abstract class
abstract class AbstractEntity {
    private static nextId: number = 1; // Private static property to track the next available ID

    // Constructor with protected access modifier to allow access in subclasses
    protected constructor(public id: number, protected name: string) {}

    // Static method to generate the next unique ID
    static generateNextId(): number {
        return AbstractEntity.nextId++; // Incrementing and returning the current nextId value
    }

    // Abstract method to get entity information
    abstract getEntityInfo(): string;
}

// Create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id: number, name: string) { // Constructor to initialize Entity instances
        super(id, name); // Calling the parent class constructor with id and name parameters
    }

    // Implementation of the abstract method to get entity information
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`; // Returning entity ID and name
    }
}

// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) { // Constructor to initialize AnotherEntity instances
        super(id, name); // Calling the parent class constructor with id and name parameters
    }

    // Implementation of the abstract method to get entity information
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`; // Returning entity ID, name, and additional info
    }
}

// Generate unique IDs for entities using the static method
const entity1: AbstractEntity = new Entity(AbstractEntity.generateNextId(), "Widget"); // Creating an instance of Entity
const entity2: AbstractEntity = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget"); // Creating an instance of AnotherEntity

// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // Output: ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // Output: ID: 2, Name: Gadget, Additional Info: ...
