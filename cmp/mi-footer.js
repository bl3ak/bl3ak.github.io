class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; Bl3ak`;
    }
}
customElements.define("mi-footer", MiFooter);
