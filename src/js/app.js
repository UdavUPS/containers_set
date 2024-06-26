// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */


export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(elem) {
        this.members.add(elem);
    };

    addAll(...elem) {
        elem.forEach(e => this.members.add(e));
    };

    toArray() {
        const mas = [];

        this.members.forEach(elem => mas.push(elem));
        return mas;
    };
}