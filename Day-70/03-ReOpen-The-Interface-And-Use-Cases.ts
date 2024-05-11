// Homepage Interface Declaration
interface Settings {
    // Declare a readonly property 'theme' of type boolean to represent the theme setting
    readonly theme: boolean;
    // Declare a property 'font' of type string to represent the font setting
    font: string;
  }
  
  // Articles Page Interface Reopening
  interface Settings {
    // Add a new property 'sidebar' of type boolean to represent the sidebar setting
    sidebar: boolean;
  }
  
  // Contact Page Interface Reopening
  interface Settings {
    // Add another new property 'external' of type boolean to represent the external setting
    external: boolean;
  }
  
  // Create an object 'userSettings' that adheres to the merged 'Settings' interface
  let userSettings: Settings = {
    // Initialize the 'theme' property with a boolean value
    theme: true,
    // Initialize the 'font' property with a string value
    font: "Open Sans",
    // Initialize the 'sidebar' property with a boolean value
    sidebar: false,
    // Initialize the 'external' property with a boolean value
    external: true
  };
  