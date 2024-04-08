function placerSpriteToit (ArrCoin: tiles.Location[], mySprite: Sprite) {
    CoinSupDrt = (ArrCoin[2].column + 1) * 16
    CoinSupDrt2 = ArrCoin[2].row * 16
    CoinSupGch = ArrCoin[0].column * 16
    CoinInfDrt = (ArrCoin[3].row + 1) * 16
    mySprite.setPosition(CoinSupGch + (CoinSupDrt - CoinSupGch) / 2, CoinSupDrt2 + (CoinInfDrt - CoinSupDrt2) / 2)
}
function placerTuileCoin (ArrCoin: tiles.Location[]) {
    for (let valeur of ArrCoin) {
        if (ArrCoin.indexOf(valeur) == 0) {
            tiles.setTileAt(valeur, assets.tile`myTile`)
        } else if (ArrCoin.indexOf(valeur) == 1) {
            tiles.setTileAt(valeur, assets.tile`myTile3`)
        } else if (ArrCoin.indexOf(valeur) == 2) {
            tiles.setTileAt(valeur, assets.tile`myTile0`)
        } else {
            tiles.setTileAt(valeur, assets.tile`myTile5`)
        }
    }
}
function CréerSpriteToit (ArrCoin: tiles.Location[]) {
    CoinSupDrt = (ArrCoin[2].column + 1) * 16
    CoinSupDrt2 = ArrCoin[2].row * 16
    CoinSupGch = ArrCoin[0].column * 16
    CoinInfDrt = (ArrCoin[3].row + 1) * 16
    ImgToit = image.create(CoinSupDrt - CoinSupGch, CoinInfDrt - CoinSupDrt2)
    ImgToit.fill(4)
    return ImgToit
}
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
    if (debug == 0) {
        mySprite3.setFlag(SpriteFlag.Invisible, true)
        debug = 1
    } else {
        mySprite3.setFlag(SpriteFlag.Invisible, false)
        debug = 0
    }
})
let ImgToit: Image = null
let CoinInfDrt = 0
let CoinSupGch = 0
let CoinSupDrt2 = 0
let CoinSupDrt = 0
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let debug = 0
debug = 0
let ArrCoin: tiles.Location[] = []
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
for (let valeur of tiles.getTilesByType(assets.tile`TuileCoinBatTest`)) {
    ArrCoin.push(valeur)
}
mySprite3 = sprites.create(CréerSpriteToit(ArrCoin), SpriteKind.Player)
placerSpriteToit(ArrCoin, mySprite3)
placerTuileCoin(ArrCoin)
