controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
tiles.setCurrentTilemap(tilemap`niveau1`)
let mySprite = sprites.create(img`
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
tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 55))
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
