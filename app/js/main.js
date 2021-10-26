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
        console.log(this.activeClass)
    }
}


new NavigationBar('header-navbar', '.js-nav-btn').init();
new NavigationBar('filter-navbar', '.js-filter-btn').init();

new AddToWishList('.js-wishlist-btn').init();


// select2
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
function formatState (state) {
    if (!state.id) {
      return state.text;
    }
  
    var baseUrl = "/user/pages/images/flags";
    var $state = $(
      '<span><img class="img-flag" /> <span></span></span>'
    );
  
    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find("span").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
  
    return $state;
  };
  
  $(".js-example-templating").select2({
    templateSelection: formatState
  });
