function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!");
}

// Call the function with different number of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Egg", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
