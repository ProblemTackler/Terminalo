effects.clouds.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `,img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c9999b222222222222fc..
    .c2b991119222222222c22c.
    c2222b11992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222444222f.....
    ..ff2222222cf444222f....
    ....ffffffffff444222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `,img`
    ...ffffff..........ccc..
    ...ff22ccff.......c44f..
    ....fffccccfff...c442f..
    ....cc24442222ccc4422f..
    ...c99b222222222cc22fc..
    ..c999111b222222222222c.
    .c2bb11199222ccccccc222f
    c22222222222c222cccfffff
    f22222222222442222ccc...
    .f222222222224442222c...
    ..ff2222222cffc44222c...
    ....fffffffcffffcccc....
    .........f2c2ffff.......
    .........fcc2ffff.......
    ..........ffffff........
    ........................
    `,img`
    ...fffffff.........ccc..
    ...ff22ccff.......cc4f..
    ....fffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `,img`
    ....ffffff..............
    ....ff22ccf.........cf..
    .....ffccccfff.....c4f..
    ....cc22222222ccccc44f..
    ...c9b244422222ccc442f..
    ..c99944222222222242fc..
    .c2b9992222222222222fcc.
    c222b1111b22222222cc22cf
    f2222211992222ccccccc22f
    .f22222222222c222cffffff
    ..ff2222222c442222ff....
    ....fffffffff442222fc...
    .........f2cff442222c...
    .........fccfffc2222c...
    ..........fc2ffffffff...
    ...........c2fff........
    `,img`
    ....ffffff..............
    ....ff2cccf.........cf..
    .....ff2cccfff.....c4f..
    ....cc22222222ccccc44f..
    ...c9b244422222ccc442f..
    ..c99944222222222242fc..
    .c2b9912222222222222fcc.
    c222b1111b22222222cc22cf
    f2222221992222ccccccc22f
    .f22222222222c222cffffff
    ..ff2222222c442222ff....
    ....fffffffff442222fc...
    .........f2cff442222c...
    .........fccfffc2222c...
    ..........fc2ffffffff...
    ...........c2fff........
    `],
100,
true
)
