import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.addEventListener("DOMContentLoaded", function () {
      document
        .querySelectorAll(".sidebar .nav-link")
        .forEach(function (element) {
          element.addEventListener("click", function (e) {
            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;

            if (nextEl) {
              e.preventDefault();
              // @ts-ignore
              let mycollapse = new bootstrap.Collapse(nextEl);

              if (nextEl.classList.contains("show")) {
                mycollapse.hide();
              } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu =
                // @ts-ignore
                  parentEl.parentElement.querySelector(".submenu.show");
                // if it exists, then close all of them
                if (opened_submenu) {
                  // @ts-ignore
                  new bootstrap.Collapse(opened_submenu);
                }
              }
            }
          });
        });
    });
  }
  

}