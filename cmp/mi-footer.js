class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; Bl3Ak`;
    }
}
customElements.define("mi-footer", MiFooter);
