interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other additional properties
}

function storeCarInfo(manufacturer: string, model: string, ...additionalInfo: [string, any][]): Car {
    let carInfo: Car = {
        manufacturer: manufacturer,
        model: model
    };

    additionalInfo.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo;
}

// Call the function with required information and additional properties
const anotherCar = storeCarInfo("Ford", "Mustang", "color", "blue", "year", 2023, "transmission", "automatic");

// Print the returned Object
console.log(anotherCar);
