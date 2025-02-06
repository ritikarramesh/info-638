const booksByAuthors = {
    "Homer": {
        "The Iliad": {
            title: "The Iliad",
            description: "An ancient Greek epic poem set during the Trojan War.",
            language: "Greek"
        },
        "The Odyssey": {
            title: "The Odyssey",
            description: "A Greek epic poem about Odysseus's journey home after the fall of Troy.",
            language: "Greek"
        }
    },
    "Ovid": {
        "Metamorphoses": {
            title: "Metamorphoses",
            description: "A narrative poem comprising various mythological and historical stories.",
            language: "Latin"
        }
    },
    "Virgil": {
        "The Aeneid": {
            title: "The Aeneid",
            description: "A Latin epic poem that tells the legendary story of Aeneas.",
            language: "Latin"
        }
    }
   };
   

let input = "Latin";
for (let author in booksByAuthor) {
    for (let title in booksByAuthor[author]){
        if (booksByAuthor[author][title].language === language){
            console.log(`${title}) by ${author}`);
        }
    }
}


