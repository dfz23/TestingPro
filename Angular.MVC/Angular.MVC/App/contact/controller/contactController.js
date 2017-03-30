contactApp.controller('contactController',
    ['$scope',
        function categoryController($scope) {
            $scope.contacs = [
                {
                    firstName: 'John', lastName: 'Parson', email: 'parson@gmail.com', mobile: '233-900-2933'
                },
                {
                    firstName: 'John', lastName: 'Parson', email: 'parson@gmail.com', mobile: '233-900-2933'
                },
                {
                    firstName: 'John', lastName: 'Parson', email: 'parson@gmail.com', mobile: '233-900-2933'
                }
            ];
            $scope.contact = {};
        }]);