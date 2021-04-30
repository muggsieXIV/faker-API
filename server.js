const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;


class users {
    constructor() {
        this.id = faker.id;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
    
}
class company {
    constructor() {
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}


// get access to POST data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    console.log( req.params.id );
    res.json( users[req.params.id] );
});

app.get("api/companies/new", (req, res) => {
    console.log( req.params.id );
    res.json( users[req.params.id] );
});

app.get("api/user/company", (req, res) => {
    console.log( req.params.id );
    res.json( users[req, res] );
});


const server = app.listen(8000, () => {
    console.log('Server is locked and loaded on port ${server.address().port}!')
});
