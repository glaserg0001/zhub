class NavigationBar {
    constructor(name, btn) {
        this.root = 'body'
        this.openedClass = `${name}--opened`
        this.btn = btn
    }

    init() {
        this.toggleSidebar();
    }

    toggleSidebar() {
        const btn = document.querySelectorAll(this.btn);

        btn.forEach(i => {
            i.addEventListener('click', this.toggleEvent.bind(this))
        })
    }

    toggleEvent() {
        const root = document.querySelector(this.root);
        let position = window.pageYOffset;

        if (position) {
            root.style.top = `-${position}px`;
            this.scrollposition = position;
        }
        
        root.classList.toggle(this.openedClass);

        if (!root.classList.contains(this.openedClass)) {
            parseInt(root.style.top) && (root.style.top = null);
            window.scrollTo(0, this.scrollposition);
            this.scrollposition = 0;
        }
    }
}

class AddToWishList {
    constructor(btn) {
        this.btn = btn
        this.activeClass = 'm-active'
    }

    init() {
        this.toggleActive();
    }

    toggleActive() {
        const btn = document.querySelectorAll(this.btn);

        btn.forEach(i => {
            i.addEventListener('click', this.toggleEvent.bind(this))
        })
    }

    toggleEvent(e) {
        e.stopPropagation()
        e.preventDefault()
        e.currentTarget.classList.toggle(this.activeClass)
    }
}

class GridToggle {
    constructor(container, cssClass) {
        this.container = document.querySelector(`.${container}`)
        this.toggle = document.querySelector(`.${container}-toggle`)
        this.btn = `${container}-btn`
        this.activeClass = 'm-active'
        this.modifierClass = `${cssClass}--list`
    }

    init() {
        this.gridToggle();
    }

    gridToggle() {
        if (this.toggle)
            this.toggle.addEventListener('click', this.gridToggleEvent.bind(this))
    }

    gridToggleEvent(e) {
        e.stopPropagation()
        e.preventDefault()

        if (!e.target.classList.contains(this.btn)) return;

        if (!e.target.classList.contains(this.activeClass)) {
            this.container.classList.toggle(this.modifierClass)
            e.currentTarget.querySelector(`.${this.activeClass}`).classList.remove(this.activeClass)
            e.target.classList.add(this.activeClass)
        }
    }
}

new NavigationBar('header-navbar', '.js-nav-btn').init();
new NavigationBar('filter-navbar', '.js-filter-btn').init();
new AddToWishList('.js-wishlist-btn').init();
new GridToggle('js-grid', 'product-tile').init()



// ==== select2 START
$('.js-select').select2({
    width: 'style',
    // placeholder: 'Оберіть категорію',
    // allowClear: true,
    // theme: "secondary",
    // selectionCssClass: 'select2-selection--small',
    // dropdownCssClass: 'select2-dropdown--small',
    // minimumResultsForSearch: -1
});

// https://select2.org/dropdown
// https://select2.org/selections

// ==== select2 END


// ==== TEST START
function _search() {
    const form = document.querySelector('.filter') || false;
    if (form) {
        form.action = '/app/search.html';
        form.method = 'GET';
    }
}

_search()
// ==== TEST END

// 'ontouchstart' in window
// stopImmediatePropagation

// ==== SLIDER START
// https://swiperjs.com/
// https://github.com/nolimits4web/swiper
// https://unpkg.com/browse/swiper@7.2.0/

// https://itchief.ru/javascript/slider#demo
// https://splidejs.com/


const swiper = new Swiper('.swiper', {
//   loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// ==== SLIDER END
