// Business Logic

// UI Logic
$(document).ready(function () {
  $("form#roboger").sumbit(function (event) {
    event.preventDefault();
    const userNum = $("#num-input").val();
  });
});
