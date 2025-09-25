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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 700, 1400, 200); //Floor
    // Starter wall
    createPlatform(100, 0, 50, 600); // Wall
    //Vert 1
    createPlatform(150, 520, 150, 80); // Vert first

    createPlatform(400, 520, 200, 80); //Vert midl

    createPlatform(700, 520, 220, 80); //Vert midle

    createPlatform(150, 400, 50, 200); // Start Wisk

    createPlatform(300, 310, 100, 30); //Vert mid

    createPlatform(500, 280, 300, 30, "Blue", 280, 1200, 1); // Moving

    createPlatform(1050, 620, 40, 20); // Miny Plat

    // design
    createPlatform(310, 317, 80, 15, "Blue"); //Vert mid
    createPlatform(410, 530, 180, 60, "Blue"); //Vert midl
    //createPlatform(400, 520, 200, 80); //Vert midl
    createPlatform(710, 530, 200, 60, "Blue"); //Vert midle
    //createPlatform(150, 400, 50, 200); // Start Wisk
    createPlatform(110, 410, 80, 180, "Blue"); // Start Wisk
    //createPlatform(150, 520, 150, 80); // Vert first
    createPlatform(110, 530, 180, 60, "Blue"); // Vert first
    //createPlatform(0, 700, 1400, 200); //Floor
    createPlatform(0, 710, 1400, 180, "Blue"); //Floor
    //createPlatform(1050, 620, 40, 20); // Miny Plat
    createPlatform(1055, 625, 30, 10, "Blue"); // Miny Plat
    // createPlatform(500, 280, 300, 30, "grey",280, 1200, 1); // Moving
    //createPlatform(510, 290, 285, 10, "Blue",280, 1200, 1); // Moving
    // createPlatform(100, 0, 50, 600);// Wall
    createPlatform(100, 0, 50, 600, "Blue"); // Wall

    // TODO 3 - Create Collectables
    createCollectable("diamond", 1350, 600);
    createCollectable("max", 1350, 150);
    createCollectable("database", 200, 170, 0.5, 0.7);
    // TODO 4 - Create Cannons
    createCannon("right", 400, 800);
    createCannon("left", 200, 800);
    createCannon("right", 690, 2200);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
