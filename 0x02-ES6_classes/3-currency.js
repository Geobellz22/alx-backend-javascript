export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    return this._name;
  }

  displayFullCurrency() {
    const display = `${this._name} (${this._code})`;
    return display;
  }
}
