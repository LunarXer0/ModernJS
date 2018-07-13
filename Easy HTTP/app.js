const http = new easyHTTP;

//* GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(response);
//     }
// });

//* Post post
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(post);
//     }
// });

//* Put
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

//* Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }
    else{
        console.log(response);
    }
});

