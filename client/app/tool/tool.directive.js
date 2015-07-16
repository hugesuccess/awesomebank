'use strict';

angular.module('awesomebankApp')
  .directive('tool', ['$http', function ($http) {
    return {
      templateUrl: 'app/tool/tool.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $http.get("/api/portfolios").success(function(items) {
            var data = items, totalAmt = 0, myNewChart,
                ctx = document.getElementById("myChart").getContext("2d");

            angular.forEach(data, function(item) {
                item.highlight = "#FFC870";
                item.label = item._id;  // Use Id to filter out object
                totalAmt += item.value; // Generate Dynamic total
                return item;
            });
            totalAmt = Math.round(totalAmt * 100) / 100;
            scope.totalAmt = totalAmt;
            myNewChart = new Chart(ctx).Doughnut(data, {
                 percentageInnerCutout : 75,
                customTooltips: function(tooltip) {
                    console.log(tooltip.title);
                }
            });

            scope.current = data[0];
            scope.current.percent = scope.current.value / totalAmt
            scope.current.percent = Math.floor((scope.current.value / totalAmt) * 100)


             $("#myChart").click(
                    function(evt){
                        var activePoints = myNewChart.getSegmentsAtEvent(evt),
                            record = _.filter(data, function(rec) {
                                return rec._id === activePoints[0].label;
                            });

                        scope.current = record[0];
                        scope.current.percent = Math.floor((scope.current.value / totalAmt) * 100);
                        scope.$apply();
                        $("#bank-detail")
                            .css("border-right", "4px solid " + scope.current.color );
                    }
                );
        });
/*var data = [
    {
        value: 257473.34,
        color:"#d2dbc6",
        highlight: "#FFC870",
        label: "Family Checking"
    },
    {
        value: 569206.22,
        color: "#85aa73",
        highlight: "#FFC870",
        label: "Tahoe House"
    },
    {
        value: 750000.00,
        color: "#d8e9f3",
        highlight: "#FFC870",
        label: "College Fund"
    },
    {
        value: 750000.00,
        color: "#c3c4c5",
        highlight: "#FFC870",
        label: "Vacation"
    },
    {
        value: 385721.08,
        color: "#236f41",
        highlight: "#FFC870",
        label: "Chris & Pat Hostler Account"
    }
];*/
      }
    };
  }]);
