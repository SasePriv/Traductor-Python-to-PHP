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




