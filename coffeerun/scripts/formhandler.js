(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }


    }
    
    FormHandler.prototype.displayModal = function(email) {
        console.log('displaying modal...');
        $('#myModal').modal('show');
        $('#myModal').on('hide.bs.modal', function() {
            var $activeElement = $(document.activeElement);
            if ($activeElement.is('[data-dismiss]')) {
                if ($activeElement[0].id == 'do-use') {
                    this.achievments.add(email, 'yes');
                }
            }
        }.bind(this));
    };

    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function (item) {
              data[item.name] = item.value;
              console.log(item.name + ' is ' + item.value);
            });

            

            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);

var slider = document.getElementById("strengthLevel");
var sliderOutput = document.getElementById("strengthOutput");
var sliderLabel = document.getElementById("strengthLabel");

//sets initial value color (30) to green
sliderOutput.style.color = "green";
sliderLabel.style.color = "green";

//function for slider color
slider.addEventListener("input", function() {
    sliderOutput.value = slider.value

    var color;
    if (slider.value < 21) {
        color = "blue";
    }
    else if (slider.value < 41) {
        color = "green";
    }
    else if (slider.value < 61) {
        color = "#aaaa00";
    }
    else if (slider.value < 81) {
        color = "orange";
    }
    else {
        color = "red";
    }
    sliderOutput.style.color = color;
    sliderLabel.style.color = color;
});
