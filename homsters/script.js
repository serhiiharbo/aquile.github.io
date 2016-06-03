/**
 * Created by aquile_bernadotte on 01.11.15.
 */
var renderer, scene, camera, ww, wh, particles;
var imgData ="data:image/png;base64,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";
//var imgData ="data:image/jpeg;base64,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"


ww = window.innerWidth;
    wh = window.innerHeight;

var centerVector = new THREE.Vector3(0, 0, 0);
var previousTime = 0;
speed = 10;
isMouseDown = false;

var getImageData = function(image) {

    var canvas = document.createElement("canvas");
    var image = document.createElement("img");
    image.src = imgData;
    canvas.width = image.width;
    canvas.height = image.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    return ctx.getImageData(0, 0, image.width, image.height);
};

var drawTheMap = function() {

    var geometry = new THREE.Geometry();
    var material = new THREE.PointsMaterial({
        size: 3,
        color: 0xFF9900,
        sizeAttenuation: false
    });
    for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
        for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
            if (imagedata.data[(x * 4 + y * 4 * imagedata.width)] < 128) {

                var vertex = new THREE.Vector3();
                vertex.x = x - imagedata.width / 2;
                vertex.y = -y + imagedata.height / 2;
                vertex.z = -Math.random()*500;

                vertex.speed = Math.random() / speed + 0.015;

                geometry.vertices.push(vertex);
            }
        }
    }
    particles = new THREE.Points(geometry, material);

    scene.add(particles);

    requestAnimationFrame(render);
};

var init = function() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("map"),
        antialias: true
    });
    renderer.setSize(ww, wh);
    renderer.setClearColor(0x00010D);

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera( ww / - 2, ww / 2, wh / 2, wh / - 2, 1, 1000 );
    camera.position.set(7, 0, 4);
    camera.lookAt(centerVector);
    scene.add(camera);
    camera.zoom = 4;
    camera.updateProjectionMatrix();

    imagedata = getImageData();
    drawTheMap();

    window.addEventListener('mousemove', onMousemove, false);
    window.addEventListener('mousedown', onMousedown, false);
    window.addEventListener('mouseup', onMouseup, false);
    window.addEventListener('resize', onResize, false);

};
var onResize = function(){
    ww = window.innerWidth;
    wh = window.innerHeight;
    renderer.setSize(ww, wh);
    camera.left    = ww / - 2;
    camera.right   = ww / 2;
    camera.top     = wh / 2;
    camera.bottom  = wh / - 2;
    camera.updateProjectionMatrix();
};

var onMouseup = function(){
    isMouseDown = false;
};
var onMousedown = function(e){
    isMouseDown = true;
    lastMousePos = {x:e.clientX, y:e.clientY};
};
var onMousemove = function(e){
    if(isMouseDown){
        camera.position.x += (e.clientX-lastMousePos.x)/100;
        camera.position.y -= (e.clientY-lastMousePos.y)/100;
        camera.lookAt(centerVector);
        lastMousePos = {x:e.clientX, y:e.clientY};
    }
};

var render = function(a) {

    requestAnimationFrame(render);


    particles.geometry.verticesNeedUpdate = true;
    if(!isMouseDown){
        camera.position.x += (0-camera.position.x)*0.06;
        camera.position.y += (0-camera.position.y)*0.06;
        camera.lookAt(centerVector);
    }

    renderer.render(scene, camera);
};

init();