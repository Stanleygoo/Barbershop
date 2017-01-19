<script>
      var link = document.querySelector(".login");
      var popup = document.querySelector(".modal-content");
      var close = document.querySelector(".modal-content-close");
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=login]");
      var password = popup.querySelector("[name=password]");
      var storage = localStorage.getItem("login");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
      });

      form.addEventListener("submit", function(event) {
        if (!(login.value && password.value)) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("login", login.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
      });

      var mapOpen = document.querySelector(".js-open-map");
      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".modal-content-close");

      mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });
    </script>
    
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=fKOp6Ow2e1KswRDFJN-5Ibpz8XOekOup&amp;width=766&;height=561&id=yandex-map"></script>
 