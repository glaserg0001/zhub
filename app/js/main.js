class toggleNavigation {
    constructor(name, btn) {
        this.root = 'html'
        this.openedClass = `${name}--opened`;
        this.btn = btn;
        // this.container = container;
        // this.containerOpened = 'm-opened';
        // this.btnActive = 'm-active';
        // this.btnPrimary = '.js-primary';
    }

    init() {
        const btn = document.querySelectorAll(this.btn);
        // const container = document.querySelector(this.container);
        // const btnPrimary = document.querySelector(this.btnPrimary);
        const root = document.querySelector(this.root);

        btn.forEach(i => {
            i.addEventListener('click', () => {
                // container.classList.toggle(this.containerOpened);
                // btnPrimary.classList.toggle(this.btnActive);
                root.classList.toggle(this.openedClass)
            })
        })
    }
}

let mainNav = new toggleNavigation('header-navbar', '.js-nav-btn')

mainNav.init();
