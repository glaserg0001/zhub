class toggleNavigation {
    constructor(container, btn) {
        this.btn = btn;
        this.container = container;
        this.containerOpened = 'm-opened';
        this.btnActive = 'm-active';
        this.btnPrimary = '.js-primary';
    }

    init() {
        const btn = document.querySelectorAll(this.btn);
        const container = document.querySelector(this.container);
        const btnPimary = document.querySelector(this.btnPrimary);

        btn.forEach(i => {
            i.addEventListener('click', () => {
                container.classList.toggle(this.containerOpened);
                btnPimary.classList.toggle(this.btnActive);
            })
        })
    }
}

let mainNav = new toggleNavigation('.js-nav', '.js-nav-btn')

mainNav.init();
