var app = angular.module('Calculadora', []);

app.controller('CalculadoraCtrl', function($scope){
    /* Todo lo que que empiece por $ es propio del framework de angular*/
   /* $scope.sumando1, $scope.sumando2;
    $scope.sumar = function() {
        $scope.suma = $scope.sumando1 + $scope.sumando2 eval
    }*/
    $scope.display = '';
    $scope.resultado = '';
    $scope.displayact = false;
    $scope.estadoigual = false;
    
        
   $scope.valor = function(valor){

    if ($scope.displayact) {
        $scope.resultado = ''+ valor;

    } else { if($scope.estadoigual) {
        $scope.resultado = '';
    }
        $scope.resultado +=  valor;
    }
       //a = $scope.display +=  valor;
        //var ultimo = a[a.length - 1]
       // $scope.resultado = '';
       // $scope.resultado += ultimo;
      //  $scope.resultado += valor;
        $scope.displayact = false;
        $scope.estadoigual = false;


     } 


    $scope.borrarTodo = function() {
        $scope.resultado = 0;
        $scope.display = '';
    }

    /*$scope.borrar = function(valor) {
        c = $scope.display +=  valor;
        var ultimo = c[c.length - 1]
        delete ultimo
    }*/

    $scope.operacion = function(b){   
        
        if ($scope.display.indexOf('-') != -1 || $scope.display.indexOf('+') != -1 || $scope.display.indexOf('*') != -1 || $scope.display.indexOf('/') != -1  ) { 

            $scope.display += $scope.resultado;
                $scope.resultado = eval($scope.display);
               //console.log($scope.display);
                //console.log(eval($scope.display))
        } else {
            $scope.display += $scope.resultado;
        }
        $scope.display +=  b;
        $scope.displayact = true;
    } 
    
    $scope.igual = function (){
        $scope.display += $scope.resultado
        $scope.resultado = eval($scope.display)
        $scope.display = '';
        $scope.estadoigual = true;
    }

     
   /* document.getElementById("demoMas").onclick = function() {signoMas()};
    function signoMas () {
        $scope.display += document.getElementById("demoMas").innerHTML = "+";
        
    }
    
    document.getElementById("demoMenos").onclick = function() {signoMenos()};
    function signoMenos () {
        $scope.display += document.getElementById("demoMenos").innerHTML = "-";
    }

    document.getElementById("demoMulti").onclick = function() {signoMulti()};
    function signoMulti () {
        $scope.display += document.getElementById("demoMulti").innerHTML = "*";
    }

    document.getElementById("demoDiv").onclick = function() {signoDiv()};
    function signoDiv () {
        $scope.display += document.getElementById("demoDiv").innerHTML   = "/"  ;
    } */

    /*
    $scope.sumar = function(){
        
        if ($scope.display.indexOf('+') != -1) { 

                $scope.resultado = eval($scope.display);
               console.log($scope.display);
                //console.log(eval($scope.display))
              
        }
       $scope.display += '+'
    } 

    $scope.restar = function(){
        
        if ($scope.display.indexOf('-') != -1) { 

                $scope.resultado = eval($scope.display);
               console.log($scope.display);
                //console.log(eval($scope.display))
              
        }
       $scope.display += '-'
    } 
    
    $scope.multiplicar = function(){
        
        if ($scope.display.indexOf('*') != -1) { 

                $scope.resultado = eval($scope.display);
               console.log($scope.display);
                //console.log(eval($scope.display))
              
        }
       $scope.display += '*'
    } 

     
    $scope.dividir = function(){
        
        if ($scope.display.indexOf('/') != -1) { 

                $scope.resultado = eval($scope.display);
               console.log($scope.display);
                //console.log(eval($scope.display))
              
        }
       $scope.display += '/'
    } 
    */
    
      

})