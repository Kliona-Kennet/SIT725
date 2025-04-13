const cardList = [
    {
      title: "Maybelline",
      image: "images/maybelline.jpg",
      link: "Maybe its maybelline",
      desciption:
        "Maybelline New York is the number one cosmetic brand in the world, available in over 120 countries. By combining technologically advanced formulations with on-trend expertise and New York edge, Maybelline New York's mission is to offer innovative, accessible and effortless cosmetics for every woman.",
    },
    {
      title: "Lakme",
      image: "images/lakme.jpg",
      link: "Let your nails do the talking!",
      desciption:
        "Lakmé is an Indian cosmetics brand owned by Hindustan Unilever, known for its wide range of cosmetics, beauty products, and salon services, with a focus on professional-grade products and sustainable practices",
    },
  ];
  const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
  };
  const submitForm = () => {
    let formData = {};
    formData.first_name = $("#first_name").val();
    formData.last_name = $("#last_name").val();
    formData.password = $("#password").val();
    formData.email = $("#email").val();
    console.log("Form Data Submitted: ", formData);
  };
  const addCards = (items) => {
    items.forEach((item) => {
      let itemToAppend =
        '<div class="col s4 center-align">' +
        '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
        item.image +
        '" >' +
        '</div><div class="card-content">' +
        '<span class="card-title activator grey-text text-darken-4">' +
        item.title +
        '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
        item.link +
        "</a></p></div>" +
        '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' +
        item.title +
        '<i class="material-icons right">close</i></span>' +
        '<p class="card-text" style="color: black">' +
        item.desciption +
        "</p>" +
        "</div></div></div>";
      $("#card-section").append(itemToAppend);
    });
  };
  $(document).ready(function () {
      $(".materialboxed").materialbox();
      $(".modal").modal(); // Ensure modal is initialized
    
      // Open modal when button is clicked
      $("#clickMeButton").click(() => {
        $("#modal1").modal("open"); // Opens the modal
      });
    
      $("#formSubmit").click(() => {
        submitForm();
        $("#modal1").modal("close"); // Optional: Close modal after submission
      });
    
      addCards(cardList);
    });
    
  