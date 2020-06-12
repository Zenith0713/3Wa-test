let dateAchat = new Date ('2020-06-11');

let voiture = {
    marque: "peugeot",
    anneFabrication: 2010,
    dateAchat: dateAchat,
    listePassager: ["Axel", "Adrien"],
};

document.write('<li>' + voiture.marque + '</li>');
document.write('<li>' + voiture.anneFabrication + '</li>');
document.write('<li>' + voiture.dateAchat + '</li>');
document.write('<li>' + voiture.listePassager + '</li>');