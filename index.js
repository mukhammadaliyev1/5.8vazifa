function createCard(user) {
  return `
  <div class="card">
    <img src="flags.webp" alt="flag" />
    <h2>${user.country}</h2>
    <p>${user.code}</p>
    <p>${user.id}</p>
</div>`;
}

const wrapper = document.querySelector("#wrapper");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/all-countries")
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
      data.length &&
        data.forEach(function (user) {
          let card = createCard(user);
          wrapper.innerHTML += card;
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
