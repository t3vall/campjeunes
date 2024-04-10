namespace SpriteKind {
    export const Toit = SpriteKind.create()
    export const PNJ = SpriteKind.create()
    export const PC = SpriteKind.create()
    export const Exterieur = SpriteKind.create()
}
function creerSpriteToit (repereCoin: Image, mySprite: Sprite) {
    test = []
    if (mySprite.kind() == SpriteKind.Toit) {
        creeTabCoin(repereCoin)
        mySprite.setImage(creerImgToit(test, mySprite))
        placerSpriteToit(test, mySprite)
        placerTuileCoin(test)
    } else {
    	
    }
}
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Joueur.tileKindAt(TileDirection.Left, assets.tile`TuilePorteGch`)) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            if (Math.floor(Joueur.y / 16) == posPortGch[0].row) {
                spriteToitStudio.setFlag(SpriteFlag.Invisible, true)
            } else {
                spriteToitMaison.setFlag(SpriteFlag.Invisible, true)
            }
        }
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`TuilePorteGch`)) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            if (Math.floor(Joueur.y / 16) == posPortGch[0].row) {
                spriteToitStudio.setFlag(SpriteFlag.Invisible, false)
            } else {
                spriteToitMaison.setFlag(SpriteFlag.Invisible, false)
            }
        }
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`TuilePorteDrt`)) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            spriteToitAtelier.setFlag(SpriteFlag.Invisible, true)
        }
    } else if (Joueur.tileKindAt(TileDirection.Left, assets.tile`TuilePorteDrt`)) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            spriteToitAtelier.setFlag(SpriteFlag.Invisible, false)
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText(tempTabCoin[1], DialogLayout.Bottom)
    if (debug == 0) {
        debug = 1
    } else {
        debug = 0
    }
})
function creerImgToit (ArrCoin: tiles.Location[], mySprite: Sprite) {
    CoinSupDrt = (ArrCoin[2].column + 1) * 16
    CoinSupDrt2 = ArrCoin[2].row * 16
    CoinSupGch = ArrCoin[0].column * 16
    CoinInfDrt = (ArrCoin[3].row + 1) * 16
    if (mySprite.kind() == SpriteKind.Toit) {
        imgToit = image.create(CoinSupDrt - CoinSupGch, CoinInfDrt - CoinSupDrt2)
        imgToit.fill(4)
    } else {
        imgToit = image.create(CoinSupDrt + 4 * 16 - (CoinSupGch - 4 * 16), CoinInfDrt + 4 * 16 - (CoinSupDrt2 - 4 * 16))
        for (let X = 0; X <= CoinSupDrt + 4 * 16 - (CoinSupGch - 4 * 16); X++) {
            for (let Y = 0; Y <= 4; Y++) {
                imgToit.setPixel(X, Y, 9)
            }
        }
    }
    return imgToit
}
function creeTabCoin (RepereCoin: Image) {
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PNJ, function (sprite, otherSprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16)))
})
let imgToit: Image = null
let CoinInfDrt = 0
let CoinSupGch = 0
let CoinSupDrt2 = 0
let CoinSupDrt = 0
let test: tiles.Location[] = []
let spriteToitMaison: Sprite = null
let spriteToitAtelier: Sprite = null
let spriteToitStudio: Sprite = null
let Joueur: Sprite = null
let posPortGch: tiles.Location[] = []
let tabCoinAtelier: tiles.Location[] = []
let tabCoinMaison: tiles.Location[] = []
let tabCoinStudio: tiles.Location[] = []
let tempTabCoin: number[] = []
let debug = 0
debug = 0
tempTabCoin = []
tabCoinStudio = []
tabCoinMaison = []
tabCoinAtelier = []
posPortGch = []
tiles.setCurrentTilemap(tilemap`niveau2`)
let PC2 = sprites.create(assets.image`SpritePc`, SpriteKind.PC)
Joueur = sprites.create(assets.image`Mario`, SpriteKind.Player)
let PNJ1 = sprites.create(assets.image`Luigi`, SpriteKind.PNJ)
tiles.placeOnTile(PC2, tiles.getTileLocation(1, 41))
tiles.placeOnTile(Joueur, tiles.getTileLocation(11, 55))
tiles.placeOnTile(PNJ1, tiles.getTileLocation(5, 55))
controller.moveSprite(Joueur, 100, 100)
scene.cameraFollowSprite(Joueur)
Joueur.setFlag(SpriteFlag.ShowPhysics, true)
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
let spriteExtMaison = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
let spriteExtAtelier = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
let spriteExtStudio = sprites.create(assets.image`SpriteToit`, SpriteKind.Exterieur)
creerSpriteToit(assets.image`repereStudio`, spriteToitStudio)
creerSpriteToit(assets.image`repereMaison`, spriteToitMaison)
creerSpriteToit(assets.image`repereAtelier`, spriteToitAtelier)
creerSpriteToit(assets.image`repereAtelier`, spriteExtAtelier)
for (let valeur4 of tiles.getTilesByType(assets.tile`TuilePorteGch`)) {
    posPortGch.push(valeur4)
}
forever(function () {
    if (Math.floor(Joueur.x / 16) >= tabCoinMaison[0].column && Math.floor(Joueur.x / 16) <= tabCoinMaison[2].column && (Math.floor(Joueur.y / 16) >= tabCoinMaison[0].row && Math.floor(Joueur.y / 16) <= tabCoinMaison[1].row)) {
        spriteToitMaison.setFlag(SpriteFlag.Invisible, true)
    } else {
        spriteToitMaison.setFlag(SpriteFlag.Invisible, false)
    }
})
