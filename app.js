var app = angular.module('angApp',[]);
app.controller('angCtrl',function($scope){
$scope.test=["cricket","basketball","carrom"];
$scope.cricket=[{a:'a',b:'b',c:'c'}];
$scope.basketball=[{d:'d',e:'e',f:'f'}];
$scope.carrom=[{g:'g',h:'h',i:'i'}];
$scope.toggle="false";
$scope.toggle1="true";
$scope.toggle2="true";
$scope.toggle3=false;
$scope.answer='';
$scope.ans='';
$scope.ans2='';
$scope.ans3='';

$scope.toggleFun=function(c){
	$scope.toggle="true";
	$scope.ans=c;
}

$scope.toggleFun1=function(d){
	$scope.toggle1="false";
	$scope.ans2=d;
}
$scope.toggleFin=function(e){
	$scope.toggle2="false";
	$scope.ans3=e;
	$scope.toggle3=true;

	if(($scope.ans=='a')&&($scope.ans2=='d')&&($scope.ans3=='g')){
		 $scope.answer="1";
	}	
else if	(($scope.ans=='a')&&($scope.ans2=='d')&&($scope.ans3=='h')){
		 $scope.answer="2";
	}	
	else if	(($scope.ans=='a')&&($scope.ans2=='d')&&($scope.ans3=='i')){
		 $scope.answer="3";
	}
	else if	(($scope.ans=='a')&&($scope.ans2=='e')&&($scope.ans3=='g')){
		 $scope.answer="4";
	}
	else if	(($scope.ans=='a')&&($scope.ans2=='e')&&($scope.ans3=='h')){
		 $scope.answer="5";
	}
	else if	(($scope.ans=='a')&&($scope.ans2=='e')&&($scope.ans3=='i')){
		 $scope.answer="6";
	}
	else if	(($scope.ans=='a')&&($scope.ans2=='f')&&($scope.ans3=='g')){
		 $scope.answer="7";
	}
	else if	(($scope.ans=='a')&&($scope.ans2=='f')&&($scope.ans3=='h')){
		 $scope.answer="8";
	}
	else if	(($scope.ans=='a')&&($scope.ans2=='f')&&($scope.ans3=='i')){
		 $scope.answer="9";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='d')&&($scope.ans3=='g')){
		 $scope.answer="10";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='d')&&($scope.ans3=='h')){
		 $scope.answer="11";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='d')&&($scope.ans3=='i')){
		 $scope.answer="12";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='e')&&($scope.ans3=='g')){
		 $scope.answer="13";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='e')&&($scope.ans3=='h')){
		 $scope.answer="14";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='e')&&($scope.ans3=='i')){
		 $scope.answer="15";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='f')&&($scope.ans3=='g')){
		 $scope.answer="16";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='f')&&($scope.ans3=='h')){
		 $scope.answer="17";
	}
	else if	(($scope.ans=='b')&&($scope.ans2=='f')&&($scope.ans3=='i')){
		 $scope.answer="18";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='d')&&($scope.ans3=='g')){
		 $scope.answer="19";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='d')&&($scope.ans3=='h')){
		 $scope.answer="20";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='d')&&($scope.ans3=='i')){
		 $scope.answer="21";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='e')&&($scope.ans3=='g')){
		 $scope.answer="22";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='e')&&($scope.ans3=='h')){
		 $scope.answer="23";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='e')&&($scope.ans3=='i')){
		 $scope.answer="24";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='f')&&($scope.ans3=='g')){
		 $scope.answer="25";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='f')&&($scope.ans3=='h')){
		 $scope.answer="26";
	}
	else if	(($scope.ans=='c')&&($scope.ans2=='f')&&($scope.ans3=='i')){
		 $scope.answer="27";
	}
}
});
app.directive('angDir',function(){
	return{
		templateUrl: "ang-dir.html"
	};
});

