angular.module('Dashboard').controller('BasicSmartTableCtrl', ['$scope', BasicSmartTableCtrl]);

function BasicSmartTableCtrl($scope) {
    var
        nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
        familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

    function createRandomItem() {
        var
            firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100),
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

    $scope.rowCollection = [];
    for (var j = 0; j < 200; j++) {
        $scope.rowCollection.push(createRandomItem());
    }

    $scope.modal = {
        "title": "Title",
        "content": "Hello Modal!"
    };

    $scope.aside = {
      "title": "Title",
      "content": "Hello Aside!"
    };
}