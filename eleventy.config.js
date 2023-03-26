module.exports = (function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");

    return {

        dir: {
            output: "_site",
            input: "src"
        },

    };

});