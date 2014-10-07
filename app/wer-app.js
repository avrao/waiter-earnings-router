angular.module('WERApp', ['ngRoute'])
.value('waiter-tabs', ['home', 'new-meal', 'my-earnings'])
	.config(function($routeProvider) {
	$routeProvider.when('/', {
	    templateUrl : './home.html',
	    //controller : 'HomeCtrl'
	}).when('/new-meal', {
	    templateUrl : './new-meal.html',
	    controller : 'MealCtrl'
	}).when('/my-earnings', {
	    templateUrl : './my-earnings.html',
	    controller : 'MealCtrl'
	}).otherwise({
		redirectTo: '/',
	});
})
.controller('HomeCtrl', function($scope) {
    //empty for now
})
.controller('MealCtrl', function($scope, $rootScope){
	$scope.submit = function() {
        if($scope.myForm.$valid) {
            console.log('The form is valid');
            var count = parseInt($scope.mealcount);
            var tiptot = parseFloat($scope.tiptotal);
            var a = $scope.baseprice;
            var b = $scope.taxrate;
            var c = $scope.tippercent;

            $scope.subtotal = ((a * b)/100) + a;
            var subtotal = ($scope.subtotal).toFixed(2);

            $scope.tip = (c * a)/ 100 ;
            $rootScope.tip = $scope.tip;
 
            var tot = $scope.subtotal + $rootScope.tip;
            $scope.total = tot.toFixed(2);

            $scope.mealcount = count + 1;
            $rootScope.mealcount = $scope.mealcount;
        	
            var tt = tiptot + $rootScope.tip;
            $scope.tiptotal = tt.toFixed(2);
            $rootScope.tiptotal = $scope.tiptotal;
            
            var ave = $rootScope.tiptotal/$rootScope.mealcount;
            $scope.averagetip = ave.toFixed(2);
            $rootScope.averagetip = $scope.averagetip;
            	
        } else {
            console.log('The form is invalid');
        };
    };
    $scope.reset = function(){
		    $scope.baseprice = '';
            $scope.taxrate = '';
            $scope.tippercent = '';
            $scope.subtotal = '0.00';
            $scope.tip = '0.00';
            $scope.total = '0.00';
            $scope.mealcount = '0';
            $scope.tiptotal = '0.00';
            $scope.averagetip = '0.00';
    };
        $scope.cancel = function(){
		    $scope.baseprice = '';
            $scope.taxrate = '';
            $scope.tippercent = '';
            
    };
});

$(document).ready(function() {
	alert('it works');
    $("#a").on('click', function() {
    	alert('it works');
        $("#a").css('text-decoration', 'none');
        $(this).css('text-decoration', 'none');
    });

});