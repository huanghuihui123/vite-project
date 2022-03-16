module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-px-to-viewport': {
            viewportWidth: 1920, // 设计稿的视口宽度
            minPixelValue: 1, // 最小的转换数值，大于1px才会进行转换
            exclude: /node_modules/
        }
    }
}
