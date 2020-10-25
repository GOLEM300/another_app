export class Page {
    constructor(params) {
        this.params = params || Date.now().toString()
    }

    getRoot() {
        throw new Error('nethod "get root" should be impplmented')
    }

    afterRender() {

    }

    destroy() {}
}