var trim = require('../utils/trim');

function parse(content) {
	var subgroup = trim(content);

	if (subgroup.length === 0)
        return null;

	return {
		subgroup: subgroup.replace(/(\s+)/g, '_')
	};
}

/**
 * Exports
 */
module.exports = {
	parse : parse,
    path  : 'local',
    method: 'insert'
};
