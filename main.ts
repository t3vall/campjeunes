controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
tiles.setCurrentTilemap(tilemap`niveau2`)
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
let mySprite2 = sprites.create(assets.image`SpriteToit`, SpriteKind.Player)
mySprite2.setPosition(80, 816)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 55))
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
mySprite2.z += 1
mySprite.z += 2
