$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 650, 100, 50);
createPlatform(800, 550, 100, 50);
createPlatform(300, 550, 100, 50);
createPlatform(1000, 450, 100, 50);
createPlatform(700, 350, 100, 50);
createPlatform(500, 450, 100, 50);
createPlatform(700, 150, 100, 50);
createPlatform(500, 250, 100, 50);
createPlatform(900, 250, 100, 50);
createPlatform(300, 150, 100, 50);
createPlatform(1200, 150, 100, 50);
createPlatform(1100, 350, 100, 50);
    // TODO 3 - Create Collectables
createCollectable("database", 725, 100, 0.5, 0.5) ;
createCollectable("steve", 325, 100, 0.5, 0.5) ;
createCollectable("max", 1225, 100, 0.5, 0.5) ;

    // TODO 4 - Create Cannons
createCannon("right", 200, 3000);
createCannon("left", 325, 1500);
createCannon("right", 600, 1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
