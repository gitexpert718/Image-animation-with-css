var x0 = $('#container').width()/2;
var y0 = $('#container').height()/2;
var smile_index = 1;
var stage = 1, total_stage = 8;
// console.log(x0, y0);

init();

function init() {
    creatediv("parent", "container", 250, 250, 100);
    setposition("parent_div", x0 - 125, y0 - 125);

    creatediv("HalfSphereGREEN", "parent_div", 180, 250, 100, 0);
    setposition("HalfSphereGREEN_div", 0, 70);
    loadimg("HalfSphereGREEN", 150, 249, "absolute", "HalfSphereGREEN_div", 0, "");
    setposition("HalfSphereGREEN", 0, 34);

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
    setposition("EYE_LEFT_div", 73, 85);
    loadimg("EYE_LEFT", 80, 80, "absolute", "EYE_LEFT_div", 0, "");
    setposition("EYE_LEFT", -40, -45);
    $("#EYE_LEFT_div").addClass("rotate_eye_left");

    creatediv("EYE_RIGHT", "HalfSphereGREY_div", 0, 0, 100, 1);
    setposition("EYE_RIGHT_div", 173, 88);
    loadimg("EYE_RIGHT", 52, 87, "absolute", "EYE_RIGHT_div", 0, "");
    setposition("EYE_RIGHT", -40, -34);
    $("#EYE_RIGHT_div").addClass("rotate_eye_right");

    creatediv("EAR_RIGHT", "HalfSphereGREY_div", 0, 0, 100, 1);
    setposition("EAR_RIGHT_div", 250, 130);
    loadimg("nose_WIFI", 35, 50, "absolute", "EAR_RIGHT_div", 0, "");
    setposition("nose_WIFI", -25, 0);
    $('#EAR_RIGHT_div').addClass("ear_left");
    

    creatediv("EAR_LEFT", "HalfSphereGREY_div", 0, 0, 100, 1);
    setposition("EAR_LEFT_div", 0, 130);
    loadimg("nose_WIFI2", 35, 50, "absolute", "EAR_LEFT_div", 0, "");
    setposition("nose_WIFI2", -25, 0);
    $('#EAR_LEFT_div').addClass("ear_right");

    // creatediv("nose_WIFI", "HalfSphereGREY_div", 55, 75, 100, 1);
    // setposition("nose_WIFI_div", 88, 109);
    // loadimg("nose_WIFI", 55, 75, "absolute", "nose_WIFI_div", 0, "");
    // setposition("nose_WIFI", 0, 0);

    creatediv("STRIPE_TRIANGLE1", "HalfSphereGREEN_div", 60, 90, 100, 1);
    setposition("STRIPE_TRIANGLE1_div", 80, 124);
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
    if($("#container").width() < 500) {
        document.getElementById("parent_div").style.zoom = '100%';
    } else {
        document.getElementById("parent_div").style.zoom = '140%'; 
    }    

    create_smiley();
    for (var i = 1; i < 6; i++) {
        document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
    }
    create_wingman();
    document.getElementById("wingman_div").style.visibility = 'hidden';
    create_handpiece();
    // document.getElementById("handpiece_div").style.visibility = 'hidden';
    document.getElementById("Hand").style.visibility = 'hidden';
    document.getElementById("hand_sphere").style.visibility = 'hidden';
    create_flowerpiece();
    document.getElementById("flowerpiece_div").style.visibility = 'hidden';
    create_object();
    document.getElementById("object_div").style.visibility = 'hidden';
    document.getElementById("object_div").style.zoom = "80%";
    create_fish();
    document.getElementById("fish_div").style.visibility = 'hidden';
    create_elephant();
    document.getElementById("elephant_div").style.visibility = 'hidden';
    create_eyefeet();
    // document.getElementById("eyefeet_div").style.visibility = 'hidden';
    
    //modify
    // document.getElementById("HalfSphereGREY_div").style.visibility = 'hidden';
    move_creature("parent_div");
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

function create_handpiece() {
    creatediv("handpiece", "HalfSphereGREEN_div", 140, 100, 100, 5);
    setposition("handpiece_div", 75, -75);
    loadimg("Hand", 130, 100, "absolute", "handpiece_div", -1, "hand_piece/");
    setposition("Hand", 0, 8);
    loadimg("hand_sphere", 55, 55, "absolute", "handpiece_div", -1, "hand_piece/");
    setposition("hand_sphere", 4, 83);
}

function create_flowerpiece() {
    creatediv("flowerpiece", "HalfSphereGREEN_div", 130, 130, 100, 5);
    setposition("flowerpiece_div", 60, -70);
    creatediv("Justflower", "flowerpiece_div", 70, 90, 100, 5);
    setposition("Justflower_div", 40, 60);
    loadimg("Justflower", 70, 90, "absolute", "Justflower_div", -1, "Pieces_flower/");
    setposition("Justflower", 0, 0);
    creatediv("leg1", "flowerpiece_div", 0, 0, 100, 5);
    setposition("leg1_div", 70, 95);
    loadimg_index("leg", 80, 80, "absolute", "leg1_div", -1, "Pieces_flower/", "left");
    setposition("legleft", -70, -70);
    $("#leg1_div").addClass("wing_right");
    creatediv("leg2", "flowerpiece_div", 0, 0, 100, 5);
    setposition("leg2_div", 70, 95);
    loadimg_index("leg", 80, 80, "absolute", "leg2_div", -1, "Pieces_flower/", "right");
    setposition("legright", -70, -70);
    $("#leg2_div").addClass("wing_left");
    creatediv("petalcoveringlegs", "flowerpiece_div", 25, 35, 100, 5);
    setposition("petalcoveringlegs_div", 60, 82);
    loadimg("petalcoveringlegs", 25, 35, "absolute", "petalcoveringlegs_div", -1, "Pieces_flower/");
    setposition("petalcoveringlegs", 0, 0);
}

function create_object() {
    
    creatediv("object", "HalfSphereGREEN_div", 150, 250, 100, 5);
    setposition("object_div", 29, -50);

    creatediv("fan", "object_div", 100, 50, 100, 5);
    setposition("fan_div", 20, 13);
    loadimg("base_fan", 100, 10, "absolute", "fan_div", -1, "objects/");
    setposition("base_fan", 0, 0);
    creatediv("rotate_fan", "fan_div", 0, 0, 100, 5);
    setposition("rotate_fan_div", 5, -2);
    loadimg("fan", 70, 100, "absolute", "rotate_fan_div", -1, "objects/");
    setposition("fan", -50, -48);
    $("#rotate_fan_div").addClass("rotate");

    creatediv("pyramid", "object_div", 109, 100, 100, 5);
    setposition("pyramid_div", 25, 11);
    loadimg("pyramid", 100, 140, "absolute", "pyramid_div", -1, "objects/");
    setposition("pyramid", 0, 15);

    creatediv("apple", "object_div", 114, 100, 100, 5);
    setposition("apple_div", 47, 12);
    loadimg("apple", 140, 120, "absolute", "apple_div", -1, "objects/");
    setposition("apple", 88, -25);

    creatediv("smallman", "object_div", 130, 100, 100, 5);
    setposition("smallman_div", 35, 20);
    loadimg("smallman", 50, 30, "absolute", "smallman_div", -1, "objects/");
    setposition("smallman", 74, 80);
}

function create_fish() {
    creatediv("fish", "HalfSphereGREEN_div", 145, 180, 100, 5);
    setposition("fish_div", 47, -68);

    creatediv("FISH_body", "fish_div", 100, 180, 100, 5);
    setposition("FISH_body_div", 0, 0);
    loadimg("FISH_body", 100, 180, "absolute", "FISH_body_div", -1, "fish/");
    setposition("FISH_body", 0, 0);

    creatediv("FISH_LEG1", "fish_div", 0, 0, 100, 5);
    setposition("FISH_LEG1_div", 80, 38);
    loadimg_index("FISH_LEG", 150, 90, "absolute", "FISH_LEG1_div", -1, "fish/", 100);
    setposition("FISH_LEG100", -75, -29);
    $('#FISH_LEG1_div').addClass('manrightleg');

    creatediv("FISH_LEG2", "fish_div", 0, 0, 100, 5);
    setposition("FISH_LEG2_div", 80, 38);
    loadimg_index("FISH_LEG", 150, 90, "absolute", "FISH_LEG2_div", -1, "fish/", 200);
    setposition("FISH_LEG200", -75, -29);
    $('#FISH_LEG2_div').addClass('manleftleg');
}

function create_elephant() {
    creatediv("elephant", "HalfSphereGREEN_div", 130, 160, 100, 5);
    setposition("elephant_div", 37, -62);
    loadimg("eleph_all", 130, 160, "absolute", "elephant_div", -1, "elephant/");
    setposition("eleph_all", 0, 0);
}

function create_eyefeet() {
    creatediv("eyefeet", "HalfSphereGREEN_div", 140, 100, 100, 5);
    setposition("eyefeet_div", 67, -65);
    loadimg("eyefeet_all", 140, 100, "absolute", "eyefeet_div", -1, "eyefeet/");
    setposition("eyefeet_all", 0, 0);
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

let open_key = 0;

$('#parent_div').click(function(){
    if(open_key === 1) {
        return;
    }
    switch (stage % total_stage) {
        case 0:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'visible';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden';
            document.getElementById("Hand").style.visibility = 'hidden';
            document.getElementById("hand_sphere").style.visibility = 'hidden';
            document.getElementById("flowerpiece_div").style.visibility = 'hidden';
            document.getElementById("object_div").style.visibility = 'hidden';
            document.getElementById("fish_div").style.visibility = 'hidden';
            document.getElementById("elephant_div").style.visibility = 'hidden';
            document.getElementById("eyefeet_div").style.visibility = 'hidden';
            break;
        case 1:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden';
            document.getElementById("Hand").style.visibility = 'hidden';
            document.getElementById("hand_sphere").style.visibility = 'hidden';
            document.getElementById("flowerpiece_div").style.visibility = 'hidden';
            document.getElementById("object_div").style.visibility = 'hidden';
            document.getElementById("fish_div").style.visibility = 'hidden';
            document.getElementById("elephant_div").style.visibility = 'visible';
            document.getElementById("eyefeet_div").style.visibility = 'hidden';
            break;
        case 2:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'visible'; 
            document.getElementById("wing_right_div").style.visibility = 'hidden'; 
            document.getElementById("wing_left_div").style.visibility = 'hidden';
            document.getElementById("Hand").style.visibility = 'hidden';
            document.getElementById("hand_sphere").style.visibility = 'hidden';
            document.getElementById("flowerpiece_div").style.visibility = 'hidden';
            document.getElementById("object_div").style.visibility = 'hidden';
            document.getElementById("fish_div").style.visibility = 'hidden';
            document.getElementById("elephant_div").style.visibility = 'hidden';
            document.getElementById("eyefeet_div").style.visibility = 'hidden';
            break;
        case 3:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden'; 
            document.getElementById("Hand").style.visibility = 'visible';
            document.getElementById("hand_sphere").style.visibility = 'visible';
            document.getElementById("flowerpiece_div").style.visibility = 'hidden';
            document.getElementById("object_div").style.visibility = 'hidden';
            document.getElementById("fish_div").style.visibility = 'hidden';
            document.getElementById("elephant_div").style.visibility = 'hidden';
            document.getElementById("eyefeet_div").style.visibility = 'hidden';
            break;
        case 4:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden'; 
            document.getElementById("Hand").style.visibility = 'hidden';
            document.getElementById("hand_sphere").style.visibility = 'hidden';
            document.getElementById("flowerpiece_div").style.visibility = 'hidden';
            document.getElementById("object_div").style.visibility = 'hidden';
            document.getElementById("fish_div").style.visibility = 'hidden';
            document.getElementById("elephant_div").style.visibility = 'hidden';
            document.getElementById("eyefeet_div").style.visibility = 'visible';
            break;
        case 5:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden';
            document.getElementById("Hand").style.visibility = 'hidden';
            document.getElementById("hand_sphere").style.visibility = 'hidden';
            document.getElementById("flowerpiece_div").style.visibility = 'visible'; 
            document.getElementById("object_div").style.visibility = 'hidden';
            document.getElementById("fish_div").style.visibility = 'hidden';
            document.getElementById("elephant_div").style.visibility = 'hidden';
            document.getElementById("eyefeet_div").style.visibility = 'hidden';
            break;
        case 6:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden'; 
            document.getElementById("Hand").style.visibility = 'hidden';
            document.getElementById("hand_sphere").style.visibility = 'hidden';
            document.getElementById("flowerpiece_div").style.visibility = 'hidden';
            document.getElementById("object_div").style.visibility = 'visible';
            document.getElementById("rotate_fan_div").style.visibility = 'hidden';
            setTimeout(function() {
                document.getElementById("rotate_fan_div").style.visibility = 'visible';
            }, 1500);
            document.getElementById("fish_div").style.visibility = 'hidden';
            document.getElementById("elephant_div").style.visibility = 'hidden';
            document.getElementById("eyefeet_div").style.visibility = 'hidden';
            break;
        case 7:
            for (var i = 1; i < 6; i++) {
                document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
            }
            document.getElementById("wingman_div").style.visibility = 'hidden';
            document.getElementById("Hand").style.visibility = 'hidden';
            document.getElementById("hand_sphere").style.visibility = 'hidden';
            document.getElementById("flowerpiece_div").style.visibility = 'hidden'; 
            document.getElementById("object_div").style.visibility = 'hidden';
            document.getElementById("fish_div").style.visibility = 'visible';
            document.getElementById("FISH_body_div").style.visibility = 'hidden';
            setTimeout(function() {
                document.getElementById("FISH_body_div").style.visibility = 'visible';
            }, 1500);
            document.getElementById("elephant_div").style.visibility = 'hidden';
            document.getElementById("eyefeet_div").style.visibility = 'hidden';
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
    switch (stage % 5) {
        case 1:
            $("#body").removeClass("dark0");
            $("#body").addClass("dark1");
            break;
        case 2:
            $("#body").removeClass("dark1");
            $("#body").addClass("dark2");
            break;
        case 3:
            $("#body").removeClass("dark2");
            $("#body").addClass("dark3");
            break;
        case 4:
            $("#body").removeClass("dark3");
            $("#body").addClass("dark4");
            break;
        case 0:
            $("#body").removeClass("dark4");
            $("#body").addClass("dark0");
            break;
    }
    // var backcolor_change = setInterval(function() {
    //     if(flag_background > 5) {
    //         clearInterval(backcolor_change);
    //         $('#body').addClass("dark0");
    //         switch (stage % 5) {
    //             case 1:
    //                 $('#body').removeClass("dark1");
    //                 break;
    //             case 2:
    //                 $('#body').removeClass("dark2");
    //                 break;
    //             case 3:
    //                 $('#body').removeClass("dark3");
    //                 break;
    //             case 4:
    //                 $('#body').removeClass("dark4");
    //                 break;
    //             case 0:
    //                 $('#body').removeClass("dark5");
    //                 break;
    //         }
    //         flag_background = 0;
    //         return;
    //     } 
    //     flag_background += 1; 
    //     switch (flag_background % 2) {
    //         case 0:
    //             $('#body').addClass("dark0");                
    //             switch (stage % 5) {
    //                 case 1:
    //                     $('#body').removeClass("dark1");
    //                     break;
    //                 case 2:
    //                     $('#body').removeClass("dark2");
    //                     break;
    //                 case 3:
    //                     $('#body').removeClass("dark3");
    //                     break;
    //                 case 4:
    //                     $('#body').removeClass("dark4");
    //                     break;
    //                 case 0:
    //                     $('#body').removeClass("dark5");
    //                     break;
    //             }
    //             break;
    //         case 1:
    //             $('#body').removeClass("dark0");
    //             switch (stage % 5) {
    //                 case 1:
    //                     $('#body').addClass("dark1");
    //                     break;
    //                 case 2:
    //                     $('#body').addClass("dark2");
    //                     break;
    //                 case 3:
    //                     $('#body').addClass("dark3");
    //                     break;
    //                 case 4:
    //                     $('#body').addClass("dark4");
    //                     break;
    //                 case 0:
    //                     $('#body').addClass("dark5");
    //                     break;
    //             }
    //             break;
    //     }
    // }, 1000 / 1.2 );
    document.getElementById("MOUTH_div").style.visibility = 'hidden';
    document.getElementById("MOUTH_OPEN_div").style.visibility = 'visible';
    document.getElementById("STRIPE_TRIANGLE_OPPOSITECOLOR").style.visibility = 'visible';
    // setposition("nose_WIFI_div", 88, 95);
    var h = 0, h2 = 70;
    var opening = setInterval(function() {
        open_key = 1;
        if(h < -90) {
            clearInterval(opening);            
            // fall_smiley();             
            setTimeout(function(){
                if (stage % total_stage === 0) {
                    for (var i = 1; i < 6; i++) {
                        document.getElementById("smiley" + i + "_div").style.visibility = 'hidden';
                    }
                    fall_smiley(); 
                } else if (stage % total_stage === 2) {
                    document.getElementById("wingman_div").style.visibility = 'hidden'; 
                    document.getElementById("wing_right_div").style.visibility = 'hidden'; 
                    document.getElementById("wing_left_div").style.visibility = 'hidden'; 
                    fall_wingman(); 
                } else if (stage % total_stage === 3) {
                    document.getElementById("hand_sphere").style.visibility = 'hidden';
                    fall_handpiece();
                } else if (stage % total_stage === 5) {
                    document.getElementById("flowerpiece_div").style.visibility = 'hidden';
                    fall_flowerpiece();
                } else if (stage % total_stage == 6) {
                    document.getElementById("object_div").style.visibility = 'hidden';
                    document.getElementById("rotate_fan_div").style.visibility = 'hidden';
                    fall_object();
                } else if (stage % total_stage == 7) {
                    document.getElementById("fish_div").style.visibility = 'hidden';
                    document.getElementById("FISH_body_div").style.visibility = 'hidden';
                    fall_fish();
                } else if (stage % total_stage == 1) {
                    document.getElementById("elephant_div").style.visibility = 'hidden';
                    fall_elephant();
                } else {
                    document.getElementById("eyefeet_div").style.visibility = 'hidden';
                    fall_eyefeet();
                }
                setTimeout(function() {
                    audioplay("ClosingSphere"); 
                    var closing = setInterval(function() {
                        if(h > 0) {
                            clearInterval(closing);
                            open_key = 0;
                            // setposition("nose_WIFI_div", 88, 109);
                            document.getElementById("MOUTH_div").style.visibility = 'visible';
                            document.getElementById("MOUTH_OPEN_div").style.visibility = 'hidden';
                            move_creature("parent_div");                        
                            stage += 1;                         
                            return;
                        }
                        h += 2.4;
                        h2 -= 1;
                        setposition("HalfSphereGREY_div", 0, h);
                        setposition("HalfSphereGREEN_div", 0, h2);                 
                        // audioplay("ClosingSphere"); 
                        // modify               
                    }, 40);
                }, 2000);
            }, 2000);            
            return;   
        }
        if(stage % total_stage === 2 && h < -60) {
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

function move_creature(object_id, x, y, iid, index, sound_key) {
    var dx = $('#container').width()/1000 * Math.random();
    var dy = $('#container').height()/1000 * Math.random();
    var dx_yoga = $('#container').width()/1000 * Math.random();
    var dy_yoga = $('#container').height()/600 * Math.random();
    var movX = 0, movY = 0;
    var movX_yoga = 0, movY_yoga = 0;
    if (object_id === "parent_div") {
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
            setposition(object_id, x0 - 125, y0 - 125);
        }, 5);
    } else if (iid === "fish" || iid === "eleph" || iid === "eyefeet") {
        var flynum = 0;
        var moving_fish, dirX_yoga = 1;
        moving_fish = setInterval(function() {
            if(x < $('#container').width() * 999 / 1000 - $('#' + object_id).width() && dirX_yoga == 1) {
                movX_yoga = dx_yoga;
            }
            if(x > $('#container').width() * 1 / 1000 && dirX_yoga == -1){
                movX_yoga = -dx_yoga;
            }
            if(x < $('#container').width() * 1 / 1000 && dirX_yoga == -1){
                movX_yoga = dx_yoga;
                dirX_yoga = 1;
            }
            if(x > $('#container').width() * 999 / 1000 - $('#' + object_id).width() && dirX_yoga == 1){
                movX_yoga = -dx_yoga;
                dirX_yoga = -1;
            }
            if(flynum < 3000) {
                movY_yoga = -dy_yoga / 5;
            } else if(flynum < 3500) {
                movY_yoga = 0;
            } else if(flynum < 6500) {
                movY_yoga = dy_yoga / 5;
            } else {
                clearInterval(moving_fish);
                walking(object_id, x, y, index, 300, 0);
                flynum = 0;
            }
            flynum += 1;
            x += movX_yoga;
            y += movY_yoga;
            setposition(object_id, x, y);
            if (iid === "eleph" && sound_key == 1) {
                audioplay("elephant");
            }
            if (iid === "eyefeet") {
                audioplay("eyefeet");
            }           
        }, 5);
    } else {
        var flynum = 0;
        var moving_yogaman, dirX_yoga = 1;
        moving_yogaman = setInterval(function() {
            if(x < $('#container').width() * 999 / 1000 - 125 - x * 42 / 100 && dirX_yoga == 1) {
                movX_yoga = dx_yoga;
            }
            if(x > $('#container').width() * 1 / 1000 + 125 && dirX_yoga == -1){
                movX_yoga = -dx_yoga;
            }
            if(x < $('#container').width() * 1 / 1000 + 125 && dirX_yoga == -1){
                movX_yoga = dx_yoga;
                dirX_yoga = 1;
            }
            if(x > $('#container').width() * 999 / 1000 - 125 - x * 42 / 100 && dirX_yoga == 1){
                movX_yoga = -dx_yoga;
                dirX_yoga = -1;
            }
            if(flynum < 600) {
                movY_yoga = -dy_yoga;
            } else if(flynum < 700) {
                movY_yoga = 0;
            } else if(flynum < 1300) {
                movY_yoga = dy_yoga;
            } else {
                clearInterval(moving_yogaman);
                audioplay("YogaManTouchingGround");
                setTimeout(function() {
                    move_creature(object_id, x, y);
                }, 8000);                
                flynum = 0;
            }
            flynum += 1;
            x += movX_yoga;
            y += movY_yoga;
            setposition(object_id, x, y);
        }, 5);
    }
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
        var smile_dx = 150 * Math.random();
        var smile_dy = 150 * Math.random();
        setposition("fall_smiley" + fall_smiley_index + "_div", x0 * 1.2 + 50 * (count + 1), y0 * 1.2 + smile_dy);
        loadimg("smiley", 78, 78, "absolute", "fall_smiley" + fall_smiley_index + "_div", 0, "");
        if (fall_smiley_index % 2 == 0) {
            $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_right[fall_smiley_index % 5]);
        } else {
            $("#fall_smiley" + fall_smiley_index + "_div").addClass(rotate_left[fall_smiley_index % 5]);
        }        
        fall("fall_smiley" + fall_smiley_index + "_div", x0 * 1.2 + 50 * (count + 1), y0 * 1.2 + smile_dy, fall_smiley_index % 5 + 1, fall_smiley_index);
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
            audioplay("touchSmiley");
            $("#" + smiley_id).click(function() {
                document.getElementById(smiley_id).style.visibility = "hidden";
                audioplay("disapper_smiley");
            });
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

    creatediv("fall_wingman" + fall_wingman_index, "container", 195, 195, 100, 5);
    var wingman_dx = x0 * 1.2;
    var wingman_dy = y0 * 1.2;
    setposition("fall_wingman" + fall_wingman_index + "_div", wingman_dx, wingman_dy);

    creatediv("fall_wing_left" + fall_wingman_index, "fall_wingman" + fall_wingman_index + "_div", 0, 0, 100, 5);
    setposition("fall_wing_left" + fall_wingman_index + "_div", 105, 120);
    loadimg_index("wing_left", 180, 105, "absolute", "fall_wing_left" + fall_wingman_index + "_div", -1, "wing_man/", fall_wingman_index);
    setposition("wing_left" + fall_wingman_index, 0, -180);

    creatediv("fall_wing_right" + fall_wingman_index, "fall_wingman" + fall_wingman_index + "_div", 0, 0, 100, 5);
    setposition("fall_wing_right" + fall_wingman_index + "_div", 105, 120);
    loadimg_index("wing_right", 180, 105, "absolute", "fall_wing_right" + fall_wingman_index + "_div", -1, "wing_man/", fall_wingman_index);
    setposition("wing_right" + fall_wingman_index, -105, -180);
    
    creatediv("fall_manwithouthands" + fall_wingman_index, "fall_wingman" + fall_wingman_index + "_div", 130, 80, 100, 5);
    setposition("fall_manwithouthands" + fall_wingman_index + "_div", 70, 80);
    loadimg_index("manwithouthands", 130, 80, "absolute", "fall_manwithouthands" + fall_wingman_index + "_div", 6, "wing_man/", fall_wingman_index);
    setposition("manwithouthands" + fall_wingman_index, 0, 0); 
    
    creatediv("fall_handleft" + fall_wingman_index, "fall_wingman" + fall_wingman_index + "_div", 0, 0, 100, 5);
    setposition("fall_handleft" + fall_wingman_index + "_div", 95, 120);
    loadimg_index("handleft", 52, 35, "absolute", "fall_handleft" + fall_wingman_index + "_div", -1, "wing_man/", fall_wingman_index);
    setposition("handleft" + fall_wingman_index, -15, -5);

    creatediv("fall_handright" + fall_wingman_index, "fall_wingman" + fall_wingman_index + "_div", 0, 0, 100, 5);
    setposition("fall_handright" + fall_wingman_index + "_div", 120, 120);
    loadimg_index("handright", 52, 35, "absolute", "fall_handright" + fall_wingman_index + "_div", -1, "wing_man/", fall_wingman_index);
    setposition("handright" + fall_wingman_index, -15, -5);

    $("#fall_wing_right" + fall_wingman_index + "_div").addClass("wing_right");
    $("#fall_wing_left"  + fall_wingman_index + "_div").addClass("wing_left");
    $("#fall_handleft"  + fall_wingman_index + "_div").addClass("rotate_eye_left"); 
    $("#fall_handright"  + fall_wingman_index + "_div").addClass("rotate_eye_right");     

    falling_wingman("fall_wingman" + fall_wingman_index + "_div", wingman_dx, wingman_dy, fall_wingman_index);

    fall_wingman_index += 1;
}

var fall_flower_index = 1;
function fall_flowerpiece() {
    var flower_x = x0 * 1.2;
    var flower_y = y0 * 1.2;
    creatediv("fall_flowerpiece" + fall_flower_index, "container", 180, 180, 100, 5);
    setposition("fall_flowerpiece" + fall_flower_index + "_div", flower_x, flower_y);

    creatediv("Justflower" + fall_flower_index, "fall_flowerpiece" + fall_flower_index + "_div", 100, 120, 100, 5);
    setposition("Justflower" + fall_flower_index + "_div", 60, 80);
    loadimg("Justflower", 100, 120, "absolute", "Justflower" + fall_flower_index + "_div", -1, "Pieces_flower/");
    setposition("Justflower", 0, 0);

    creatediv("leg1" + fall_flower_index, "fall_flowerpiece" + fall_flower_index + "_div", 0, 0, 100, 5);
    setposition("leg1" + fall_flower_index + "_div", 105, 120);
    loadimg_index("leg", 120, 120, "absolute", "leg1" + fall_flower_index + "_div", -1, "Pieces_flower/", "left" + fall_flower_index);
    setposition("legleft" + fall_flower_index, -110, -110);
    $("#" + "leg1" + fall_flower_index + "_div").addClass("wing_right");

    creatediv("leg2" + fall_flower_index, "fall_flowerpiece" + fall_flower_index + "_div", 0, 0, 100, 5);
    setposition("leg2" + fall_flower_index + "_div", 105, 120);
    loadimg_index("leg", 120, 120, "absolute", "leg2" + fall_flower_index + "_div", -1, "Pieces_flower/", "right" + fall_flower_index);
    setposition("legright" + fall_flower_index, -110, -110);
    $("#" + "leg2" + fall_flower_index + "_div").addClass("wing_left");

    creatediv("petalcoveringlegs" + fall_flower_index, "fall_flowerpiece" + fall_flower_index + "_div", 40, 50, 100, 5);
    setposition("petalcoveringlegs" + fall_flower_index + "_div", 80, 100);
    loadimg("petalcoveringlegs", 40, 50, "absolute", "petalcoveringlegs" + fall_flower_index + "_div", -1, "Pieces_flower/");
    setposition("petalcoveringlegs", 0, 0);

    falling_wingman("fall_flowerpiece" + fall_flower_index + "_div", flower_x, flower_y, fall_flower_index);

    fall_flower_index += 1;
}

var fall_object_index = 1;
function fall_object() {
    var object_x = x0 * 1.2;
    var object_y = y0 * 1.2;

    creatediv("fall_pyramid" + fall_object_index, "container", 109, 100, 100, 5);
    setposition("fall_pyramid" + fall_object_index + "_div", object_x - 50, object_y);
    loadimg_index("pyramid", 100, 140, "absolute", "fall_pyramid" + fall_object_index + "_div", -1, "objects/", fall_object_index);
    setposition("pyramid" + fall_object_index, 0, 15);

    creatediv("fall_apple" + fall_object_index, "container", 114, 100, 100, 5);
    setposition("fall_apple" + fall_object_index + "_div", object_x +100, object_y);
    loadimg_index("apple", 140, 120, "absolute", "fall_apple" + fall_object_index + "_div", -1, "objects/", fall_object_index);
    setposition("apple" + fall_object_index, 88, -25);

    creatediv("fall_smallman" + fall_object_index, "container", 45, 20, 100, 5);
    setposition("fall_smallman" + fall_object_index + "_div", object_x + 25, object_y + 25);
    loadimg_index("man_up", 20, 20, "absolute", "fall_smallman" + fall_object_index + "_div", -1, "objects/", fall_object_index);
    setposition("man_up" + fall_object_index, 0, 4);

    creatediv("Manleftleg" + fall_object_index, "fall_smallman" + fall_object_index + "_div", 0, 0, 100, 5);
    setposition("Manleftleg" + fall_object_index + "_div", 10, 20);
    loadimg_index("Manleftleg", 25, 20, "absolute", "Manleftleg" + fall_object_index + "_div", -1, "objects/", fall_object_index);
    setposition("Manleftleg" + fall_object_index, -15, 0);

    creatediv("ManRightLeg" + fall_object_index, "fall_smallman" + fall_object_index + "_div", 0, 0, 100, 5);
    setposition("ManRightLeg" + fall_object_index + "_div", 11, 20);
    loadimg_index("ManRightLeg", 25, 20, "absolute", "ManRightLeg" + fall_object_index + "_div", -1, "objects/", fall_object_index);
    setposition("ManRightLeg" + fall_object_index, -5, 0);

    falling_object("fall_pyramid" + fall_object_index + "_div", object_x - 50, object_y, Math.random() * 0.5 + 0.3, fall_object_index);
    falling_object("fall_apple" + fall_object_index + "_div", object_x + 100, object_y, Math.random() * 0.5 + 0.3, fall_object_index);
    falling_object("fall_smallman" + fall_object_index + "_div", object_x + 45, object_y, Math.random() * 0.5 + 0.3, fall_object_index);

    fall_object_index += 1;
}

var fall_fish_index = 1;
function fall_fish() {
    var fish_x = x0 * 1.2;
    var fish_y = y0 * 1.2;

    creatediv("fall_fishpiece" + fall_fish_index, "container", 200, 270, 100, 5);
    setposition("fall_fishpiece" + fall_fish_index + "_div", fish_x, fish_y);

    creatediv("fall_FISH_body" + fall_fish_index, "fall_fishpiece" + fall_fish_index + "_div", 145, 270, 100, 5);
    setposition("fall_FISH_body" + fall_fish_index + "_div", 0, 0);
    loadimg("FISH_body", 145, 270, "absolute", "fall_FISH_body" + fall_fish_index + "_div", -1, "fish/");

    creatediv("fall_fish_leg1" + fall_fish_index, "fall_fishpiece" + fall_fish_index + "_div", 0, 0, 100, 5);
    setposition("fall_fish_leg1" + fall_fish_index + "_div", 105, 60);
    loadimg_index("FISH_LEG", 215, 134, "absolute", "fall_fish_leg1" + fall_fish_index + "_div", -1, "fish/", "_left" + fall_fish_index);
    setposition("FISH_LEG_left" + fall_fish_index, -110, -47);
    $("#fall_fish_leg1" + fall_fish_index + "_div").addClass("manrightleg");

    creatediv("fall_fish_leg2" + fall_fish_index, "fall_fishpiece" + fall_fish_index + "_div", 0, 0, 100, 5);
    setposition("fall_fish_leg2" + fall_fish_index + "_div", 105, 60);
    loadimg_index("FISH_LEG", 215, 134, "absolute", "fall_fish_leg2" + fall_fish_index + "_div", -1, "fish/", "_right" + fall_fish_index);
    setposition("FISH_LEG_right" + fall_fish_index, -110, -47);
    $("#fall_fish_leg2" + fall_fish_index + "_div").addClass("manleftleg");

    falling_fish("fall_fishpiece" + fall_fish_index + "_div", fish_x, fish_y, fall_fish_index);

    fall_fish_index += 1;

}

let fall_eyefeet_index = 1;
function fall_eyefeet() {
    let eyefeet_x = x0 * 1.2;
    let eyefeet_y = y0 * 1.2;

    creatediv("fall_eyefeet" + fall_eyefeet_index, "container", 200, 140, 100, 5);
    setposition("fall_eyefeet" + fall_eyefeet_index + "_div", eyefeet_x, eyefeet_y);

    creatediv("fall_eyefeet_body" + fall_eyefeet_index, "fall_eyefeet" + fall_eyefeet_index + "_div", 120, 140, 100, 5);
    setposition("fall_eyefeet_body" + fall_eyefeet_index + "_div", 0, 13);
    loadimg("eyefeet", 120, 140, "absolute", "fall_eyefeet_body" + fall_eyefeet_index + "_div", -1, "eyefeet/");

    creatediv("fall_eyefeet_left_wing" + fall_eyefeet_index, "fall_eyefeet" + fall_eyefeet_index + "_div", 0, 0, 100, 3);
    setposition("fall_eyefeet_left_wing" + fall_eyefeet_index + "_div", 50, 62);
    loadimg_index("eyefeet_wing", 65, 70, "absolute", "fall_eyefeet_left_wing" + fall_eyefeet_index + "_div", -1, "eyefeet/", "_left" + fall_eyefeet_index);
    setposition("eyefeet_wing_left" + fall_eyefeet_index, -42, -63);
    $("#fall_eyefeet_left_wing" + fall_eyefeet_index + "_div").addClass("eleph_wing_right");

    creatediv("fall_eyefeet_right_wing" + fall_eyefeet_index, "fall_eyefeet" + fall_eyefeet_index + "_div", 0, 0, 100, 3);
    setposition("fall_eyefeet_right_wing" + fall_eyefeet_index + "_div", 100, 62);
    loadimg_index("eyefeet_wing", 65, 70, "absolute", "fall_eyefeet_right_wing" + fall_eyefeet_index + "_div", -1, "eyefeet/", "_right" + fall_eyefeet_index);
    setposition("eyefeet_wing_right" + fall_eyefeet_index, -42, -63);
    $("#fall_eyefeet_right_wing" + fall_eyefeet_index + "_div").addClass("eleph_wing_left");

    creatediv("fall_eyefeet_right_leg" + fall_eyefeet_index, "fall_eyefeet" + fall_eyefeet_index + "_div", 0, 0, 100, 3);
    setposition("fall_eyefeet_right_leg" + fall_eyefeet_index + "_div", 93, 98);
    loadimg_index("eyefoot_right", 113, 39, "absolute", "fall_eyefeet_right_leg" + fall_eyefeet_index + "_div", -1, "eyefeet/", fall_eyefeet_index);
    setposition("eyefoot_right" + fall_eyefeet_index, -14, -10);
    $("#fall_eyefeet_right_leg" + fall_eyefeet_index + "_div").addClass("manrightleg");

    creatediv("fall_eyefeet_left_leg" + fall_eyefeet_index, "fall_eyefeet" + fall_eyefeet_index + "_div", 0, 0, 100, 3);
    setposition("fall_eyefeet_left_leg" + fall_eyefeet_index + "_div", 54, 98);
    loadimg_index("eyefoot_left", 115, 39, "absolute", "fall_eyefeet_left_leg" + fall_eyefeet_index + "_div", -1, "eyefeet/", fall_eyefeet_index);
    setposition("eyefoot_left" + fall_eyefeet_index, -14, -10);
    $("#fall_eyefeet_left_leg" + fall_eyefeet_index + "_div").addClass("manleftleg");

    falling_fish("fall_eyefeet" + fall_eyefeet_index + "_div", eyefeet_x, eyefeet_y, fall_eyefeet_index);

    fall_eyefeet_index += 1;
}

let fall_eleph_index = 1;
function fall_elephant() {
    let eleph_x = x0 * 1.2;
    let eleph_y = y0 * 1.2;

    creatediv("fall_eleph" + fall_eleph_index, "container", 190, 220, 100, 5);
    setposition("fall_eleph" + fall_eleph_index + "_div", eleph_x, eleph_y);

    creatediv("fall_eleph_head" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 120, 70, 100, 5);
    setposition("fall_eleph_head" + fall_eleph_index + "_div", 0, 40);
    loadimg("eleph_head", 120, 70, "absolute", "fall_eleph_head" + fall_eleph_index + "_div", -1, "elephant/");

    creatediv("fall_eleph_body" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 55, 100, 100, 4);
    setposition("fall_eleph_body" + fall_eleph_index + "_div", 60, 50);
    loadimg("eleph_body", 55, 100, "absolute", "fall_eleph_body" + fall_eleph_index + "_div", -1, "elephant/");

    creatediv("fall_eleph_left_hand" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 0, 0, 100, 3);
    setposition("fall_eleph_left_hand" + fall_eleph_index + "_div", 70, 80);
    loadimg_index("eleph_hand", 120, 35, "absolute", "fall_eleph_left_hand" + fall_eleph_index + "_div", -1, "elephant/", "_left" + fall_eleph_index);
    setposition("eleph_hand_left" + fall_eleph_index, -10, -10);
    $("#fall_eleph_left_hand" + fall_eleph_index + "_div").addClass("manleftleg");

    creatediv("fall_eleph_right_hand" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 0, 0, 100, 5);
    setposition("fall_eleph_right_hand" + fall_eleph_index + "_div", 85, 85);
    loadimg_index("eleph_hand", 120, 35, "absolute", "fall_eleph_right_hand" + fall_eleph_index + "_div", -1, "elephant/", "_right" + fall_eleph_index);
    setposition("eleph_hand_right" + fall_eleph_index, -10, -10);
    $("#fall_eleph_right_hand" + fall_eleph_index + "_div").addClass("manrightleg");

    creatediv("fall_eleph_left_leg" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 0, 0, 100, 3);
    setposition("fall_eleph_left_leg" + fall_eleph_index + "_div", 135, 60);
    loadimg_index("eleph_leg", 130, 100, "absolute", "fall_eleph_left_leg" + fall_eleph_index + "_div", -1, "elephant/", "_left" + fall_eleph_index);
    setposition("eleph_leg_left" + fall_eleph_index, 0, 0);
    $("#fall_eleph_left_leg" + fall_eleph_index + "_div").addClass("manrightleg");

    creatediv("fall_eleph_right_leg" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 0, 0, 100, 5);
    setposition("fall_eleph_right_leg" + fall_eleph_index + "_div", 145, 50);
    loadimg_index("eleph_leg", 130, 100, "absolute", "fall_eleph_right_leg" + fall_eleph_index + "_div", -1, "elephant/", "_right" + fall_eleph_index);
    setposition("eleph_leg_right" + fall_eleph_index, 0, 0);
    $("#fall_eleph_right_leg" + fall_eleph_index + "_div").addClass("manleftleg");

    creatediv("fall_eleph_left_wing" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 0, 0, 100, 3);
    setposition("fall_eleph_left_wing" + fall_eleph_index + "_div", 100, 60);
    loadimg_index("eleph_left_wing", 80, 50, "absolute", "fall_eleph_left_wing" + fall_eleph_index + "_div", -1, "elephant/", fall_eleph_index);
    setposition("eleph_left_wing" + fall_eleph_index, -25, -75);
    $("#fall_eleph_left_wing" + fall_eleph_index + "_div").addClass("eleph_wing_left");

    creatediv("fall_eleph_right_wing" + fall_eleph_index, "fall_eleph" + fall_eleph_index + "_div", 0, 0, 100, 5);
    setposition("fall_eleph_right_wing" + fall_eleph_index + "_div", 120, 60);
    loadimg_index("eleph_right_wing", 80, 50, "absolute", "fall_eleph_right_wing" + fall_eleph_index + "_div", -1, "elephant/", fall_eleph_index);
    setposition("eleph_right_wing" + fall_eleph_index, -25, -75);
    $("#fall_eleph_right_wing" + fall_eleph_index + "_div").addClass("eleph_wing_right");

    falling_fish("fall_eleph" + fall_eleph_index + "_div", eleph_x, eleph_y, fall_eleph_index);

    fall_eleph_index += 1;
}

function falling_fish(fish_id, x, y, index) {
    let dy = Math.random() + 0.5;
    let falling_fisher = setInterval(function() {
        if ($('#' + fish_id).position().top > $('#container').height() - $('#' + fish_id).height()) {
            clearInterval(falling_fisher);
            if(fish_id === "fall_eleph" + index + "_div") {
                walking(fish_id, x, y, index, 300, 1);
            } else {
                walking(fish_id, x, y, index, 300);
            }            
        }
        y += dy;
        setposition(fish_id, x, y);
    }, 10);
}

function walking(objects_id, x, y, index, time, sound_key) {
    var dirkey = 1, speed = 5, num = 0;
    let walking_var = setInterval(function() {
        if (num > time) {
            clearInterval(walking_var);
            if(objects_id === "fall_fishpiece" + index + "_div") {
                move_creature(objects_id, x, y, "fish", index);
            }
            if(objects_id === "fall_eleph" + index + "_div") {
                move_creature(objects_id, x, y, "eleph", index, sound_key);
            }
            if(objects_id === "fall_eyefeet" + index + "_div") {
                move_creature(objects_id, x, y, "eyefeet", index);
            }
        }
        var dx = 0;
        if(dirkey === 1) {
            if(index % 2 === 0 && x < $('#container').width() - $("#" + objects_id).width()) {
                dx = speed * 0.1;
            }
            else if(index % 2 === 1 && x > 0) {
                dx = -speed * 0.1;
            }
            else {
                dirkey = -1;
            }
        }
        if(dirkey === -1) {
            if(index % 2 === 1 && x < $('#container').width() - $("#" + objects_id).width()) {
                dx = speed * 0.1;
            }
            else if(index % 2 === 0 && x > 0) {
                dx = -speed * 0.1;
            }
            else {
                dirkey = 1;
            }
        }
        x += dx;
        setposition(objects_id, x, y);
        if(objects_id === "fall_fishpiece" + index + "_div") {
            audioplay("Fishmanwalking");
        }        
        num += 1;
    }, 10);
}

function falling_object(objects_id, x, y, dy, index) {
    var falling_object = setInterval(function() {
        if($('#' + objects_id).position().top > $('#container').height() - $('#' + objects_id).height()) {
            clearInterval(falling_object);
            if(objects_id === "fall_pyramid" + index + "_div") {
                audioplay("PyramidTouchesGround");
            }
            if(objects_id === "fall_apple" + index + "_div") {
                audioplay("AppleTouchesTheGround");
            }
            if(objects_id === "fall_apple" + index + "_div" || objects_id === "fall_pyramid" + index + "_div") {
                $("#" + objects_id).click(function() {
                    document.getElementById(objects_id).style.visibility = "hidden";
                });
            } else {
                $("#" + objects_id).click(function() {
                    var dirrandom = Math.random();
                    if (dirrandom > 0.5) {
                        x += 10;
                        setposition(objects_id, x, y);
                    } else {
                        x -= 10;
                        setposition(objects_id, x, y);
                    }
                });
                $("#ManRightLeg" + index + "_div").addClass("manrightleg");
                $("#Manleftleg" + index + "_div").addClass("manleftleg");
                var dirkey = 1, speed = 1;
                setInterval(function() {
                    var dx = 0;
                    if(dirkey === 1) {
                        if(index % 2 === 0 && x < $('#container').width() - $("#" + objects_id).width()) {
                            dx = speed * 0.1;
                        }
                        else if(index % 2 === 1 && x > 0) {
                            dx = -speed * 0.1;
                        }
                        else {
                            dirkey = -1;
                        }
                    }
                    if(dirkey === -1) {
                        if(index % 2 === 1 && x < $('#container').width() - $("#" + objects_id).width()) {
                            dx = speed * 0.1;
                        }
                        else if(index % 2 === 0 && x > 0) {
                            dx = -speed * 0.1;
                        }
                        else {
                            dirkey = 1;
                        }
                    }
                    x += dx;
                    setposition(objects_id, x, y);
                }, 10);
            }         
        }
        y += dy;
        setposition(objects_id, x, y);
    }, 10);
}

var fall_handpiece_index = 1;
function fall_handpiece() {

    creatediv("fall_handpiece" + fall_handpiece_index, "container", 200, 140, 100, 5);
    var handpiece_dx = x0 * 1.2;
    var handpiece_dy = y0 * 1.1;
    setposition("fall_handpiece" + fall_handpiece_index + "_div", handpiece_dx, handpiece_dy);

    creatediv("fall_hand" + fall_handpiece_index, "container", 200, 140, 100, 5);
    setposition("fall_hand" + fall_handpiece_index + "_div", handpiece_dx, handpiece_dy);
    loadimg_index("Hand", 200, 140, "absolute", "fall_hand" + fall_handpiece_index + "_div", -1, "hand_piece/", fall_handpiece_index);
    setposition("Hand" + fall_handpiece_index, 0, 0);

    creatediv("hand_sphere" + fall_handpiece_index, "container", 78, 78, 100, 5);
    setposition("hand_sphere" + fall_handpiece_index + "_div", handpiece_dx + 10, handpiece_dy + 120);
    loadimg_index("hand_sphere", 78, 78, "absolute", "hand_sphere" + fall_handpiece_index + "_div", -1, "hand_piece/", fall_handpiece_index);
    setposition("hand_sphere" + fall_handpiece_index, 0, 0);    

    falling_handpiece("hand_sphere" + fall_handpiece_index + "_div", handpiece_dx, handpiece_dy, fall_handpiece_index);

    fall_handpiece_index += 1;
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

var flykey = 1
function falling_wingman(wingman_id, x, y, falldown_wingman_index) {
    var dy = Math.random() + 0.5;
    var dirkey = 1, speed = 1;
    var falling_wingman_animation = setInterval(function() {
        if($('#' + wingman_id).position().top > $('#container').height() - $('#' + wingman_id).height()) {
            clearInterval(falling_wingman_animation);
            if(wingman_id === "fall_wingman" + falldown_wingman_index + "_div") {
                audioplay("YogaManTouchingGround");
                setTimeout(function() {
                    move_creature(wingman_id, x, y);
                }, 8000);
                // $("#" + wingman_id).click(function() {
                //     audioplay("YogaManTouchingGround");
                // });
            } 
            if (wingman_id === "fall_flowerpiece" + falldown_wingman_index + "_div") {
                audioplay("flowerTouch");
                // $("#" + wingman_id).click(function() {
                //     audioplay("flowerTouch");
                // });
            }         
        }
        y += dy;
        var dx = 0;
        if(dirkey === 1 && wingman_id === "fall_wingman" + falldown_wingman_index + "_div") {
            if(x < $('#container').width() - 100) {
                dx = speed * 0.3;
            }
            else {
                dirkey = -1;
            }
        }
        if(dirkey === -1 && wingman_id === "fall_wingman" + falldown_wingman_index + "_div") {
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

function falling_handpiece(handpiece_id, x, y, falldown_handpiece_index) {
    var dy = Math.random() + 0.5;
    var dx = Math.random() + 0.5;
    var hand_x = x + 10, hand_y = y + 120;
    var dirkey = 1, speed = 1, viewhand = 0;
    var falling_handpiece_animation = setInterval(function() {
        if($('#' + handpiece_id).position().top > $('#container').height() - 78) {
            clearInterval(falling_handpiece_animation);
            setInterval(function() {
                var dx = 0;
                if(dirkey === 1) {
                    if(falldown_handpiece_index % 2 === 0 && hand_x < $('#container').width() - 78) {
                        dx = speed * 0.3;                        
                        $("#" + handpiece_id).addClass(rotate_right[falldown_handpiece_index % 5]);
                        $("#" + handpiece_id).removeClass(rotate_left[falldown_handpiece_index % 5]);
                    }
                    else if(falldown_handpiece_index % 2 === 1 && hand_x > 0) {
                        dx = -speed * 0.3;
                        $("#" + handpiece_id).addClass(rotate_left[falldown_handpiece_index % 5]);
                        $("#" + handpiece_id).removeClass(rotate_right[falldown_handpiece_index % 5]);
                    }
                    else {
                        dirkey = -1;
                    }
                }
                if(dirkey === -1) {
                    if(falldown_handpiece_index % 2 === 1 && hand_x < $('#container').width() - 78) {
                        dx = speed * 0.3;
                        $("#" + handpiece_id).removeClass(rotate_left[falldown_handpiece_index % 5]);
                        $("#" + handpiece_id).addClass(rotate_right[falldown_handpiece_index % 5]);
                    }
                    else if(falldown_handpiece_index % 2 === 0 && hand_x > 0) {
                        dx = -speed * 0.3;
                        $("#" + handpiece_id).addClass(rotate_left[falldown_handpiece_index % 5]);
                        $("#" + handpiece_id).removeClass(rotate_right[falldown_handpiece_index % 5]);
                    }
                    else {
                        dirkey = 1;
                    }
                }
                hand_x += dx;
                setposition(handpiece_id, hand_x, hand_y);
            }, 10);
        }
        document.getElementById("fall_hand" + falldown_handpiece_index + "_div").style.visibility = "hidden";
        if(viewhand < 300) {
            if(dirkey === 1) {
                if(x < $('#container').width() - 100) {
                    dx = speed * 0.6;
                }
                else {
                    dirkey = -1;
                }
            }
            if(dirkey === -1) {
                if(x > 0) {
                    dx = -speed * 0.6;
                }
                else {
                    dirkey = 1;
                }
            }
            hand_x += dx;
            hand_y += dy;
            setposition("hand_sphere" + falldown_handpiece_index + "_div", hand_x, hand_y);
            viewhand += 1;
        } else {
            hand_y += dy
            setposition(handpiece_id, hand_x, hand_y);
        }
    }, 10);
}