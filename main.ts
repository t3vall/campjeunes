namespace SpriteKind {
    export const Toit = SpriteKind.create()
    export const PNJ = SpriteKind.create()
    export const PC = SpriteKind.create()
    export const Exterieur = SpriteKind.create()
    export const QtObjet = SpriteKind.create()
    export const Curseur = SpriteKind.create()
    export const Icon = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isCursorVisible == 0) {
        curseur2.setFlag(SpriteFlag.Invisible, false)
        isCursorVisible = 1
    } else {
        curseur2.setFlag(SpriteFlag.Invisible, true)
        isCursorVisible = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.QtObjet, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    q1MDP.setFlag(SpriteFlag.Invisible, false)
    tempQ1MDP.setPosition(1 * 16, 244 * 16)
    updateQuete(numQuete)
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`tileStair2`, function (sprite, location) {
    if (estRDCStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (!(Math.floor(sprite.x / 16) == Math.ceil(posEscalierStudio[0][0] / 16) || Math.floor(sprite.x / 16) == Math.floor(posEscalierStudio[0][0] / 16))) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16) - 1, Math.floor(sprite.y / 16)))
        }
        if (Math.ceil(sprite.y / 16) == Math.floor(posEscalierStudio[1][0] / 16)) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16) - 1))
        }
    } else if (estEtageStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (Math.ceil(sprite.y / 16) == Math.floor(posEscalierStudio[1][1] / 16)) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16) - 1))
        }
    }
})
function creetuileEscalier (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    if (coinSupGchCol <= rdcDrtGch && coinSupDrtRow >= rdcHtBs) {
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol - 1, coinInfDrtRow - 2), assets.tile`tileStair0`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol - 1, coinInfDrtRow - 1), assets.tile`myTile7`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol - 2, coinInfDrtRow - 1), assets.tile`tileStair2`)
    } else if (coinSupDrtCol > rdcDrtGch) {
    	
    } else {
        if (Maison) {
            if (true) {
                let Y23 = 0
                let X23 = 0
                tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileSol1`)
            }
        }
    }
}
function creerTuileCoin (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X22 = 0; X22 <= coinSupDrtCol; X22++) {
        for (let Y22 = 0; Y22 <= coinInfDrtRow; Y22++) {
            if (!(Maison)) {
                if (coinSupGchCol <= rdcDrtGch && coinSupDrtRow <= rdcHtBs) {
                    if (X22 == coinSupGchCol && Y22 == coinSupDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile21`)
                    }
                    if (X22 == coinSupDrtCol && Y22 == coinSupDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile22`)
                    }
                    if (X22 == coinSupDrtCol && Y22 == coinInfDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile23`)
                    }
                    if (X22 == coinSupGchCol && Y22 == coinInfDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile9`)
                    }
                } else {
                    if (X22 == coinSupGchCol && Y22 == coinSupDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinSupGch`)
                    }
                    if (X22 == coinSupDrtCol && Y22 == coinSupDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinSupDrt`)
                    }
                    if (X22 == coinSupDrtCol && Y22 == coinInfDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinInfDrt`)
                    }
                    if (X22 == coinSupGchCol && Y22 == coinInfDrtRow) {
                        tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinInfGch`)
                    }
                }
            } else {
                if (X22 == coinSupGchCol && Y22 == coinSupDrtRow) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile21`)
                }
                if (X22 == coinSupDrtCol && Y22 == coinSupDrtRow) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile22`)
                }
                if (X22 == coinSupDrtCol && Y22 == coinInfDrtRow) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile23`)
                }
                if (X22 == coinSupGchCol && Y22 == coinInfDrtRow) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile9`)
                }
            }
        }
    }
    if (Maison) {
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtPmaisonCol, coinSupDrtPmaisonRow), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow), assets.tile`myTile16`)
    }
}
function debutQuete () {
    if (numQuete == 0) {
        numQuete = 1
        txtQueteL1.setText("Retrouver le")
        txtQueteL2.setText("Mot de Passe du PC!")
        q1MDP = sprites.create(assets.image`spritePapier`, SpriteKind.QtObjet)
        tempQ1MDP = sprites.create(assets.image`spritePapier`, SpriteKind.QtObjet)
        q1MDP.setFlag(SpriteFlag.Invisible, true)
        tempQ1MDP.setPosition(randint(12, 38) * 16, randint(37, 58) * 16)
    }
}
function logInPC () {
    if (Math.floor(Joueur.x / 16) == 1 && Math.floor(Joueur.y / 16) == 42) {
        if (isPCOn == 0) {
            if (game.askForString("Veuillez entrer le mot de passe!!!") == mdpPC) {
                txtQueteL1.setText("")
                txtQueteL2.setText("")
                sprites.destroy(q1MDP)
                sprites.destroy(tempQ1MDP)
                info.changeScoreBy(10)
                isPCOn = 1
                scene.centerCameraAt(6 * 16, 70 * 16)
                curseur3 = sprites.create(assets.image`spriteCursor`, SpriteKind.Player)
                curseur3.setPosition(6 * 16, 70 * 16)
                controller.moveSprite(Joueur, 0, 0)
                controller.moveSprite(curseur3)
                logOutIcon = sprites.create(assets.image`spriteOnOff`, SpriteKind.Icon)
                logOutIcon.setPosition(1 * 16 + 8, 73 * 16)
            } else {
                game.splash("Mot de Passe Incorrect!!!")
            }
        }
    }
}
function creerIntBat (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, posPorteCol: number, posPorteRow: number, Maison: boolean) {
    creerTuileMur(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creerTuileCoin(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creerTuilePorte(coinSupDrtCol, coinInfDrtRow, posPorteCol, posPorteRow)
    creerTuileSol(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creeMurInterieur(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creetuileEscalier(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tuileNoir`, function (sprite, location) {
    if (estEtageStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (Math.ceil(sprite.y / 16) == location.row) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16) - 1))
        }
    }
})
function updateQuete (numQuete: number) {
    if (numQuete == 1) {
        if (tempQ1MDP.tilemapLocation().column == 1 && tempQ1MDP.tilemapLocation().row == 244) {
            txtQueteL1.setText("Entrer dans l'ordinateur")
            txtQueteL2.setText("")
        }
    }
}
function creerTuileSol (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X23 = 0; X23 <= coinSupDrtCol; X23++) {
        for (let Y23 = 0; Y23 <= coinInfDrtRow; Y23++) {
            if (X23 >= coinSupGchCol + 1 && X23 <= coinSupDrtCol - 1 && (Y23 >= coinSupDrtRow + 1 && Y23 <= coinInfDrtRow - 1)) {
                tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileSol1`)
                if (Maison) {
                    if (X23 > 30 && X23 < 34 && (Y23 > 24 && Y23 < 28)) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile18`)
                    }
                }
            }
            if (Maison) {
                if (X23 == coinSupGchCol && (Y23 >= coinSupDrtPmaisonRow + 1 && Y23 <= coinInfDrtPmaisonRow - 1)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileSol1`)
                }
            }
        }
    }
}
function estDansStudio (coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (estRDCStudio(coinSupDrtCol, coinSupDrtRow, coinInfDrtRow, coinSupGchCol) || estEtageStudio(coinSupDrtCol, coinSupDrtRow, coinInfDrtRow, coinSupGchCol)) {
        return true
    } else {
        return false
    }
}
function creerTuileMur (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X24 = 0; X24 <= coinSupDrtCol; X24++) {
        for (let Y24 = 0; Y24 <= coinInfDrtRow; Y24++) {
            if (!(Maison)) {
                if (coinSupGchCol <= rdcDrtGch && coinSupDrtRow <= rdcHtBs) {
                    if (Y24 == coinSupDrtRow && X24 >= coinSupGchCol) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                    }
                    if (Y24 == coinInfDrtRow && X24 >= coinSupGchCol) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                    }
                    if (X24 == coinSupGchCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                    }
                    if (X24 == coinSupDrtCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                    }
                } else {
                    if (Y24 == coinSupDrtRow && X24 >= coinSupGchCol) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur2`)
                    }
                    if (Y24 == coinInfDrtRow && X24 >= coinSupGchCol) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur4`)
                    }
                    if (X24 == coinSupGchCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur1`)
                    }
                    if (X24 == coinSupDrtCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur0`)
                    }
                }
            } else {
                if (Y24 == coinSupDrtRow && X24 >= coinSupGchCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                }
                if (Y24 == coinInfDrtRow && X24 >= coinSupGchCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                }
                if (X24 == coinSupGchCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                }
                if (X24 == coinSupDrtCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                }
                if ((X24 == 26 || X24 == 30) && Y24 == coinSupDrtRow) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile14`)
                }
                if (X24 == 39 && (Y24 == 24 || Y24 == 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile16`)
                }
                if (X24 == 26 && Y24 == coinInfDrtRow) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile13`)
                }
            }
        }
    }
}
function estRDCStudio (coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (Joueur.x < coinSupDrtCol * 16 && Joueur.x > coinSupGchCol * 16 && Joueur.y > coinSupDrtRow * 16) {
        return true
    } else {
        return false
    }
}
function creeMurInterieur (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X23 = 0; X23 <= coinSupDrtCol; X23++) {
        for (let Y23 = 0; Y23 <= coinInfDrtRow; Y23++) {
            if (Maison) {
                if (X23 == 26 && (Y23 > coinSupDrtRow && Y23 < coinInfDrtRow)) {
                    if (Y23 == 14 || Y23 == 25) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur10`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (Y23 == 17 || Y23 == 28) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur9`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (!(Y23 == 15 || Y23 == 16 || (Y23 == 26 || Y23 == 27))) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur3`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else {
                    	
                    }
                }
                if (X23 == 30 && (Y23 > coinSupDrtRow && Y23 < 28)) {
                    if (Y23 == 24) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile27`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (Y23 == 14) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur10`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (Y23 == 17) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur9`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (Y23 > 24 && Y23 < 28) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur5`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (!(Y23 == 15 || Y23 == 16)) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur3`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else {
                    	
                    }
                }
                if (Y23 == 24 && (X23 > 30 && X23 < coinSupDrtCol)) {
                    if (X23 == 34) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile26`)
                    } else if (X23 > 30 && X23 < 34) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur11`)
                    } else {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur6`)
                    }
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (Y23 == 28 && (X23 > 30 && X23 < coinSupDrtCol)) {
                    if (X23 == 34) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile28`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (X23 == 31) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur14`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (X23 == 33) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur15`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (X23 == 35) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur7`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (X23 == 38) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur8`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (!(X23 == 36 || X23 == 37 || X23 == 32)) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur6`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else {
                    	
                    }
                }
                if (X23 == 30 && Y23 == 28) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile19`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 34 && (Y23 > 24 && Y23 < 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur12`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == coinSupGchCol && (Y23 > 22 && Y23 < coinInfDrtRow - 1)) {
                    if (Y23 == 23) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur10`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (Y23 == 26) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur9`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (!(Y23 == 24 || Y23 == 25)) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur3`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else {
                    	
                    }
                }
            } else {
            	
            }
        }
    }
}
spriteutils.addEventHandler(spriteutils.UpdatePriorityModifier.After, spriteutils.UpdatePriority.Camera, function () {
    curseur2.left = scene.cameraProperty(CameraProperty.Left) + 0
    curseur2.top = scene.cameraProperty(CameraProperty.Top) + 28
    if (q1MDP) {
        q1MDP.left = scene.cameraProperty(CameraProperty.Left) + 2
        q1MDP.top = scene.cameraProperty(CameraProperty.Top) + 30
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Icon, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        isPCOn = 0
        sprites.destroy(logOutIcon)
        sprites.destroy(curseur3)
        scene.cameraFollowSprite(Joueur)
        controller.moveSprite(curseur3, 0, 0)
        controller.moveSprite(Joueur)
        game.splash("Quete ", "" + numQuete + ": Terminée")
        info.changeScoreBy(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PNJ, function (sprite, otherSprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16)))
})
function estEtageStudio (coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (Joueur.x < (coinSupDrtCol + 63) * 16 && Joueur.x > (coinSupGchCol + 63) * 16 && Joueur.y > coinSupDrtRow * 16) {
        return true
    } else {
        return false
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.floor(Joueur.x / 16) == posPorteStudioCol + 1 && Math.floor(Joueur.y / 16) == posPorteStudioRow) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtStudioCol, coinInfDrtSudioRow, coinSupDrtStudioRow, coinSupGchStudioCol, posPorteStudioCol, posPorteStudioRow, false)
            PC2.setFlag(SpriteFlag.Invisible, false)
            PNJ1.setFlag(SpriteFlag.Invisible, false)
        }
    } else if (Math.floor(Joueur.x / 16) == posPorteStudioCol - 1 && Math.floor(Joueur.y / 16) == posPorteStudioRow) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creeTuileToit(coinSupDrtStudioCol, coinInfDrtSudioRow, coinSupDrtStudioRow, coinSupGchStudioCol)
            PC2.setFlag(SpriteFlag.Invisible, true)
            PNJ1.setFlag(SpriteFlag.Invisible, true)
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
    if (Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 56 || Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 58) {
        game.splash("Le Studio")
    }
    if (Math.floor(Joueur.x / 16) == 39 && Math.floor(Joueur.y / 16) == 56 || Math.floor(Joueur.x / 16) == 39 && Math.floor(Joueur.y / 16) == 58) {
        game.splash("L'Atelier")
    }
    if (Math.floor(Joueur.x / 16) == 42 && Math.floor(Joueur.y / 16) == 29 || Math.floor(Joueur.x / 16) == 42 && Math.floor(Joueur.y / 16) == 31) {
        game.splash("La Maison")
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
                info.changeScoreBy(10)
                game.showLongText("bonjour mario!", DialogLayout.Bottom)
                game.showLongText("Tu doit trouver le Mot de Passe du PC!", DialogLayout.Bottom)
                if (numQuete == 0) {
                    debutQuete()
                }
            } else {
                info.changeScoreBy(100)
                game.showLongText("Mario!!!!", DialogLayout.Bottom)
                game.showLongText("On est pas dans le bon jeu!!!!!", DialogLayout.Bottom)
            }
        }
    }
    if (q1MDP && isCursorVisible == 1) {
        if (curseur2.overlapsWith(q1MDP)) {
            info.changeScoreBy(10)
            game.splash("le MDP est: ", mdpPC)
            curseur2.setFlag(SpriteFlag.Invisible, true)
            isCursorVisible = 0
        }
    }
    logInPC()
})
function creeTuileToit (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number) {
    for (let X223 = 0; X223 <= coinSupDrtCol; X223++) {
        for (let Y223 = 0; Y223 <= coinInfDrtRow; Y223++) {
            if (X223 < coinSupGchCol + Math.floor((coinSupDrtCol - coinSupGchCol) / 2) && Y223 >= coinSupDrtRow && X223 >= coinSupGchCol) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`tuile3`)
            }
            if (X223 == coinSupGchCol + Math.floor((coinSupDrtCol - coinSupGchCol) / 2) && Y223 >= coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`tileToitCtr1`)
            }
            if (X223 == coinSupGchCol + Math.ceil((coinSupDrtCol - coinSupGchCol) / 2) && Y223 >= coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`tileToitCtr2`)
            }
            if (X223 > coinSupGchCol + Math.ceil((coinSupDrtCol - coinSupGchCol) / 2) && Y223 >= coinSupDrtRow) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`tuile2`)
            }
        }
    }
}
let logOutIcon: Sprite = null
let curseur3: Sprite = null
let tempQ1MDP: Sprite = null
let q1MDP: Sprite = null
let posEscalierStudio: number[][] = []
let txtQueteL2: TextSprite = null
let txtQueteL1: TextSprite = null
let numQuete = 0
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
let PNJ1: Sprite = null
let Joueur: Sprite = null
let PC2: Sprite = null
let isPCOn = 0
let isCursorVisible = 0
let curseur2: Sprite = null
let mdpPC = ""
let rdcHtBs = 0
let rdcDrtGch = 0
let songAtelier = music.createSong(assets.song`Atelier`)
let songStudio = music.createSong(assets.song`Studio`)
let songJardin = music.createSong(assets.song`Jardin`)
let songMaison = music.createSong(assets.song`Maison`)
let mySprite = sprites.create(assets.image`croix`, SpriteKind.Player)
let debug = 0
let rdcLargeur = 52
let rdcHauteur = 62
rdcDrtGch = rdcLargeur / 2
rdcHtBs = rdcLargeur / 2
info.setScore(0)
mdpPC = "P"
curseur2 = sprites.create(assets.image`spriteCurseur`, SpriteKind.Curseur)
isCursorVisible = 0
isPCOn = 0
tiles.setCurrentTilemap(tilemap`niveau0`)
PC2 = sprites.create(assets.image`SpritePc`, SpriteKind.PC)
Joueur = sprites.create(assets.image`Mario`, SpriteKind.Player)
PNJ1 = sprites.create(assets.image`Luigi`, SpriteKind.PNJ)
controller.moveSprite(Joueur, 100, 100)
scene.cameraFollowSprite(Joueur)
Joueur.setFlag(SpriteFlag.ShowPhysics, true)
tiles.placeOnTile(PC2, tiles.getTileLocation(1, 41))
tiles.placeOnTile(Joueur, tiles.getTileLocation(11, 55))
tiles.placeOnTile(PNJ1, tiles.getTileLocation(5, 55))
coinSupGchStudioCol = 0
coinSupDrtStudioCol = 9
coinSupDrtStudioRow = 37
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
curseur2.left = scene.cameraProperty(CameraProperty.Left) + 0
curseur2.top = scene.cameraProperty(CameraProperty.Top) + 28
curseur2.z = 0
curseur2.setFlag(SpriteFlag.Invisible, true)
numQuete = 0
txtQueteL1 = textsprite.create("", 1, 15)
txtQueteL2 = textsprite.create("", 1, 15)
txtQueteL1.left = 0
txtQueteL1.top = 0
txtQueteL1.setFlag(SpriteFlag.RelativeToCamera, true)
txtQueteL2.left = 0
txtQueteL2.top = 8
txtQueteL1.setFlag(SpriteFlag.RelativeToCamera, true)
txtQueteL2.setFlag(SpriteFlag.RelativeToCamera, true)
posEscalierStudio = [[7 * 16 + 8, 70 * 16 + 8], [61 * 16 + 8, 61 * 16 + 8]]
let test2 = 0
forever(function () {
    if (estDansStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (Joueur.left <= posEscalierStudio[0][0] && Joueur.left >= posEscalierStudio[0][0] - 8 && Joueur.y == posEscalierStudio[1][0]) {
            Joueur.setPosition(posEscalierStudio[0][1], posEscalierStudio[1][1])
        }
        if (Joueur.left >= posEscalierStudio[0][1] && Joueur.y == posEscalierStudio[1][1]) {
            Joueur.setPosition(posEscalierStudio[0][0] + 16, posEscalierStudio[1][0])
        }
    }
})
game.onUpdate(function () {
	
})
