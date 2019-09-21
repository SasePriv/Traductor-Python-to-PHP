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
consola.setValue("Shell:\n")

//Editor 2
var editor2 = CodeMirror.fromTextArea
    (document.getElementById("editor2"), {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: true,
        readOnly: true
    });
editor2.setSize("100%", "100%");

//Funcion traducir que hasta ahora solamente genera los tokens y los muestra en la pantalla shell
function traducir() {
    let exmaple = editor1.getValue();
    tokens = generaTokens(exmaple, tokens);
    mostrarTokens(tokens);
}
document.getElementById("tradu").onclick = function () { traducir() };

//Analisador Lexico

const moo = require('moo');
let tokens;

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

function generaTokens(texto) {
    lexer.reset(texto);
    return Array.from(lexer);
}

function mostrarTokens(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        let test = consola.getValue();
        test = test + JSON.stringify(tokens[i]) + "\n";
        consola.setValue(test);
    }
}






