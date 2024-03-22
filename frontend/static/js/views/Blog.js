import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle('Blog')
  }

  async getHtml() {
    return `
      <h1>Blog</h1>
    `
  }
}
