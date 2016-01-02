var picture_src = new Array();
var node = new Array();
var count = 0;
picture_src[0] = "./picture/1.jpg";
picture_src[1] = "./picture/2.jpg";
picture_src[2] = "./picture/3.jpg";
picture_src[3] = "./picture/4.jpg";
picture_src[4] = "./picture/5.jpg";

node[0] = "node_1";
node[1] = "node_2";
node[2] = "node_3";
node[3] = "node_4";
node[4] = "node_5";
function next_picture() {
    document.getElementById(node[count]).style.transform = "scale(1, 1)";
    if (count == 4){
        count = -1;
    }
    document.getElementById("header").style.backgroundImage = "url("+ picture_src[++count] +")";
    document.getElementById(node[count]).style.transform = "scale(1.6, 1.6)";
    move_big_node(count);
}
function last_picture() {
    document.getElementById(node[count]).style.transform = "scale(1, 1)";
    if (count == 0){
        count = 5;
    }
    document.getElementById("header").style.backgroundImage = "url("+ picture_src[--count] +")";
    document.getElementById(node[count]).style.transform = "scale(1.6, 1.6)";
    move_big_node(count);
}
function click_circle(x) {
    document.getElementById("header").style.backgroundImage = "url("+ picture_src[x] +")";
    document.getElementById(node[count]).style.transform = "scale(1, 1)";
    count = x;
    document.getElementById(node[x]).style.transform = "scale(1.6, 1.6)";
    move_big_node(x);
}
function move_big_node (x){
    if (x == 0){
        document.getElementById("node_big").style.left = (486 + 'px');
    }
    if (x == 1){
        document.getElementById("node_big").style.left = (512 + 'px');
    }
    if (x == 2){
        document.getElementById("node_big").style.left = (538 + 'px');
    }
    if (x == 3){
        document.getElementById("node_big").style.left = (564 + 'px');
    }
    if (x == 4){
        document.getElementById("node_big").style.left = (590 + 'px');
    }
}
function carousal_start() {
    setInterval("next_picture()", 5000);
}
