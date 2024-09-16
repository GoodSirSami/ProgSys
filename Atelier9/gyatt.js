const { it } = require("node:test");

class GyattItem {
    constructor(id, nom, prix)
    {
        this.id = id;
        this.dateCraetion = new Date();
        this.nom = nom;
        this.prix = prix;
        console.log("GyattItem constructor");
    }
    getDateCreation() {
        return this.dateCraetion.getDate() + "/" + this.dateCraetion.getMonth() + "/" + this.dateCraetion.getFullYear() + " " + this.dateCraetion.getHours() + ":" + this.dateCraetion.getMinutes();
    }
    getId() {
        return this.id;
    }
    getPrix() {
        return this.prix;
    }
    getNom() {
        return this.nom;
    }
}

// var gyatt = new GyattItem(1, "Gyatt", 100);
// console.log(gyatt.getDateCreation());
// console.log(gyatt.getId());
// console.log(gyatt.nom);
// console.log(gyatt.getPrix());

class itemList {
    constructor()
    {
        this.list = [];
    }
    addItem(item)
    {
        this.list.push(item);
    }
    removeItemById(id)
    {
        var index = this.list.findIndex(x => x.id == id);
        this.list.splice(index, 1);
    }
    getItems()
    {
        return this.list;
    }
    getlength()
    {
        return this.list.length;
    }
    removeItemByName(name)
    {
        var index = this.list.findIndex(x => x.nom == name);
        this.list.splice(index, 1);
    }
}

var items = new itemList();
items.addItem(new GyattItem(1, "Gyatt", 100));
items.addItem(new GyattItem(2, "Gyatt2", 200));
items.addItem(new GyattItem(3, "Gyatt3", 300));
console.log(items.getlength());

items.removeItemById(2);
items.addItem(new GyattItem(4, "Gyatt4", 400));

console.log(items.getItems());

console.table(items.getItems());