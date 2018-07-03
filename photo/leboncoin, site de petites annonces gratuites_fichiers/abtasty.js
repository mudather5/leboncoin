function AbTasty() {

	this.debug = false;

	this.pushTransaction = function(name, key, order_id, amount) {
		amount = this.convertToString(Math.round(parseInt(amount)));
		amount = parseFloat([amount.slice(0, -2), ".", amount.slice(-2)].join('')).toFixed(2);
		_abtasty.push([name, key, order_id, amount]);
		if ( this.debug && (typeof console.info) === "function" ) {
			console.info(name, key, order_id, amount);
		}
	}
	this.push = function(name, key, value) {
		key = this.convertToString(key);
		value = this.convertToString(value);
		_abtasty.push([name, key, value]);
		if ( this.debug && (typeof console.info) === "function" ) {
			console.info(name, key, value);
		}
	}

	this.convertToString = function(value)  {
		// If value is not a string, convert it
		if ( value === parseInt(value) ) {
			value = value.toString();
		}
		return value;
	}

}

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}