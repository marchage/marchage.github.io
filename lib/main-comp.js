import Tonic from 'https://cdn.skypack.dev/-/@socketsupply/tonic@v14.1.0-fZTOVu4AVVR9O6ZArLzc/dist=es2019,mode=imports/optimized/@socketsupply/tonic.js'

export class MainComp extends Tonic {
  constructor (str, strings, values) {
    super()

    this.str = str
    this.strings = strings
    this.values = values
  }

  render () {
    return this.html(
      [this.str, ...this.strings], ...this.values
    )
  }
}
Tonic.add(MainComp, 'main-comp')

export function html ([str, ...strings], ...values) {
  const comp = new MainComp(str, strings, values)
  return comp
}

export default html
// window.html = html