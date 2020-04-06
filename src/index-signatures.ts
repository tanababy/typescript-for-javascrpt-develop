export { };

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Hey!', underTwenty: false };

// How to write index signatures
// {[index: typeForIndex]: typeForValue}
profile.name = 'Momoko';
profile.age = 43;
profile.nationaklity = 'Japan';

