// oscon.js
/* By Jeff Russ https://github.com/Jeff-Russ
~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._.~~._*/

//= require jquery
//= require jquery_ujs


//========== ON SCREEN CONSOLE SETTINGS ========================================

// To enable and show console and key mappings call this method
window.init_on_screen_console = function(){
   window.on_screen_console(true);
   window.show_on_screen_console(true);
};
var on_screen_console_bool;
// Enables console with arg of true. Messages will not be visible from this call
// but key mappings will. Press `s (backtick-s ) to make visible (show).
// `h to hide, `d to disble, `e to enable, `c to clear. 
window.on_screen_console = function(bool){
   on_screen_console_bool = bool;
   if (on_screen_console_bool) {
      $('#on_screen_console').remove();
      $("body").append("<p id='on_screen_console' style='position:fixed; z-index: 9999;\
                     left:2px; top:-20px;color:#AFD; font-size:12px;visiblity:hidden;\
                     background-color: #444; opacity:0.5;pointer-events:none'></p>");
      window.log("ON SCREEN CONSOLE: `d to disable, `e to enable,\
               `h to hide, `s to show, `c to clear");
      window.enable_osc_keys(true);
   }
   else {
      $('#on_screen_console').remove();
      window.log('remove');
   }
};

// make console messages visible:
window.show_on_screen_console = function(bool){ 
   if (bool) { 
      $('#on_screen_console').css('visibility','visible'); 
   } else { 
      $('#on_screen_console').css('visibility','hidden' ); 
   }
};

// clear console:
window.clear_on_screen_console = function(){
   window.on_screen_console(true);
};

//========== ON SCREEN CONSOLE TOOLS ===========================================
 
// log a newline followed by a non urgent message:
window.log = function(string){
   if (on_screen_console_bool)
   $('#on_screen_console').append("<br />js: " + string);
};
// log a newline followed by a warning message:
window.warn = function(string){
   if (on_screen_console_bool)
      $('#on_screen_console').append("<br />js warning: " + string + "<br />");
};
// log a newline followed by a error message:
window.err = function(string){
   if (on_screen_console_bool)
      $('#on_screen_console').append("<br />js error: " + string + "<br />");
};
// append a message without insertion of a newline. Prepended with a space:
window.update = function(string){
   if (on_screen_console_bool)
      $('#on_screen_console').append(" " + string);
};
// append a message without insertion of a newline. Not repended with a space:
window.type = function(string){
   if (on_screen_console_bool)
      $('#on_screen_console').append(string);
};
// print a newline followed by a horiz. rule type thingo:
window.hr = function(){
   $('#on_screen_console').append("<br />________________________________________");
}; 
// print a newline followed by a bar-looking thing:
window.bar = function(){ 
   $('#on_screen_console').append("<br /><br />========================================");
};
// print a line break:
window.br  = function() { 
   $('#on_screen_console').append("<br /><br />");  
};
// print two line breaks:
window.br2 = function() { 
   $('#on_screen_console').append("<br />"); 
};

//========== ON SCREEN CONSOLE KEY COMBOS =======================================

// Key combinations: back-tick (`) and a letter
// Call with true to enable key listening
window.enable_osc_keys = function(bool){
   if (bool){
      var map = { 192: false, 67: false, 68: false, 69: false, 72: false, 83: false};
      $(document).keydown( function(e) {
         if (e.keyCode in map) { 
            map[e.keyCode] = true;
            
            if (map[192] && map[69]) { window.log("`e");
               window.init_on_screen_console();    // ( `e ) enable
            }
            if (map[192] && map[68]) { window.log("`d");
               window.on_screen_console(false);    // ( `d ) disable
            }
            if (map[192] && map[83]) { window.log("`s");
               window.show_on_screen_console(true); // ( `s ) show
            }
            if (map[192] && map[72]) { window.log("`h");
               window.show_on_screen_console(false); // ( `h ) hide
            } 
            if (map[192] && map[67]) { window.log("`c");
               window.clear_on_screen_console();    // ( `c ) clear
            }
         }
      }).keyup(function(e) { 
         if (e.keyCode in map) { map[e.keyCode] = false;}
         
      });  
   }
   else{
      $(document).unbind('keydown');
      $(document).unbind('keyup');
   }
};