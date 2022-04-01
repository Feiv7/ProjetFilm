document.addEventListener("DOMContentLoaded", e => {
    console.log(navigator.userAgent);
    let el, modal, closed, open_modal, closed_all;
    el = document.querySelectorAll(".image-selec ul li");
    modal = document.querySelector(".parent-modale");
    closed = document.querySelector(".modale button");
    closed_all = document.querySelector(".modale img");

    /* property elements */
    open_modal = function () {
        console.log(this.dataset);
        /* les variables */
        let image = this.dataset.image;
        let title = this.dataset.title;
        let desc = this.dataset.synopsis;
        let dates = this.dataset.dates;
        let genres = this.dataset.types;
        let duree = this.dataset.times;
        modal.classList.add("modale-active");
        document.querySelector(".modale img").setAttribute("src", image);
        document.querySelector(".modale .desc h3").innerText = title;
        document.querySelector(".modale .desc .synopsis").innerHTML = `<strong>Synopsis : </strong>${desc}`;
        document.querySelector(".modale .desc .date").innerText = `Date : ${dates}`;
        document.querySelector(".modale .desc .date").setAttribute("datetime", dates);
        document.querySelector(".modale .desc .genre").innerHTML = `<strong> Genre :</strong> ${genres}`;
        document.querySelector(".modale .desc .duree").innerText = `Durée : ${duree}`;
        document.querySelector(".modale .desc .duree").setAttribute("datetime", duree);
    };
    for (rows of el) {
        rows.addEventListener("click", open_modal);
    }
    closed.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
    closed_all.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
});