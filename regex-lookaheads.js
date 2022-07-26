let sampleWord = 
`
astr1on11aut
astronaut
a11onaut
11onaut
aa11on1anout
a1a1a11onaout
lookaheads
12345
`;
let pwRegex = /(?=\w{6})(?=\w*\d{2})\w+/g; // Change this line
let result = sampleWord.match(pwRegex);
console.log(result);
