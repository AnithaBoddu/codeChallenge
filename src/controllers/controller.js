angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.open = function (src) {
    
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: `${src}.html`,
      controller: function ($uibModalInstance) {
        var $ctrl = this;
        $ctrl.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      },
      controllerAs: '$ctrl',
      size: 'lg'
    });

    modalInstance.result.then(function (selectedItem) {
      console.log('closed')
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
    
  };
});