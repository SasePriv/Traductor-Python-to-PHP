

// Configuracion de los editores de codemirror
//Editor 1
var editor1 = CodeMirror.fromTextArea
    (document.getElementById("editor1"), {
        mode: "python",
        theme: "dracula",
        lineNumbers: true
    });
editor1.setSize("100%", "100%");

//Editor consola
var consola = CodeMirror.fromTextArea
    (document.getElementById("Consola"), {
        theme: "base16-dark",
        readOnly: true
    });
consola.setSize("100%", "100%");

//Editor 2
var editor2 = CodeMirror.fromTextArea
    (document.getElementById("editor2"), {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: true,
        readOnly: true
    });
editor2.setSize("100%", "100%");

//Funcion de boton de traducir

const moo = require('moo');

var lexer = moo.compile({
    WS: /[ \t]+/,
    comment: /\/\/.*?$/,
    number: /0|[1-9][0-9]*/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    lparen: '(',
    rparen: ')',
    keyword: ['while', 'if', 'else', 'moo', 'cows'],
    NL: { match: /\n/, lineBreaks: true },
});

let exmaple = "while (10) cows\nmoo";

lexer.reset(exmaple);

let tokens = Array.from(lexer);

for (let i = 0; i < tokens.length; i++) {
    console.log(tokens[i]);
}

// console.log(lexer.has());

// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
// console.log(lexer.next());
