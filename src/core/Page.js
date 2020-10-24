export class Page {
    constructor(params) {
        this.params = params
    }

    getRoot() {
        throw new Error('nethod "get root" should be impplmented')
    }

    afterRender() {

    }

    destroy() {}
}