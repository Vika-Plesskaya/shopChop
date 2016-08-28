(function () {

    function hideShow(element) {
        this.el = document.querySelector(element);
        this.divMenu = document.querySelector('.menu-li-active');
        this.menuImg = document.querySelector('.hidden-menu-mobile-a');
        this.byProducts = document.querySelector('.by-products span');
        this.byBrands = document.querySelector('.by-brands span');

        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        this.divMenu.onclick = function () {
            if (width >= 360 && width <= 800) {
                var divHidden = document.querySelector('.hidden-menu');
                if (divHidden.style.display == 'none') {
                    divHidden.style.display = 'inline-block';
                } else {
                    divHidden.style.display = 'none';
                }
            }
        }
        this.menuImg.onclick = function () {
            var divHidden = document.querySelector('.hidden-menu');
            if (width <= 360) {
                if (divHidden.style.display == 'none') {
                    divHidden.style.display = 'inline-block';
                } else {
                    divHidden.style.display = 'none';
                }
            }
        }

        this.byProducts.onclick = function () {
            if (width <= 360) {
                var divHidden = document.querySelector('.double');
                if (divHidden.style.display == 'none') {
                    divHidden.style.display = 'block';
                } else {
                    divHidden.style.display = 'none';
                }
            }
        }

        this.byBrands.onclick = function () {
            if (width <= 360) {
                var divHidden = document.querySelector('.ul-by-brands');
                if (divHidden.style.display == 'none') {
                    divHidden.style.display = 'block';
                } else {
                    divHidden.style.display = 'none';
                }
            }
        }


    };
    document.addEventListener("DOMContentLoaded", function () {
        var menu = new hideShow("#active-menu");
    });

})();