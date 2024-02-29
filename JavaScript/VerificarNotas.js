var iteradorLinhasTabela = 1

var iteradorNomes    = 1
var iteradoraNotas01 = 1
var iteradoraNotas02 = 1
var iteradoraNotas03 = 1
var iteradoraNotas04 = 1

function VerificarNotas() {
    for (let i = 0; i < iteradorLinhasTabela; i++) {

        var valorNota01 = parseInt(document.getElementById("entrada_nota01_" + i).value)
        var valorNota02 = parseInt(document.getElementById("entrada_nota02_" + i).value)
        var valorNota03 = parseInt(document.getElementById("entrada_nota03_" + i).value)
        var valorNota04 = parseInt(document.getElementById("entrada_nota04_" + i).value)

        let soma = valorNota01 + valorNota02 + valorNota03 + valorNota04
        
        var media = soma / 4

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

        var atributoSaidaMedia   = document.createAttribute("id")
        var textoSaidaMedia      = document.createTextNode(media)
        atributoSaidaMedia.value = "saida_media_" + i

        var linhaAluno = document.getElementById("linha_aluno_" + i)

        var colunaSituacao = document.createElement("td")
        var outputSituacao = document.createElement("output")

        var colunaMedia = document.createElement("td")
        var outputMedia = document.createElement("output")
        
        outputSituacao.appendChild(atributoSaidaSituacao)
        outputSituacao.appendChild(textoSaidaSituacao)
        colunaSituacao.appendChild(outputSituacao)
        
        outputMedia.appendChild(atributoSaidaMedia)
        outputMedia.appendChild(textoSaidaMedia)
        colunaMedia.appendChild(outputMedia)
        
        linhaAluno.appendChild(colunaMedia)
        linhaAluno.appendChild(colunaSituacao)

        document.body.appendChild(linhaAluno)
    }
}