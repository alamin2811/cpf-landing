(function ($) {
    "use strict";
    document.querySelector(".contract-form").addEventListener("submit", function (e) {

        let valid = true;

        document.querySelectorAll(".input-fild").forEach(function (field) {

            const input = field.querySelector("input, textarea");
            const required = field.querySelector(".required");

            if (!required) return;

            if (input.value.trim() === "") {
                required.style.display = "block";
                valid = false;
            } else {
                required.style.display = "none";
            }

        });

        if (!valid) {
            e.preventDefault();
        }

    });

})(jQuery);