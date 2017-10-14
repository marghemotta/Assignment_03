var colorList = ['#fb0000',
  '#3c5979',
  '#f91c6c',
  '#fc7e90',
  '#b5bf7b',
  '#6fbca6',
  '#55977f',
  '#c6e0c6',
];

var iterator = 0;

function setup() {
  createCanvas(500, 500);

  noStroke(0);

  frameRate(60);
}


function draw() {

  frameRate(0.8);

  for (var x = 0; x <= 550; x += 100) {
    for (var y = -75; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x + 25, y, x, y - 25, x + 50, y - 75, x + 50, y - 25);
    }
  }

  for (var x = 0; x <= 550; x += 100) {
    for (var y = -75; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x + 33, y, x + 50, y + 17, x + 67, y, x + 50, y - 17);
    }
  }



  for (var x = 0; x <= 550; x += 100) {
    for (var y = -75; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x + 50, y - 25, x + 50, y - 75, x + 100, y - 25, x + 75, y);
    }
  }




  for (var x = 0; x <= 550; x += 100) {
    for (var y = -75; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x, y + 25, x, y - 25, x + 50, y + 25, x + 50, y + 75);
    }
  }



  for (var x = 0; x <= 550; x += 100) {
    for (var y = -75; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x + 50, y + 75, x + 50, y + 25, x + 100, y - 25, x + 100, y + 25);
    }
  }


  for (var x = -50; x <= 550; x += 100) {
    for (var y = -123; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x + 35.5, y + 37.5, x + 50, y + 52, x + 64.5, y + 37.5, x + 50, y + 23);
    }
  }

  for (var x = -0; x <= 550; x += 100) {
    for (var y = -52; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x + 35.5, y + 37.5, x + 50, y + 52, x + 64.5, y + 37.5, x + 50, y + 23);
    }
  }

  for (var x = -50; x <= 550; x += 100) {
    for (var y = -39; y <= 650; y += 148) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      quad(x + 20.5, y + 37.5, x + 50, y + 68, x + 79.5, y + 37.5, x + 50, y + 8);
    }
  }

}