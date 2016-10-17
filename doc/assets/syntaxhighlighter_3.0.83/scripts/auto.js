$(document).ready(function () {
    SyntaxHighlighter.autoloader(
            ['js', 'jscript', 'javascript', 'assets/syntaxhighlighter_3.0.83/scripts/shBrushJScript.js'],
            ['css', 'assets/syntaxhighlighter_3.0.83/scripts/shBrushCss.js'],
            ['xml', 'html', 'assets/syntaxhighlighter_3.0.83/scripts/shBrushXml.js']
        );
    SyntaxHighlighter.all();
})