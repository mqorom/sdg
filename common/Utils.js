class Utils {
    static isEmpty(object) {
        return object === null || object === undefined || Object.keys(object).length === 0
    }

    static isValidId(id) {
        return id.match(/^[0-9a-fA-F]{24}$/);
    }
}
module.exports = Utils