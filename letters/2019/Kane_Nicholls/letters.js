const PI = 3.14159;


const alphabet = {
  "default": {
    "CPX1": 50,
    "CPY1": 150,
    "R1": 300,
    "SA1": (22 * PI / 16),
    "EA1": (26 * PI / 16),

    "CPX2": 50,
    "CPY2": 50,
    "R2": 300,
    "SA2": (6 * PI / 16),
    "EA2": (10 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
  },
  "A": {
    "CPX1": 50,
    "CPY1": 0,
    "R1": 400,
    "SA1": (7 * PI / 16),
    "EA1": (9 * PI / 16),

    "CPX2": 50,
    "CPY2": 0,
    "R2": 200,
    "SA2": (7 * PI / 16),
    "EA2": (9 * PI / 16),

    "X1": 30,
    "Y1": 90,
    "X2": 40,
    "Y2": 20
  },
  "B": {
    "CPX1": 50,
    "CPY1": 50,
    "R1": 100,
    "SA1": (-8 * PI / 16),
    "EA1": (8 * PI / 16),

    "CPX2": 50,
    "CPY2": 150,
    "R2": 100,
    "SA2": (-8 * PI / 16),
    "EA2": (8 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 70,
    "Y2": 200
  },
  "C": {
    "CPX1": 50,
    "CPY1": 50,
    "R1": 100,
    "SA1": (14 * PI / 16),
    "EA1": (32 * PI / 16),

    "CPX2": 50,
    "CPY2": 150,
    "R2": 100,
    "SA2": (0 * PI / 16),
    "EA2": (18 * PI / 16),

    "X1": 0,
    "Y1": 35,
    "X2": 37.5,
    "Y2": 130
  },
  "D": {
    "CPX1": 25,
    "CPY1": 100,
    "R1": 200,
    "SA1": (24 * PI / 16),
    "EA1": (30 * PI / 16),

    "CPX2": 25,
    "CPY2": 100,
    "R2": 200,
    "SA2": (-4 * PI / 16),
    "EA2": (8 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 50,
    "Y2": 200
  },
  "E": {
    "CPX1": 50,
    "CPY1": 60,
    "R1": 120,
    "SA1": (8 * PI / 16),
    "EA1": (32 * PI / 16),

    "CPX2": 50,
    "CPY2": 140,
    "R2": 120,
    "SA2": (0 * PI / 16),
    "EA2": (24 * PI / 16),

    "X1": 25,
    "Y1": 85,
    "X2": 70,
    "Y2": 30
  },
  "F": {
    "CPX1": 50,
    "CPY1": 50,
    "R1": 100,
    "SA1": (10 * PI / 16),
    "EA1": (32 * PI / 16),

    "CPX2": 75,
    "CPY2": 100,
    "R2": 125,
    "SA2": (15 * PI / 16),
    "EA2": (17 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 37.5,
    "Y2": 200
  },
  "G": {
    "CPX1": 50,
    "CPY1": 60,
    "R1": 140,
    "SA1": (11 * PI / 16),
    "EA1": (29 * PI / 16),

    "CPX2": 45,
    "CPY2": 130,
    "R2": 130,
    "SA2": (-2 * PI / 16),
    "EA2": (20 * PI / 16),

    "X1": 60,
    "Y1": 90,
    "X2": 40,
    "Y2": 20
  },
  "H": {
    "CPX1": 10,
    "CPY1": 0,
    "R1": 400,
    "SA1": (7.5 * PI / 16),
    "EA1": (8.5 * PI / 16),

    "CPX2": 90,
    "CPY2": 200,
    "R2": 400,
    "SA2": (23.5 * PI / 16),
    "EA2": (24.5 * PI / 16),

    "X1": 0,
    "Y1": 90,
    "X2": 100,
    "Y2": 20
  },
  "I": {
    "CPX1": 50,
    "CPY1": 0,
    "R1": 100,
    "SA1": (0 * PI / 16),
    "EA1": (16 * PI / 16),

    "CPX2": 50,
    "CPY2": 200,
    "R2": 100,
    "SA2": (16 * PI / 16),
    "EA2": (32 * PI / 16),

    "X1": 40,
    "Y1": 0,
    "X2": 20,
    "Y2": 200
  },
  "J": {
    "CPX1": 85,
    "CPY1": 40,
    "R1": 300,
    "SA1": (8 * PI / 16),
    "EA1": (9 * PI / 16),

    "CPX2": 50,
    "CPY2": 150,
    "R2": 100,
    "SA2": (4 * PI / 16),
    "EA2": (16 * PI / 16),

    "X1": 70,
    "Y1": 0,
    "X2": 15,
    "Y2": 125
    },
  "K": {
    "CPX1": 20,
    "CPY1": 75,
    "R1": 280,
    "SA1": (5 * PI / 16),
    "EA1": (6 * PI / 16),

    "CPX2": 0,
    "CPY2": 125,
    "R2": 250,
    "SA2": (27 * PI / 16),
    "EA2": (28 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 25,
    "Y2": 200
    },
  "L": {
    "CPX1": 15,
    "CPY1": 0,
    "R1": 400,
    "SA1": (7.5 * PI / 16),
    "EA1": (8.5 * PI / 16),

    "CPX2": 15,
    "CPY2": 200,
    "R2": 400,
    "SA2": (23.5 * PI / 16),
    "EA2": (24.5 * PI / 16),

    "X1": 0,
    "Y1": 180,
    "X2": 100,
    "Y2": 20
    },
  "M": {
      "CPX1": 10,
      "CPY1": 25,
      "R1": 350,
      "SA1": (6 * PI / 16),
      "EA1": (8 * PI / 16),

      "CPX2": 90,
      "CPY2": 25,
      "R2": 350,
      "SA2": (8 * PI / 16),
      "EA2": (10 * PI / 16),

      "X1": 24,
      "Y1": 185,
      "X2": 52,
      "Y2": 15
    },
  "N": {
      "CPX1": 95,
      "CPY1": 200,
      "R1": 400,
      "SA1": (21.5 * PI / 16),
      "EA1": (22.5 * PI / 16),

      "CPX2": 75,
      "CPY2": 200,
      "R2": 400,
      "SA2": (24 * PI / 16),
      "EA2": (25 * PI / 16),

      "X1": 0,
      "Y1": 0,
      "X2": 30,
      "Y2": 200
    },
  "O": {
      "CPX1": 50,
      "CPY1": 102,
      "R1": 150,
      "SA1": (17 * PI / 16),
      "EA1": (31 * PI / 16),

      "CPX2": 50,
      "CPY2": 98,
      "R2": 150,
      "SA2": (1 * PI / 16),
      "EA2": (15 * PI / 16),

      "X1": 40,
      "Y1": 90,
      "X2": 20,
      "Y2": 20
    },
  "P": {
      "CPX1": 22,
      "CPY1": 75,
      "R1": 130,
      "SA1": (-6 * PI / 16),
      "EA1": (6 * PI / 16),

      "CPX2": 5,
      "CPY2": 75,
      "R2": 250,
      "SA2": (7 * PI / 16),
      "EA2": (8 * PI / 16),

      "X1": 5,
      "Y1": 20,
      "X2": 20,
      "Y2": 130
    },
  "Q": {
      "CPX1": 45,
      "CPY1": 100,
      "R1": 150,
      "SA1": (4 * PI / 16),
      "EA1": (35 * PI / 16),

      "CPX2": 55,
      "CPY2": 108,
      "R2": 175,
      "SA2": (3 * PI / 16),
      "EA2": (4 * PI / 16),

      "X1": 45,
      "Y1": 100,
      "X2": 62,
      "Y2": 53
    },
  "R": {
      "CPX1": 25,
      "CPY1": 80,
      "R1": 130,
      "SA1": (-6 * PI / 16),
      "EA1": (6 * PI / 16),

      "CPX2": 25,
      "CPY2": 80,
      "R2": 250,
      "SA2": (5 * PI / 16),
      "EA2": (6 * PI / 16),

      "X1": 5,
      "Y1": 20,
      "X2": 30,
      "Y2": 180
    },
  "S": {
      "CPX1": 50,
      "CPY1": 62.5,
      "R1": 125,
      "SA1": (8 * PI / 16),
      "EA1": (32 * PI / 16),

      "CPX2": 50,
      "CPY2": 137.5,
      "R2": 125,
      "SA2": (-8 * PI / 16),
      "EA2": (16 * PI / 16),

      "X1": 40,
      "Y1": 62.5,
      "X2": 20,
      "Y2": 75
    },
  "T": {
      "CPX1": 0,
      "CPY1": 10,
      "R1": 200,
      "SA1": (-1 * PI / 16),
      "EA1": (0 * PI / 16),

      "CPX2": 100,
      "CPY2": 10,
      "R2": 200,
      "SA2": (15 * PI / 16),
      "EA2": (16 * PI / 16),

      "X1": 40,
      "Y1": 10,
      "X2": 20,
      "Y2": 190
    },
  "U": {
      "CPX1": 10,
      "CPY1": 0,
      "R1": 400,
      "SA1": (7 * PI / 16),
      "EA1": (8 * PI / 16),

      "CPX2": 100,
      "CPY2": 0,
      "R2": 400,
      "SA2": (8 * PI / 16),
      "EA2": (9 * PI / 16),

      "X1": 10,
      "Y1": 180,
      "X2": 90,
      "Y2": 20
    },
  "V": {
      "CPX1": 50,
      "CPY1": 150,
      "R1": 300,
      "SA1": (22 * PI / 16),
      "EA1": (26 * PI / 16),

      "CPX2": 50,
      "CPY2": 200,
      "R2": 400,
      "SA2": (22 * PI / 16),
      "EA2": (26 * PI / 16),

      "X1": 30,
      "Y1": 0,
      "X2": 40,
      "Y2": 20
    },
  "W": {
      "CPX1": 25,
      "CPY1": 200,
      "R1": 300,
      "SA1": (22.5 * PI / 16),
      "EA1": (25.5 * PI / 16),

      "CPX2": 75,
      "CPY2": 200,
      "R2": 300,
      "SA2": (22.5 * PI / 16),
      "EA2": (25.5 * PI / 16),

      "X1": 20,
      "Y1": 50,
      "X2": 60,
      "Y2": 50
    },
  "X": {
    "CPX1": 50,
    "CPY1": 100,
    "R1": 200,
    "SA1": (21 * PI / 16),
    "EA1": (27 * PI / 16),

    "CPX2": 50,
    "CPY2": 100,
    "R2": 200,
    "SA2": (5 * PI / 16),
    "EA2": (11 * PI / 16),

    "X1": 40,
    "Y1": 50,
    "X2": 20,
    "Y2": 100
    },
  "Y": {
    "CPX1": 50,
    "CPY1": 100,
    "R1": 200,
    "SA1": (22 * PI / 16),
    "EA1": (27 * PI / 16),

    "CPX2": 10,
    "CPY2": 200,
    "R2": 400,
    "SA2": (24 * PI / 16),
    "EA2": (26 * PI / 16),

    "X1": 40,
    "Y1": 5,
    "X2": 20,
    "Y2": 30
    },
  "Y": {
    "CPX1": 70,
    "CPY1": 100,
    "R1": 200,
    "SA1": (22 * PI / 16),
    "EA1": (26.5 * PI / 16),

    "CPX2": 10,
    "CPY2": 200,
    "R2": 410,
    "SA2": (25.25 * PI / 16),
    "EA2": (26.7 * PI / 16),

    "X1": 40,
    "Y1": 5,
    "X2": 20,
    "Y2": 30
    },
  "Z": {
    "CPX1": 60,
    "CPY1": 50,
    "R1": 140,
    "SA1": (-16 * PI / 16),
    "EA1": (11 * PI / 16),

    "CPX2": 80,
    "CPY2": 40,
    "R2":350,
    "SA2": (10 * PI / 16),
    "EA2": (11 * PI / 16),

    "X1": 0,
    "Y1": 180,
    "X2": 100,
    "Y2": 20
    },
  "0": {
    "CPX1": 50,
    "CPY1": 100,
    "R1": 100,
    "SA1": (0 * PI / 16),
    "EA1": (32 * PI / 16),

    "CPX2": 50,
    "CPY2": 100,
    "R2": 20,
    "SA2": (0 * PI / 16),
    "EA2": (32 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "1": {
    "CPX1": 50,
    "CPY1": 180,
    "R1": 300,
    "SA1": (23 * PI / 16),
    "EA1": (25 * PI / 16),

    "CPX2": 50,
    "CPY2": 180,
    "R2": 100,
    "SA2": (23 * PI / 16),
    "EA2": (25 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "2": {
    "CPX1": 35,
    "CPY1": 162.5,
    "R1": 250,
    "SA1": (23.5 * PI / 16),
    "EA1": (24.5 * PI / 16),

    "CPX2": 65,
    "CPY2": 42.5,
    "R2": 250,
    "SA2": (7.5 * PI / 16),
    "EA2": (8.5 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "3": {
    "CPX1": 40,
    "CPY1": 60,
    "R1": 80,
    "SA1": (-10 * PI / 16),
    "EA1": (10 * PI / 16),

    "CPX2": 40,
    "CPY2": 140,
    "R2":80,
    "SA2": (-10 * PI / 16),
    "EA2": (10 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "4": {
    "CPX1": 90,
    "CPY1": 100,
    "R1": 155,
    "SA1": (16 * PI / 16),
    "EA1": (24 * PI / 16),

    "CPX2": 90,
    "CPY2": 25,
    "R2":275,
    "SA2": (8 * PI / 16),
    "EA2": (8.75 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "5": {
    "CPX1": 10,
    "CPY1": 25,
    "R1": 160,
    "SA1": (0 * PI / 16),
    "EA1": (8 * PI / 16),

    "CPX2": 45,
    "CPY2": 130,
    "R2":90,
    "SA2": (-13 * PI / 16),
    "EA2": (13 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "6": {
    "CPX1": 75,
    "CPY1": 20,
    "R1": 250,
    "SA1": (10 * PI / 16),
    "EA1": (10.5 * PI / 16),

    "CPX2": 50,
    "CPY2": 150,
    "R2":90,
    "SA2": (0 * PI / 16),
    "EA2": (32 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "7": {
    "CPX1": 10,
    "CPY1": 25,
    "R1": 155,
    "SA1": (-1 * PI / 16),
    "EA1": (2 * PI / 16),

    "CPX2": 85,
    "CPY2": 190,
    "R2":365,
    "SA2": (23 * PI / 16),
    "EA2": (24 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "8": {
    "CPX1": 50,
    "CPY1": 65,
    "R1": 85,
    "SA1": (0 * PI / 16),
    "EA1": (32 * PI / 16),

    "CPX2": 50,
    "CPY2": 150,
    "R2":95,
    "SA2": (0 * PI / 16),
    "EA2": (32 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    },
  "9": {
    "CPX1": 50,
    "CPY1": 50,
    "R1": 90,
    "SA1": (0 * PI / 16),
    "EA1": (32 * PI / 16),

    "CPX2": 80,
    "CPY2": 195,
    "R2":350,
    "SA2": (24 * PI / 16),
    "EA2": (24.5 * PI / 16),

    "X1": 0,
    "Y1": 0,
    "X2": 100,
    "Y2": 200
    }
}
