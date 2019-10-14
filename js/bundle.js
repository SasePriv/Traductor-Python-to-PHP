(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

// lexer.addTokenType({ name: "COMMENTS", regexp: comments });
lexer.addTokenType({ name: "newline", regexp: lineTerminatorSequence });
lexer.addTokenType({ name: "tab", regexp: /  / });
lexer.addTokenType({ name: "IDENTIFIER", regexp: identifier });
lexer.addTokenType({ name: "WHITESPACE", regexp: whiteSpace });
// lexer.addTokenType({ name: "IMPORT", regexp: /import/ });
// lexer.addTokenType({ name: "FROM", regexp: /from/ });
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
lexer.addTokenType({ name: "COMPA", regexp: /<=/ });
lexer.addTokenType({ name: "COMPA", regexp: />=/ });
lexer.addTokenType({ name: "COMPA", regexp: /</ });
lexer.addTokenType({ name: "COMPA", regexp: />/ });
lexer.addTokenType({ name: "INCRE_DECRE", regexp: /\+\+/ });
lexer.addTokenType({ name: "INCRE_DECRE", regexp: /--/ });
lexer.addTokenType({ name: "COMPA", regexp: /==/ });
lexer.addTokenType({ name: "OPE_ASSIGN", regexp: /\+=/ });
lexer.addTokenType({ name: "OPE_ASSIGN", regexp: /-=/ });
lexer.addTokenType({ name: "OPE_ASSIGN", regexp: /\*\*=/ });
lexer.addTokenType({ name: "OPE_ASSIGN", regexp: /\/=/ });
lexer.addTokenType({ name: "OPE_ASSIGN", regexp: /\*=/ });
lexer.addTokenType({ name: "OPE_ASSIGN", regexp: /%=/ });
lexer.addTokenType({ name: "NOT_EQ", regexp: /!=|<>/ });
lexer.addTokenType({ name: "OPERADOR", regexp: /\+/ });
lexer.addTokenType({ name: "SUB_OR_NEG", regexp: /-/ });
lexer.addTokenType({ name: "OPERADOR", regexp: /\*\*/ });
lexer.addTokenType({ name: "OPERADOR", regexp: /\*/ });
lexer.addTokenType({ name: "OPERADOR", regexp: /%/ });
lexer.addTokenType({ name: "OPERADOR", regexp: /\// });
// lexer.addTokenType({ name: "DIV_ENT", regexp: /\/\// });
lexer.addTokenType({ name: "BIT_AND", regexp: /\&/ });
lexer.addTokenType({ name: "BIT_OR", regexp: /\|/ });
lexer.addTokenType({ name: "XOR", regexp: /\^/ });
lexer.addTokenType({ name: "BIT_NOT", regexp: /~/ });
lexer.addTokenType({ name: "TERN_ELSE", regexp: /:/ });
lexer.addTokenType({ name: "ASSIGN", regexp: /=/ });
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
    console.log(sintactico(tokens))
    editor2.setValue(sintactico(tokens))
}
document.getElementById("tradu").onclick = function () { traducir() };

document.getElementById("generar1").onclick = function () { ejemplo1() };


function ejemplo1(){
    var ejemplo = 'x = 10 + 10\nprint(x)\nprint("hola")\nif var < b:\n  print("prueba dentro del if")\n  asigg = 25\nelse:\n  print("prueba dentro del else")\n  asigg = x\nprint("Fuera del else")\nhola = "hola"\nwhile hola <= 65:\n  print("prueba dentro del while")\n  variable = 55\nx = "fuera del while"'
    editor1.setValue(ejemplo)
}

function sintactico(tokens){
    //eliminando los espacios en blancos
    for (let index = 0; index < tokens.length; index++) {
        if (tokens[index].type == 'WHITESPACE') {
            tokens.splice(index, 1);
        }   
    }
    console.log(tokens)

    let next = 0
    let salida = "<?php\n"
    proce = [tokens,next, salida]
    while(proce[1] < tokens.length){
        _print(proce)
        _variables(proce)
        _while(proce)
        _if_else(proce)
        _else(proce)
        // if(proce[0][proce[1]]){
        //     if (proce[0][proce[1]].type == 'newline') {
        //         proce[2] += proce[0][proce[1]].content
        //         proce[1]++
        //     }else{
        //         proce[1]++
        //     }
        // } 

    }

    return proce[2] += "\n?>"
}

function _print(proce){
    //Print
    if (proce[0][proce[1]]) {
        if(proce[0][proce[1]].type == 'PRINT'){
            proce[2] += "echo "
            proce[1]++
            if (proce[0][proce[1]].type == 'L_PAREN') {
                proce[1]++
                if (proce[0][proce[1]].type == 'STRING_LIT' || proce[0][proce[1]].type == 'IDENTIFIER') {
                    if (proce[0][proce[1]].type == 'IDENTIFIER'){
                        proce[2] += '$'+proce[0][proce[1]].content
                        proce[1]++
                    }else{
                        proce[2] += proce[0][proce[1]].content
                        proce[1]++
                    }
                    if (proce[0][proce[1]].type == 'R_PAREN') {
                        proce[2] += ";"
                        proce[1]++
                        if(proce[0][proce[1]]){
                            if (proce[0][proce[1]].type == 'newline') {
                                proce[2] += proce[0][proce[1]].content
                                proce[1]++
                            }else{
                                proce[1]++
                            }
                        }                          
                    }
                }
            }
        }
    }
}

function _variables(proce){
    // Variables
    if (proce[0][proce[1]]) {
        if (proce[0][proce[1]].type == 'IDENTIFIER') {
            proce[2] += '$' + proce[0][proce[1]].content
            proce[1]++
            if (proce[0][proce[1]].type == 'ASSIGN' || proce[0][proce[1]].type == 'INCRE_DECRE' || proce[0][proce[1]].type == 'OPE_ASSIGN') {
                proce[2] += proce[0][proce[1]].content
                proce[1]++
                if (proce[0][proce[1]].type == 'NUM_LIT' || proce[0][proce[1]].type == 'STRING_LIT' || proce[0][proce[1]].type == 'IDENTIFIER') {
                    if (proce[0][proce[1]].type == 'IDENTIFIER'){
                        proce[2] += '$'+proce[0][proce[1]].content
                        proce[1]++
                    }else{
                        proce[2] += proce[0][proce[1]].content
                        proce[1]++
                    }
                    if(proce[0][proce[1]]){
                        if (proce[0][proce[1]].type == 'OPERADOR' || proce[0][proce[1]].type == 'SUB_OR_NEG') {
                            proce[2] += proce[0][proce[1]].content
                            proce[1]++
                            if (proce[0][proce[1]].type == 'NUM_LIT' || proce[0][proce[1]].type == 'STRING_LIT' || proce[0][proce[1]].type == 'IDENTIFIER') {
                                if (proce[0][proce[1]].type == 'IDENTIFIER'){
                                    proce[2] += '$'+proce[0][proce[1]].content + ";"
                                    proce[1]++
                                }else{
                                    proce[2] += proce[0][proce[1]].content + ";"
                                    proce[1]++ 
                                }   
                            }
                        }else{
                            proce[2] += ";"
                        }
                        if(proce[0][proce[1]]){
                            if (proce[0][proce[1]].type == 'newline') {
                                proce[2] += proce[0][proce[1]].content
                                proce[1]++
                            }else{
                                proce[1]++
                            } 
                        }                                                  
                    }else{                        
                        proce[2] += ";"
                    }                   
                }
            }
        }
    }
}

function _while(proce){
    // While
    if (proce[0][proce[1]]) {
        if (proce[0][proce[1]].type == 'WHILE') {
            proce[2] += proce[0][proce[1]].content +" ("
            proce[1]++
            if (proce[0][proce[1]].type == 'NUM_LIT' || tokens[proce[1]].type == 'STRING_LIT' || proce[0][proce[1]].type == 'IDENTIFIER') {
                if (proce[0][proce[1]].type == 'IDENTIFIER'){
                    proce[2] += '$'+proce[0][proce[1]].content
                    proce[1]++
                }else{
                    proce[2] += proce[0][proce[1]].content
                    proce[1]++
                }
                if (proce[0][proce[1]].type == 'COMPA') {
                    proce[2] += proce[0][proce[1]].content
                    proce[1]++
                    if (proce[0][proce[1]].type == 'NUM_LIT' || proce[0][proce[1]].type == 'STRING_LIT' || proce[0][proce[1]].type == 'IDENTIFIER') {
                        if (proce[0][proce[1]].type == 'IDENTIFIER'){
                            proce[2] += '$'+proce[0][proce[1]].content +')'
                            proce[1]++
                        }else{
                            proce[2] += proce[0][proce[1]].content + ")"
                            proce[1]++
                        }
                        if (proce[0][proce[1]].type == 'TERN_ELSE') {
                            proce[2] += "{"
                            proce[1]++
                            if (proce[0][proce[1]].type == 'newline') {
                                proce[2] += proce[0][proce[1]].content
                                proce[1]++
                                var estado = true
                                while (estado) {
                                    console.log(estado)
                                    if(proce[0][proce[1]]){                                        
                                        if (proce[0][proce[1]].type == 'tab') {
                                            proce[2] += proce[0][proce[1]].content
                                            proce[1]++
                                            _print(proce)
                                            _variables(proce)
                                            _if_else(proce)
                                            _while(proce)
                                            // if(proce[0][proce[1]]){
                                            //     if (proce[0][proce[1]].type == 'newline') {
                                            //         proce[2] += proce[0][proce[1]].content
                                            //         proce[1]++
                                            //     }else{
                                            //         proce[1]++
                                            //     }
                                            // } 
                                        }else{
                                            estado = false
                                            
                                            if(proce[0][proce[1]]){
                                                if (proce[0][proce[1]].type == 'newline') {
                                                    proce[2] += proce[0][proce[1]].content
                                                    proce[1]++                                                    
                                                }
                                            }
                                            proce[2] += "}\n"
                                            break
                                        }
                                    }else{
                                        estado = false

                                        break                                        
                                    }                                                              
                                }    
                            } 
                        }
                    }
                }
            }
        }
    }
}

function _if_else(proce){
    // If_else
    if (proce[0][proce[1]]) {
        if (proce[0][proce[1]].type == 'IF') {
            proce[2] += proce[0][proce[1]].content + " ("
            proce[1]++
            if (proce[0][proce[1]].type == 'NUM_LIT' || proce[0][proce[1]].type == 'STRING_LIT' || proce[0][proce[1]].type == 'IDENTIFIER') {
                if (proce[0][proce[1]].type == 'IDENTIFIER'){
                    proce[2] += '$'+proce[0][proce[1]].content
                    proce[1]++
                }else{
                    proce[2] += proce[0][proce[1]].content
                    proce[1]++
                }
                if (proce[0][proce[1]].type == 'COMPA') {
                    proce[2] += proce[0][proce[1]].content
                    proce[1]++
                    if (proce[0][proce[1]].type == 'NUM_LIT' || proce[0][proce[1]].type == 'STRING_LIT' || proce[0][proce[1]].type == 'IDENTIFIER') {
                        if (proce[0][proce[1]].type == 'IDENTIFIER'){
                            proce[2] += '$'+proce[0][proce[1]].content +')'
                            proce[1]++
                        }else{
                            proce[2] += proce[0][proce[1]].content + ")"
                            proce[1]++
                        }
                        if (proce[0][proce[1]].type == 'TERN_ELSE') {
                            proce[2] += "{"
                            proce[1]++
                            if (proce[0][proce[1]].type == 'newline') {
                                proce[2] += proce[0][proce[1]].content
                                proce[1]++
                                var estado = true
                                while (estado) {
                                    console.log(estado)
                                    if(proce[0][proce[1]]){                                        
                                        if (proce[0][proce[1]].type == 'tab') {
                                            proce[2] += proce[0][proce[1]].content
                                            proce[1]++
                                            _print(proce)
                                            _variables(proce)
                                            // if(proce[0][proce[1]]){
                                            //     if (proce[0][proce[1]].type == 'newline') {
                                            //         proce[2] += proce[0][proce[1]].content
                                            //         proce[1]++
                                            //     }else{
                                            //         proce[1]++
                                            //     }
                                            // } 
                                        }else{
                                            estado = false
                                            
                                            if(proce[0][proce[1]]){
                                                if (proce[0][proce[1]].type == 'newline') {
                                                    proce[2] += proce[0][proce[1]].content
                                                    proce[1]++                                                    
                                                }
                                            }
                                            proce[2] += "}\n"
                                            break
                                        }
                                    }else{
                                        estado = false

                                        break                                        
                                    }                                                              
                                } 
                                // proce[2] += "\n}"
                                
                                //Contenido del else
                            }
                        }
                    }
                }
            }
        }
    }
}

function _else(){
    if (proce[0][proce[1]]) {
        if (proce[0][proce[1]].type == 'ELSE') {
            proce[2] += proce[0][proce[1]].content
            proce[1]++
            if (proce[0][proce[1]].type == 'TERN_ELSE') {
                proce[2] += "{"
                proce[1]++
                if (proce[0][proce[1]].type == 'newline') {
                    proce[2] += proce[0][proce[1]].content
                    proce[1]++
                    var estado = true
                    while (estado) {
                        console.log(estado)
                        if(proce[0][proce[1]]){                                        
                            if (proce[0][proce[1]].type == 'tab') {
                                proce[2] += proce[0][proce[1]].content
                                proce[1]++
                                _print(proce)
                                _variables(proce)
                                // if(proce[0][proce[1]]){
                                //     if (proce[0][proce[1]].type == 'newline') {
                                //         proce[2] += proce[0][proce[1]].content
                                //         proce[1]++
                                //     }else{
                                //         proce[1]++
                                //     }
                                // } 
                            }else{
                                estado = false
                                
                                if(proce[0][proce[1]]){
                                    if (proce[0][proce[1]].type == 'newline') {
                                        proce[2] += proce[0][proce[1]].content
                                        proce[1]++                                                    
                                    }
                                }
                                proce[2] += "}\n"
                                break
                            }
                        }else{
                            estado = false

                            break                                        
                        }                                                              
                    } 
                    // proce[2] += "\n}"
                    
                    //Contenido del else
                }
            }
        }
    }
}





},{"./regexp.js":2,"canto34":3}],2:[function(require,module,exports){
const identifier = /\b((?!(from|global|nonlocal|range|as|assert|exec|raise|pass|except|lambda|print|scan|if|in|for|new|try|case|else|elif|enum|range|eval|False|null|None|this|True|void|with|break|catch|class|const|super|throw|while|yield|del|export|import|public|return|static|switch|default|extends|finally|package|private|continue|debugger|def|arguments|interface|protected|implements|instanceof)\b))[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*\b/;

const comments = /^#.*/;

// General / whitespace
const lineTerminator = new RegExp(/(\u000A|\u000D|\u2028|\u2029)/);
const lineTerminatorSequence = new RegExp(/(\u000A|\u000D(?!\u000A)|\u2028|\u2029|\u000D\u000A)/);
const whiteSpace = new RegExp(/(\u0009|\u000B|\u000C|\u0020|\u00A0|\uFEFF)/);

//  Numeric Literal
const decimalDigit = new RegExp(/([0-9])/);
const decimalDigits = new RegExp('(' + decimalDigit.source + '+)');
const nonZeroDigit = new RegExp(/([1-9])/);
const decimalIntegerLiteral = new RegExp('(0|(' + nonZeroDigit.source + decimalDigits.source + '?))');
const signedInteger = new RegExp('((\\+|-)?' + decimalDigits.source + ')');
const exponentIndicator = new RegExp('(e|E)');
const exponentPart = new RegExp('(' + exponentIndicator.source + signedInteger.source + ')');
const decimalLiteral = new RegExp('((' + decimalIntegerLiteral.source + '\\.'
    + decimalDigits.source + '?' + exponentPart.source + '?' + ')'
    + '|(\\.' + decimalDigits.source + exponentPart.source + '?' + ')'
    + '|(' + decimalIntegerLiteral.source + exponentPart.source + '?))');
const hexDigit = new RegExp(/([0-9]|[a-f]|[A-F])/);
const hexIntegerLiteral = new RegExp('((0x|0X)' + hexDigit.source + '+)');
const numericLiteral = new RegExp('(' + decimalLiteral.source + '|' + hexIntegerLiteral.source + ')');

// String Literal
const singleEscapeCharacter = new RegExp(/('|"|\\|b|f|n|r|t|v)/);
const escapeCharacter = new RegExp('(' + singleEscapeCharacter.source
    + '|' + decimalDigit.source
    + '|x|u)');
const nonEscapeCharacter = new RegExp('([^' + escapeCharacter.source.replace(/\[|\]/g, '')
    + '|' + lineTerminator.source + '])');
const characterEscapeSequence = new RegExp('(' + singleEscapeCharacter.source
    + '|' + nonEscapeCharacter.source + ')');
const hexEscapeSequence = new RegExp('(x' + hexDigit.source + hexDigit.source + ')');
const unicodeEscapeSequence = new RegExp('(u' + hexDigit.source + hexDigit.source
    + hexDigit.source + hexDigit.source + ')');
const escapeSequence = new RegExp('(' + characterEscapeSequence.source
    + '|(0(?!' + decimalDigit.source + '))'
    + '|' + hexEscapeSequence.source
    + '|' + unicodeEscapeSequence.source + ')');
const lineContinuation = new RegExp('(\\\\' + lineTerminatorSequence.source + ')');
const doubleStringCharacter = new RegExp('(([^\\\\"' + lineTerminator.source + '])|(\\\\'
    + escapeSequence.source + ')'
    + '|(' + lineContinuation.source + '))');
const doubleStringCharacters = new RegExp('(' + doubleStringCharacter.source + '+)');
const singleStringCharacter = new RegExp("(([^\\\\'" + lineTerminator.source + '])|(\\\\'
    + escapeSequence.source + ')'
    + '|(' + lineContinuation.source + '))');
const singleStringCharacters = new RegExp('(' + singleStringCharacter.source + '+)');
const stringLiteral = new RegExp('(("' + doubleStringCharacters.source + '?")|(\''
    + singleStringCharacters.source + '?\'))');

// Regex Literals
const regularExpressionNonTerminator = new RegExp('([^' + lineTerminator.source
    + '])');
const regularExpressionBackslashSequence = new RegExp('(\\\\'
    + regularExpressionNonTerminator.source + ')');
const regularExpressionClassChar = new RegExp('(([^\\]\\\\]'
    + regularExpressionNonTerminator.source + ')'
    + '|' + regularExpressionBackslashSequence.source + ')');
const regularExpressionFlags = new RegExp(/(g|i|m|u|y)?/);
const regularExpressionClassChars = new RegExp('(' +
    regularExpressionClassChar.source + '*)?');
const regularExpressionClass = new RegExp('(\\['
    + regularExpressionClassChars.source + '\\])');
const regularExpressionFirstChar = new RegExp('(([^*\\\\/\\[]'
    + regularExpressionNonTerminator.source + ')'
    + '|' + regularExpressionBackslashSequence.source
    + '|' + regularExpressionClass.source + ')');
const regularExpressionChar = new RegExp('(([^\\\\/\\[]'
    + regularExpressionNonTerminator.source + ')'
    + '|' + regularExpressionBackslashSequence.source +
    Number('|') + regularExpressionClass.source + ')');
const regularExpressionChars = new RegExp('(|' + regularExpressionChar.source + '+)');
const regularExpressionBody = new RegExp('(' + regularExpressionFirstChar.source
    + regularExpressionChars.source + ')');
const regularExpressionLiteral = new RegExp('(/' + regularExpressionBody.source
    + '/' + regularExpressionFlags.source + ')');

// Final Exports
const fullNumericLiteral = new RegExp(numericLiteral.source + '\\b');
const fullStringLiteral = new RegExp(stringLiteral.source);
const fullRegularExpressionLiteral = new RegExp(regularExpressionLiteral.source);


module.exports = { fullStringLiteral, whiteSpace, comments, fullNumericLiteral, fullRegularExpressionLiteral, lineTerminatorSequence, identifier };
},{}],3:[function(require,module,exports){
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.canto34 = mod.exports;
	}
})(this, function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var util = {
		lang: {
			isNullOrUndefined: function isNullOrUndefined(x) {
				if (typeof x === "undefined") {
					return true;
				}

				if (x === null) {
					return true;
				}

				return false;
			}
		},
		extend: function extend() {
			// conparable to jquery's extend
			for (var i = 1; i < arguments.length; i++) {
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) arguments[0][key] = arguments[i][key];
				}
			}return arguments[0];
		}
	};

	var PatternDefinitionException = function (_Error) {
		_inherits(PatternDefinitionException, _Error);

		function PatternDefinitionException(message) {
			_classCallCheck(this, PatternDefinitionException);

			return _possibleConstructorReturn(this, (PatternDefinitionException.__proto__ || Object.getPrototypeOf(PatternDefinitionException)).call(this, message));
		}

		return PatternDefinitionException;
	}(Error);

	var LexerException = function (_Error2) {
		_inherits(LexerException, _Error2);

		function LexerException(message) {
			_classCallCheck(this, LexerException);

			return _possibleConstructorReturn(this, (LexerException.__proto__ || Object.getPrototypeOf(LexerException)).call(this, message));
		}

		return LexerException;
	}(Error);

	var ParserException = function (_Error3) {
		_inherits(ParserException, _Error3);

		function ParserException(message) {
			_classCallCheck(this, ParserException);

			return _possibleConstructorReturn(this, (ParserException.__proto__ || Object.getPrototypeOf(ParserException)).call(this, message));
		}

		return ParserException;
	}(Error);

	var Lexer = function () {
		function Lexer(options) {
			_classCallCheck(this, Lexer);

			var defaults = {
				languageName: "unnamedlanguage"
			};
			this.options = util.extend({}, defaults, options);
			this.tokenTypes = [];
		}

		_createClass(Lexer, [{
			key: "addTokenType",
			value: function addTokenType(tokenType) {

				if (!tokenType.name) {
					throw new PatternDefinitionException("Token types must have a 'name' property");
				}

				// FOR CONSIDERATION: for some tokens, the full 'consume' is required for correct interpretation
				// (eg, JSON strings with escaped character) but a regex will do for syntax highlighting. In this
				// situation, both are allowed but consume is used for lexing and regexp is used for language definition.
				// if (tokenType.regexp && tokenType.consume) {
				// 	throw new canto34.PatternDefinitionException("Token types cannot have both a 'regexp' pattern and 'consume' function.");
				// }

				if (!tokenType.regexp && !tokenType.consume) {
					throw new PatternDefinitionException("Token types must have a 'regexp' property or a 'consume' function");
				}

				if (tokenType.regexp && !(tokenType.regexp instanceof RegExp)) {
					throw new PatternDefinitionException("Token types 'regexp' property must be an instance of RegExp");
				}

				if (tokenType.consume && typeof tokenType.consume !== "function") {
					throw new PatternDefinitionException("Token types 'consume' property must be a function");
				}

				if (tokenType.interpret && typeof tokenType.interpret !== "function") {
					throw new PatternDefinitionException("Token types 'interpret' property must be a function");
				}
				this.tokenTypes.push(tokenType);
			}
		}, {
			key: "tokenize",
			value: function tokenize(content) {
				if (content === undefined) {
					throw new LexerException("No content provided");
				}

				if (this.tokenTypes.length === 0) {
					throw new LexerException("No token types defined");
				}

				var result = [];
				var consumed;
				var remaining = content;
				var tracker = new LineTracker();
				var tokenTypeLength = this.tokenTypes.length;
				var consumeResult;

				while (remaining.length > 0) {
					var somethingFoundThisPass = false;

					for (var i = 0; i < tokenTypeLength; i++) {
						var tokenType = this.tokenTypes[i];

						consumeResult = undefined;
						if (tokenType.consume) {
							// must have a consume function;
							consumeResult = tokenType.consume(remaining);
							// should have told us what it consumed;
							if (consumeResult.success) {
								if (remaining.indexOf(consumeResult.consumed) !== 0) {
									throw new LexerException("The consume function for " + tokenType.name + " failed to return the start of the remaining content at " + tracker.line + "." + tracker.character + " and instead returned " + consumeResult.consumed);
								} else {
									somethingFoundThisPass = true;
									consumed = consumeResult.consumed;
								}
							} else {
								continue;
							}
						} else {
							var match = tokenType.regexp.exec(remaining);
							if (match) {
								// we found a token! great. What did it say? We only
								// want to match at the start of the string
								if (match.index === 0) {
									somethingFoundThisPass = true;
									consumed = match[0];
								} else {
									continue;
								}
							} else {
								continue;
							}
						}

						//handle our new token
						if (tokenType.interpret) {
							content = tokenType.interpret(consumed);
						} else if (consumeResult && !util.lang.isNullOrUndefined(consumeResult.content)) {
							content = consumeResult.content;
						} else {
							content = consumed;
						}

						var token = {
							content: content,
							type: tokenType.name,
							line: tracker.line,
							character: tracker.character
						};

						if (!tokenType.ignore) {
							result.push(token);
						}

						remaining = remaining.substring(consumed.length);
						tracker.consume(consumed);
					}

					if (!somethingFoundThisPass) {
						var userPartOfString = remaining.substring(0, 15);
						var visibleUserPartOfString = userPartOfString.replace("\r", "\\r").replace("\t", "\\t").replace("\n", "\\n");
						throw new LexerException("No viable alternative at " + tracker.line + "." + tracker.character + ": '" + visibleUserPartOfString + "...'");
					}
				}

				return result;
			}
		}]);

		return Lexer;
	}();

	function escapeRegExp(string) {
		return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
	}

	var StandardTokenTypes = function () {
		function StandardTokenTypes() {
			_classCallCheck(this, StandardTokenTypes);
		}

		_createClass(StandardTokenTypes, null, [{
			key: "constant",
			value: function constant(literal, name, role) {
				role = role || ["keyword"];
				return {
					name: name,
					regexp: new RegExp("^" + escapeRegExp(literal)),
					role: role
				};
			}
		}, {
			key: "floatingPoint",
			value: function floatingPoint() {
				return {
					name: "floating point",
					regexp: /(^-?\d*\.\d+)/,
					role: ["constant", "numeric"],
					interpret: function interpret(content) {
						return parseFloat(content);
					}
				};
			}
		}, {
			key: "integer",
			value: function integer() {
				return {
					name: "integer",
					regexp: /^-?\d+/,
					role: ["constant", "numeric"],
					interpret: function interpret(content) {
						return parseInt(content);
					}
				};
			}
		}, {
			key: "whitespace",
			value: function whitespace() {
				return {
					name: "whitespace",
					ignore: true,
					regexp: /^[ \t]+/
				};
			}
		}, {
			key: "whitespaceWithNewlines",
			value: function whitespaceWithNewlines() {
				return {
					name: "whitespace",
					ignore: true,
					regexp: /^[ \t\r\n]+/
				};
			}
		}, {
			key: "real",
			value: function real() {
				return {
					name: "real number",
					regexp: /^X/,
					role: ["constant", "numeric"]
				};
			}
		}, {
			key: "comma",
			value: function comma() {
				return this.constant(",", "comma", ["punctuation"]);
			}
		}, {
			key: "period",
			value: function period() {
				return this.constant(".", "period", ["punctuation"]);
			}
		}, {
			key: "star",
			value: function star() {
				return this.constant("*", "star", ["punctuation"]);
			}
		}, {
			key: "colon",
			value: function colon() {
				return this.constant(":", "colon", ["punctuation"]);
			}
		}, {
			key: "openParen",
			value: function openParen() {
				return this.constant("(", "open paren", ["punctuation"]);
			}
		}, {
			key: "closeParen",
			value: function closeParen() {
				return this.constant(")", "close paren", ["punctuation"]);
			}
		}, {
			key: "openBracket",
			value: function openBracket() {
				return this.constant("{", "open bracket", ["punctuation"]);
			}
		}, {
			key: "closeBracket",
			value: function closeBracket() {
				return this.constant("}", "close bracket", ["punctuation"]);
			}
		}, {
			key: "openSquareBracket",
			value: function openSquareBracket() {
				return this.constant("[", "open square bracket", ["punctuation"]);
			}
		}, {
			key: "closeSquareBracket",
			value: function closeSquareBracket() {
				return this.constant("]", "close square bracket", ["punctuation"]);
			}
		}, {
			key: "JsonString",
			value: function JsonString() {
				return {
					name: "string",
					regexp: /"(?:[^"\\]|\\.)*"/,
					consume: function consume(remaining) {
						var fail = { success: false };
						if (remaining.indexOf('"') !== 0) {
							return fail;
						}

						var content = '';
						var pos = 1;
						var ch;
						var finished = false;
						do {
							ch = remaining[pos];
							pos += 1;

							switch (ch) {
								case '"':
									finished = true;
									break;
								case '\\':
									var ch2 = remaining[pos];
									pos += 1;
									switch (ch2) {
										case '"':
											return fail;
										case "t":
											content += "\t";break;
										case "r":
											content += "\r";break;
										case "n":
											content += "\n";break;
										case "u":
											var unicodeDigits = remaining.substr(pos, 4);
											if (unicodeDigits.length != 4 || !/\d{4}/.test(unicodeDigits)) {
												content += "\\u";
											} else {
												pos += 4;
												var codePoint = parseInt(unicodeDigits, 10);
												var codePointString = String.fromCharCode(codePoint);
												content += codePointString;
											}
											break;
										default:
											// something like \q, which doesn't mean anything
											return fail;
									}
									break;
								default:
									content += ch;
									break;
							}
						} while (!finished);

						var consumed = remaining.substring(0, pos);

						var successResult = {
							success: true,
							consumed: consumed,
							content: content
						};
						return successResult;
					}
				};
			}
		}]);

		return StandardTokenTypes;
	}();

	var Parser = function () {
		function Parser() {
			_classCallCheck(this, Parser);
		}

		_createClass(Parser, [{
			key: "initialize",
			value: function initialize(tokens) {
				if (!tokens) {
					throw new ParserException("No tokens provided to the parser");
				}

				if (!(tokens instanceof Array)) {
					throw new ParserException("A non-array was provided to the parser instead of a token array");
				}

				this.tokens = tokens;
			}
		}, {
			key: "la1",
			value: function la1(tokenType) {
				if (this.eof()) {
					throw new ParserException("No tokens available");
				}

				return this.tokens[0].type == tokenType;
			}
		}, {
			key: "match",
			value: function match(tokenType) {

				if (this.eof()) {
					throw new ParserException("Expected " + tokenType + " but found EOF");
				}

				if (!this.la1(tokenType)) {
					throw new ParserException("Expected " + tokenType + " but found " + this.tokens[0].type + " at l" + this.tokens[0].line + "." + this.tokens[0].character);
				}

				return this.tokens.shift();
			}
		}, {
			key: "eof",
			value: function eof() {
				return this.tokens.length === 0;
			}
		}, {
			key: "expectEof",
			value: function expectEof() {
				if (!this.eof()) {
					throw new ParserException("Expected EOF but found " + this.tokens[0].type + " at l" + this.tokens[0].line + "." + this.tokens[0].character);
				}
			}
		}]);

		return Parser;
	}();

	var LineTracker = function () {
		function LineTracker() {
			_classCallCheck(this, LineTracker);

			this.line = 1;
			this.character = 1;
			this.justSeenSlashR = false;
		}

		_createClass(LineTracker, [{
			key: "consume",
			value: function consume(content) {

				for (var i = 0, len = content.length; i < len; i++) {
					if (content[i] == "\r") {
						this.line += 1;
						this.character = 1;
						this.justSeenSlashR = true;
					} else if (content[i] == "\n") {
						if (!this.justSeenSlashR) {
							this.line += 1;
						}
						this.character = 1;
						this.justSeenSlashR = false;
					} else {
						this.character += 1;
						this.justSeenSlashR = false;
					}
				}
			}
		}]);

		return LineTracker;
	}();

	exports.PatternDefinitionException = PatternDefinitionException;
	exports.LexerException = LexerException;
	exports.ParserException = ParserException;
	exports.Lexer = Lexer;
	exports.StandardTokenTypes = StandardTokenTypes;
	exports.Parser = Parser;
	exports.LineTracker = LineTracker;
});
},{}]},{},[1]);
