// ITERADOR DE LINHAS DA TABELA
var iteradorLinhasTabela = 1

// FUNÇÃO PARA VERIFICAÇÃO DE NOTAS E EMISSÃO DA SITUAÇÃO DO ALUNO
function VerificarNotas() {
    // LOOP PARA ITERAR TODAS AS LINHAS DA TABELA
    for (let i = 0; i < iteradorLinhasTabela; i++) {

        // COMPUTAÇÃO DOS VALORES RECEBIDOS NOS INPUTS HTML
        var valorNota01 = parseInt(document.getElementById("entrada_nota01_" + i).value)
        var valorNota02 = parseInt(document.getElementById("entrada_nota02_" + i).value)
        var valorNota03 = parseInt(document.getElementById("entrada_nota03_" + i).value)
        var valorNota04 = parseInt(document.getElementById("entrada_nota04_" + i).value)

        // CAULCULO DA MÉDIA DO ALUNO
        let soma = valorNota01 + valorNota02 + valorNota03 + valorNota04
        var media = soma / 4

        // CRIAÇÃO DO ATRIBUTO PARA OUTPUT (SITUAÇÃO) E ATRIBUIÇÃO DE SEU VALOR
        var atributoSaidaSituacao = document.createAttribute("id")
        atributoSaidaSituacao.value = "saida_situacao_" + i

        if (media > 50) {
            var textoSaidaSituacao = document.createTextNode("APROVADO")
        }
        else if (media < 45) {
            var textoSaidaSituacao = document.createTextNode("REPROVADO")
        }
        else {
            var textoSaidaSituacao = document.createTextNode("RECUPERADO")
        }

        // CRIAÇÃO DO ATRIBUTO PARA OUTPUT (MÉDIA) E ATRIBUIÇÃO DE SEU VALOR
        var atributoSaidaMedia   = document.createAttribute("id")
        var textoSaidaMedia      = document.createTextNode(media)
        atributoSaidaMedia.value = "saida_media_" + i

        // INDENTIFICAÇÃO DA LINHA DO ALUNO SENDO ITERADA
        var linhaAluno = document.getElementById("linha_aluno_" + i)

        // CRIAÇÃO DO ELEMENTO "td" E "output" PARA EXIBIR A SITUAÇÃO DO ALUNO
        var colunaSituacao = document.createElement("td")
        var outputSituacao = document.createElement("output")

        // CRIAÇÃO DO ELEMENTO "td" E "output" PARA EXIBIR A MÉDIA DO ALUNO
        var colunaMedia = document.createElement("td")
        var outputMedia = document.createElement("output")
        
        // CRIAÇÃO DE LAÇOS PAI E FILHO PARA SITUAÇÃO
        outputSituacao.appendChild(atributoSaidaSituacao) // ((output -> atributo)
        outputSituacao.appendChild(textoSaidaSituacao) // (output -> situação)
        colunaSituacao.appendChild(outputSituacao) // (coluna -> output)
        
        // CRIAÇÃO DE LAÇOS PAI E FILHO PARA MÉDIA
        outputMedia.appendChild(atributoSaidaMedia) // ((output -> atributo)
        outputMedia.appendChild(textoSaidaMedia) // (output -> situação)
        colunaMedia.appendChild(outputMedia) // (coluna -> output)
        
        //CRIAÇÃO DE LAÇOS PAI E FILHO
        linhaAluno.appendChild(colunaMedia) // (linha -> coluna)
        linhaAluno.appendChild(colunaSituacao) // (linha -> coluna)

        document.body.appendChild(linhaAluno) // (linha -> tabela)
    }
}