
var acc = 0, op = "";

  $(function() {
    var num = $("#n1");
     $("#n1").on("click", 
      function(){ $("#n1").val("");}
    );

    $("#b1").on("click", 
      function() {
        num.val(num.val() * num.val());
      }
    );

  $("#mas").on("click",
    function(){
      acc = num.val();  op = "+";
      $("#n1").val("");
    }
  );

  $("#menos").on("click",
    function(){
      acc = num.val();  op = "-";
      $("#n1").val("");
    }
  );

  $("#por").on("click",
    function(){
      acc = num.val();  op = "*";
      $("#n1").val("");
    }
  );

  $("#entre").on("click",
    function(){
      acc = num.val();  op = "/";
      $("#n1").val("");
    }
  );

  $("#elevado").on("click",
    function(){
      acc = num.val();  op = "^";
      $("#n1").val("");
    }
  );

  $("#calcular").on("click",
    function(){
    if (op === "+") {num.val(+acc + +num.val())}
    if (op === "-") {num.val(+acc - +num.val())}
    if (op === "*") {num.val(+acc * +num.val())}
    if (op === "/") {num.val(+acc / +num.val())}
    if (op === "^") {num.val(Math.pow(acc,num.val()))}
    }
  );

  $("#inverso").on("click",
    function(){num.val(1 / num.val())
    }
  );

  $("#sqrt").on("click",
    function(){num.val(Math.sqrt(num.val()))
    }
  );

  $("#parte_entera").on("click",
    function(){
      if (num.val() > 0) { num.val(Math.floor(num.val()))} 
      else { num.val(-Math.ceil(num.val()))};
    }
  );  

  $("#potencia_BaseDos").on("click",
    function(){num.val(Math.pow(2,num.val()))
    }
  );

  $("#factorial").on("click",
    function(){
      var factor = 1;
      for(var i = 1; i <= num.val(); i++){
        factor = factor * i;
      }
      num.val(factor);
    }
  );

  $("#sumatorio").on("click",
    function() {
    var lista = num.val().split(",");
    for (var j=0, acum=0; j<lista.length; j++){
      acum += +lista[j];
    }
    num.val(acum);
    }
  );

  $("#productoria").on("click",
    function(){
      var listaP = num.val().split(",");
    for (var j=0, acum=1; j<listaP.length; j++){
      acum *= +listaP[j];
    }
    num.val(acum);
    }
  );

  });