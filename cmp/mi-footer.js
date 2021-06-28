class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; BL3AK`;
    }
}
customElements.define("mi-footer", MiFooter);
