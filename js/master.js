
var nome;
var sexo;
var idade;
var altura;
var massa;
var sangue;
var alergia;
var historico;
var doenca;
var telefone;
var cpf;
var lista = [];
var i = 0;
var codigo;
var cod;
var mod;
var index;
var etnia;
var pront=[];
var d = 0;


function Cadastro() {
  nome = $("#nome").val();
  sexo = $("#sexo").val();
  idade = parseInt($("#idade").val());
  altura = parseInt($("#altura").val());
  massa = parseInt($("#massa").val());
  sangue = $("#sangue").val();
  etnia = $("#etnia").val();
  alergia = $("#alergia").val();
  historico = $("#historico").val();
  doenca = $("#doenca").val();
  telefone = $("#tel").val();
  cpf = $("#cpf").val();
  cod=Math.random()*10000;
  mod=i;



  var paciente = new Object();

  paciente.nome = nome;
  paciente.idade = idade;
  paciente.sexo = sexo;
  paciente.altura = altura;
  paciente.massa = massa;
  paciente.sangue = sangue;
  paciente.etnia = etnia;
  paciente.alergia = alergia
  paciente.historico = historico;
  paciente.doenca = doenca;
  paciente.telefone = telefone;
  paciente.cpf = cpf;
  paciente.vetor = mod;
  paciente.pospron = 0;
  paciente.prontuario = [];
  paciente.id = Math.trunc(cod);
  paciente.data=[];
  lista[i] = paciente;
  i++;

  $("#nome").val("");
  $("#idade").val("");
  $("#sexo").val("");
  $("#altura").val("");
  $("#massa").val("");
  $("#sangue").val("");
  $("#etnia").val("");
  $("#alergia").val("");
  $("#historico").val("");
  $("#tel").val("");
  $("#cpf").val("");
  $("#doenca").val("");

}

function Display() { // função onload do body


  $(".criarctn").css("display","none");
  $("#editBtn").css("display", "none");
  $("#gravarBtn").css("display", "none");
  $("#confirmBtn").css("display", "none");
  $(".pronts").css("display","none");
  $("#mostrarBtn").css("display", "none");

}

function gerarCadastro() {
  $("#nome").val("Alex");
  parseInt($("#idade").val(18));
  $("#sexo").val("M");
  parseInt($("#altura").val(1.75));
  parseInt($("#massa").val(65));
  $("#sangue").val("não sei");
  $("#etnia").val("Pardo");
  $("#alergia").val("nada");
  $("#historico").val("não sei");
  $("#cpf").val("11111111111");
  $("#tel").val("37146491");
  $("#doenca").val("Nenhuma");
}
function Lista() {
  $("#lista").html("");
  for (var k = 0; k < i; k++) {
    $("#lista").append("<li>"+" - Nome: " + lista[k].nome + " -- " + "ID: " +lista[k].id + "</li><br>");
  }
}


function Pesquisar(){

  codigo = parseInt($("#ID").val());
  $("#resultado").html("");


   for(var c=0;c<i;c++){
     if(codigo == lista[c].id){
       $("#resultado").append("<li> - Nome: "+lista[c].nome + "</li><li> - Idade: " + lista[c].idade + "</li><li> - Sexo:"+lista[c].sexo + "</li><li> - Altura:"+lista[c].altura + "</li><li> - Massa: " + lista[c].massa + "</li><li> - Tipo sanguíneo: " + lista[c].sangue + "</li><li> - Etnia: " + lista[c].etnia + "</li><li> - Alergias: " + lista[c].alergia + "</li><li> - Histórico familiar: "+lista[c].historico + "</li><li> - Telefone: " + lista[c].telefone + "</li><li> - CPF: " + lista[c].cpf + "</li><li> - Doenças: " + lista[c].doenca+"<li><input type='date' id='bday' value=''></li>"+"<textarea name='name' rows='8' cols='30' id='texto'></textarea>"+"<br>");
       index=lista[c].vetor;
       var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     $("input[type=date]").val(yyyy+"-"+mm+"-"+dd);
     }
    if (lista[c].id != 0) {
      $("#editBtn").css("display", "block");
      $("#gravarBtn").css("display", "block");
      $("#mostrarBtn").css("display", "block");
    }
  }
}



function Edit() {


  $("#nome").val(lista[index].nome);
  $("#idade").val(lista[index].idade);
  $("#sexo").val(lista[index].sexo);
  $("#altura").val(lista[index].altura);
  $("#massa").val(lista[index].massa);
  $("#sangue").val(lista[index].sangue);
  $("#etnia").val(lista[index].etnia);
  $("#alergia").val(lista[index].alergia);
  $("#historico").val(lista[index].historico);
  $("#cpf").val(lista[index].cpf);
  $("#tel").val(lista[index].telefone);
  $("#doenca").val(lista[index].doenca);
  $("#cadastroBtn").css("display","none");
  $("#confirmBtn").css("display","block");
}

function ADDprontuario(){
  lista[index].data[lista[index].pospron]=$("#bday").val();
  lista[index].prontuario[lista[index].pospron] = $("#texto").val();
  $("textarea").val("");
  lista[index].pospron++;

}
function Showprontuario(){
  $(".pronts").css("display","block");
  $(".pronts").html("");
  var aux=[];
  for(var v=0;v<lista[index].pospron;v++){
    aux[v]="data: "+lista[index].data[v]+"/"+"<br>"+"("+lista[index].prontuario[v]+")";
    $(".pronts").append("<li>"+aux[v]+"</li>"+"<br>");
  }

}

function Confirm() {
  nome = $("#nome").val();
  sexo = $("#sexo").val();
  idade = parseInt($("#idade").val());
  altura = parseInt($("#altura").val());
  massa = parseInt($("#massa").val());
  sangue = $("#sangue").val();
  etnia = $("#etnia").val();
  alergia = $("#alergia").val();
  historico = $("#historico").val();
  doenca = $("#doenca").val();
  telefone = $("#tel").val();
  cpf = $("#cpf").val();
  var b =lista[index].id;

  var paciente = new Object();

  paciente.nome = nome;
  paciente.idade = idade;
  paciente.sexo = sexo;
  paciente.altura = altura;
  paciente.massa = massa;
  paciente.sangue = sangue;
  paciente.etnia = etnia;
  paciente.alergia = alergia
  paciente.historico = historico;
  paciente.doenca = doenca;
  paciente.telefone = telefone;
  paciente.cpf = cpf;
  paciente.id = b ;
  lista[index] = paciente;

  $("#nome").val("");
  $("#idade").val("");
  $("#sexo").val("");
  $("#altura").val("");
  $("#massa").val("");
  $("#sangue").val("");
  $("#etnia").val("");
  $("#alergia").val("");
  $("#historico").val("");
  $("#doenca").val("");
  $("#tel").val("");
  $("#cpf").val("");

  $("#cadastroBtn").css("display","block");
  $("#confirmBtn").css("display","none");
}

var y=0;
var cadastros=[];

function Logout(){
  $(".FichaMedica").css("display","none");
  $(".login").css("display","block");
  $("#usernameField").val("");
  $("#passwordField").val("");
  $("#imagemPUC").css("display","block");
  location.reload();
}

function sing_up(){

  $(".criarctn").css("display","block");
  $(".criarsome").css("display","none");

}

function Voltar() {
  $(".criarctn").css("display","none");
  $(".criarsome").css("display","block");
  $(".erro").css("display", "none");
  $("#newpasswordField").val("");
  $("#newusernameField").val("");
}

function Finalizar(){

  $(".criarctn").css("display","none");
  $(".criarsome").css("display","block");
  var nome=$("#newusernameField").val();
  var senha=$("#newpasswordField").val();
  if(nome == "" || senha == "") { //faz com que usuário e senha vazios não sejam válidos no cadastro

    var nome=$("#newusernameField").val();
    var senha=$("#newpasswordField").val();

    $(".erro").css("display", "block");
    $(".criarsome").css("display","none");
    $(".criarctn").css("display","block");
  }
  else{
    $(".erro").css("display", "none");
    $("#newpasswordField").val("");
    $("#newusernameField").val("");
  }

  var usuario= new Object();
  usuario.name=nome;
  usuario.senha=senha;

  cadastros[y]= usuario;
  y++;
}

var userAdm = "admin";
var pwAdm = "admin";

function sign_in () {
  var aux=0;
  var user=$("#usernameField").val();
  var pw=$("#passwordField").val();
  for(var u=0;u<y;u++){

    if(user==cadastros[u].name && pw==cadastros[u].senha){
      $(".FichaMedica").css("display","block");
      $(".FichaMedica").fadeTo("slow", 1);
      $(".login").css("display","none");
      $("#imagemPUC").css("display","none");
      return(aux=1);
    }
  }
    if (user == userAdm && pw == pwAdm) {
      $(".FichaMedica").css("display","block");
      $(".FichaMedica").fadeTo("slow", 1);
      $(".login").css("display","none");
      $("#imagemPUC").css("display","none");
      return(aux=1);
    }

    if(aux==0){
      alert("Usuário ou senha incorretos.\nInsira os credenciais novamente.");
      $("#usernameField").val("");
      $("#passwordField").val("");
    }
}
