// Note : pas besoin de ; à la fin des ligne. ça c'est cadeau

import express from "express"

// A faire tout le temps, 
const app = express()


// Définition du port à utiliser
const port = 3000

// Définition d'une route (on mettra ça dans un fichier à part plus tard)
// Cette route '/' est la route racine :  http://localhost
app.get('/', (request, response) => {
    // l'objet de réponse est l'objet qu'on envoie au client. Ici, on lui renvoie seulement du texte.
    response.send('Hello World!')
})

// Ici, on dit à nodejs d'écouter au port 3000.
app.listen(port, () => {
    console.log("Connection to server on port " + port + " : ok")
    console.log("Connect at http://localhost:" + port)
})
