const cardList = [
  {
    title: "Maybelline",
    image: "images/maybelline.jpg",
    link: "Maybe it's Maybelline",
    desciption: "Maybelline is a leading cosmetic brand available in over 120 countries, offering innovative and accessible beauty products."
  },
  {
    title: "Lakme",
    image: "images/lakme.jpg",
    link: "Let your nails do the talking!",
    desciption: "Lakmé is a trusted Indian cosmetics brand known for wide beauty product offerings and professional-grade salon services."
  }
];

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  const formData = {
    first_name: $("#first_name").val(),
    last_name: $("#last_name").val(),
    password: $("#password").val(),
    email: $("#email").val()
  };
  console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
  const row = $('<div class="row"></div>');
  items.forEach(item => {
    const cardHTML = `
      <div class="col s4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p class="card-text" style="color: black">${item.desciption}</p>
          </div>
        </div>
      </div>`;
    row.append(cardHTML);
  });
  $("#card-section").append(row);
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  const socket = io();

  socket.on('connect', () => {
    console.log('Connected to socket server');
  });

  socket.on('update', (data) => {
    console.log('Received update:', data);
    const log = $('<p></p>').text(data);
    $('#live-updates').append(log);
  });

  $("#clickMeButton").click(() => {
    $("#modal1").modal("open");
  });

  $("#formSubmit").click(() => {
    submitForm();
    $("#modal1").modal("close");
  });

  addCards(cardList);
});