export { };

// let bmi: (height: number, weight: number) => number = (
//     height: number,
//     weight: number
// ): number => weight / (height * height);

// bmi(1.72, 68);

const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
    return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));