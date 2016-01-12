# On-screen Console for Javascript
  
[On Github](https://github.com/Jeff-Russ/onscreen-console_js)  
  
[LivePage-md](http://www.jeffruss.com/?gh=Jeff-Russ/onscreen-console_js/master/README)  
  
[source](https://raw.githubusercontent.com/Jeff-Russ/onscreen-console_js/master/oscon.js)  
  
## Description

This is a collection of handy functions for debugging Javascript using an overlay
on the web page as a console. 

## Instructions 

To make the logging functions enabled, add this

    window.on_screen_console(true);

This will enable the logging but it will be hidden by default. The key combination
backtick-s will show the console. 

If you want to enable and show with the key combination you can use this instead:

    window.init_on_screen_console();
    
## Key Combinations

>\`s shows console  
>\`h hides console  
>\`e enables console  
>\`d disables console  
>\`c clears console  

## Logging Functions

log a newline followed by a non urgent message:

    window.log("test");

log a newline followed by a warning message:

    window.warn("test");

log a newline followed by a error message:

    window.err("test"); 

append a message without insertion of a newline. Prepended with a space:

    window.update("test"); 

append a message without insertion of a newline. Not repended with a space:

    window.type("test");

print a newline followed by a horiz. rule type thingo:

    window.hr()

print a newline followed by a bar-looking thing:

    window.bar();

print a line break:

    window.br();

print two line breaks:

    window.br2();
