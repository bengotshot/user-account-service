# User-account-service #

User account service is a collection of servers which allows for the Creating, Reading, Updating and Deleting of Users.

It's a demonstration of the architectural principle of Command Query Responsibility Segregation (CQRS), utilising multiple node servers, redis, MongoDB and a load-balancer (nGinx) bound together with docker-compose.

To build & run, the only requirement is Docker (v17+) which can be found [here](https://www.docker.com/get-docker).


----------

To build the project

```
docker-compose build
```

To run the project

```
docker-compose up
```


----------

To see all the endpoints and how to use them, import the user-account-service.postman_collection.json into postman


----------

### TODO
 - Test routes with invalid session tokens
 - Push images to dockerhub, versioned (starting at 0.1)
 - Update nginx.conf to tidy urls, and allow the same url to be used by both services depending on request type (PUT/POST). Current situation not very Restful :(
 - Create delete endpoint in UMA
 - Write more unit-tests
 - Enhance validation middleware
 - Share config between apis, ()maybe at project root level)
 - Allow api config to be overwritten at runtime
 - Allow sharing of methods, variables etc via a shared folder (maybe)
 - Improve security measures
 - Update nginx to place documentation on pretty URLs for both api's 
 - Host project online
 - Split user-auth-api in half. One for session management the other for validating details
 - Get nginx to redirect the user to the github project page


Feel free to raise any issues and fixes, and to use this project for good and evil. Any questions just email me (benwallman@hotmail.com)
