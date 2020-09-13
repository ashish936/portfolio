
        const textEffect = new Map();
        textEffect.set(1,"SOFTWARE DEVELOPER");
        textEffect.set(2,"WEB DEVELOPER");
        textEffect.set(3,"FREE LANCER");

        textEffect.forEach((value,key) => {
            console.log(value)
            console.log(value.length);
            let x=0;
            let container = document.getElementById('effect');

            function animate(){
                console.log("inside the animate function")
                if(x < value.length){
                    container.innerHTML += value.charAt(x);
                    console.log(`value of x is ${x} and char taken is ${container.innerHTML}`)
                    x++;
                    setTimeout(animate, 80);     
                }
            }

            animate();
        });


        /*
        var x = 0 ;
        var textEffect1 = "SOFTWARE ENGINEER";
        var textEffect2 = "WEB DEVELOPER"
        var textEffect3 = "FREE LANCER"
        var container = document.getElementById('effect');

        function animate() {
            if(x  < textEffect.length){
                container.innerHTML += textEffect.charAt(x);
                x++;
                setTimeout(animate, 80);
            }
        }

        animate();
        */