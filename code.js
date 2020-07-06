var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","d2980854-dc28-467d-ba0c-3fea94d8d2f1"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"vvS5Oh_eqfnFVF_Qbqe6rWJGk8TWbkgP","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"2Ow79_8hqbTD6gq_k8pFTuukkkgMO_d9","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"6B2R0nl0YoI9B4j4G4uFzcya0L6AAY48","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"d2980854-dc28-467d-ba0c-3fea94d8d2f1":{"name":"sunshine_showers_1","frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2020-01-29 19:48:02 UTC","pngLastModified":"2020-01-29 19:48:02 UTC","version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey, ground, bananagroup,obsticalegroup, bannana,rock,score;


function setup() {
  monkey = createSprite(40,336);
  monkey.setAnimation("monkey");
  monkey.scale=0.16;
 ground= createSprite(200,390,400,20);
 ground.x=ground.width/2;
 bananagroup=createGroup();
 obsticalegroup=createGroup();
}

function draw() {
 background(255);
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.6;
  if(keyDown("space")&&monkey.y==330.88){
    monkey.velocityY = -15;
  
  }
  score=Math.ceil(World.frameRate/World.frameRate);
  text("survival time:"+score,310,30);
  console.log(monkey.y);
  if (ground.x < 0){
ground.x = ground.width/2;
}
  ground.velocityX=-5;
  food();
 obsticale();
drawSprites();
  
}

function food(){
  if(World.frameCount%80==0){
    bannana=createSprite(410,randomNumber(120,180));
    bannana.setAnimation("Banana");
     bannana.scale=0.05;
     bannana.velocityX=-3;
     bannana.lifetime=210;
     bananagroup.add(bannana);
  }
}
function obsticale(){
  if(World.frameCount%300==0){
    rock=createSprite(400,360);
    rock.setAnimation("Stone");
    rock.scale=0.2;
    rock.velocityX=-3;
    rock.lifetime=210;
    obsticalegroup.add(rock);
  }
}


  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
