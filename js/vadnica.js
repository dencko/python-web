/* Skulpt  */

                function outf(text) {
                var mypre = document.getElementById("output");
                mypre.innerHTML = mypre.innerHTML + text;
                }
                function builtinRead(x) {
                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
                throw "File not found: '" + x + "'";
                return Sk.builtinFiles["files"][x];
                }
 
                function runit() {
					try {
                var prog = document.getElementById("yourcode").value;
                var mypre = document.getElementById("output");
                mypre.innerHTML = '';
                Sk.canvas = "mycanvas";
                Sk.pre = "output";
                Sk.configure({output:outf, read:builtinRead});
                eval(Sk.importMainWithBody("<stdin>",false,prog));
                  }
                    catch(err) {
                $("#okno-napaka").modal("show");
                var y=document.getElementById("napaka");
                y.innerHTML=err;
                  }
             	
			    }

/* Menu */

$(document).ready(function(){    
    $('.collapse').on('show', function(){
    $(this).parent().find(".icon-plus-sign").removeClass("icon-plus-sign").addClass("icon-minus-sign");
}).on('hide', function(){
    $(this).parent().find(".icon-minus-sign").removeClass("icon-minus-sign").addClass("icon-plus-sign");
});
});

/*  */
