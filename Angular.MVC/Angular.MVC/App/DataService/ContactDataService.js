contactApp.factory('contactDataService', ['$http', '$q',
    function ($http, $q) {

        var _contacts = [];

        var _getContacts = function () {

            var deferred = $q.defer();
            var controllerQuery = "contact/GetContacts";

            $http.get(controllerQuery).then(function (result) {
                angular.copy(result.data, _contacts);
                deferred.resolve();
            },
                function (error) {
                    deferred.reject();
                }
            );
        }

        var _addContact = function (_contact) {
            var deferred = $q.defer();
            var controllerQuery = "contact/AddContact";

            $http.post(controllerQuery, _contact).then(function (result) {
                deferred.resolve();
            },
                function (error) {
                    deferred.reject();
                }
            );
            return deferred.promise;
        };

        var _updateContact = function (_contact) {

            var deferred = $q.defer();
            var controllerQuery = "contact/UpdateContact";

            $http.post(controllerQuery, _contact).then(function (result) {
                deferred.resolve();
            },
                function (error) {
                    deferred.reject();
                }
            );

            return deferred.promise;
        }

        var _deleteContact = function (id) {
            var deferred = $q.defer();
            var controllerQuery = "contact/DeleteContact/" + id;

            $http.post(controllerQuery).then(function (result) {
                deferred.resolve();
            },
                function (error) {
                    deferred.reject();
                }
            );

            return deferred.promise;
        }

        function _findConatctById(id) {
            var found = null;
            $.each(_contacts, function (i, contact) {
                if (contact.id==id) {
                    found = contact;
                    return false;
                }
            });
            return found;
        }

        return {
            contacts: _contacts,
            getContacts: _getContacts,
            addContact: _addContact,
            updateContact: _updateContact,
            deleteContact: _deleteContact,
            findContactById: _findConatctById
        }
    }]);