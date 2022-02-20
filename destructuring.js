const fish = {id:15203016, address: 'chandpur',name:'Hilsa King',phone:'0175551567',dress:'silver'}
const phone = fish.phone;
const dress =  fish.price;
const name = fish.name;
// console.log(fish.phone);
// console.log(fish.dress);
// console.log(fish.name);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);