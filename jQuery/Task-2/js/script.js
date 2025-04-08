import { images1, images2, images3 } from "./imagesData.js";

$(document).ready(function () {
  
  images1.forEach((src, index) => {
    $("#fields-1").append(
      `<img src="${src}" alt="Image" data-index="${index}" class="thumbnail w-[100%] rounded-t-lg cursor-pointer shadow-[5px_5px_15px_rgba(128,128,128,0.6)] hover:invert transition duration-300">`
    );
  });

  images2.forEach((src, index) => {
    $("#fields-2").append(
      `<img src="${src}" alt="Image" data-index="${index}" class="thumbnail w-[100%] rounded-t-lg cursor-pointer shadow-[5px_5px_15px_rgba(128,128,128,0.6)] hover:invert transition duration-300">`
    );
  });

  images3.forEach((src, index) => {
    $("#fields-3").append(
      `<img src="${src}" alt="Image" data-index="${index}" class="thumbnail w-[100%] rounded-t-lg cursor-pointer shadow-[5px_5px_15px_rgba(128,128,128,0.6)] hover:invert transition duration-300">`
    );
  });

  // Modal
  let allImages = [...images1, ...images2, ...images3]; // Merge all image arrays into one
  let currentIndex = 0;

  $(document).on("click", ".thumbnail", function () {
    let clickedSrc = $(this).attr("src"); // Get the clicked image's src
    currentIndex = allImages.indexOf(clickedSrc); // Find the index in the merged array

    $("#fullImage").attr("src", clickedSrc);
    $("#imageModal").removeClass("hidden");
  });

  $("#closeModal").click(function () {
    $("#imageModal").addClass("hidden");
  });

  $("#prevImage").click(function () {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    $("#fullImage").attr("src", allImages[currentIndex]);
  });

  $("#nextImage").click(function () {
    currentIndex = (currentIndex + 1) % allImages.length;
    $("#fullImage").attr("src", allImages[currentIndex]);
  });

  // Form
  $("#user-form").submit(function (event) {
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val().trim();

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = true;

    let formData = {
      name,
      email,
      message,
    };

    $("#nameError, #emailError, #messageError").addClass("hidden");

    if (!name) {
      $("#nameError").removeClass("hidden");
      isValid = false;
    }

    if (!email && emailPattern.test(email)) {
      $("#emailError").removeClass("hidden");
      isValid = false;
    }

    if (!message) {
      $("#messageError").removeClass("hidden");
      isValid = false;
    }

    if (isValid) {
      let toastMessage = `${name}: ${message}`;
      toastr.options = {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-center",
        timeOut: "5000",
        toastClass: "custom-toast",
      };
      toastr.success(toastMessage);


      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts", // Mock API
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(formData),
        success: function (response) {
          $("#response").html(
            "✅ Form submitted successfully!<br>Name: " +
              response.name +
              "<br>Message: " +
              response.message
          );// Reset form fields after submission
        },
        error: function () {
          $("#response").html("❌ Error submitting the form.");
        },
      });

      $("#user-form")[0].reset();
    }


  });
});
