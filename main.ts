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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Joueur.tileKindAt(TileDirection.Left, assets.tile`tilePorteGch`)) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            if (Math.floor(Joueur.y / 16) == posPortGch[0].row) {
                if (besoinExt == 0) {
                    spriteExtStudio = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
                    spriteToitStudio.setFlag(SpriteFlag.Invisible, true)
                    creerSpriteToit(assets.image`repereStudio`, spriteExtStudio, true)
                    besoinExt = 1
                }
            } else {
                if (besoinExt == 0) {
                    spriteExtMaison = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
                    spriteToitMaison.setFlag(SpriteFlag.Invisible, true)
                    creerSpriteToit(assets.image`repereMaison`, spriteExtMaison, true)
                    besoinExt = 1
                }
            }
        }
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`tilePorteGch`)) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            if (Math.floor(Joueur.y / 16) == posPortGch[0].row) {
                if (besoinExt == 1) {
                    sprites.destroy(spriteExtStudio)
                    spriteToitStudio.setFlag(SpriteFlag.Invisible, false)
                    besoinExt = 0
                }
            } else {
                if (besoinExt == 1) {
                    sprites.destroy(spriteExtMaison)
                    spriteToitMaison.setFlag(SpriteFlag.Invisible, false)
                    besoinExt = 0
                }
            }
        }
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`tilePorteDrt`)) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            if (besoinExt == 0) {
                spriteExtAtelier = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
                creerSpriteToit(assets.image`repereAtelier`, spriteExtAtelier, true)
                spriteToitAtelier.setFlag(SpriteFlag.Invisible, true)
                besoinExt = 1
            }
        }
    } else if (Joueur.tileKindAt(TileDirection.Left, assets.tile`tilePorteDrt`)) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            if (besoinExt == 1) {
                sprites.destroy(spriteExtAtelier)
                spriteToitAtelier.setFlag(SpriteFlag.Invisible, false)
                besoinExt = 0
            }
        }
    }
    for (let valeur2 of sprites.allOfKind(SpriteKind.PNJ)) {
        if (Math.floor(Joueur.y / 16) == Math.floor(valeur2.y / 16) && (Math.floor(Joueur.x / 16) - Math.floor(valeur2.x / 16) == 1 || Math.ceil(Joueur.x / 16) - Math.floor(valeur2.x / 16) == 0) || Math.floor(Joueur.x / 16) == Math.floor(valeur2.x / 16) && (Math.floor(Joueur.y / 16) - Math.floor(valeur2.y / 16) == 1 || Math.ceil(Joueur.y / 16) - Math.floor(valeur2.y / 16) == 0)) {
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            if (Math.percentChance(90)) {
                game.showLongText("bonjour mario!", DialogLayout.Bottom)
            } else {
                game.showLongText("Mario!!!!", DialogLayout.Bottom)
                game.showLongText("On est pas dans le bon jeu!!!!!", DialogLayout.Bottom)
            }
        }
    }
})
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
function creerTuilePorte (coinSupDrtCol: number, coinInfDrtRow: number, posPorteCol: number, posPorteRow: number) {
    for (let X2 = 0; X2 <= coinSupDrtCol; X2++) {
        for (let Y2 = 0; Y2 <= coinInfDrtRow; Y2++) {
            if (X2 == posPorteCol && Y2 == posPorteRow) {
                if (X2 == coinSupDrtCol) {
                    tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tilePorteGch`)
                } else {
                    tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tilePorteDrt`)
                }
            }
        }
    }
}
function creerTuileCoin (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number) {
    for (let X2 = 0; X2 <= coinSupDrtCol; X2++) {
        for (let Y2 = 0; Y2 <= coinInfDrtRow; Y2++) {
            if (X2 == coinSupGchCol && Y2 == coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinSupGch`)
            }
            if (X2 == coinSupDrtCol && Y2 == coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinSupDrt`)
            }
            if (X2 == coinSupDrtCol && Y2 == coinInfDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinInfDrt`)
            }
            if (X2 == coinSupGchCol && Y2 == coinInfDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileCoinInfGch`)
            }
        }
    }
}
function creerIntBat (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, posPorteCol: number, posPorteRow: number, Maison: boolean) {
    creerTuileMur(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol)
    creerTuileCoin(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol)
    creerTuilePorte(coinSupDrtCol, coinInfDrtRow, posPorteCol, posPorteRow)
    creerTuileSol(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
}
function creerTuileSol (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X2 = 0; X2 <= coinSupDrtCol; X2++) {
        for (let Y2 = 0; Y2 <= coinInfDrtRow; Y2++) {
            if (X2 >= coinSupGchCol + 1 && X2 <= coinSupDrtCol - 1 && (Y2 >= coinSupDrtRow + 1 && Y2 <= coinInfDrtRow - 1)) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileSol1`)
            }
            if (Maison) {
                if (X2 == coinSupGchCol && (Y2 >= coinSupDrtPmaisonRow + 1 && Y2 <= coinInfDrtPmaisonRow - 1)) {
                    tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileSol1`)
                }
            }
        }
    }
}
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
function creerTuileMur (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number) {
    for (let X2 = 0; X2 <= coinSupDrtCol; X2++) {
        for (let Y2 = 0; Y2 <= coinInfDrtRow; Y2++) {
            if (Y2 == coinSupDrtRow && X2 >= coinSupGchCol) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur2`)
            }
            if (Y2 == coinInfDrtRow && X2 >= coinSupGchCol) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur4`)
            }
            if (X2 == coinSupGchCol && (Y2 >= coinSupDrtRow && Y2 <= coinInfDrtRow)) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur1`)
            }
            if (X2 == coinSupDrtCol && (Y2 >= coinSupDrtRow && Y2 <= coinInfDrtRow)) {
                tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tileMur0`)
            }
        }
    }
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.floor(Joueur.x / 16) == posPorteStudioCol + 1 && Math.floor(Joueur.y / 16) == posPorteStudioRow) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtStudioCol, coinInfDrtSudioRow, coinSupDrtStudioRow, coinSupGchStudioCol, posPorteStudioCol, posPorteStudioRow, false)
        }
    } else if (Math.floor(Joueur.x / 16) == posPorteStudioCol - 1 && Math.floor(Joueur.y / 16) == posPorteStudioRow) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creeTuileToit(coinSupDrtStudioCol, coinInfDrtSudioRow, coinSupDrtStudioRow, coinSupGchStudioCol)
        }
    }
    if (Math.floor(Joueur.x / 16) == posPorteAtelierCol - 1 && Math.floor(Joueur.y / 16) == posPorteAtelierRow) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtAtelierCol, coinInfDrtAtelierRow, coinSupDrtAtelierRow, coinSupGchAtelierCol, posPorteAtelierCol, posPorteAtelierRow, false)
        }
    } else if (Math.floor(Joueur.x / 16) == posPorteAtelierCol + 1 && Math.floor(Joueur.y / 16) == posPorteAtelierRow) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creeTuileToit(coinSupDrtAtelierCol, coinInfDrtAtelierRow, coinSupDrtAtelierRow, coinSupGchAtelierCol)
        }
    }
    if (Math.floor(Joueur.x / 16) == posPorteMaisonCol + 1 && Math.floor(Joueur.y / 16) == posPorteMaisonRow) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow, coinSupDrtPmaisonRow, coinSupGchPmaisonCol, posPorteMaisonCol, posPorteMaisonRow, false)
            creerIntBat(coinSupDrtMaisonCol, coinInfDrtMaisonRow, coinSupDrtMaisonRow, coinSupGchMaisonCol, posPorteMaisonCol, posPorteMaisonRow, true)
        }
    } else if (Math.floor(Joueur.x / 16) == posPorteMaisonCol - 1 && Math.floor(Joueur.y / 16) == posPorteMaisonRow) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creeTuileToit(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow, coinSupDrtPmaisonRow, coinSupGchPmaisonCol)
            creeTuileToit(coinSupDrtMaisonCol, coinInfDrtMaisonRow, coinSupDrtMaisonRow, coinSupGchMaisonCol)
        }
    }
})
function creeTuileToit (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number) {
    for (let X22 = 0; X22 <= coinSupDrtCol; X22++) {
        for (let Y22 = 0; Y22 <= coinInfDrtRow; Y22++) {
            if (X22 < coinSupGchCol + Math.floor((coinSupDrtCol - coinSupGchCol) / 2) && Y22 >= coinSupDrtRow && X22 >= coinSupGchCol) {
                tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tuile3`)
            }
            if (X22 == coinSupGchCol + Math.floor((coinSupDrtCol - coinSupGchCol) / 2) && Y22 >= coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileToitCtr1`)
            }
            if (X22 == coinSupGchCol + Math.ceil((coinSupDrtCol - coinSupGchCol) / 2) && Y22 >= coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileToitCtr2`)
            }
            if (X22 > coinSupGchCol + Math.ceil((coinSupDrtCol - coinSupGchCol) / 2) && Y22 >= coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tuile2`)
            }
        }
    }
}
let decalage = 0
let imgToit: Image = null
let CoinInfDrt = 0
let CoinSupGch = 0
let CoinSupDrt2 = 0
let CoinSupDrt = 0
let test: tiles.Location[] = []
let tempSprite: Sprite = null
let coinInfDrtPmaisonRow = 0
let coinSupDrtPmaisonRow = 0
let coinSupDrtPmaisonCol = 0
let coinSupGchPmaisonCol = 0
let posPorteMaisonRow = 0
let posPorteMaisonCol = 0
let coinInfDrtMaisonRow = 0
let coinSupDrtMaisonRow = 0
let coinSupDrtMaisonCol = 0
let coinSupGchMaisonCol = 0
let posPorteAtelierRow = 0
let posPorteAtelierCol = 0
let coinInfDrtAtelierRow = 0
let coinSupDrtAtelierRow = 0
let coinSupDrtAtelierCol = 0
let coinSupGchAtelierCol = 0
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
    creerSpriteToit(assets.image`repereStudio`, spriteToitStudio, true)
    creerSpriteToit(assets.image`repereAtelier`, spriteToitAtelier, true)
    creerSpriteToit(assets.image`repereMaison`, spriteToitMaison, true)
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
    coinSupGchAtelierCol = 43
    coinSupDrtAtelierCol = 52
    coinSupDrtAtelierRow = 37
    coinInfDrtAtelierRow = 62
    posPorteAtelierCol = 43
    posPorteAtelierRow = 57
    coinSupGchMaisonCol = 17
    coinSupDrtMaisonCol = 39
    coinSupDrtMaisonRow = 12
    coinInfDrtMaisonRow = 32
    posPorteMaisonCol = 39
    posPorteMaisonRow = 30
    coinSupGchPmaisonCol = 8
    coinSupDrtPmaisonCol = 17
    coinSupDrtPmaisonRow = 22
    coinInfDrtPmaisonRow = 31
    PNJ1.setFlag(SpriteFlag.Invisible, true)
    PC2.setFlag(SpriteFlag.Invisible, true)
}
forever(function () {
    if (false) {
        if (modeSprite) {
            if (Math.floor(Joueur.x / 16) >= tabCoinMaison[0].column && Math.floor(Joueur.x / 16) <= tabCoinMaison[2].column && (Math.floor(Joueur.y / 16) >= tabCoinMaison[0].row && Math.floor(Joueur.y / 16) <= tabCoinMaison[1].row)) {
                if (besoinExt == 0) {
                    spriteExtMaison = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
                    spriteToitMaison.setFlag(SpriteFlag.Invisible, true)
                    creerSpriteToit(assets.image`repereMaison`, spriteExtMaison, true)
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
    }
})
game.onUpdate(function () {
    // console.log("decalage = " + decalage)
    if (controller.B.isPressed()) {
        decalage += 1
        spriteExtStudio.setPosition(80 + decalage * 16, 824)
    }
})
