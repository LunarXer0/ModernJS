let rgx;

//* Literal characters
rgx = /hello/;
rgx = /hello/i;

//* Metacharacter symbols
rgx = /^h/i; // must start with
rgx = /d$/i; // must end with
rgx = /^hello$/i;  //must begin and end with
rgx = /^h.llo$/i; // Matches any ONE character
rgx = /^h*llo/i; // Matches any character 0 or more times
rgx = /gre?a?y/i; // Optional e or a
rgx = /gre?a?y\?/i; // Escpae characters


const str = 'Gray?';


const result = rgx.exec(str);
console.log(result);

function rgxTest(rgx, str){
    if(rgx.test(str)){
        console.log(`${str} matched ${rgx.source}`);
    }
    else{
        console.log(`${str} does NOT match ${rgx.source}`);
    }
}

rgxTest(rgx, str);