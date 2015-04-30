module.exports = {
    dist: {
        "devFile" : '<%= paths.src.assets %>/<%= grunt.config("design") %>/js/modernizr.dev.js',
        "outputFile" : '<%= paths.src.assets %>/<%= grunt.config("design") %>/js/generic/modernizr.custom.js',

        "extra" : {
            "shiv" : true,
            "printshiv" : false,
            "load" : true,
            "mq" : true,
            "cssclasses" : true
        },
        "extensibility" : {
            "addtest" : false,
            "prefixed" : false,
            "teststyles" : false,
            "testprops" : false,
            "testallprops" : false,
            "hasevents" : false,
            "prefixes" : false,
            "domprefixes" : false,
            "cssclassprefix": ""
        },
        "uglify" : false,
        "tests" : [],
        "parseFiles" : true,
        "matchCommunityTests" : false,
        "customTests" : []
    }
};
