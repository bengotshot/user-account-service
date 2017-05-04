User-account-service

User account service is a collection of servers which allows for the Creation, Reading, Updating, and Deleting of Users.

It's a demonstration of the architectural principle of Command Query Responsibility Segregation (CQRS), utilising multiple node servers, a redis instance, a MongoDB and a load-balancer bound together with docker-compose.

Due to being built with Docker, the only requirement is Docker (v17+) which can be found [here](https://www.docker.com/get-docker).


----------

The underlying architecture consists of two Node.js servers, User-Authorisation-Api (UAA) & User-Management-Api (UMA), one nGinx load-balancer, one redis instance and one MongoDB


----------


