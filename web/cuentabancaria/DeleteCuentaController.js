DeleteCuentaController.$inject = ['$scope', '$routeParams', 'cuentaBancariaService', 'usuarioService', '$location'];

function DeleteCuentaController($scope, $routeParams, cuentaBancariaService, usuarioService, $location) {
    $scope.cuentaBancaria = {};
    $scope.idCuentaBancaria = $routeParams.idCuentaBancaria;
    $scope.tipo = "DELETE";
    $scope.okBoton = "Borrar";

    usuarioService.find().then(function (result) {
        $scope.usuarios = result.data;
    }, function (result) {
        alert("Ha fallado la petición. Estado HTTP:" + result.status);
    });

    cuentaBancariaService.get($routeParams.idCuentaBancaria).then(function (result) {
        $scope.cuentaBancaria = result.data;
    }, function (result) {
        alert("Ha fallado la petición. Estado HTTP:" + result.status);
    });

    $scope.ok = function () {

        cuentaBancariaService.delete($routeParams.idCuentaBancaria).then(function (result) {
            alert("Borrado Con Éxito");
            $location.url('/findCuenta');
        }, function (result) {
            alert("Ha fallado la petición. Estado HTTP:" + result.status);
        });
    };

    $scope.cancel = function () {
        $location.url('/findCuenta');
    };
}

app.controller("DeleteCuentaController", DeleteCuentaController);