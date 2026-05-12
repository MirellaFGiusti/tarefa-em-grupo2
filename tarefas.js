// tarefas.js - Sistema de Lista de Tarefas
let tarefas = [];
let titulo = "SISTEMA DE TAREFAS"; // <- linha do conflito
function adicionarTarefa(descricao) {
  tarefas.push({ descricao: descricao, concluida: false });
  console.log("Tarefa adicionada: " + descricao);
}
function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa.");
    return;
  }
  tarefas.forEach(function (t, i) {
    let st = t.concluida ? "[X]" : "[ ]";
    console.log(i + 1 + ". " + st + " " + t.descricao);
  });
}
// Teste inicial
adicionarTarefa("Estudar Git");
listarTarefas();

function resumo() {
let total = tarefas.length;
let feitas = tarefas.filter(t => t.concluida).length;
console.log("=== " + titulo + " ===");
console.log("Total: "+total+" | Feitas: "+feitas);
}
// Teste final
resumo();
// Membro 3 — atualiza nomeBanco e adiciona encerrarConta()
// ALTERE a linha do nomeBanco para:
let nomeBanco = "BANCO DIGITAL PLUS";
function encerrarConta(indice) {
if (indice < 1 || indice > contas.length) {
console.log("Conta não encontrada."); return;
}
contas[indice - 1].ativa = false;
console.log("Conta de " + contas[indice-1].titular + " encerrada.");
}
// Teste
criarConta("Carla Mendes", 750);
encerrarConta(2);
listarContas();