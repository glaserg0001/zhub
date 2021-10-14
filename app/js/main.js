class toggleNavigation {
    constructor(name, btn) {
        this.root = 'body'
        this.openedClass = `${name}__opened`;
        this.btn = btn;
    }

    init() {
        const btn = document.querySelectorAll(this.btn);
        const root = document.querySelector(this.root);

        btn.forEach(i => {
            i.addEventListener('click', () => {
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
            })
        })
    }
}

let mainNav = new toggleNavigation('header-navbar', '.js-nav-btn')

mainNav.init();
