class ProductStaticMembers {
    // 'private' property
    private static nextId: number = 1; // Static property to track the next available ID
  
    constructor(private id: number, private name: string) {} // Constructor to initialize id and name
  
    static generateNextId(): number { // Static method to generate the next unique ID
      return ProductStaticMembers.nextId++; // Incrementing nextId and returning the current value
    }
  
    getProductInfo(): string { // Method to get product information
      return `ID: ${this.id}, Name: ${this.name}`; // Returning product ID and name
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget"); // Creating product instance with generated ID and name
  const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget"); // Creating another product instance with generated ID and name
  
  console.log(product1static.getProductInfo()); // Output product1 information
  console.log(product2static.getProductInfo()); // Output product2 information
