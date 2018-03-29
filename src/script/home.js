var registApp = angular.module("registApp",[]);
registApp.controller("registController",["$scope",function ($scope) {
        $scope.user = {};
        $scope.user.nameMsg = "格式要求：4-8位字母";
        $scope.user.pwdMsg = "格式要求：6-10位数字或者字母";
        $scope.user.repwdMsg = "格式要求：6-10位数字或者字母";

        $scope.$watch("user.name",function(now,old){
            if(now==undefined||now==null){
                return;
            }
            if(now.length>0&&(now.length<4||now.length>8)){
                $scope.user.nameMsg = "用户名不合法，请重新输入！";
            }else if(now.length==0){
                $scope.user.nameMsg = "格式要求：4-8位字母";
            }else{
                $scope.user.nameMsg = "正确的用户名";
            }
        });
        $scope.$watch("user.pwd",function(now,old){
            if(now==undefined||now==null){
                return;
            }
            if(now.length>0&&(now.length<6||now.length>10)){
                $scope.user.pwdMsg = "密码不合法，请重新输入！";
            }else if(now.length==0){
                $scope.user.pwdMsg = "格式要求：6-10位字母";
            }else{
                $scope.user.pwdMsg = "正确的密码";
            }
        });
        $scope.$watch("user.repwd",function(now,old){
            if(now==undefined||now==null){
                return;
            }
            if(now===$scope.user.pwd){
                $scope.user.repwdMsg = "两次密码一致";
            }else{
                $scope.user.repwdMsg = "两次密码不一致";
            }
        });

        $scope.registEvent = function(){
            if($scope.user.pwd != $scope.user.repwd){
                alert("两次密码不一致，无法注册，请确认后重新点击！");
            }else{
                alert("注册成功");
            }
        }
}]);