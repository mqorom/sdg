# sdg

Steps to run BE server
- git clone git@github.com:mqorom/sdg.git
- Node should be installed into your machine
- Run the following commands from the terminal:<br>
    a- npm install express

- Launch the server by executing "node app.js" from home directory. If all is good, you will see the following messages printed in the console

            Server is up and listening on port 8080!
            Connected successfully to the cloud mongo DB
            

            
#Author EndPoints

- Get all Authors ---> GET http://localhost:8080/library/authors
- Get one Author  ---> GET http://localhost:8080/library/author/{id}

- Create new Author --> POST http://localhost:8080/library/author <br>
                        {
                            "firstName": "Mohammad",
                            "lastName": "Qorom"
                        }

- Update Specific Author --> PUT http://localhost:8080/library/author/{id} <br>
                        {
                            "firstName": "Mr.Mohammad",
                        }