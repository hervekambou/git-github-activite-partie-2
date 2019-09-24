/* 
Activité : gestion des contacts
*/

class Contact{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    decrire(){
        console.log(`Nom : ${this.nom}, prénom : ${this.prenom}`);
    }
}


const contacts = [];

const listerContacts = function(contacts){
    console.log("\n");
    console.log("Voici la liste de tous vos contacts :");
    contacts.forEach(contact => {
        contact.decrire();
    });
};

const ajoutContact = (nom, prenom) => {
    const contact = new Contact(nom, prenom);
    contacts.push(contact);
};

function ajouterContact(){
    let nom = prompt("Entrer le nom du nouveau contact :");
    let prenom = prompt("Entrer le prénom du nouveau contact :");
    ajoutContact(nom, prenom);
    console.log("Le nouveau contact a été ajouté");
}


ajoutContact("Lévisse", "Carole");
ajoutContact("Nelsonne", "Mélodie");

let quitter = false;
while(!quitter){
    console.log("\n");
    console.log("Bienvenue dans le gestionnaire de contacts !");
    console.log("1 : Lister les contatcs");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    
    let choix = Number(prompt("Choisissez une option :"));
    switch(choix){
        case 1 : listerContacts(contacts); break;
        case 2 : ajouterContact(); break;
        case 0 : quitter = true; break;
        default : quitter = false;
    }    
}