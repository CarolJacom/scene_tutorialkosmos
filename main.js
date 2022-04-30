//obfuscator: https://obfuscator.io/

var canvas; // drawing paper
var engine; // the pen - deal with the low level webgl
var scene; // objects rendered

document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  canvas = document.getElementById("renderCanvas"); // canvas receives div renderCanvas
  engine = new BABYLON.Engine(canvas, true);
  scene = createScene();
  
  engine.runRenderLoop(function () {
    scene.render();
  });
}

var createScene = function () {
  var scene = new BABYLON.Scene(engine); // defines the engine to render the scene

  /* Camera */
  var camera = createFreeCamera(scene);
  /* Collisions */
  scene.collisionsEnabled = false;
  
      function AnimationBlender(scene){
    var box = scene.getMeshByName("obj_fullcube_an_5")
    scene.beginAnimation(box, 0, 200, true);
    var box1 = scene.getMeshByName("obj_fullcube_an_2")
    scene.beginAnimation(box1, 0, 200, true);
    var box2 = scene.getMeshByName("obj_portal_1")
    scene.beginAnimation(box2, 0, 200, true);
    var box3 = scene.getMeshByName("arw_2")
    scene.beginAnimation(box3, 0, 200, true);
    var box4 = scene.getMeshByName("arw_3")
    scene.beginAnimation(box4, 0, 200, true);
    var box5 = scene.getMeshByName("arw_1")
    scene.beginAnimation(box5, 0, 200, true);
    var box6 = scene.getMeshByName("obj_smallcube_43")
    scene.beginAnimation(box6, 0, 200, true);
    var box7 = scene.getMeshByName("obj_smallcube_44")
    scene.beginAnimation(box7, 0, 200, true);
    var box8 = scene.getMeshByName("obj_smallcube_45")
    scene.beginAnimation(box8, 0, 200, true);
    var box9 = scene.getMeshByName("obj_smallcube_47")
    scene.beginAnimation(box9, 0, 200, true);
    var box10 = scene.getMeshByName("obj_smallcube_48")
    scene.beginAnimation(box10, 0, 200, true);
    var box11 = scene.getMeshByName("obj_smallcube_49")
    scene.beginAnimation(box11, 0, 200, true);
    var box12 = scene.getMeshByName("obj_smallcube_50")
    scene.beginAnimation(box12, 0, 200, true);
    var box13 = scene.getMeshByName("obj_smallcube_51")
    scene.beginAnimation(box13, 0, 200, true);
    var box14 = scene.getMeshByName("obj_smallcube_52")
    scene.beginAnimation(box14, 0, 200, true);
    var box15 = scene.getMeshByName("obj_smallcube_53")
    scene.beginAnimation(box15, 0, 200, true);
    var box16 = scene.getMeshByName("obj_smallcube_54")
    scene.beginAnimation(box16, 0, 200, true);
    var box17 = scene.getMeshByName("obj_smallcube_55")
    scene.beginAnimation(box17, 0, 200, true);
    var box18 = scene.getMeshByName("obj_smallcube_56")
    scene.beginAnimation(box18, 0, 200, true); 
    var box19 = scene.getMeshByName("obj_smallcube_57")
    scene.beginAnimation(box19, 0, 200, true);
    var box20 = scene.getMeshByName("obj_smallcube_58")
    scene.beginAnimation(box20, 0, 200, true);
    var box21 = scene.getMeshByName("obj_smallcube_59")
    scene.beginAnimation(box21, 0, 200, true);
    var box22 = scene.getMeshByName("obj_smallcube_60")
    scene.beginAnimation(box22, 0, 200, true);
    var box23 = scene.getMeshByName("obj_portal_3")
    scene.beginAnimation(box23, 0, 200, true);
    var box24 = scene.getMeshByName("obj_portal_4")
    scene.beginAnimation(box24, 0, 200, true);
    var box25 = scene.getMeshByName("obj_centralstation")
    scene.beginAnimation(box25, 0, 200, true);
    var box26 = scene.getMeshByName("obj_rocket")
    scene.beginAnimation(box26, 0, 200, true);
        
    }

  // import scene
  BABYLON.SceneLoader.ShowLoadingScreen = false;
  BABYLON.SceneLoader.Append("scene/", "scene.babylon", scene, onSceneImported);
  function onSceneImported(newMeshes, particleSystems, skeletons) {
    scene.activeCamera = camera;
    scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
    scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    AnimationBlender(scene);
    return scene;
}

function createFreeCamera(scene) {
  var camera = new BABYLON.FreeCamera("freeCamera", new BABYLON.Vector3(1, 1, 1), scene);
  camera.attachControl(canvas);
  camera.checkCollisions = false;
  camera.applyGravity = false;
  camera.ellipsoid = new BABYLON.Vector3(1.2, 0.82, 1.2);
  camera.speed = 0.10;
  camera.keysUp.push('w'.charCodeAt(0));
  camera.keysUp.push('W'.charCodeAt(0));
  camera.keysLeft.push('a'.charCodeAt(0));
  camera.keysLeft.push('A'.charCodeAt(0));
  camera.keysDown.push('s'.charCodeAt(0));
  camera.keysDown.push('S'.charCodeAt(0));
  camera.keysRight.push('d'.charCodeAt(0));
  camera.keysRight.push('D'.charCodeAt(0));

  camera.position = new BABYLON.Vector3(4.1, 1.7, 7.9);
  camera.rotation = new BABYLON.Vector3( 0, 0, 0);
  
  return camera;
}
window.addEventListener("resize", function () {
  engine.resize();
});


return scene;
}





