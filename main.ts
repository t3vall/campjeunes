controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.floor(mySprite.y / 16) == 57 && Math.floor(mySprite.x / 16) - 9 == 1) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(9 - 1, 57))
            mySprite2.setFlag(SpriteFlag.Invisible, true)
        }
    } else if (Math.floor(mySprite.y / 16) == 57 && Math.floor(mySprite.x / 16) - 9 == -1) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(9 + 1, 57))
            mySprite2.setFlag(SpriteFlag.Invisible, false)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText(Math.floor(mySprite.y / 16), DialogLayout.Bottom)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`niveau2`)
mySprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . e e e e 3 3 e 3 . . . . 
    . . . e e 3 e 3 3 3 e 3 3 3 . . 
    . . . e e 3 e e 3 3 3 e 3 3 3 . 
    . . . e e e 3 3 3 3 e e e e . . 
    . . . . . 3 3 3 3 3 3 3 3 . . . 
    . . . . 2 2 2 8 2 2 2 . . . . . 
    . . . 2 2 2 2 8 2 2 8 2 2 2 . . 
    . . 2 2 2 2 2 8 8 8 8 2 2 2 2 . 
    . . 3 3 3 2 8 5 8 8 5 8 2 3 3 . 
    . . 3 3 3 3 8 8 8 8 8 8 3 3 3 . 
    . . 3 3 3 8 8 8 8 8 8 8 8 3 3 . 
    . . . . 8 8 8 8 . 8 8 8 8 . . . 
    . . . e e e e . . . e e e e . . 
    . . e e e e e . . . e e e e e . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`SpriteToit`, SpriteKind.Player)
mySprite2.setPosition(80, 816)
tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 55))
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
mySprite2.setFlag(SpriteFlag.Invisible, false)
