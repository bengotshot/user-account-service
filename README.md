User-account-service

User account service is a collection of servers which allows for the Creating, Reading, Updating and Deleting of Users.

It's a demonstration of the architectural principle of Command Query Responsibility Segregation (CQRS), utilising multiple node servers, redis, MongoDB and a load-balancer (nGinx) bound together with docker-compose.

Due to being built with Docker, the only requirement is Docker (v17+) which can be found [here](https://www.docker.com/get-docker).


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


### TODO
 - Push images to dockerhub, versioned (starting at 0.1)
 - Update nginx.conf to tidy urls, and allow the same url to be used by both services depending on request type (PUT/POST)
 - Use http library to allow two apis to communicate, for update / delete
 - Create update endpoint in UMA
 - Create delete endpoint in UMA
 - Make registration fail if either username or email is taken
 - Write unit-tests
 - Enhance validation middleware
 - Share config between apis, at project root level (maybe)
 - Allow api config to be overwritten at runtime
 - Allow sharing of methods, variables etc via a shared folder (maybe)
 - Improve security measures
 - Implement logging
 - Create documentation (maybe swagger?)
 - Update nginx to place documentation on pretty URLs for both api's 
 - Host project online
 - Split user-auth-api in half. One for session management the other for validating details
 - Investigate 0Auth V2.0


Feel free to raise any issues and fixes, and to use this project for good and evil. Any questions just email me (benwallman@hotmail.com)
