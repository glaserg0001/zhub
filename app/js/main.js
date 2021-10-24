class NavigationBar {
    constructor(name, btn) {
        this.root = 'body'
        this.openedClass = `${name}--opened`;
        this.btn = btn;
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
        console.log(this.root)
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

new NavigationBar('header-navbar', '.js-nav-btn').init();
new NavigationBar('filter-navbar', '.js-filter-btn').init();




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
