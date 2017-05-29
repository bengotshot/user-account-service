

let userExists = (req, res, next)=> {
    http.get('http://user-authorisation-api:8081/user/auth/', (result)=>{
        console.log(result.statusCode);
        next();
    });
};

export default userExists;
