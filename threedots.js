// convert multiple array in one array : old style.

const ages = [22, 23, 10, 13];
const ages2 = [16, 14, 19, 17];
const ages3 = [26, 34, 29, 27];
const allAges = ages.concat(ages2).concat([100])
.concat(ages3)

console.log(allAges);

// modern way to add array
const allAges2 = [...ages, ...ages2,...([100]), ...ages3]
console.log(allAges2);



// to find maximum element from an array.

const business = 650;
const minister = 450;
const amla = 250;

const maximum = Math.max(business, minister, amla);
console.log(maximum);

// what if this was an array?
const vipGroup = [650, 450, 250];
const maximum2 = Math.max(...vipGroup);
console.log(maximum2);

