controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
/**
 * -Faire TuileMap:
 * 
 * Extérieur
 * 
 * Intérieur
 * 
 * Ascenseur et/ou Escalier
 * 
 * -Une .3D isométrique ne fonctionnera pas pour nous donc faire une simple vue de dessus
 */
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
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
