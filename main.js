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
        readOnly: true,
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

//Analisador lexico con canto34

//RegExp
const { fullStringLiteral,
    whiteSpace,
    comments,
    fullNumericLiteral,
    fullRegularExpressionLiteral,
    lineTerminatorSequence,
    identifier } = require("./regexp.js");

let lete = require('canto34');
let lexer = new lete.Lexer({ languageName: "Python" });
let tokens;

// add a token type for names, defines as strings of lower-case characters
lexer.addTokenType({ name: "WHITESPACE", regexp: whiteSpace });
lexer.addTokenType({ name: "COMMENTS", regexp: comments });
lexer.addTokenType({ name: "newline", regexp: lineTerminatorSequence });
lexer.addTokenType({ name: "tab", regexp: /  / });
lexer.addTokenType({ name: "IDENTIFIER", regexp: identifier });
lexer.addTokenType({ name: "IMPORT", regexp: /import/ });
lexer.addTokenType({ name: "FROM", regexp: /from/ });
lexer.addTokenType({ name: "GLOBAL", regexp: /global/ });
lexer.addTokenType({ name: "NONLOCAL", regexp: /nonlocal/ });
lexer.addTokenType({ name: "WHILE", regexp: /while/ });
lexer.addTokenType({ name: "FOR", regexp: /for/ });
lexer.addTokenType({ name: "IF", regexp: /if/ });
lexer.addTokenType({ name: "ELSE", regexp: /else/ });
lexer.addTokenType({ name: "ELIF", regexp: /elif/ });
lexer.addTokenType({ name: "RANGE", regexp: /range/ });
lexer.addTokenType({ name: "BREAK", regexp: /break/ });
lexer.addTokenType({ name: "CONTINUE", regexp: /continue/ });
lexer.addTokenType({ name: "AND", regexp: /and/ });
lexer.addTokenType({ name: "OR", regexp: /or/ });
lexer.addTokenType({ name: "NOT", regexp: /not|!/ });
lexer.addTokenType({ name: "IS", regexp: /is/ });
lexer.addTokenType({ name: "IN", regexp: /in/ });
lexer.addTokenType({ name: "CLASS", regexp: /class/ });
lexer.addTokenType({ name: "DEF", regexp: /def/ });
lexer.addTokenType({ name: "LAMBDA", regexp: /lambda/ });
lexer.addTokenType({ name: "YIELD", regexp: /yield/ });
lexer.addTokenType({ name: "RETURN", regexp: /return/ });
lexer.addTokenType({ name: "DEL", regexp: /del/ });
lexer.addTokenType({ name: "WITH", regexp: /with/ });
lexer.addTokenType({ name: "TRY", regexp: /try/ });
lexer.addTokenType({ name: "EXCEPT", regexp: /except/ });
lexer.addTokenType({ name: "PASS", regexp: /pass/ });
lexer.addTokenType({ name: "RAISE", regexp: /raise/ });
lexer.addTokenType({ name: "FINALLY", regexp: /finally/ });
lexer.addTokenType({ name: "EXEC", regexp: /exec/ });
lexer.addTokenType({ name: "ASSERT", regexp: /assert/ });
lexer.addTokenType({ name: "AS", regexp: /as/ });
lexer.addTokenType({ name: "PRINT", regexp: /print/ });
lexer.addTokenType({ name: "SCAN", regexp: /scan/ });
lexer.addTokenType({ name: "L_BRACE", regexp: /{/ });
lexer.addTokenType({ name: "R_BRACE", regexp: /}/ });
lexer.addTokenType({ name: "L_PAREN", regexp: /\(/ });
lexer.addTokenType({ name: "R_PAREN", regexp: /\)/ });
lexer.addTokenType({ name: "L_BRACKET", regexp: /\[/ });
lexer.addTokenType({ name: "R_BRACKET", regexp: /\]/ });
lexer.addTokenType({ name: "DOT", regexp: /\./ });
lexer.addTokenType({ name: "SEMI_COLON", regexp: /;/ });
lexer.addTokenType({ name: "COMMA", regexp: /,/ });
lexer.addTokenType({ name: "L_THAN", regexp: /</ });
lexer.addTokenType({ name: "G_THAN", regexp: />/ });
lexer.addTokenType({ name: "L_THAN_EQ", regexp: /<=/ });
lexer.addTokenType({ name: "G_THAN_EQ", regexp: />=/ });
lexer.addTokenType({ name: "EQUAL", regexp: /==/ });
lexer.addTokenType({ name: "NOT_EQ", regexp: /!=|<>/ });
lexer.addTokenType({ name: "ADD", regexp: /\+/ });
lexer.addTokenType({ name: "SUB_OR_NEG", regexp: /-/ });
lexer.addTokenType({ name: "MUL", regexp: /\*/ });
lexer.addTokenType({ name: "EXP", regexp: /\\/ });
lexer.addTokenType({ name: "MOD", regexp: /%/ });
lexer.addTokenType({ name: "DIV", regexp: /\// });
lexer.addTokenType({ name: "DIV_ENT", regexp: /\/\// });
lexer.addTokenType({ name: "INC", regexp: /\+\+/ });
lexer.addTokenType({ name: "DECR", regexp: /--/ });
lexer.addTokenType({ name: "BIT_AND", regexp: /\&/ });
lexer.addTokenType({ name: "BIT_OR", regexp: /\|/ });
lexer.addTokenType({ name: "XOR", regexp: /\^/ });
lexer.addTokenType({ name: "BIT_NOT", regexp: /~/ });
lexer.addTokenType({ name: "TERN_ELSE", regexp: /:/ });
lexer.addTokenType({ name: "ASSIGN", regexp: /=/ });
lexer.addTokenType({ name: "ADD_ASSIGN", regexp: /\+=/ });
lexer.addTokenType({ name: "SUB_ASSIGN", regexp: /-=/ });
lexer.addTokenType({ name: "EXP_ASSIGN", regexp: /\\=/ });
lexer.addTokenType({ name: "DIVENT_ASSIGN", regexp: /\/\/=/ });
lexer.addTokenType({ name: "MUL_ASSIGN", regexp: /\*=/ });
lexer.addTokenType({ name: "MOD_ASSIGN", regexp: /%=/ });
lexer.addTokenType({ name: "BSHIFTLEFT", regexp: /<</ });
lexer.addTokenType({ name: "BSHIFTRIGHT", regexp: />>/ });
lexer.addTokenType({ name: "BIT_AND_ASSIGN", regexp: /&=/ });
lexer.addTokenType({ name: "BIT_OR_ASSIGN", regexp: /\|=/ });
lexer.addTokenType({ name: "BIT_XOR_ASSIGN", regexp: /^=/ });
lexer.addTokenType({ name: "NONE", regexp: /none/ });
lexer.addTokenType({ name: "TRUE", regexp: /True/ });
lexer.addTokenType({ name: "FALSE", regexp: /False/ });
lexer.addTokenType({ name: "NUM_LIT", regexp: fullNumericLiteral });
lexer.addTokenType({ name: "STRING_LIT", regexp: fullStringLiteral });
lexer.addTokenType({ name: "REGEXP_LIT", regexp: fullRegularExpressionLiteral });


function generaTokens(texto) {
    return lexer.tokenize(texto);
}

function mostrarTokens(tokens) {
    consola.setValue("Shell:\n");
    for (let i = 0; i < tokens.length; i++) {
        let test = consola.getValue();
        test = test + JSON.stringify(tokens[i]) + "\n";
        consola.setValue(test);
    }
}

//Funcion traducir que hasta ahora solamente genera los tokens y los muestra en la pantalla shell
function traducir() {
    let exmaple = editor1.getValue();
    tokens = generaTokens(exmaple);
    mostrarTokens(tokens);
    console.log(tokens);
}
document.getElementById("tradu").onclick = function () { traducir() };






