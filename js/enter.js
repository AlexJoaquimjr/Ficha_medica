function Enters() {
  var usernameTab = $("#usernameField");
  usernameTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#passwordField").focus();
    }
  });

  var passwordEnter = $("#passwordField");
  passwordEnter.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#signIn").click();
    }
  });


  var idEnter = $("#ID");
  idEnter.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#srchBtn").click();
    }
  });


  var nameTab = $("#nome");
  nameTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#idade").focus();
    }
  });

  var idadeTab = $("#idade");
  idadeTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#sexo").focus();
    }
  });

  var sexoTab = $("#sexo");
  sexoTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#cpf").focus();
    }
  });

  var cpfTab = $("#cpf");
  cpfTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#tel").focus();
    }
  });

  var telTab = $("#tel");
  telTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#altura").focus();
    }
  });

  var alturaTab = $("#altura");
  alturaTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#massa").focus();
    }
  });

  var massaTab = $("#massa");
  massaTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#sangue").focus();
    }
  });

  var sangueTab = $("#sangue");
  sangueTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#etnia").focus();
    }
  });

  var etniaTab = $("#etnia");
  etniaTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#alergia").focus();
    }
  });

  var alergiaTab = $("#alergia");
  alergiaTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#historico").focus();
    }
  });

  var historicoTab = $("#historico");
  historicoTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#doenca").focus();
    }
  });

  var doencaTab = $("#doenca");
  doencaTab.on("keyup", function() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#cadastroBtn").click();
    }
  });

  var newUsername = $("#newusernameField");
  newUsername.on("keyup", function newUsernameTab() {
    if (event.keyCode === 13) {
      event.preventDefault();

      $("#newpasswordField").focus();
    }
  });

  var newPassword = $("#newpasswordField");
  newPassword.on("keyup", function newPasswordTab() {
    if(event.keyCode === 13) {
      event.preventDefault();
      $("#finalizar").click();
    }
  });


  var cpfMask = $("#cpf");
  cpfMask.on("keypress", function() {
    var cpfVal = $("#cpf").val();

    if(cpfVal.length == 3) {
      $("#cpf").val(cpfVal + '.');
    }
    if(cpfVal.length == 7) {
      $("#cpf").val(cpfVal + '.');
    }
    if(cpfVal.length == 11) {
      $("#cpf").val(cpfVal + '-');
    }
    $("#cpf").attr("maxlength", 14);
  });

  var telMask = $("#tel");
  telMask.on("keypress", function() {
    var telVal = $("#tel").val();

    if(telVal.length == 0) {
      $("#tel").val(telVal + '(');
    }
    if(telVal.length == 3) {
      $("#tel").val(telVal + ') ');
    }
    if(telVal.length == 10) {
      $("#tel").val(telVal + ' - ');
    }
    $("#tel").attr("maxlength", 17);
  });
}
