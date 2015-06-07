require.config({
    baseUrl: "scripts",
    paths: {
        "knockout": "../bower_components/knockout/dist/knockout",
        "bootstrap": "../bower_components/knockout/dist/js/bootstrap",
        "jquery": "../bower_components/jquery/dist/jquery"
    },
    packages: [
        {
            name: "codemirror",
            location: "../bower_components/codemirror",
            main: "lib/codemirror"
        },
        {
            name: "js-beautify",
            location: "../bower_components/js-beautify",
            main: "js/index"
        }
    ],
    waitSeconds: 15
});