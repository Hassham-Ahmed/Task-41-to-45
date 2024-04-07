function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
const originalMagicians: string[] = ["Merlin", "Harry Houdini", "David Copperfield", "Penn & Teller"];

// Make a copy of the original array and call make_great on the copy
const modifiedMagicians: string[] = make_great([...originalMagicians]);

// Call show_magicians to show the original list
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call show_magicians to show the modified list
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
