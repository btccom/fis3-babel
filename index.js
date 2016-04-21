var babel = require('babel-core');
module.exports = function(content, file, options) {
    try {
        var result = babel.transform(content, options);
        return result.code; // 处理后的文件内容
    } catch (e) {
        return content;
    }
};