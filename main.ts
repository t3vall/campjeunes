namespace SpriteKind {
    export const Toit = SpriteKind.create()
    export const PNJ = SpriteKind.create()
    export const PC = SpriteKind.create()
    export const Exterieur = SpriteKind.create()
}
function creerSpriteToit (repereCoin: Image, mySprite: Sprite, desactivation: boolean) {
    tempSprite = mySprite
    test = []
    creeTabCoin(repereCoin)
    if (desactivation) {
        if (tempSprite.kind() == SpriteKind.Toit) {
            tempSprite.setImage(creerImgToit(test, tempSprite))
            placerSpriteToit(test, tempSprite)
            placerTuileCoin(test)
        } else {
            tempSprite.setImage(creerImgToit(test, tempSprite))
            placerSpriteToit(test, tempSprite)
        }
    }
}
function placerSpriteToit (ArrCoin: tiles.Location[], mySprite: Sprite) {
    CoinSupDrt = ArrCoin[2].x + 8
    CoinSupDrt2 = ArrCoin[2].y - 8
    CoinSupGch = ArrCoin[0].x - 8
    CoinInfDrt = ArrCoin[3].y + 8
    mySprite.setPosition(CoinSupGch + (CoinSupDrt - CoinSupGch) / 2, CoinSupDrt2 + (CoinInfDrt - CoinSupDrt2) / 2)
}
function placerTuileCoin (ArrCoin: tiles.Location[]) {
    for (let valeur of ArrCoin) {
        if (ArrCoin.indexOf(valeur) == 0) {
            tiles.setTileAt(valeur, assets.tile`tileCoinSupGch`)
        } else if (ArrCoin.indexOf(valeur) == 1) {
            tiles.setTileAt(valeur, assets.tile`tileCoinInfGch`)
        } else if (ArrCoin.indexOf(valeur) == 2) {
            tiles.setTileAt(valeur, assets.tile`tileCoinSupDrt`)
        } else {
            tiles.setTileAt(valeur, assets.tile`tileCoinInfDrt`)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.floor(Joueur.x / 16) == posPorteStudioCol + 1 && Math.floor(Joueur.y / 16) == posPorteStudioRow) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            for (let X2 = 0; X2 <= coinSupDrtStudioCol; X2++) {
                for (let Y2 = 0; Y2 <= coinInfDrtSudioRow; Y2++) {
                    if (Y2 == coinSupDrtStudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur2`)
                    }
                    if (Y2 == coinInfDrtSudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur4`)
                    }
                    if (X2 == coinSupGchStudioCol && (Y2 >= coinSupDrtStudioRow && Y2 <= coinInfDrtSudioRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur1`)
                    }
                    if (X2 == coinSupDrtStudioCol && (Y2 >= coinSupDrtStudioRow && Y2 <= coinInfDrtSudioRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur0`)
                    }
                    if (X2 == coinSupGchStudioCol && Y2 == coinSupDrtStudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinSupGch`)
                    }
                    if (X2 == coinSupDrtStudioCol && Y2 == coinSupDrtStudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinSupDrt`)
                    }
                    if (X2 == coinSupDrtStudioCol && Y2 == coinInfDrtSudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinInfDrt`)
                    }
                    if (X2 == coinSupGchStudioCol && Y2 == coinInfDrtSudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinInfGch`)
                    }
                    if (X2 == posPorteStudioCol && Y2 == posPorteStudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tilePorteGch`)
                    }
                    if (X2 >= coinSupGchStudioCol + 1 && X2 <= coinSupDrtStudioCol - 1 && (Y2 >= coinSupDrtStudioRow + 1 && Y2 <= coinInfDrtSudioRow - 1)) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileSol1`)
                    }
                }
            }
        }
    } else if (Math.floor(Joueur.x / 16) == posPorteStudioCol - 1 && Math.floor(Joueur.y / 16) == posPorteStudioRow) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            for (let X2 = 0; X2 <= coinSupDrtStudioCol; X2++) {
                for (let Y2 = 0; Y2 <= coinInfDrtSudioRow; Y2++) {
                    if (X2 >= coinSupGchStudioCol + 1 && X2 <= coinSupDrtStudioCol - 1 && (Y2 >= coinSupDrtStudioRow + 1 && Y2 <= coinInfDrtSudioRow - 1)) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`myTile4`)
                    }
                    if (X2 == posPorteStudioCol && Y2 == posPorteStudioRow) {
                        tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tilePorteGch`)
                    }
                }
            }
        }
    }
})
function creerImgToit (ArrCoin: tiles.Location[], mySprite: Sprite) {
    CoinSupDrt = ArrCoin[2].x + 8
    CoinSupDrt2 = ArrCoin[2].y - 8
    CoinSupGch = ArrCoin[0].x - 8
    CoinInfDrt = ArrCoin[3].y + 8
    if (mySprite.kind() == SpriteKind.Toit) {
        imgToit = image.create(CoinSupDrt - CoinSupGch, CoinInfDrt - CoinSupDrt2)
        imgToit.fill(4)
    } else {
        imgToit = image.create(CoinSupDrt + taille * 16 - (CoinSupGch - taille * 16), CoinInfDrt + taille * 16 - (CoinSupDrt2 - taille * 16))
        for (let X = 0; X <= CoinSupDrt + taille * 16 - (CoinSupGch - taille * 16); X++) {
            for (let Y = 0; Y <= CoinInfDrt + taille * 16 - (CoinSupDrt2 - taille * 16); Y++) {
                if (Y < taille * 16 || Y >= CoinInfDrt + taille * 16 - (CoinSupDrt2 - taille * 16) - taille * 16 || (X < taille * 16 || X >= CoinSupDrt + taille * 16 - (CoinSupGch - taille * 16) - taille * 16)) {
                    imgToit.setPixel(X, Y, 15)
                } else {
                    imgToit.setPixel(X, Y, 0)
                }
            }
        }
    }
    return imgToit
}
function creeTabCoin (RepereCoin: Image) {
    if (tiles.getTilesByType(RepereCoin).length != 0) {
        for (let valeur3 of tiles.getTilesByType(RepereCoin)) {
            test.push(valeur3)
        }
        if (RepereCoin.equals(assets.image`repereStudio`)) {
            tabCoinStudio = test
        } else if (RepereCoin.equals(assets.image`repereMaison`)) {
            tabCoinMaison = test
        } else {
            tabCoinAtelier = test
        }
    } else {
        if (RepereCoin.equals(assets.image`repereStudio`)) {
            for (let valeur32 of tabCoinStudio) {
                test.push(valeur32)
            }
        } else if (RepereCoin.equals(assets.image`repereMaison`)) {
            for (let valeur33 of tabCoinMaison) {
                test.push(valeur33)
            }
        } else {
            for (let valeur34 of tabCoinAtelier) {
                test.push(valeur34)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PNJ, function (sprite, otherSprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16)))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let decalage = 0
let imgToit: Image = null
let CoinInfDrt = 0
let CoinSupGch = 0
let CoinSupDrt2 = 0
let CoinSupDrt = 0
let test: tiles.Location[] = []
let tempSprite: Sprite = null
let posPorteStudioRow = 0
let posPorteStudioCol = 0
let coinInfDrtSudioRow = 0
let coinSupDrtStudioRow = 0
let coinSupDrtStudioCol = 0
let coinSupGchStudioCol = 0
let spriteExtStudio: Sprite = null
let spriteExtAtelier: Sprite = null
let spriteExtMaison: Sprite = null
let spriteToitMaison: Sprite = null
let spriteToitAtelier: Sprite = null
let spriteToitStudio: Sprite = null
let posPortGch: tiles.Location[] = []
let tabCoinAtelier: tiles.Location[] = []
let tabCoinMaison: tiles.Location[] = []
let tabCoinStudio: tiles.Location[] = []
let taille = 0
let besoinExt = 0
let tempTabCoin: number[] = []
let modeSprite = 0
let Joueur: Sprite = null
let debug = 0
tiles.setCurrentTilemap(tilemap`niveau0`)
let PC2 = sprites.create(assets.image`SpritePc`, SpriteKind.PC)
Joueur = sprites.create(assets.image`Mario`, SpriteKind.Player)
let PNJ1 = sprites.create(assets.image`Luigi`, SpriteKind.PNJ)
controller.moveSprite(Joueur, 100, 100)
scene.cameraFollowSprite(Joueur)
Joueur.setFlag(SpriteFlag.ShowPhysics, true)
tiles.placeOnTile(PC2, tiles.getTileLocation(1, 41))
tiles.placeOnTile(Joueur, tiles.getTileLocation(11, 55))
tiles.placeOnTile(PNJ1, tiles.getTileLocation(5, 55))
if (modeSprite) {
    tempTabCoin = []
    besoinExt = 0
    taille = 4
    tabCoinStudio = []
    tabCoinMaison = []
    tabCoinAtelier = []
    posPortGch = []
    spriteToitStudio = sprites.create(img`
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
        `, SpriteKind.Toit)
    spriteToitAtelier = sprites.create(assets.image`SpriteToit`, SpriteKind.Toit)
    spriteToitMaison = sprites.create(assets.image`SpriteToit`, SpriteKind.Toit)
    spriteExtMaison = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
    spriteExtAtelier = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
    spriteExtStudio = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
    creerSpriteToit(assets.image`repereStudio`, spriteToitStudio, false)
    creerSpriteToit(assets.image`repereAtelier`, spriteToitAtelier, false)
    creerSpriteToit(assets.image`repereMaison`, spriteToitMaison, false)
    for (let valeur4 of tiles.getTilesByType(assets.tile`tilePorteGch`)) {
        posPortGch.push(valeur4)
    }
} else {
    coinSupGchStudioCol = 0
    coinSupDrtStudioCol = 9
    coinSupDrtStudioRow = 40
    coinInfDrtSudioRow = 62
    posPorteStudioCol = 9
    posPorteStudioRow = 57
    PNJ1.setFlag(SpriteFlag.Invisible, true)
    PC2.setFlag(SpriteFlag.Invisible, true)
}
forever(function () {
    if (modeSprite) {
        if (Math.floor(Joueur.x / 16) >= tabCoinMaison[0].column && Math.floor(Joueur.x / 16) <= tabCoinMaison[2].column && (Math.floor(Joueur.y / 16) >= tabCoinMaison[0].row && Math.floor(Joueur.y / 16) <= tabCoinMaison[1].row)) {
            if (besoinExt == 0) {
                spriteExtMaison = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
                spriteToitMaison.setFlag(SpriteFlag.Invisible, true)
                creerSpriteToit(assets.image`repereMaison`, spriteExtMaison, false)
                besoinExt = 1
            }
        } else {
            if (besoinExt == 1) {
                sprites.destroy(spriteExtMaison)
                spriteToitMaison.setFlag(SpriteFlag.Invisible, false)
                besoinExt = 0
            }
        }
    }
})
game.onUpdate(function () {
    // console.log("decalage = " + decalage)
    if (controller.B.isPressed()) {
        decalage += 1
        spriteExtStudio.setPosition(80 + decalage * 16, 824)
    }
})
