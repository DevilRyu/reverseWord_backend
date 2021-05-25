# REVERSE WORD (BACK END)
## Información general
Este programa esta diseñado con un solo endpoint el cual responde a una solicitud get con un query param denominado text con el siguiente formato:
 ```
 /iecho?text=test
  ```
y se encarga de darle la vuelta al texto recibido e indicar si es palíndromo con un status 200 y respondiendo de la siguiente forma:
 ```
 {
"text": "tset"
}
  ```

En caso de que no se envie el text en el query param el endpoint responde con un status 400 y de la siguiente forma:
 ```
{
"error": "no text"
}

  ```
  Adicionalmente está app usa standard.js con el fin de llevar un correcta sintaxis, y el módulo de tests desarrllado con mocha+chai+supertest.

  Cabe recalcar que esta app corre en el puerto 4000

  A continuación se muestran los comandos para correr la aplicación y su módulo de pruebas.
## Run instructions
Para correr la aplicación se utiliza el siguiente comando:
* npm start

Para correr el módulo de pruebas se utiliza el siguiente comando:
* npm test 

# Autor
Diego Muñoz