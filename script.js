Satelites
=========
window.onload = function()
{
	inicio();
}

function inicio()
{
	function movimiento(path, obj, vel)
    {
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
	var creaSatelites = function(objeto, Satelites)
    {
        var tamanoSatelites = Satelites.tamano;
        if(tamReal)
        {
            console.log("Ingresa");
            tamanoSatelites = Math.round(jupiter.tamano * (Satelites.porcentaje / 100));
        }
        objeto.style.width = tamanoSatelites + "px";
        objeto.style.height = tamanoSatelites + "px";
        objeto.style.backgroundImage = "url('satelites/"+Satelites.imagen+"')";
        objeto.style.backgroundSize = tamanoSatelites + "px " + tamanoSatelites + "px";
        var margen = (Math.round(tamanoSatelites / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
    }
	var Satelites = [
                {nombre: "Io", 
                 imagen: "io.png",
                 porcentaje: 2.5,
                 tamano: 25
                },
                {nombre: "Europa", 
                 imagen: "europa.png",
                 porcentaje: 2.1,
                 tamano: 21 
                },
                {nombre: "Calisto", 
                 imagen: "calisto.png",
                 porcentaje: 3.3,
                 tamano: 33 
                },
                {nombre: "Ganimedes", 
                 imagen: "ganimedes.png",
                 porcentaje: 3.6,
                 tamano: 36 
                }];
    var objJup = nom_div('jup_0');
    var jupiter = {
        tamano: objJup.height.baseVal.value, 
        x : objJup.x.baseVal.value, 
        y : objJup.y.baseVal.value
    };
    var objeto = "";
    var ruta = "";
    var velInicia = 3000;
    for(var i = 1; i <= Satelites.length; i++)
    {
    	objeto = nom_div("objeto_" + i);
    	ruta = nom_div("orb_" + i);
    	creaSatelites(objeto, Satelites[i - 1]);
    	movimiento(ruta, objeto, velInicia);
    	velInicia += 4000;
    }
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
