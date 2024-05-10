namespace SpriteKind {
    export const PNJ = SpriteKind.create()
    export const PC = SpriteKind.create()
    export const QtObjet = SpriteKind.create()
    export const Curseur = SpriteKind.create()
    export const Icon = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.QtObjet, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    q1MDP.setFlag(SpriteFlag.Invisible, false)
tempQ1MDP.setPosition(1 * 16, 244 * 16)
updateQuete(numQuete2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tuileNoir`, function (sprite4, location3) {
    if (estEtageStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (Math.ceil(sprite4.y / 16) == location3.row) {
            tiles.placeOnTile(sprite4, tiles.getTileLocation(Math.floor(sprite4.x / 16), Math.floor(sprite4.y / 16) - 1))
        }
    } else if (estDansAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite4.x / 16) == location3.column) {
            tiles.placeOnTile(sprite4, tiles.getTileLocation(Math.floor(sprite4.x / 16) - 1, Math.floor(sprite4.y / 16)))
        }
    }
})
function estDansAtelier (coinSupDrtCol3: number, coinSupDrtRow3: number, coinInfDrtRow3: number, coinSupGchCol3: number) {
    if (estRDCAtelier(coinSupDrtCol3, coinSupDrtRow3, coinInfDrtRow3, coinSupGchCol3) || estEtageAtelier(coinSupDrtCol3, coinSupDrtRow3, coinInfDrtRow3, coinSupGchCol3)) {
        return true
    } else {
        return false
    }
}
function creerTuilePorte (coinSupDrtCol4: number, coinInfDrtRow4: number, posPorteCol: number, posPorteRow: number) {
    let Y2: number;
while (X2 <= coinSupDrtCol4) {
        Y2 = 0
        while (Y2 <= coinInfDrtRow4) {
            if (X2 == posPorteCol && Y2 == posPorteRow) {
                if (X2 == coinSupDrtCol4) {
                    tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tilePorteGch`)
                } else {
                    tiles.setTileAt(tiles.getTileLocation(X2, Y2), assets.tile`tilePorteDrt`)
                }
            }
            Y2 += 1
        }
        X2 += 1
    }
}
function stopMove () {
    controller.moveSprite(Joueur, 0, 0)
}
function creetuileEscalier (coinSupDrtCol5: number, coinInfDrtRow5: number, coinSupDrtRow4: number, coinSupGchCol4: number, Maison: boolean) {
    if (coinSupGchCol4 <= rdcGchDrt && coinSupDrtRow4 >= rdcHtBs) {
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol5 - 1, coinInfDrtRow5 - 2), assets.tile`tileStair0`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol5 - 1, coinInfDrtRow5 - 1), assets.tile`myTile7`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol5 - 2, coinInfDrtRow5 - 1), assets.tile`tileStair2`)
    } else if (coinSupDrtCol5 > rdcGchDrt && !(Maison)) {
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol5 - 1, coinInfDrtRow5 - 3), assets.tile`tileStair0`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol5 - 1, coinInfDrtRow5 - 2), assets.tile`tileStair0`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol5 - 1, coinInfDrtRow5 - 1), assets.tile`myTile7`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol5 - 2, coinInfDrtRow5 - 1), assets.tile`tileStair2`)
    }
}
function estRDCAtelier (coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (Joueur.x < coinSupDrtCol * 16 && Joueur.x > coinSupGchCol * 16 && Joueur.y > coinSupDrtRow * 16) {
        return true
    } else {
        return false
    }
}
function creerTuileCoin (coinSupDrtCol6: number, coinInfDrtRow6: number, coinSupDrtRow5: number, coinSupGchCol5: number, Maison2: boolean) {
    let Y22: number;
while (X22 <= coinSupDrtCol6) {
        Y22 = 0
        while (Y22 <= coinInfDrtRow6) {
            if (Maison2) {
                if (X22 == coinSupGchCol5 && Y22 == coinSupDrtRow5) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile21`)
                }
                if (X22 == coinSupDrtCol6 && Y22 == coinSupDrtRow5) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile22`)
                }
                if (X22 == coinSupDrtCol6 && Y22 == coinInfDrtRow6) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile23`)
                }
                if (X22 == coinSupGchCol5 && Y22 == coinInfDrtRow6) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile9`)
                }
            }
            if (coinSupGchCol5 <= rdcGchDrt && coinSupDrtRow5 <= rdcHtBs) {
                if (X22 == coinSupGchCol5 && Y22 == coinSupDrtRow5) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile21`)
                }
                if (X22 == coinSupDrtCol6 && Y22 == coinSupDrtRow5) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile22`)
                }
                if (X22 == coinSupDrtCol6 && Y22 == coinInfDrtRow6) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile23`)
                }
                if (X22 == coinSupGchCol5 && Y22 == coinInfDrtRow6) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`myTile9`)
                }
            } else {
                if (X22 == coinSupGchCol5 && Y22 == coinSupDrtRow5) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinSupGch`)
                }
                if (X22 == coinSupDrtCol6 && Y22 == coinSupDrtRow5) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinSupDrt`)
                }
                if (X22 == coinSupDrtCol6 && Y22 == coinInfDrtRow6) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinInfDrt`)
                }
                if (X22 == coinSupGchCol5 && Y22 == coinInfDrtRow6) {
                    tiles.setTileAt(tiles.getTileLocation(X22, Y22), assets.tile`tileCoinInfGch`)
                }
            }
            Y22 += 1
        }
        X22 += 1
    }
    if (Maison2) {
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtPmaisonCol, coinSupDrtPmaisonRow), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow), assets.tile`myTile16`)
    }
}
function debutQuete () {
    if (numQuete2 == 0) {
        numQuete2 = 1
        txtQueteL1.setText("Retrouver le")
txtQueteL2.setText("Mot de Passe du PC!")
q1MDP = sprites.create(assets.image`spritePapier`, SpriteKind.QtObjet)
        q1MDP.setPosition(0, 0)
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
function creerIntBat (coinSupDrtCol7: number, coinInfDrtRow7: number, coinSupDrtRow6: number, coinSupGchCol6: number, posPorteCol2: number, posPorteRow2: number, Maison3: boolean) {
    creerTuileMur(coinSupDrtCol7, coinInfDrtRow7, coinSupDrtRow6, coinSupGchCol6, Maison3)
    creerTuileCoin(coinSupDrtCol7, coinInfDrtRow7, coinSupDrtRow6, coinSupGchCol6, Maison3)
    creerTuilePorte(coinSupDrtCol7, coinInfDrtRow7, posPorteCol2, posPorteRow2)
    creerTuileSol(coinSupDrtCol7, coinInfDrtRow7, coinSupDrtRow6, coinSupGchCol6, Maison3)
    creeMurInterieur(coinSupDrtCol7, coinInfDrtRow7, coinSupDrtRow6, coinSupGchCol6, Maison3)
    creetuileEscalier(coinSupDrtCol7, coinInfDrtRow7, coinSupDrtRow6, coinSupGchCol6, Maison3)
}
function updateQuete (numQuete: number) {
    if (numQuete == 1) {
        if (tempQ1MDP.tilemapLocation().column == 1 && tempQ1MDP.tilemapLocation().row == 244) {
            txtQueteL1.setText("Entrer dans l'ordinateur")
txtQueteL2.setText("")
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tileStair0`, function (sprite3, location2) {
    if (estRDCAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite3.x / 16) == Math.floor(posEscAtelier[0][0] / 16)) {
            tiles.placeOnTile(sprite3, tiles.getTileLocation(Math.floor(sprite3.x / 16) - 1, Math.floor(sprite3.y / 16)))
        }
        if (Math.ceil(sprite3.y / 16) == Math.floor(posEscAtelier[1][0] / 16)) {
            tiles.placeOnTile(sprite3, tiles.getTileLocation(Math.floor(sprite3.x / 16), Math.floor(sprite3.y / 16) - 1))
        }
    } else if (estEtageAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite3.x / 16) == Math.floor(posEscAtelier[0][1] / 16)) {
            tiles.placeOnTile(sprite3, tiles.getTileLocation(Math.floor(sprite3.x / 16) - 1, Math.floor(sprite3.y / 16)))
        }
    }
})
function creerTuileSol (coinSupDrtCol8: number, coinInfDrtRow8: number, coinSupDrtRow7: number, coinSupGchCol7: number, Maison4: boolean) {
    let Y23: number;
while (X23 <= coinSupDrtCol8) {
        Y23 = 0
        while (Y23 <= coinInfDrtRow8) {
            if (X23 >= coinSupGchCol7 + 1 && X23 <= coinSupDrtCol8 - 1 && (Y23 >= coinSupDrtRow7 + 1 && Y23 <= coinInfDrtRow8 - 1)) {
                tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileSol1`)
            }
            if (Maison4) {
                if (X23 > 30 && X23 < 34 && (Y23 > 24 && Y23 < 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile18`)
                }
                if (X23 == coinSupGchCol7 && (Y23 >= coinSupDrtPmaisonRow + 1 && Y23 <= coinInfDrtPmaisonRow - 1)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileSol1`)
                }
            }
            Y23 += 1
        }
        X23 += 1
    }
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
function estDansStudio (coinSupDrtCol9: number, coinSupDrtRow8: number, coinInfDrtRow9: number, coinSupGchCol8: number) {
    if (estRDCStudio(coinSupDrtCol9, coinSupDrtRow8, coinInfDrtRow9, coinSupGchCol8) || estEtageStudio(coinSupDrtCol9, coinSupDrtRow8, coinInfDrtRow9, coinSupGchCol8)) {
        return true
    } else {
        return false
    }
}
function creerTuileMur (coinSupDrtCol10: number, coinInfDrtRow10: number, coinSupDrtRow9: number, coinSupGchCol9: number, Maison5: boolean) {
    let Y24: number;
while (X24 <= coinSupDrtCol10) {
        Y24 = 0
        while (Y24 <= coinInfDrtRow10) {
            if (Maison5) {
                if (Y24 == coinSupDrtRow9 && X24 >= coinSupGchCol9) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                }
                if (Y24 == coinInfDrtRow10 && X24 >= coinSupGchCol9) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                }
                if (X24 == coinSupGchCol9 && (Y24 >= coinSupDrtRow9 && Y24 <= coinInfDrtRow10)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                }
                if (X24 == coinSupDrtCol10 && (Y24 >= coinSupDrtRow9 && Y24 <= coinInfDrtRow10)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                }
                if ((X24 == 26 || X24 == 30) && Y24 == coinSupDrtRow9) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile14`)
                }
                if (X24 == 39 && (Y24 == 24 || Y24 == 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile16`)
                }
                if (X24 == 26 && Y24 == coinInfDrtRow10) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile13`)
                }
            }
            if (coinSupGchCol9 <= rdcGchDrt && coinSupDrtRow9 <= rdcHtBs) {
                if (Y24 == coinSupDrtRow9 && X24 >= coinSupGchCol9) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                }
                if (Y24 == coinInfDrtRow10 && X24 >= coinSupGchCol9) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur6`)
                }
                if (X24 == coinSupGchCol9 && (Y24 >= coinSupDrtRow9 && Y24 <= coinInfDrtRow10)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                }
                if (X24 == coinSupDrtCol10 && (Y24 >= coinSupDrtRow9 && Y24 <= coinInfDrtRow10)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                }
            } else {
                if (Y24 == coinSupDrtRow9 && X24 >= coinSupGchCol9) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur2`)
                }
                if (Y24 == coinInfDrtRow10 && X24 >= coinSupGchCol9) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur4`)
                }
                if (X24 == coinSupGchCol9 && (Y24 >= coinSupDrtRow9 && Y24 <= coinInfDrtRow10)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur1`)
                }
                if (X24 == coinSupDrtCol10 && (Y24 >= coinSupDrtRow9 && Y24 <= coinInfDrtRow10)) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur0`)
                }
            }
            Y24 += 1
        }
        X24 += 1
    }
}
function estEtageAtelier (coinSupDrtCol2: number, coinSupDrtRow2: number, coinInfDrtRow2: number, coinSupGchCol2: number) {
    if (Joueur.x < (coinSupDrtCol2 + 40) * 16 && Joueur.x > (coinSupGchCol2 + 40) * 16 && Joueur.y > coinSupDrtRow2 * 16) {
        return true
    } else {
        return false
    }
}
function estRDCStudio (coinSupDrtCol11: number, coinSupDrtRow10: number, coinInfDrtRow11: number, coinSupGchCol10: number) {
    if (Joueur.x < coinSupDrtCol11 * 16 && Joueur.x > coinSupGchCol10 * 16 && Joueur.y > coinSupDrtRow10 * 16) {
        return true
    } else {
        return false
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tileStair2`, function (sprite2, location) {
    if (estRDCStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (!(Math.floor(sprite2.x / 16) == Math.ceil(posEscalierStudio[0][0] / 16) || Math.floor(sprite2.x / 16) == Math.floor(posEscalierStudio[0][0] / 16))) {
            tiles.placeOnTile(sprite2, tiles.getTileLocation(Math.floor(sprite2.x / 16) - 1, Math.floor(sprite2.y / 16)))
        }
        if (Math.ceil(sprite2.y / 16) == Math.floor(posEscalierStudio[1][0] / 16)) {
            tiles.placeOnTile(sprite2, tiles.getTileLocation(Math.floor(sprite2.x / 16), Math.floor(sprite2.y / 16) - 1))
        }
    } else if (estEtageStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (Math.ceil(sprite2.y / 16) == Math.floor(posEscalierStudio[1][1] / 16)) {
            tiles.placeOnTile(sprite2, tiles.getTileLocation(Math.floor(sprite2.x / 16), Math.floor(sprite2.y / 16) - 1))
        }
    }
    if (estRDCAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite2.y / 16) == Math.floor(posEscalierStudio[1][0] / 16)) {
            tiles.placeOnTile(sprite2, tiles.getTileLocation(Math.floor(sprite2.x / 16), Math.floor(sprite2.y / 16) - 1))
        }
    }
})
function creeMurInterieur (coinSupDrtCol12: number, coinInfDrtRow12: number, coinSupDrtRow11: number, coinSupGchCol11: number, Maison6: boolean) {
    let Y232: number;
while (X232 <= coinSupDrtCol12) {
        Y232 = 0
        while (Y232 <= coinInfDrtRow12) {
            if (Maison6) {
                if (X232 == 26 && (Y232 > coinSupDrtRow11 && Y232 < coinInfDrtRow12)) {
                    if (Y232 == 14 || Y232 == 25) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur10`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (Y232 == 17 || Y232 == 28) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur9`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (!(Y232 == 15 || Y232 == 16 || (Y232 == 26 || Y232 == 27))) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur3`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    }
                }
                if (X232 == 30 && (Y232 > coinSupDrtRow11 && Y232 < 28)) {
                    if (Y232 == 24) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`myTile27`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (Y232 == 14) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur10`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (Y232 == 17) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur9`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (Y232 == 25) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur14`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (Y232 == 27) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur15`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (!(Y232 == 15 || Y232 == 16 || Y232 == 26)) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur3`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    }
                }
                if (Y232 == 24 && (X232 > 30 && X232 < coinSupDrtCol12)) {
                    if (X232 == 34) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`myTile26`)
                    } else if (X232 > 30 && X232 < 34) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur11`)
                    } else {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur6`)
                    }
                    tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                }
                if (Y232 == 28 && (X232 > 30 && X232 < coinSupDrtCol12)) {
                    if (X232 == 34) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`myTile28`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (X232 == 35) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur7`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (X232 == 38) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur8`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (!(X232 == 36 || X232 == 37)) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur13`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    }
                }
                if (X232 == 30 && Y232 == 28) {
                    tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`myTile19`)
                    tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                }
                if (X232 == 34 && (Y232 > 24 && Y232 < 27)) {
                    tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur12`)
                    tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                }
                if (X232 == 34 && Y232 == 27) {
                    tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur16`)
                    tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                }
                if (X232 == coinSupGchCol11 && (Y232 > 22 && Y232 < coinInfDrtRow12 - 1)) {
                    if (Y232 == 23) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur10`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (Y232 == 26) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur9`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    } else if (!(Y232 == 24 || Y232 == 25)) {
                        tiles.setTileAt(tiles.getTileLocation(X232, Y232), assets.tile`tileMur3`)
                        tiles.setWallAt(tiles.getTileLocation(X232, Y232), true)
                    }
                    Y232 += 1
                }
                X232 += 1
            }
        }
        function appuisBtnAsc() {
    if (Joueur.tileKindAt(TileDirection.Right, assets.tile`
        tileMur16
    `)) {
        stopMove()
        story.showPlayerChoices("1er Etage", "2e Etage")
        if (story.checkLastAnswer("1er Etage")) {
            music.play(music.createSong(assets.song`
                    dansAsc
                `), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 1 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x + 54 * 16, Joueur.y - 50 * 16)
            music.stopAllSounds()
        } else {
            music.play(music.createSong(assets.song`
                    dansAsc
                `), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 1 * 16, Joueur.y + 49 * 16)
            pause(6000)
            Joueur.setPosition(Joueur.x + 84 * 16, Joueur.y - 50 * 16)
            music.stopAllSounds()
        }
        
        music.play(music.createSong(assets.song`
                AscArrivé
            `), music.PlaybackMode.InBackground)
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`
        tileMur17
    `)) {
        stopMove()
        story.showPlayerChoices("RdC", "2e Etage")
        if (story.checkLastAnswer("RdC")) {
            music.play(music.createSong(assets.song`
                    dansAsc
                `), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 55 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x, Joueur.y - 50 * 16)
            music.stopAllSounds()
        } else {
            music.play(music.createSong(assets.song`
                    dansAsc
                `), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 55 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x + 84 * 16, Joueur.y - 50 * 16)
            music.stopAllSounds()
        }
        
        music.play(music.createSong(assets.song`
                AscArrivé
            `), music.PlaybackMode.InBackground)
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`
        tileMur18
    `)) {
        stopMove()
        story.showPlayerChoices("RdC", "1er Etage")
        if (story.checkLastAnswer("RdC")) {
            music.play(music.createSong(assets.song`
                    dansAsc
                `), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 85 * 16, Joueur.y + 49 * 16)
            pause(6000)
            Joueur.setPosition(Joueur.x, Joueur.y - 50 * 16)
            music.stopAllSounds()
        } else {
            music.play(music.createSong(assets.song`
                    dansAsc
                `), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 85 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x + 54 * 16, Joueur.y - 50 * 16)
            music.stopAllSounds()
        }
        
        music.play(music.createSong(assets.song`
                AscArrivé
            `), music.PlaybackMode.InBackground)
    }
    
    startMove()
}
function startMove() {
    controller.moveSprite(Joueur, 100, 100)
}
spriteutils.addEventHandler(spriteutils.UpdatePriorityModifier.After, spriteutils.UpdatePriority.Camera, function on_add_handler_update_priority_modifier_after_camera() {
    curseur2.left = scene.cameraProperty(CameraProperty.Left) + 0
    curseur2.top = scene.cameraProperty(CameraProperty.Top) + 28
    if (q1MDP) {
        q1MDP.left = scene.cameraProperty(CameraProperty.Left) + 2
        q1MDP.top = scene.cameraProperty(CameraProperty.Top) + 30
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Icon, function on_on_overlap2(sprite5: Sprite, otherSprite2: Sprite) {
    
    if (controller.A.isPressed()) {
        isPCOn = 0
        sprites.destroy(logOutIcon)
        sprites.destroy(curseur3)
        scene.cameraFollowSprite(Joueur)
        controller.moveSprite(curseur3, 0, 0)
        controller.moveSprite(Joueur)
        game.splash("Quete ", "" + ("" + numQuete2) + ": Terminée")
        info.changeScoreBy(100)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PNJ, function on_on_overlap3(sprite6: Sprite, otherSprite3: Sprite) {
    tiles.placeOnTile(sprite6, tiles.getTileLocation(Math.floor(sprite6.x / 16), Math.floor(sprite6.y / 16)))
})
function estEtageStudio(coinSupDrtCol13: number, coinSupDrtRow12: number, coinInfDrtRow13: number, coinSupGchCol12: number): boolean {
    if (Joueur.x < (coinSupDrtCol13 + 63) * 16 && Joueur.x > (coinSupGchCol12 + 63) * 16 && Joueur.y > coinSupDrtRow12 * 16) {
        return true
    } else {
        return false
    }
    
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
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
                if (numQuete2 == 0) {
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
    appuisBtnAsc()
})
function creeTuileToit(coinSupDrtCol14: number, coinInfDrtRow14: number, coinSupDrtRow13: number, coinSupGchCol13: number) {
    let Y223: number;
    let X223 = 0
    while (X223 <= coinSupDrtCol14) {
        Y223 = 0
        while (Y223 <= coinInfDrtRow14) {
            if (X223 < coinSupGchCol13 + Math.floor((coinSupDrtCol14 - coinSupGchCol13) / 2) && Y223 >= coinSupDrtRow13 && X223 >= coinSupGchCol13) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`
                        tuile3
                    `)
            }
            
            if (X223 == coinSupGchCol13 + Math.floor((coinSupDrtCol14 - coinSupGchCol13) / 2) && Y223 >= coinSupDrtRow13) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`
                        tileToitCtr1
                    `)
            }
            
            if (X223 == coinSupGchCol13 + Math.ceil((coinSupDrtCol14 - coinSupGchCol13) / 2) && Y223 >= coinSupDrtRow13) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`
                        tileToitCtr2
                    `)
            }
            
            if (X223 > coinSupGchCol13 + Math.ceil((coinSupDrtCol14 - coinSupGchCol13) / 2) && Y223 >= coinSupDrtRow13) {
                tiles.setTileAt(tiles.getTileLocation(X223, Y223), assets.tile`
                        tuile2
                    `)
            }
            
            Y223 += 1
        }
        X223 += 1
    }
}
songAtelier = music.createSong(assets.song`Atelier`)
        songStudio = music.createSong(assets.song`Studio`)
        songJardin = music.createSong(assets.song`Jardin`)
        songMaison = music.createSong(assets.song`Maison`)
        mySprite = sprites.create(assets.image`croix`, SpriteKind.Player)
        rdcLargeur = 52
        rdcHauteur = 62
        rdcGchDrt = rdcLargeur / 2
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
        numQuete2 = 0
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
        posEscAtelier = [[51 * 16 + 8, 91 * 16 + 8], [59 * 16 + 8, 59 * 16 + 8]]
        forever(function on_forever() {
    if (estDansStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (Joueur.left <= posEscalierStudio[0][0] && Joueur.left >= posEscalierStudio[0][0] - 8 && Joueur.y == posEscalierStudio[1][0]) {
            Joueur.setPosition(posEscalierStudio[0][1], posEscalierStudio[1][1])
        }
        
        if (Joueur.left >= posEscalierStudio[0][1] && Joueur.y == posEscalierStudio[1][1]) {
            Joueur.setPosition(posEscalierStudio[0][0] + 16, posEscalierStudio[1][0])
        }
        
    }
    
    if (estDansAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Joueur.top <= posEscAtelier[1][0] && Joueur.top >= posEscAtelier[1][0] - 8 && Math.ceil(Joueur.x / 16) == Math.ceil(posEscAtelier[0][0] / 16)) {
            Joueur.setPosition(posEscAtelier[0][1], posEscAtelier[1][1])
        }
        
        if (Joueur.top >= posEscAtelier[1][1] && Math.ceil(Joueur.x / 16) == Math.ceil(posEscAtelier[0][1] / 16)) {
            Joueur.setPosition(posEscAtelier[0][0], posEscAtelier[1][0] + 16)
        }
        
    }
    
    if (Math.ceil(Joueur.x / 16) == 30 && Math.ceil(Joueur.y / 16) == 26) {
        Joueur.setPosition(30 * 16 + 8, 26 * 16 + 8)
    }
    
    if (Math.ceil(Joueur.x / 16) == 84 && Math.ceil(Joueur.y / 16) == 26) {
        Joueur.setPosition(84 * 16 + 8, 26 * 16 + 8)
    }

    if (Math.ceil(Joueur.x / 16) == 114 && Math.ceil(Joueur.y / 16) == 26) {
        Joueur.setPosition(114 * 16 + 8, 26 * 16 + 8)
    }
    
})
    }
}
let rdcHauteur = 0
let rdcLargeur = 0
let mySprite: Sprite = null
let songMaison: music.Playable = null
let songJardin: music.Playable = null
let songStudio: music.Playable = null
let songAtelier: music.Playable = null
let X232 = 0
let X24 = 0
let X23 = 0
let X22 = 0
let rdcHtBs = 0
let rdcGchDrt = 0
let X2 = 0
let test2 = 0
let debug = 0
let mdpPC = ""
let curseur2 : Sprite = null
let isCursorVisible = 0
let isPCOn = 0
let PC2 : Sprite = null
let Joueur : Sprite = null
let PNJ1 : Sprite = null
let coinSupGchStudioCol = 0
let coinSupDrtStudioCol = 0
let coinSupDrtStudioRow = 0
let coinInfDrtSudioRow = 0
let posPorteStudioCol = 0
let posPorteStudioRow = 0
let coinSupGchAtelierCol = 0
let coinSupDrtAtelierCol = 0
let coinSupDrtAtelierRow = 0
let coinInfDrtAtelierRow = 0
let posPorteAtelierCol = 0
let posPorteAtelierRow = 0
let coinSupGchMaisonCol = 0
let coinSupDrtMaisonCol = 0
let coinSupDrtMaisonRow = 0
let coinInfDrtMaisonRow = 0
let posPorteMaisonCol = 0
let posPorteMaisonRow = 0
let coinSupGchPmaisonCol = 0
let coinSupDrtPmaisonCol = 0
let coinSupDrtPmaisonRow = 0
let coinInfDrtPmaisonRow = 0
let numQuete2 = 0
let txtQueteL1 : TextSprite = null
let txtQueteL2 : TextSprite = null
let posEscAtelier : number[][] = []
let posEscalierStudio : number[][] = []
let q1MDP : Sprite = null
let tempQ1MDP : Sprite = null
let curseur3 : Sprite = null
let logOutIcon : Sprite = null
