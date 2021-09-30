class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; BL3AK 2021`;
    }
}
customElements.define("mi-footer", MiFooter);
