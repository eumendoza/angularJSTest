var myApp = angular.module("myApp",[]);

myApp.controller("AlumnosController",["$scope",function($scope){
	$scope.alumnos = [
		{nombre:"Eugenio Mendoza", telefono:"666999666", curso:"Primero ESO"},
		{nombre:"Eduardo Mendoza", telefono:"666999666", curso:"Segundo ESO"},
		{nombre:"Carlos Mendoza", telefono:"666999666", curso:"Primero ESO"},
		{nombre:"Enrique Mendoza", telefono:"666999666", curso:"Cuarto ESO"},
		{nombre:"David Mendoza", telefono:"666999666", curso:"Tercero ESO"}
	];

	$scope.Save = function(){
		$scope.alumnos.push({
			nombre: $scope.nuevoAlumno.nombre,
			telefono: $scope.nuevoAlumno.telefono,
			curso: $scope.nuevoAlumno.curso
		});
	};
	
}]);
