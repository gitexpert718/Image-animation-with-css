var x0 = $('#container').width()/2;
var y0 = $('#container').height()/2;
var smile_index = 1;
var stage = 1;
// console.log(x0, y0);

init();

function init() {
    creatediv("parent", "container", 250, 250, 100);
    setposition("parent_div", x0 - 125, y0 - 125);

    creatediv("HalfSphereGREEN", "parent_div", 180, 250, 100, 0);
    setposition("HalfSphereGREEN_div", 0, 70);
    loadimg("HalfSphereGREEN", 180, 250, "absolute", "HalfSphereGREEN_div", 0, "");
    setposition("HalfSphereGREEN", 0, 0);

    creatediv("HalfSphereGREY", "parent_div", 150, 250, 100, 0);
    setposition("HalfSphereGREY_div", 0, 0);
    loadimg("HalfSphereGREY", 150, 250, "absolute", "HalfSphereGREY_div", 0, "");
    setposition("HalfSphereGREY", 0, 0);
    //modify
    // document.getElementById("HalfSphereGREY_div").style.visibility = 'hidden';

    creatediv("STRIPE_TRIANGLE2", "HalfSphereGREY_div", 60, 90, 100, 1);
    setposition("STRIPE_TRIANGLE2_div", 80, 0);
    loadimg("STRIPE_TRIANGLE2", 60, 90, "absolute", "STRIPE_TRIANGLE2_div", 0, "");
    setposition("STRIPE_TRIANGLE2", 0, 0);

    creatediv("EYE_LEFT", "HalfSphereGREY_div", 0, 0, 100, 1);
    setposition("EYE_LEFT_div", 73, 82);
    loadimg("EYE_LEFT", 80, 80, "absolute", "EYE_LEFT_div", 0, "");
    setposition("EYE_LEFT", -40, -45);
    $("#EYE_LEFT_div").addClass("rotate_eye_left");

    creatediv("EYE_RIGHT", "HalfSphereGREY_div", 0, 0, 100, 1);
    setposition("EYE_RIGHT_div", 173, 85);
    loadimg("EYE_RIGHT", 52, 87, "absolute", "EYE_RIGHT_div", 0, "");
    setposition("EYE_RIGHT", -40, -34);
    $("#EYE_RIGHT_div").addClass("rotate_eye_right");

    creatediv("nose_WIFI", "HalfSphereGREY_div", 55, 75, 100, 1);
    setposition("nose_WIFI_div", 88, 109);
    loadimg("nose_WIFI", 55, 75, "absolute", "nose_WIFI_div", 0, "");
    setposition("nose_WIFI", 0, 0);

    creatediv("STRIPE_TRIANGLE1", "HalfSphereGREEN_div", 60, 90, 100, 1);
    setposition("STRIPE_TRIANGLE1_div", 80, 120);
    loadimg("STRIPE_TRIANGLE1", 60, 90, "absolute", "STRIPE_TRIANGLE1_div", 0, "");
    setposition("STRIPE_TRIANGLE1", 0, 0);
    loadimg("STRIPE_TRIANGLE_OPPOSITECOLOR", 60, 90, "absolute", "STRIPE_TRIANGLE1_div", 0, "");
    setposition("STRIPE_TRIANGLE_OPPOSITECOLOR", 0, 0);
    document.getElementById("STRIPE_TRIANGLE_OPPOSITECOLOR").style.visibility = 'hidden';

    creatediv("MOUTH", "HalfSphereGREEN_div", 0, 90, 100, 1);
    setposition("MOUTH_div", 80, 111);
    loadimg("MOUTH", 25, 90, "absolute", "MOUTH_div", 0, "");
    setposition("MOUTH", 0, 0);
    // document.getElementById("MOUTH_div").style.visibility = 'hidden';

    creatediv("MOUTH_OPEN", "HalfSphereGREEN_div", 0, 90, 100, 1);
    setposition("MOUTH_OPEN_div", 80, 111);
    loadimg("MOUTH_OPEN", 50, 90, "absolute", "MOUTH_OPEN_div", 0, "");
    setposition("MOUTH_OPEN", 0, -21);
    loadimg("YING_YANG", 26, 26, "absolute", "MOUTH_OPEN_div", 0, "");
    setposition("YING_YANG", 32, -8);
    rotate_right("YING_YANG", 2);
    document.getElementById("MOUTH_OPEN_div").style.visibility = 'hidden'; 

    document.getElementById("parent_div").style.zoom = '140%'; 

    create_smiley();
    create_wingman();
    document.getElementById("wingman_div").style.visibility = 'hidden'; 
    
    //modify
    move_creature();
}

function creatediv(imgdivname, containdiv, height, width, zoom, zIndex) {
    var imagediv = document.createElement("div");
    imagediv.id = imgdivname + "_div";
    imagediv.style.position = "absolute";
    imagediv.style.height = height + "px";
    imagediv.style.width = width + "px";
    imagediv.style.zIndex= zIndex;
    imagediv.style.zoom = zoom + "%";
    imagediv.style.overflow = "visible";
    let container = document.getElementById(containdiv);
    container.appendChild(imagediv);
}

function loadimg(imgname, height, width, pos, divname, zindex, foldname) {
    var imagefile = document.createElement("img");
    imagefile.src = "image/" + foldname + imgname + ".png";
    imagefile.id = imgname;
    imagefile.style.width = width + "px";
    imagefile.style.height = height + "px";
    imagefile.style.margin = "0";
    imagefile.style.padding = "0";
    imagefile.style.position = pos;
    imagefile.style.zIndex= zindex;
    let container = document.getElementById(divname);
    container.appendChild(imagefile);
}


function create_smiley() {
    var cnt_smile = 0;
    while(cnt_smile < 5) {
        creatediv("smiley" + smile_index, "HalfSphereGREEN_div", 60, 60, 100, 5);
        var smile_dx = 150 * (0.5 - Math.random());
        var smile_dy = 7 * (0.5 - Math.random());
        setposition("smiley" + smile_index + "_div", 95 + smile_dx, smile_dy);
        loadimg("smiley", 60, 60, "absolute", "smiley" + smile_index + "_div", 0, "");
        setposition("smiley", 0, 0);
        if (smile_index % 2 == 0) {
            rotate_right("smiley" + smile_index + "_div", smile_index % 5);
        } else {
            rotate_left("smiley" + smile_index + "_div", smile_index % 5);
        }
        smile_index += 1;
        cnt_smile += 1;
    }
}

function create_wingman() {
    creatediv("wingman", "HalfSphereGREEN_div", 180, 180, 100, 5);
    var wingman_dx = 35;
    var wingman_dy = -100;
    setposition("wingman_div", wingman_dx, wingman_dy);

    creatediv("wing_left", "wingman_div", 0, 0, 100, 5);
    setposition("wing_left_div", 90, 120);
    loadimg("wing_left", 150, 90, "absolute", "wing_left_div", -1, "wing_man/");
    setposition("wing_left", 0, -150);

    creatediv("wing_right", "wingman_div", 0, 0, 100, 5);
    setposition("wing_right_div", 90, 120);
    loadimg("wing_right", 150, 90, "absolute", "wing_right_div", -1, "wing_man/");
    setposition("wing_right", -90, -150);

    // creatediv("man", "wingman_div", 100, 60, 100, 5);
    // setposition("man_div", 90, 120);
    loadimg("man", 100, 60, "absolute", "wingman_div", 6, "wing_man/");
    setposition("man", 65, 80);

    $("#wing_right_div").addClass("wing_right");
    $("#wing_left_div").addClass("wing_left");
}

function assign_smiley() {
    var cnt_smile = 1;
    while(cnt_smile < 6) {        
        var smile_dx = 150 * (0.5 - Math.random());
        var smile_dy = 10 * (0.5 - Math.random());
        setposition("smiley" + cnt_smile + "_div", 95 + smile_dx, smile_dy);
        cnt_smile += 1;
    }
}

function setposition(id, left, top) {
    var id = $('#' + id);
    id.css({"left": left, "top": top});
}

function rotate_right(id, num) {
    var id = $('#' + id);
    id.addClass('rotate_right' + num);
}

function stop_right(id, num) {
    // console.log("stop_right_rotate");
    var id = $('#' + id);
    id.removeClass('rotate_right' + num);
}

function rotate_left(id, num) {
    var id = $('#' + id);
    id.addClass('rotate_left' + num);
}

function stop_left(id, num) {
    // console.log("stop_left_rotate");
    var id = $('#' + id);
    id.removeClass('rotate_left' + num);
}

////////////////////////////////////////////////////////

$('body').click(function(){
    switch (stage % 5) {
        case 1:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'visible';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden'; 
            break;
        case 2:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'visible'; 
            document.getElementById("wing_right_div").style.visibility = 'hidden'; 
            document.getElementById("wing_left_div").style.visibility = 'hidden'; 
            break;
        case 3:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden'; 
            break;
        case 4:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden'; 
            break;
        case 0:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden'; 
            break;
    }
    audioplay("balltouchingground");
    audioplay("OpeningSphere");
    assign_smiley();
    clearInterval(moving_creature);
    var flag = 0, flag_background = 0;
    var inverse = setInterval(function() {
        if(flag % 2 === 0){
            document.getElementById("STRIPE_TRIANGLE_OPPOSITECOLOR").style.visibility = 'hidden';
            document.getElementById("STRIPE_TRIANGLE1").style.visibility = 'visible';
            flag += 1;
        } else {
            document.getElementById("STRIPE_TRIANGLE_OPPOSITECOLOR").style.visibility = 'visible';
            document.getElementById("STRIPE_TRIANGLE1").style.visibility = 'hidden';
            flag += 1;
        }
        if(flag > 7) {
            document.getElementById("STRIPE_TRIANGLE_OPPOSITECOLOR").style.visibility = 'hidden';
            document.getElementById("STRIPE_TRIANGLE1").style.visibility = 'visible';
            clearInterval(inverse);
            return;
        }   
    }, 1000 / 1.2 );
    var backcolor_change = setInterval(function() {
        if(flag_background > 5) {
            clearInterval(backcolor_change);
            $('#body').addClass("dark0");
            $('#body').removeClass("dark1");
            $('#body').removeClass("dark2");
            $('#body').removeClass("dark3");
            $('#body').removeClass("dark4");
            $('#body').removeClass("dark5");
            flag_background = 0;
            return;
        } 
        flag_background += 1; 
        switch (flag_background % 6) {
            case 0:
                $('#body').addClass("dark0");
                $('#body').removeClass("dark1");
                $('#body').removeClass("dark2");
                $('#body').removeClass("dark3");
                $('#body').removeClass("dark4");
                $('#body').removeClass("dark5");
                break;
            case 1:
                $('#body').removeClass("dark0");
                $('#body').addClass("dark1");
                $('#body').removeClass("dark2");
                $('#body').removeClass("dark3");
                $('#body').removeClass("dark4");
                $('#body').removeClass("dark5");
                break;
            case 2:
                $('#body').removeClass("dark0");
                $('#body').removeClass("dark1");
                $('#body').addClass("dark2");
                $('#body').removeClass("dark3");
                $('#body').removeClass("dark4");
                $('#body').removeClass("dark5");
                break;
            case 3:
                $('#body').removeClass("dark0");
                $('#body').removeClass("dark1");
                $('#body').removeClass("dark2");
                $('#body').addClass("dark3");
                $('#body').removeClass("dark4");
                $('#body').removeClass("dark5");
                break;
            case 4:
                $('#body').removeClass("dark0");
                $('#body').removeClass("dark1");
                $('#body').removeClass("dark2");
                $('#body').removeClass("dark3");
                $('#body').addClass("dark4");
                $('#body').removeClass("dark5");
                break;
            case 5:
                $('#body').removeClass("dark0");
                $('#body').removeClass("dark1");
                $('#body').removeClass("dark2");
                $('#body').removeClass("dark3");
                $('#body').removeClass("dark4");
                $('#body').addClass("dark5");
                break;
        }
    }, 1000 / 1.2 );
    document.getElementById("MOUTH_div").style.visibility = 'hidden';
    document.getElementById("MOUTH_OPEN_div").style.visibility = 'visible';
    document.getElementById("STRIPE_TRIANGLE_OPPOSITECOLOR").style.visibility = 'visible';
    setposition("nose_WIFI_div", 88, 95);
    var h = 0, h2 = 70;
    var opening = setInterval(function() {
        if(h < -90) {
            clearInterval(opening);
            // fall_smiley();             
            setTimeout(function(){
                audioplay("ClosingSphere"); 
                var closing = setInterval(function() {
                    if(h > 0) {
                        clearInterval(closing);
                        setposition("nose_WIFI_div", 88, 109);
                        document.getElementById("MOUTH_div").style.visibility = 'visible';
                        document.getElementById("MOUTH_OPEN_div").style.visibility = 'hidden';
                        move_creature();
                        if (stage % 5 === 1) {
                            fall_smiley(); 
                        } else if (stage % 5 === 2) {
                            fall_wingman(); 
                        }
                        stage += 1;                         
                        return;
                    }
                    if(stage % 5 === 2 && h > -60) {
                        document.getElementById("wing_right_div").style.visibility = 'hidden'; 
                        document.getElementById("wing_left_div").style.visibility = 'hidden'; 
                    } 
                    h += 2.4;
                    h2 -= 1;
                    setposition("HalfSphereGREY_div", 0, h);
                    setposition("HalfSphereGREEN_div", 0, h2);                 
                    // audioplay("ClosingSphere"); 
                    // modify               
                }, 40);
            }, 2000);            
            return;   
        }
        if(stage % 5 === 2 && h < -60) {
            document.getElementById("wing_right_div").style.visibility = 'visible'; 
            document.getElementById("wing_left_div").style.visibility = 'visible'; 
        }      
        h -= 1.2;
        h2 += 0.5;        
        setposition("HalfSphereGREY_div", 0, h);
        setposition("HalfSphereGREEN_div", 0, h2);                  
    }, 1000 / 25 );    
});

var moving_creature, dirX = 1, dirY = 1;

function move_creature() {
    var dx = $('#container').width()/1000 * Math.random();
    var dy = $('#container').height()/1000 * Math.random();
    var movX = 0, movY = 0;
    moving_creature = setInterval(function() {
        if(x0 < $('#container').width() * 999 / 1000 - 125 - x0 * 42 / 100 && dirX == 1) {
            movX = dx;
        }
        if(x0 > $('#container').width() * 1 / 1000 + 125 && dirX == -1){
            movX = -dx;
        }
        if(x0 < $('#container').width() * 1 / 1000 + 125 && dirX == -1){
            movX = dx;
            dirX = 1;
        }
        if(x0 > $('#container').width() * 999 / 1000 - 125 - x0 * 42 / 100 && dirX == 1){
            movX = -dx;
            dirX = -1;
        }
        if(y0 < $('#container').height() * 999 / 1000 - 370 && dirY == 1) {
            movY = dy;
        }
        if(y0 > $('#container').height() * 1 / 1000 + 125 && dirY == -1){
            movY = -dy;
        }
        if(y0 < $('#container').height() * 1 / 1000 + 125 && dirY == -1){
            movY = dy;
            dirY = 1;
        }
        if(y0 > $('#container').height() * 999 / 1000 - 370 && dirY == 1){
            movY = -dy;
            dirY = -1;
        }
        x0 += movX;
        y0 += movY;
        setposition("parent_div", x0 - 125, y0 - 125);
    }, 5);
}

function audioplay(audio_id) {
    var sound = document.getElementById(audio_id);
    sound.play();
}

var rotate_right = [
    "rotate_right0",
    "rotate_right1",
    "rotate_right2",
    "rotate_right3",
    "rotate_right4"
]

var rotate_left = [
    "rotate_left0",
    "rotate_left1",
    "rotate_left2",
    "rotate_left3",
    "rotate_left4"
]

var fall_smiley_index = 1;
function fall_smiley() {
    var count = 0;
    while (count < 5) {
        creatediv("fall_smiley" + fall_smiley_index, "container", 78, 78, 100, 5);
        var smile_dx = 125 * Math.random();
        var smile_dy = 5 * Math.random();
        setposition("fall_smiley" + fall_smiley_index + "_div", x0 + smile_dx, y0 + smile_dy);
        loadimg("smiley", 78, 78, "absolute", "fall_smiley" + fall_smiley_index + "_div", 0, "");
        if (fall_smiley_index % 2 == 0) {
            $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_right[fall_smiley_index % 5]);
        } else {
            $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_left[fall_smiley_index % 5]);
        }        
        fall("fall_smiley" + fall_smiley_index + "_div", x0 + smile_dx, y0 + smile_dy, fall_smiley_index % 5 + 1, fall_smiley_index);
        count += 1;
        fall_smiley_index += 1;
    }
}

function fall(smiley_id, x, y, speed, falldown_smiley_index) {
    var dy = Math.random() + 0.5;
    var dirkey = 1;
    var falldown = setInterval(function() {
        if($('#' + smiley_id).position().top > $('#container').height() - 80) {
            clearInterval(falldown);
            setInterval(function() {
                var dx = 0;
                if(dirkey === 1) {
                    if(falldown_smiley_index % 2 === 0 && x < $('#container').width() - 80) {
                        dx = speed * 0.3;                        
                        $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_right[fall_smiley_index % 5]);
                        $("#fall_smiley" + fall_smiley_index + "_div").removeClass(rotate_left[fall_smiley_index % 5]);
                    }
                    else if(falldown_smiley_index % 2 === 1 && x > 0) {
                        dx = -speed * 0.3;
                        $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_left[fall_smiley_index % 5]);
                        $("#fall_smiley" + fall_smiley_index + "_div").removeClass(rotate_right[fall_smiley_index % 5]);
                    }
                    else {
                        dirkey = -1;
                    }
                }
                if(dirkey === -1) {
                    if(falldown_smiley_index % 2 === 1 && x < $('#container').width() - 80) {
                        dx = speed * 0.3;
                        $("#fall_smiley" + fall_smiley_index + "_div").removeClass(rotate_left[fall_smiley_index % 5]);
                        $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_right[fall_smiley_index % 5]);
                    }
                    else if(falldown_smiley_index % 2 === 0 && x > 0) {
                        dx = -speed * 0.3;
                        $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_left[fall_smiley_index % 5]);
                        $("#fall_smiley" + fall_smiley_index + "_div").removeClass(rotate_right[fall_smiley_index % 5]);
                    }
                    else {
                        dirkey = 1;
                    }
                }
                x += dx;
                setposition(smiley_id, x, y);
            }, 10);
        }
        y += dy;
        setposition(smiley_id, x, y);  
    }, 10);
}


var fall_wingman_index = 1;
function fall_wingman() {

    creatediv("fall_wingman" + fall_wingman_index, "container", 210, 210, 100, 5);
    var wingman_dx = x0 + 70;
    var wingman_dy = y0 -100;
    setposition("fall_wingman" + fall_wingman_index + "_div", wingman_dx, wingman_dy);

    creatediv("fall_wing_left" + fall_wingman_index, "fall_wingman" + fall_wingman_index + "_div", 0, 0, 100, 5);
    setposition("fall_wing_left" + fall_wingman_index + "_div", 105, 120);
    loadimg_index("wing_left", 180, 105, "absolute", "fall_wing_left" + fall_wingman_index + "_div", -1, "wing_man/", fall_wingman_index);
    setposition("wing_left" + fall_wingman_index, 0, -180);

    creatediv("fall_wing_right" + fall_wingman_index, "fall_wingman" + fall_wingman_index + "_div", 0, 0, 100, 5);
    setposition("fall_wing_right" + fall_wingman_index + "_div", 105, 120);
    loadimg_index("wing_right", 180, 105, "absolute", "fall_wing_right" + fall_wingman_index + "_div", -1, "wing_man/", fall_wingman_index);
    setposition("wing_right" + fall_wingman_index, -105, -180);
    
    loadimg_index("man", 130, 80, "absolute", "fall_wingman" + fall_wingman_index + "_div", 6, "wing_man/", fall_wingman_index);
    setposition("man" + fall_wingman_index, 70, 80);    

    $("#fall_wing_right" + fall_wingman_index + "_div").addClass("wing_right");
    $("#fall_wing_left"  + fall_wingman_index + "_div").addClass("wing_left");    

    falling_wingman("fall_wingman" + fall_wingman_index + "_div", wingman_dx, wingman_dy, fall_wingman_index);

    fall_wingman_index += 1;
}

function loadimg_index(imgname, height, width, pos, divname, zindex, foldname, index) {
    var imagefile = document.createElement("img");
    imagefile.src = "image/" + foldname + imgname + ".png";
    imagefile.id = imgname + index;
    imagefile.style.width = width + "px";
    imagefile.style.height = height + "px";
    imagefile.style.margin = "0";
    imagefile.style.padding = "0";
    imagefile.style.position = pos;
    imagefile.style.zIndex= zindex;
    let container = document.getElementById(divname);
    container.appendChild(imagefile);
}

function falling_wingman(wingman_id, x, y, falldown_wingman_index) {
    var dy = Math.random() + 0.5;
    var dirkey = 1, speed = 1;
    var falling_wingman_animation = setInterval(function() {
        if($('#' + wingman_id).position().top > $('#container').height() - 190) {
            clearInterval(falling_wingman_animation);
        }
        y += dy;
        var dx = 0;
        if(dirkey === 1) {
            if(x < $('#container').width() - 100) {
                dx = speed * 0.3;
            }
            else {
                dirkey = -1;
            }
        }
        if(dirkey === -1) {
            if(x > 0) {
                dx = -speed * 0.3;
            }
            else {
                dirkey = 1;
            }
        }
        x += dx;
        setposition(wingman_id, x, y);
    }, 10);
}