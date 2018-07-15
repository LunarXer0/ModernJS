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

//* Brackets [] - Character Sets

rgx = /gr[ae]y/i; //Must be an e or a
rgx = /[GF]ray/; //Must be G or F
rgx = /[^GF]ray/i; // If ^ is inside [] means that it can be anything except G or F
rgx = /[A-Z]ray/; // Any uppercase letter;
rgx = /[a-z]ray/; //Any lowercase letter;
rgx = /[A-Za-z]ray/; //Any upper or lower case letter;
rgx = /[0-3]ray/; // Match any digit

//* Braces {} - Quantifiers
rgx = /Hel{2}o/; // Anything with exactly two ls. Looks at the character before the {}.
rgx = /Hel{2,4}o/; // From 2 to 4 ls
rgx = /Hel{2,}o/; //Must occur at least 2 times.

//* Parentheses () - Grouping
rgx = /([0-2]x{3})/ // Looks for a number and x that occurs 3 times //3x3x3x

//* Shorthand character classes
rgx = /\w/; //Word character - alphanumer character or _
rgx = /\w+/; // + = one or more
rgx = /\W/; //Non-word characters like ?, . ! @ $. It's an uppercase W
rgx = /\d/; //Matches any digit
rgx = /\d+/; //Match any digit 0 or more times
rgx = /\D/; //Match any non digit
rgx = /\s/; // Match whitespace char
rgx = /\S/; //Match non whitespace char
rgx = /Hell\b/i; //Word boundary

//* Assertions
rgx = /x(?=y)/; //Match x only if followed by y
rgx = /x(?!y)/; //Match x only if NOT followed by y





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