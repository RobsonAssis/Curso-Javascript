axios.get('https://api.github.com/users/RobsonAssis')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
