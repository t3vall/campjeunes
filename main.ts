namespace SpriteKind {
    export const PNJ = SpriteKind.create()
    export const PC = SpriteKind.create()
    export const QtObjet = SpriteKind.create()
    export const Curseur = SpriteKind.create()
    export const Icon = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Machine = SpriteKind.create()
}
//accéder à l'inventaire en pressant B
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isCursorVisible == 0) {
        curseur2.setFlag(SpriteFlag.Invisible, false)
        isCursorVisible = 1
    } else {
        curseur2.setFlag(SpriteFlag.Invisible, true)
        isCursorVisible = 0
    }
})
//prise des objet quand on passe dessus
sprites.onOverlap(SpriteKind.Player, SpriteKind.QtObjet, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    nbExp += 10
    q1MDP.setFlag(SpriteFlag.Invisible, false)
    tempQ1MDP.setPosition(1 * 16, 244 * 16)
    updateQuete(numQuete)
})
function peutInterragir() {
    boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) + 20)
    if (((Math.floor(Joueur.x / 16)) == posPorteStudioCol + 1) && ((Math.floor(Joueur.y / 16)) == posPorteStudioRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorte2StudioCol + 1) && ((Math.floor(Joueur.y / 16)) == posPorte2StudioRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorteAtelierCol - 1) && ((Math.floor(Joueur.y / 16)) == posPorteAtelierRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorte2AtelierCol - 1) && ((Math.floor(Joueur.y / 16)) == posPorte2AtelierRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorteMaisonCol + 1) && ((Math.floor(Joueur.y / 16)) == posPorteMaisonRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorteStudioCol - 1) && ((Math.floor(Joueur.y / 16)) == posPorteStudioRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorte2StudioCol - 1) && ((Math.floor(Joueur.y / 16)) == posPorte2StudioRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorteAtelierCol + 1) && ((Math.floor(Joueur.y / 16)) == posPorteAtelierRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorte2AtelierCol + 1) && ((Math.floor(Joueur.y / 16)) == posPorte2AtelierRow) ||
        ((Math.floor(Joueur.x / 16)) == posPorteMaisonCol - 1) && ((Math.floor(Joueur.y / 16)) == posPorteMaisonRow)) {
        boutonA.setFlag(SpriteFlag.Invisible, false)
    } else if (Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 58 ||
            Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 48 ||
            Math.floor(Joueur.x / 16) == 40 && Math.floor(Joueur.y / 16) == 46 ||
            Math.floor(Joueur.x / 16) == 42 && Math.floor(Joueur.y / 16) == 31){
        boutonA.setFlag(SpriteFlag.Invisible, false)
        //ci-dessus fait apparaître l'image du bouton A en dessous du joueur pour les panneaux a l'exterieur du Studio
    } else if (Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 56 ||
            Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 46 ||
            Math.floor(Joueur.x / 16) == 40 && Math.floor(Joueur.y / 16) == 44 ||
            Math.floor(Joueur.x / 16) == 42 && Math.floor(Joueur.y / 16) == 29){
        boutonA.setFlag(SpriteFlag.Invisible, false)
        boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
        //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour les panneaux a l'exterieur du Studio
    } else if (Math.floor(Joueur.x / 16) == 34 - 1 && Math.floor(Joueur.y / 16) == 27 ||
            Math.floor(Joueur.x / 16) == 88 - 1 && Math.floor(Joueur.y / 16) == 27 ||
            Math.floor(Joueur.x / 16) == 118 - 1 && Math.floor(Joueur.y / 16) == 27){
        boutonA.setFlag(SpriteFlag.Invisible, false)
        boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
        //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour l'ascenseur
    } else {
        //bouton d'interaction pour les PNJ
        if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ9.x / 16) ||
            Math.ceil(Joueur.x / 16) == Math.floor(PNJ9.x / 16)) &&
            Math.floor(Joueur.y / 16) == Math.floor(PNJ9.y / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if ( Math.floor(Joueur.y / 16) == Math.ceil(PNJ9.y / 16) &&
                    Math.floor(Joueur.x / 16) == Math.floor(PNJ9.x / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if ( Math.ceil(Joueur.y / 16) == Math.floor(PNJ9.y / 16) &&
                    Math.floor(Joueur.x / 16) == Math.floor(PNJ9.x / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ1.x / 16) ||
                    Math.ceil(Joueur.x / 16) == Math.floor(PNJ1.x / 16)) &&
                    Math.floor(Joueur.y / 16) == Math.floor(PNJ1.y / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if ( Math.floor(Joueur.y / 16) == Math.ceil(PNJ1.y / 16) &&
                    Math.floor(Joueur.x / 16) == Math.floor(PNJ1.x / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if ( Math.ceil(Joueur.y / 16) == Math.floor(PNJ1.y / 16) &&
                    Math.floor(Joueur.x / 16) == Math.floor(PNJ1.x / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ2.x / 16) ||
                    Math.ceil(Joueur.x / 16) == Math.floor(PNJ2.x / 16)) &&
                    Math.floor(Joueur.y / 16) == Math.floor(PNJ2.y / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if ( Math.floor(Joueur.y / 16) == Math.ceil(PNJ2.y / 16) &&
                    Math.floor(Joueur.x / 16) == Math.floor(PNJ2.x / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if ( Math.ceil(Joueur.y / 16) == Math.floor(PNJ2.y / 16) &&
                    Math.floor(Joueur.x / 16) == Math.floor(PNJ2.x / 16)) {
                    boutonA.setFlag(SpriteFlag.Invisible, false)
                    boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ3.x / 16) ||
            Math.ceil(Joueur.x / 16) == Math.floor(PNJ3.x / 16)) &&
            Math.floor(Joueur.y / 16) == Math.floor(PNJ3.y / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.floor(Joueur.y / 16) == Math.ceil(PNJ3.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ3.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.ceil(Joueur.y / 16) == Math.floor(PNJ3.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ3.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ4.x / 16) ||
            Math.ceil(Joueur.x / 16) == Math.floor(PNJ4.x / 16)) &&
            Math.floor(Joueur.y / 16) == Math.floor(PNJ4.y / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.floor(Joueur.y / 16) == Math.ceil(PNJ4.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ4.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.ceil(Joueur.y / 16) == Math.floor(PNJ4.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ4.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ5.x / 16) ||
            Math.ceil(Joueur.x / 16) == Math.floor(PNJ5.x / 16)) &&
            Math.floor(Joueur.y / 16) == Math.floor(PNJ5.y / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.floor(Joueur.y / 16) == Math.ceil(PNJ5.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ5.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.ceil(Joueur.y / 16) == Math.floor(PNJ5.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ5.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ6.x / 16) ||
            Math.ceil(Joueur.x / 16) == Math.floor(PNJ6.x / 16)) &&
            Math.floor(Joueur.y / 16) == Math.floor(PNJ6.y / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.floor(Joueur.y / 16) == Math.ceil(PNJ6.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ6.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.ceil(Joueur.y / 16) == Math.floor(PNJ6.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ6.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ7.x / 16) ||
            Math.ceil(Joueur.x / 16) == Math.floor(PNJ7.x / 16)) &&
            Math.floor(Joueur.y / 16) == Math.floor(PNJ7.y / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.floor(Joueur.y / 16) == Math.ceil(PNJ7.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ7.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.ceil(Joueur.y / 16) == Math.floor(PNJ7.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ7.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else if ((Math.floor(Joueur.x / 16) == Math.ceil(PNJ8.x / 16) ||
            Math.ceil(Joueur.x / 16) == Math.floor(PNJ8.x / 16)) &&
            Math.floor(Joueur.y / 16) == Math.floor(PNJ8.y / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.floor(Joueur.y / 16) == Math.ceil(PNJ8.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ8.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            //ci-dessus fait apparaître l'image du bouton A au dessous du joueur pour un PNJ
        } else if (Math.ceil(Joueur.y / 16) == Math.floor(PNJ8.y / 16) &&
            Math.floor(Joueur.x / 16) == Math.floor(PNJ8.x / 16)) {
            boutonA.setFlag(SpriteFlag.Invisible, false)
            boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) - 20)
                    //ci-dessus fait apparaître l'image du bouton A au dessus du joueur pour un PNJ
        } else {
            boutonA.setFlag(SpriteFlag.Invisible, true)
        }
    }
}
function estRDCAtelier(coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (Joueur.x < coinSupDrtCol * 16 && Joueur.x > coinSupGchCol * 16 && Joueur.y > coinSupDrtRow * 16) {
        return true
    } else {
        return false
    }
}
function estEtageAtelier(coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (Joueur.x < (coinSupDrtCol + 40) * 16 && Joueur.x > (coinSupGchCol + 40) * 16 && Joueur.y > coinSupDrtRow * 16) {
        return true
    } else {
        return false
    }
}
function estDansAtelier(coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (estRDCAtelier(coinSupDrtCol, coinSupDrtRow, coinInfDrtRow, coinSupGchCol) || estEtageAtelier(coinSupDrtCol, coinSupDrtRow, coinInfDrtRow, coinSupGchCol)) {
        return true
    } else {
        return false
    }
}
function creerTuilePorte (coinSupDrtCol: number, coinInfDrtRow: number, nbPorte: number, posPorte: number[][]) {
    if (posPorte[0][0] == coinSupDrtCol) {
        for(let i = 0; i <= nbPorte - 1; i++) {
            tiles.setTileAt(tiles.getTileLocation(posPorte[0][i], posPorte[1][i]), assets.tile`tilePorteGch`)
        }
    } else {
        for (let i = 0; i <= nbPorte - 1; i++) {
            tiles.setTileAt(tiles.getTileLocation(posPorte[0][i], posPorte[1][i]), assets.tile`tilePorteDrt`)
        }
    }
}
//fonctionnalité qui repousse le joueur pour respecter le sens logiqe des escalier
scene.onOverlapTile(SpriteKind.Player, assets.tile`tileStair2`, function (sprite, location) {
    if (estRDCStudio(coinSupDrtStudioCol, coinSupDrtStudioRow, coinInfDrtSudioRow, coinSupGchStudioCol)) {
        if (!(Math.floor(sprite.x / 16) == Math.ceil(posEscalierStudio[0][0] / 16) || Math.floor(sprite.x / 16) == Math.floor(posEscalierStudio[0][0] / 16))) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16) - 1, Math.floor(sprite.y / 16)))
        }
        if (Math.ceil(sprite.y / 16) == Math.floor(posEscalierStudio[1][0] / 16)) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16) - 1))
        }
    }
    if (estRDCAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite.y / 16) == Math.floor(posEscalierStudio[1][0] / 16)) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16) - 1))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tileStair0`, function (sprite, location) {
    if (estRDCAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite.x / 16) == Math.floor(posEscAtelier[0][0] / 16)) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16) - 1, Math.floor(sprite.y / 16)))
        }
        if (Math.ceil(sprite.y / 16) == Math.floor(posEscAtelier[1][0] / 16)) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16) - 1))
        }
    } else if (estEtageAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite.x / 16) == Math.floor(posEscAtelier[0][1] / 16)) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16) - 1, Math.floor(sprite.y / 16)))
        }
    }
})
function stopMove () {
    controller.moveSprite(Joueur, 0, 0)
}
function creerTuileEscalier (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    if (coinSupDrtCol > rdcGchDrt && !Maison) {
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol - 1, coinInfDrtRow - 3), assets.tile`tileStair0`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol - 1, coinInfDrtRow - 2), assets.tile`tileStair0`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol - 1, coinInfDrtRow - 1), assets.tile`myTile7`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtCol - 2, coinInfDrtRow - 1), assets.tile`tileStair2`)
    }
}
function creerTuileCoin (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X22 = 0; X22 <= coinSupDrtCol; X22++) {
        for (let Y22 = 0; Y22 <= coinInfDrtRow; Y22++) {
            if (Maison) {
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
            }//ci-dessous met les coin pour la partie gauche de la Maison
            if (coinSupGchCol <= rdcGchDrt && coinSupDrtRow <= rdcHtBs) {
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
                }//ci-dessus met les coin pour le Studio et l'Atelier
            }
        }
    }
    if (Maison) {
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtPmaisonCol, coinSupDrtPmaisonRow), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow), assets.tile`myTile16`)
    }
}
//penser a changer le texte de la Quete
function debutQuete () {
    if (numQuete == 0) {
        numQuete = 1
        txtQueteL1.setText("Visites les lieux")
        txtQueteL2.setText("et obtiens 900 en Score")
        // txtQueteL1.setText("Retrouver le")
        // txtQueteL2.setText("Mot de Passe du PC!")
        //q1MDP = sprites.create(assets.image`spritePapier`, SpriteKind.QtObjet)
        //tempQ1MDP = sprites.create(assets.image`spritePapier`, SpriteKind.QtObjet)
        //q1MDP.setPosition(0, 0)
        //q1MDP.setFlag(SpriteFlag.Invisible, true)
        //tempQ1MDP.setPosition(randint(12, 38) * 16, randint(37, 58) * 16)
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
function creerIntBat (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, nbPorte: number, posPorte: number[][], Maison: boolean) {
    creerTuileMur(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creerTuileCoin(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creerTuilePorte(coinSupDrtCol, coinInfDrtRow, nbPorte, posPorte)
    creerTuileSol(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creerMurInterieur(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
    creerTuileEscalier(coinSupDrtCol, coinInfDrtRow, coinSupDrtRow, coinSupGchCol, Maison)
}
//même principe que pour les escaliers mais pour les tuiles noires des etages des studio et atelier
scene.onOverlapTile(SpriteKind.Player, assets.tile`tuileNoir`, function (sprite, location) {
    if (estDansAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Math.ceil(sprite.x / 16) == location.column) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16) - 1, Math.floor(sprite.y / 16)))
        }
    }
})
function updateQuete (numQuete: number) {
    if (numQuete == 1) {
        // if (tempQ1MDP.tilemapLocation().column == 1 && tempQ1MDP.tilemapLocation().row == 244) {
        //     txtQueteL1.setText("Entrer dans l'ordinateur")
        //     txtQueteL2.setText("")
        // }
        if (nbExp == 900) {
            pause(35000)
            game.setGameOverMessage(true, "Mot à te donner")
            game.gameOver(true)
        }
    }
}
function creerTuileSol (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X23 = 0; X23 <= coinSupDrtCol; X23++) {
        for (let Y23 = 0; Y23 <= coinInfDrtRow; Y23++) {
            if (X23 >= coinSupGchCol + 1 && X23 <= coinSupDrtCol - 1 && (Y23 >= coinSupDrtRow + 1 && Y23 <= coinInfDrtRow - 1)) {
                tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileSol1`)
            }
            if (Maison) {
                if (X23 > 30 && X23 < 34 && (Y23 > 24 && Y23 < 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile18`)
                }
                if (X23 == coinSupGchCol && (Y23 >= coinSupDrtPmaisonRow + 1 && Y23 <= coinInfDrtPmaisonRow - 1)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileSol1`)
                }
                if (X23 == 19 && Y23 == 14) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 14) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeHBleuMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 21 && Y23 == 14) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 23 && Y23 == 14) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 24 && Y23 == 14) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeHBleuMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 25 && Y23 == 14) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 19 && Y23 == 18) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuHaut`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 19 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeVBleuMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 19 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuBas`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 18) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 21 && Y23 == 18) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeHBleuMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 22 && Y23 == 18) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeHBleuMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 23 && Y23 == 18) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 21 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`switch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 21 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMilVide`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 22 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`switch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 22 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMilVide`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 23 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 23 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 24 && Y23 == 18) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeJauneHaut`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 24 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeVJauneMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 24 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeJauneBas`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 26) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 27) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCMilGch3-1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 28) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCMilGch3-2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 21 && Y23 == 26) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 21 && (Y23 == 27 || Y23 == 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCMilDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 20 && Y23 == 29) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 21 && Y23 == 29) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 19 && Y23 == 27) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`chaiseSup`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 19 && Y23 == 28) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`chaise`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 19 && Y23 == 29) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`chaiseInf`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 32 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23,Y23), assets.tile`canapeBleuHaut`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 32 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeVBleuMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 32 && Y23 == 21) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuBas`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 33 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 34 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeHBleuMilieu`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 35 && Y23 == 19) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 33 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 33 && Y23 == 21) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 34 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`switch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 34 && Y23 == 21) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMilVide`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 35 && Y23 == 20) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 35 && Y23 == 21) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 36) && (Y23 == 14)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 33) && (Y23 == 16)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 33) && (Y23 == 14)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 36) && (Y23 == 16)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (((X23 >= 34) && (X23 <= 35)) && (Y23 == 14)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (((X23 >= 34) && (X23 <= 35)) && (Y23 == 16)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 33) && (Y23 == 15)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 36) && (Y23 == 15)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (((X23 >= 34) && (X23 <= 35)) && (Y23 == 15)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilCtr2`)
                }
            } else if (!Maison) {
                //La Cuisine
                if ((X23 == 9) && (Y23 == 30)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`cuisiniere`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 9) && (Y23 == 29)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`cuisiniere3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 10) && (Y23 == 30)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`cuisiniere2`)
                }
                if ((X23 == 9) && (((Y23 >= 24) && (Y23 <= 25)) || ((Y23 >= 27) && (Y23 <= 28)))) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`planTravail2_2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 9) && (Y23 == 26)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`evier`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 9) && (Y23 == 23)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`frigo3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 10) && (Y23 == 23)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`frigo4`)
                }
                if ((X23 == 10) && (Y23 == 24)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`frigo2`)
                }
                if ((X23 == 15) && (Y23 == 26)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 11) && (Y23 == 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 11) && (Y23 == 26)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 15) && (Y23 == 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (((X23 >= 12) && (X23 <= 14)) && (Y23 == 26)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (((X23 >= 12) && (X23 <= 14)) && (Y23 == 28)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 11) && (Y23 == 27)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 15) && (Y23 == 27)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (((X23 >= 12) && (X23 <= 14)) && (Y23 == 27)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilCtr2`)
                }
                //le Studio
                if (((X23 >= 1) && (X23 <= 8)) && (Y23 == 38)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`meubleA`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (((X23 >= 1) && (X23 <= 8)) && (Y23 == 39)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`meubleB`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), false)
                }
                if ((X23 == 1) && (Y23 == 41)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 41)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 41)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 42)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 42)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilCtr`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 42)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 43)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 43)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilCtr2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 43)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 44)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 44)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 44)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 49)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 49)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 49)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 50)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 50)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilCtr`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 50)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 51)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 51)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilCtr2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 51)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 52)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 52)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 52)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 54)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`enceinteGch2-1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 54)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`enceinteGch2-2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 55)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`enceinteGch2-3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 2) && (Y23 == 55)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`enceinteGch2-4`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 1) && (Y23 == 56)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`supportEnceinteGch1`)
                }
                if ((X23 == 2) && (Y23 == 56)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`supportEnceinteGch2`)
                }
                if ((X23 == 3) && (Y23 == 54)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableMixageSupGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 4) && (Y23 == 54)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableMixageSupMil1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 5) && (Y23 == 54)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableMixageSupMil2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 6) && (Y23 == 54)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableMixageSupDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 3) && (Y23 == 55)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableMixageInfGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 4 || X23 == 5) && (Y23 == 55)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableMixageInfMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 6) && (Y23 == 55)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableMixageInfDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                //l'Atelier
                if ((X23 == 47) && (Y23 == 58)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuGch2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 48) && (Y23 == 58)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`canapeBleuDrt2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 47 || X23 == 48) && (Y23 == 61)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 46) && (Y23 == 61)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupGch4`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 49) && (Y23 == 61)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupDrt4`)
                }
                if ((X23 == 44) && (Y23 == 56)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`meubleA`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 44) && (Y23 == 57)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`meubleB`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 44) && (Y23 == 52)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`planTravail2_3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 44) && (Y23 == 53)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`evier`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 44) && (Y23 == 54)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`planTravail2_2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 50) && (Y23 == 52)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt1`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 50) && (Y23 == 51)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupDrt3`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 50) && (Y23 == 53)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 49) && (Y23 == 52)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 49) && (Y23 == 51)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseSupGch4`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 44) && (Y23 == 38)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 48) && (Y23 == 38)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 44) && (Y23 == 39)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 48) && (Y23 == 39)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfDrt2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 49) && (Y23 == 53)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfGch2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 >= 45 && X23 <= 47) && (Y23 == 38)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilCtr2`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 >= 45 && X23 <= 47) && (Y23 == 39)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseInfMil`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 51) && (Y23 == 44)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 51) && (Y23 == 46)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tableBasseMilGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 51) && (Y23 == 46)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCInfGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 47) && (Y23 == 42)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 48) && (Y23 == 42)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCSupDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 47) && (Y23 == 46)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCInfGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                } if ((X23 == 48) && (Y23 == 46)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCInfDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 47) && (Y23 >= 43 && Y23 <= 45)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCMilGch`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if ((X23 == 48) && (Y23 >= 43 && Y23 <= 45)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tablePCMilDrt`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
            }
        }
    }
}
function estDansStudio (coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number) {
    if (estRDCStudio(coinSupDrtCol, coinSupDrtRow, coinInfDrtRow, coinSupGchCol)) {
        return true
    } else {
        return false
    }
}
function creerTuileMur (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
    for (let X24 = 0; X24 <= coinSupDrtCol; X24++) {
        for (let Y24 = 0; Y24 <= coinInfDrtRow; Y24++) {
            if(Maison) {
                if (Y24 == coinSupDrtRow && X24 >= coinSupGchCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMurRow`)
                }
                if (Y24 == coinInfDrtRow && X24 >= coinSupGchCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMurRow`)
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
            }//la partie gauche de la Maison
            if (coinSupGchCol <= rdcGchDrt && coinSupDrtRow <= rdcHtBs) {
                if (!Maison) {
                    if ((Y24 == coinSupDrtRow && X24 >= coinSupGchCol)) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMurRow`)
                    }
                    if (Y24 == coinInfDrtRow && X24 >= coinSupGchCol) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMurRow`)
                    }
                    if (X24 == coinSupGchCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                    }
                    if (X24 == coinSupDrtCol && (Y24 >= coinSupDrtRow && Y24 <= coinInfDrtRow)) {
                        tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`tileMur3`)
                    }
                }
            } else if (coinSupGchCol <= rdcGchDrt && coinSupDrtRow >= rdcHtBs){
                //le Studio
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
                if (Y24 == 53 && X24 == coinSupDrtCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile11`)
                }
                if (Y24 == 53 && X24 == coinSupGchCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile29`)
                }
            } else {
                //l'Atelier
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
                if (Y24 == 55 && X24 == coinSupDrtCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile11`)
                }
                if (Y24 == 55 && X24 == coinSupGchCol) {
                    tiles.setTileAt(tiles.getTileLocation(X24, Y24), assets.tile`myTile29`)
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
function creerMurInterieur (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number, Maison: boolean) {
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
                    } else if (Y23 == 25) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur14`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (Y23 == 27) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur15`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (!(Y23 == 15 || Y23 == 16 || Y23 == 26)) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur3`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    }
                }
                if (Y23 == 24 && (X23 > 30 && X23 < coinSupDrtCol)) {
                    if (X23 == 34) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile26`)
                    } else if (X23 > 30 && X23 < 34) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur11`)
                    } else {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMurRow`)
                    }
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (Y23 == 28 && (X23 > 30 && X23 < coinSupDrtCol)) {
                    if (X23 == 34) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile28`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (X23 == 35) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur7`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (X23 == 38) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur8`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    } else if (!(X23 == 36 || X23 == 37)) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur13`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    }
                }
                if (X23 == 30 && Y23 == 28) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`myTile19`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 34 && (Y23 > 24 && Y23 < 27)) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur12`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (X23 == 34 && Y23 == 27) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur16`)
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
                    }
                }
            } else if (coinSupGchCol <= rdcGchDrt && coinSupDrtRow >= rdcHtBs) {
                //le Studio
                if(X23 > coinSupGchCol && X23 < coinSupDrtCol) {
                    if (Y23 == 53) {
                        tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMurRow`)
                        tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                    }
                    
                }                
            } else if (coinSupGchCol >= rdcGchDrt && coinSupDrtRow >= rdcHtBs) {
                //l'Atelier
                if (Y23 == 55 && ((X23 > coinSupGchCol && X23 < 46) || (X23 > 49 && X23 < coinSupDrtCol))) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMurRow`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (Y23 == 55 && X23 == 46) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur7`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
                if (Y23 == 55 && X23 == 49) {
                    tiles.setTileAt(tiles.getTileLocation(X23, Y23), assets.tile`tileMur8`)
                    tiles.setWallAt(tiles.getTileLocation(X23, Y23), true)
                }
            }
        }
    }
}
function startMusic () {
    music.setVolume(50)
    music.play(songAmbiance, music.PlaybackMode.LoopingInBackground)
}
function appuisBtnAsc () {
    if (Joueur.tileKindAt(TileDirection.Right, assets.tile`tileMur16`)) {
        stopMove()
        story.showPlayerChoices("1er Etage", "2e Etage")
        if (story.checkLastAnswer("1er Etage")) {
            music.play(music.createSong(assets.song`dansAscCrt`), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 1 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x + 54 * 16, Joueur.y - 50 * 16)
        } else {
            music.play(music.createSong(assets.song`dansAscLg`), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 1 * 16, Joueur.y + 49 * 16)
            pause(6000)
            Joueur.setPosition(Joueur.x + 84 * 16, Joueur.y - 50 * 16)
        }
        music.play(music.createSong(assets.song`AscArrivé`), music.PlaybackMode.InBackground)
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`tileMur17`)) {
        stopMove()
        story.showPlayerChoices("RdC", "2e Etage")
        if (story.checkLastAnswer("RdC")) {
            music.play(music.createSong(assets.song`dansAscCrt`), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 55 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x, Joueur.y - 50 * 16)
        } else {
            music.play(music.createSong(assets.song`dansAscCrt`), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 55 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x + 84 * 16, Joueur.y - 50 * 16)
        }
        music.play(music.createSong(assets.song`AscArrivé`), music.PlaybackMode.InBackground)
    } else if (Joueur.tileKindAt(TileDirection.Right, assets.tile`tileMur18`)) {
        stopMove()
        story.showPlayerChoices("RdC", "1er Etage")
        if (story.checkLastAnswer("RdC")) {
            music.play(music.createSong(assets.song`dansAscLg`), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 85 * 16, Joueur.y + 49 * 16)
            pause(6000)
            Joueur.setPosition(Joueur.x, Joueur.y - 50 * 16)
        } else {
            music.play(music.createSong(assets.song`dansAscCrt`), music.PlaybackMode.InBackground)
            Joueur.setPosition(Joueur.x - 85 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.setPosition(Joueur.x + 54 * 16, Joueur.y - 50 * 16)
        }
        music.play(music.createSong(assets.song`AscArrivé`), music.PlaybackMode.InBackground)
    }
    startMove()
}
function startMove () {
    controller.moveSprite(Joueur, 100, 100)
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
//les 2 overlaps ci-dessous empeche le joueur de passer à travers les PNJ et Machine
sprites.onOverlap(SpriteKind.Player, SpriteKind.PNJ, function (sprite, otherSprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16)))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Machine, function (sprite, otherSprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16)))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((Math.floor(Joueur.x / 16) == posPorteStudioCol + 1 || Math.floor(Joueur.x / 16) == posPorte2StudioCol + 1)
        && (Math.floor(Joueur.y / 16) == posPorteStudioRow || Math.floor(Joueur.y / 16) == posPorte2StudioRow )) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtStudioCol, coinInfDrtSudioRow, coinSupDrtStudioRow, coinSupGchStudioCol, posPorteStudio[0].length, posPorteStudio, false)
            PC2.setFlag(SpriteFlag.Invisible, true)
            PNJ4.setFlag(SpriteFlag.Invisible, false)
            PNJ5.setFlag(SpriteFlag.Invisible, false)
        }
    } else if ((Math.floor(Joueur.x / 16) == posPorteStudioCol - 1 || Math.floor(Joueur.x / 16) == posPorte2StudioCol - 1)
                && (Math.floor(Joueur.y / 16) == posPorteStudioRow || Math.floor(Joueur.y / 16) == posPorte2StudioRow)) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creerTuileToit(coinSupDrtStudioCol, coinInfDrtSudioRow, coinSupDrtStudioRow, coinSupGchStudioCol)
            PC2.setFlag(SpriteFlag.Invisible, true)
            PNJ4.setFlag(SpriteFlag.Invisible, true)
            PNJ5.setFlag(SpriteFlag.Invisible, true)
        }
    }
    if ((Math.floor(Joueur.x / 16) == posPorteAtelierCol - 1 || Math.floor(Joueur.x / 16) == posPorte2AtelierCol - 1)
        && (Math.floor(Joueur.y / 16) == posPorteAtelierRow || Math.floor(Joueur.y / 16) == posPorte2AtelierRow)) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtAtelierCol, coinInfDrtAtelierRow, coinSupDrtAtelierRow, coinSupGchAtelierCol, posPorteAtelier[0].length, posPorteAtelier, false)
            decoupeuse.setFlag(SpriteFlag.Invisible, false)
            impr3D.setFlag(SpriteFlag.Invisible, false)
            PNJ1.setFlag(SpriteFlag.Invisible, false)
        }
    } else if ((Math.floor(Joueur.x / 16) == posPorteAtelierCol + 1 || Math.floor(Joueur.x / 16) == posPorte2AtelierCol + 1)
        && (Math.floor(Joueur.y / 16) == posPorteAtelierRow || Math.floor(Joueur.y / 16) == posPorte2AtelierRow)) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerTuileToit(coinSupDrtAtelierCol, coinInfDrtAtelierRow, coinSupDrtAtelierRow, coinSupGchAtelierCol)
            decoupeuse.setFlag(SpriteFlag.Invisible, true)
            impr3D.setFlag(SpriteFlag.Invisible, true)
            PNJ1.setFlag(SpriteFlag.Invisible, true)
        }
    }
    if (Math.floor(Joueur.x / 16) == posPorteMaisonCol + 1 && Math.floor(Joueur.y / 16) == posPorteMaisonRow) {
        if (game.ask("Voulez vous entrer?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow, coinSupDrtPmaisonRow, coinSupGchPmaisonCol, posPorteMaison[0].length, posPorteMaison, false)
            creerIntBat(coinSupDrtMaisonCol, coinInfDrtMaisonRow, coinSupDrtMaisonRow, coinSupGchMaisonCol, posPorteMaison[0].length, posPorteMaison, true)
            PNJ7.setFlag(SpriteFlag.Invisible, false)
            PNJ8.setFlag(SpriteFlag.Invisible, false)
        }
    } else if (Math.floor(Joueur.x / 16) == posPorteMaisonCol - 1 && Math.floor(Joueur.y / 16) == posPorteMaisonRow) {
        if (game.ask("Voulez vous Sortir?")) {
            tiles.placeOnTile(Joueur, tiles.getTileLocation(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creerTuileToit(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow, coinSupDrtPmaisonRow, coinSupGchPmaisonCol)
            creerTuileToit(coinSupDrtMaisonCol, coinInfDrtMaisonRow, coinSupDrtMaisonRow, coinSupGchMaisonCol)
            PNJ7.setFlag(SpriteFlag.Invisible, true)
            PNJ8.setFlag(SpriteFlag.Invisible, true)
        }
    }
    if (((Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 56 || Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 58))
        || ((Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 46 || Math.floor(Joueur.x / 16) == 11 && Math.floor(Joueur.y / 16) == 48))) {
        game.splash("Le Studio")
    }
    if (Math.floor(Joueur.x / 16) == 40 && Math.floor(Joueur.y / 16) == 44 || Math.floor(Joueur.x / 16) == 40 && Math.floor(Joueur.y / 16) == 46) {
        game.splash("L'Atelier")
    }
    if (Math.floor(Joueur.x / 16) == 42 && Math.floor(Joueur.y / 16) == 29 || Math.floor(Joueur.x / 16) == 42 && Math.floor(Joueur.y / 16) == 31) {
        game.splash("La Maison")
    }
    for (let valeur2 of sprites.allOfKind(SpriteKind.PNJ)) {
        if (Math.floor(Joueur.y / 16) == Math.floor(valeur2.y / 16) &&
            (Math.floor(Joueur.x / 16) - Math.floor(valeur2.x / 16) == 1 ||
            Math.ceil(Joueur.x / 16) - Math.floor(valeur2.x / 16) == 0) ||
            Math.floor(Joueur.x / 16) == Math.floor(valeur2.x / 16) &&
            (Math.floor(Joueur.y / 16) - Math.floor(valeur2.y / 16) == 1 ||
            Math.ceil(Joueur.y / 16) - Math.floor(valeur2.y / 16) == 0)) {
                //!!!!!dialogue des pnj
            if ((Math.floor(valeur2.x / 16) == 23 && Math.floor(valeur2.y / 16 ) == 45)) {
                //!!!!!pourle pnj du spawn
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
                if (tabPerso[1][0] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][0] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                if (numQuete == 0) {
                    game.showLongText("Bienvenue au Campus des Jeunes. Tu trouveras ici tout pour t'accueillir au mieux. Parcours les lieux et obtient un score de 900Xp. Ensuite reviens me voir pour valider ta quete de découverte des lieux.", DialogLayout.Bottom)
                    debutQuete()
                } else if (numQuete == 1){
                    if (nbExp == 900) { 
                        game.showLongText("Tu as réussis!!!", DialogLayout.Bottom)
                        pause(5000)
                        //---Liste des mots à donner à la Fin---
                        if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Energie")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Rêves")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Aventure")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Liberté")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Innovation")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Créativité")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Amitié")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Découverte")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Passion")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Idéalisme")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Espoir")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Ambition")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Courage")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Dynamisme")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Curiosité")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Enthousiasme")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Changement")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Identité")
                        } else if (Math.percentChance(5)) {
                            game.setGameOverMessage(true, "Exploration")
                        } else {
                            game.setGameOverMessage(true, "Inspiration")
                        }
                        game.gameOver(true)
                    } else {
                        game.showLongText("Rappelle toi, visites chaque pièces et parles à toutes les personnes pour avoir les 900xp!!", DialogLayout.Bottom)
                    }
                } 
            } else if ((Math.floor(valeur2.x / 16) == 46 && Math.floor(valeur2.y / 16) == 45)) {
                //!!!!! Pour le pnj de l'atelier
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
                if (tabPerso[1][3] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][3] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("Ici c'est l'Atelier, c'est l'endroit où on peut fabriquer des choses avec des outils comme une imprimante 3D ou une découpeuse laser. On peut aussi apprendre a programmer des cartes electronique ou apprendre à créer des minis jeux video. On a des projets sur la création de maquettes animée, la création de PODCAST ou la Déco du Campus. Vient me voir et on discutera de tes projets. :)", DialogLayout.Bottom)
            } else if ((Math.floor(valeur2.x / 16) == 5 && Math.floor(valeur2.y / 16) == 47)) {
                //!!!!! Pour le pnj du studio en haut
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
                if (tabPerso[1][1] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][1] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("Ici c'est le Studio B. Normalement c'est un endoit pour faire des expositions ou jouer de la musique. On peut reserver cette salle pour divers projets et on pense ouvrir le lieu pour du ESport.", DialogLayout.Bottom)
            } else if ((Math.floor(valeur2.x / 16) == 4 && Math.floor(valeur2.y / 16) == 57)) {
                //!!!!! Pour le pnj du studio en bas
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
                if (tabPerso[1][2] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][2] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("Ici c'est le Studio A. C'est l'endroit ou on va créer des la musique et faire des enregistrements sonores. Si un atelier Podcast est crée c'est ici que l'on viendra pour nous enregistrer.", DialogLayout.Bottom)
            } else if ((Math.floor(valeur2.x / 16) == 23 && Math.floor(valeur2.y / 16) == 24)) {
                //!!!!! Pour le pnj du salon
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
                if (tabPerso[1][4] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][4] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("Bienvenue dans le Salon. Assiez toi sur un canapé et discutons :). Ici tu trouveras de l'information Jeunesses mais tu pourras juste te poser et discuter avec tes amis. Tu peux participer à la décoration du lieu et des autres espaces. Si tu as des idées n'hésites pas à en parler.", DialogLayout.Bottom)
            } else if ((Math.floor(valeur2.x / 16) == 33 && Math.floor(valeur2.y / 16) == 17)) {
                //!!!!! Pour le pnj de la salle de jeu
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
                if (tabPerso[1][5] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][5] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("La salle de jeu ... C'est quoi ? Ben l'endroit pour s'amuser entre nous avec tes amis ou même pour nous défier sur un jeu. Et si on créait un LeaderBoard de nos Score ? Allez on joue à des jeux de société ou à la PS4 ? N'hésites pas non plus a tenter une partie de babyfoot :) ", DialogLayout.Bottom)
            } else if ((Math.floor(valeur2.x / 16) == 75 && Math.floor(valeur2.y / 16) == 24)) {
                //!!!!! Pour le pnj du service jeunesse
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
                if (tabPerso[1][6] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][6] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("Ici le service Jeunesses vous accueille. Alors si vous voulez réserver une salle ou proposer un projet autour de la jeunesse, vous êtes au bon endroit. Téléphone par exemple au 05 49 94 90 18 .", DialogLayout.Bottom)
            } else if ((Math.floor(valeur2.x / 16) == 82 && Math.floor(valeur2.y / 16) == 15)) {
                //!!!!! Pour le pnj dans le couloir etg 1
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
                if (tabPerso[1][7] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][7] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("Nous avons la salle 'la colloc' à disposition pour vos formations ou réunion. Elle accueille 15 personnes et tu peux la réserver.", DialogLayout.Bottom)
            } else if ((Math.floor(valeur2.x / 16) == 112 && Math.floor(valeur2.y / 16) == 15)) {
                //!!!!! Pour le pnj dans le couloir etg 2
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
                if (tabPerso[1][8] == 0) {
                    info.changeScoreBy(50)
                    nbExp += 50
                    tabPerso[1][8] = 1
                }
                game.showLongText("Bonjour!", DialogLayout.Bottom)
                game.showLongText("Nous avons la salle 'la digitale' à disposition pour vos formations ou réunion. Elle accueille 15 personnes et tu peux la réserver. De l'autre coté, la salle la plus grande c'est la salle '3.0'. Idéale pour des réunions plus fun ou du coworking.", DialogLayout.Bottom)
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
    // appuisBtnAsc()
    if ((tiles.tileAtLocationEquals(tiles.getTileLocation((Math.ceil(Joueur.x / 16)), Joueur.y/16), assets.tile`tileMur16`))||
        (tiles.tileAtLocationEquals(tiles.getTileLocation((Math.ceil(Joueur.x / 16)), Joueur.y/16), assets.tile`tileMur17`)) ||
        (tiles.tileAtLocationEquals(tiles.getTileLocation((Math.ceil(Joueur.x / 16)), Joueur.y/16), assets.tile`tileMur18`))) {
        appuisBtnAsc()
    }
    // if ((Joueur.tileKindAt(TileDirection.Right, assets.tile`tileMur16`))||
    //     (Joueur.tileKindAt(TileDirection.Right, assets.tile`tileMur17`))||
    //     (Joueur.tileKindAt(TileDirection.Right, assets.tile`tileMur18`))) {
    //     appuisBtnAsc()
        
    // }
})
function creerTuileToit (coinSupDrtCol: number, coinInfDrtRow: number, coinSupDrtRow: number, coinSupGchCol: number) {
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
let boutonA: Sprite = null
let curseur3: Sprite = null
let tempQ1MDP: Sprite = null
let q1MDP: Sprite = null
let decoupeuse: Sprite = null
let impr3D: Sprite = null
// let posPNJ: number[][] = []
let posEscalierStudio: number[][] = []
let posEscAtelier: number[][] = []
let posPorteStudio: number[][] = []
let posPorteAtelier: number[][] = []
let posPorteMaison: number[][] = []
let tabLieux: any[][] = []
let tabPerso: any[][] = []
let txtQueteL2: TextSprite = null
let txtQueteL1: TextSprite = null
let spritePos: TextSprite = null
let spriteEtage: TextSprite = null
let prevEtage = ""
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
let posPorte2AtelierRow = 0
let posPorte2AtelierCol = 0
let coinInfDrtAtelierRow = 0
let coinSupDrtAtelierRow = 0
let coinSupDrtAtelierCol = 0
let coinSupGchAtelierCol = 0
let posPorteStudioRow = 0
let posPorteStudioCol = 0
let posPorte2StudioRow = 0
let posPorte2StudioCol = 0
let coinInfDrtSudioRow = 0
let coinSupDrtStudioRow = 0
let coinSupDrtStudioCol = 0
let coinSupGchStudioCol = 0
let PNJ1: Sprite = null
let PNJ2: Sprite = null
let PNJ3: Sprite = null
let PNJ4: Sprite = null
let PNJ5: Sprite = null
let PNJ6: Sprite = null
let PNJ7: Sprite = null
let PNJ8: Sprite = null
let PNJ9: Sprite = null
let Joueur: Sprite = null
let PC2: Sprite = null
let nbExp = 0
let isPCOn = 0
let isCursorVisible = 0
let curseur2: Sprite = null
let mdpPC = ""
let rdcHtBs = 0
let rdcGchDrt = 0
let songAtelier = music.createSong(assets.song`Atelier`)
let songStudio = music.createSong(assets.song`Studio`)
let songJardin = music.createSong(assets.song`Jardin`)
let songMaison = music.createSong(assets.song`Maison`)
let songAmbiance = music.createSong(assets.song`mySong`)
let debug = 0
let rdcLargeur = 52
let rdcHauteur = 62
rdcGchDrt = rdcLargeur / 2
rdcHtBs = rdcLargeur / 2
info.setScore(0)
mdpPC = "P"
curseur2 = sprites.create(assets.image`spriteCurseur`, SpriteKind.Curseur)
isCursorVisible = 0
isPCOn = 0
tiles.setCurrentTilemap(tilemap`niveau0`)
boutonA = sprites.create(assets.image`boutonA`, SpriteKind.UI)
boutonA.setPosition(scene.screenWidth() / 2, (scene.screenHeight() / 2) + 20)
boutonA.setFlag(SpriteFlag.RelativeToCamera, true)
boutonA.setFlag(SpriteFlag.Invisible, true)
// posPNJ = [[], []]
PC2 = sprites.create(assets.image`SpritePc`, SpriteKind.PC)
Joueur = sprites.create(assets.image`Mario`, SpriteKind.Player)
PNJ1 = sprites.create(assets.image`nicolas`, SpriteKind.PNJ)
PNJ2 = sprites.create(assets.image`pnj2`, SpriteKind.PNJ)
PNJ3 = sprites.create(assets.image`pnj3`, SpriteKind.PNJ)
PNJ4 = sprites.create(assets.image`pnj4`, SpriteKind.PNJ)
PNJ5 = sprites.create(assets.image`pnj5`, SpriteKind.PNJ)
PNJ6 = sprites.create(assets.image`pnj6`, SpriteKind.PNJ)
PNJ7 = sprites.create(assets.image`pnj7`, SpriteKind.PNJ)
PNJ8 = sprites.create(assets.image`pnj8`, SpriteKind.PNJ)
PNJ9 = sprites.create(assets.image`benoît`, SpriteKind.PNJ)
decoupeuse = sprites.create(assets.image`decoupeuse`, SpriteKind.Machine)
impr3D = sprites.create(assets.image`impr3D`, SpriteKind.Machine)
controller.moveSprite(Joueur, 100, 100)
scene.cameraFollowSprite(Joueur)
Joueur.setFlag(SpriteFlag.ShowPhysics, false) //afficher les coordonnées
tiles.placeOnTile(PC2, tiles.getTileLocation(1, 41))
tiles.placeOnTile(Joueur, tiles.getTileLocation(26, 47))
tiles.placeOnTile(PNJ1, tiles.getTileLocation(46, 45)) //atelier
tiles.placeOnTile(impr3D, tiles.getTileLocation(51, 45))
tiles.placeOnTile(PNJ2, tiles.getTileLocation(112, 15)) //couloir etg2
tiles.placeOnTile(PNJ3, tiles.getTileLocation(82, 15)) //couloir etg1
tiles.placeOnTile(PNJ4, tiles.getTileLocation(5, 47)) //studio ht
tiles.placeOnTile(PNJ5, tiles.getTileLocation(4, 57)) //studio bas
tiles.placeOnTile(PNJ6, tiles.getTileLocation(75, 24)) //service jeunesse
tiles.placeOnTile(PNJ7, tiles.getTileLocation(33, 17)) //salle de jeu
tiles.placeOnTile(PNJ8, tiles.getTileLocation(23, 24)) //salon
tiles.placeOnTile(PNJ9, tiles.getTileLocation(23, 45)) //spawn
decoupeuse.setPosition((50*16)+8, (38*16)+8)
// posPNJ[0][0] = 5
// posPNJ[1][0] = 50
coinSupGchStudioCol = 0
coinSupDrtStudioCol = 9
coinSupDrtStudioRow = 37
coinInfDrtSudioRow = 62
posPorteStudioCol = 9
posPorteStudioRow = 57
posPorte2StudioCol = 9
posPorte2StudioRow = 47
posPorteStudio = [[0, 1], [0, 1]]
posPorteStudio[0][0] = posPorte2StudioCol
posPorteStudio[1][0] = posPorte2StudioRow
posPorteStudio[0][1] = posPorteStudioCol
posPorteStudio[1][1] = posPorteStudioRow
coinSupGchAtelierCol = 43
coinSupDrtAtelierCol = 52
coinSupDrtAtelierRow = 37
coinInfDrtAtelierRow = 62
posPorteAtelierCol = 43
posPorteAtelierRow = 45
posPorte2AtelierRow = 46
posPorte2AtelierCol = 43
posPorteAtelier = [[0,1], [0,1]]
posPorteAtelier[0][0] = posPorteAtelierCol
posPorteAtelier[1][0] = posPorteAtelierRow
posPorteAtelier[0][1] = posPorte2AtelierCol
posPorteAtelier[1][1] = posPorte2AtelierRow
coinSupGchMaisonCol = 17
coinSupDrtMaisonCol = 39
coinSupDrtMaisonRow = 12
coinInfDrtMaisonRow = 32
posPorteMaisonCol = 39
posPorteMaisonRow = 30
posPorteMaison = [[0], [0]]
posPorteMaison[0][0] = posPorteMaisonCol
posPorteMaison[1][0] = posPorteMaisonRow
coinSupGchPmaisonCol = 8
coinSupDrtPmaisonCol = 17
coinSupDrtPmaisonRow = 22
coinInfDrtPmaisonRow = 31
PNJ1.setFlag(SpriteFlag.Invisible, true)
PNJ4.setFlag(SpriteFlag.Invisible, true)
PNJ5.setFlag(SpriteFlag.Invisible, true)
PNJ7.setFlag(SpriteFlag.Invisible, true)
PNJ8.setFlag(SpriteFlag.Invisible, true)
PC2.setFlag(SpriteFlag.Invisible, true)
decoupeuse.setFlag(SpriteFlag.Invisible, true)
impr3D.setFlag(SpriteFlag.Invisible, true)
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
posEscAtelier = [[51 * 16 + 8, 91 * 16 + 8], [59 * 16 + 8, 59 * 16 + 8]]
spritePos = textsprite.create("ici", 1, 15)
spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
spritePos.top = 110
spritePos.setFlag(SpriteFlag.RelativeToCamera, true)
spriteEtage = textsprite.create("ici", 1, 15)
spriteEtage.left = scene.screenWidth() / 2 - (spriteEtage.x - spriteEtage.left)
spriteEtage.top = 101
spriteEtage.setFlag(SpriteFlag.RelativeToCamera, true)
tabLieux = [["studio", "atelier", "salle de jeu", "salon", "cuisine", "coloc", "service jeunese", "espace numerique", "agora"], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
tabPerso = [["jardin", "studioht", "studiobs", "atelier", "salon", "salle de jeu", "coloc", "service jeunese", "espace numerique/agora"], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
startMusic()
let test2 = 0
forever(function () {
    peutInterragir()
    if (estDansAtelier(coinSupDrtAtelierCol, coinSupDrtAtelierRow, coinInfDrtAtelierRow, coinSupGchAtelierCol)) {
        if (Joueur.top <= posEscAtelier[1][0] && Joueur.top >= posEscAtelier[1][0] - 8 && Math.ceil(Joueur.x / 16) == Math.ceil(posEscAtelier[0][0] / 16)) {
            Joueur.setPosition(posEscAtelier[0][1], posEscAtelier[1][1])
        }
        if (Joueur.top >= posEscAtelier[1][1] && Math.ceil(Joueur.x / 16) == Math.ceil(posEscAtelier[0][1] / 16)) {
            Joueur.setPosition(posEscAtelier[0][0], posEscAtelier[1][0] + 16)
        }
    }
    if (Math.ceil(Joueur.x / 16) == 30 && Math.ceil(Joueur.y / 16) == 26)  {
        Joueur.setPosition((30 * 16) + 8, (26 * 16) + 8)
    }
    if (Math.ceil(Joueur.x / 16) == 84 && Math.ceil(Joueur.y / 16) == 26) {
        Joueur.setPosition((84 * 16) + 8, (26 * 16) + 8)
    }
    if (Math.ceil(Joueur.x / 16) == 114 && Math.ceil(Joueur.y / 16) == 26) {
        Joueur.setPosition((114 * 16) + 8, (26 * 16) + 8)
    }
    if (Joueur.x > 0 && Joueur.x < rdcLargeur * 16) {
        spriteEtage.setText("RDC")
        prevEtage = "RDC"
        spriteEtage.left = scene.screenWidth() / 2 - (spriteEtage.x - spriteEtage.left)
    } else if (Joueur.x > (coinSupGchPmaisonCol + 54) * 16 && Joueur.x < (coinSupDrtMaisonCol + 54) * 16) {
        spriteEtage.setText("1er Etage")
        prevEtage = "1er Etage"
        spriteEtage.left = scene.screenWidth() / 2 - (spriteEtage.x - spriteEtage.left)
    } else if (Joueur.x > (coinSupGchMaisonCol + 84) * 16 && Joueur.x < (coinSupDrtMaisonCol + 84) * 16) {
        spriteEtage.setText("2eme Etage")
        prevEtage = "2eme Etage"
        spriteEtage.left = scene.screenWidth() / 2 - (spriteEtage.x - spriteEtage.left)
    }
    if (Joueur.x > 0 && Joueur.x < rdcLargeur * 16 && Joueur.y > 0 && Joueur.y < rdcHauteur * 16) {
        spritePos.setText("Jardin")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
    }
    if (Joueur.x > coinSupGchStudioCol && Joueur.x < coinSupDrtStudioCol * 16 && Joueur.y > coinSupDrtStudioRow *16 && Joueur.y < coinInfDrtSudioRow * 16) {
        spritePos.setText("Studio")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][0] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][0] = 1
        }
    }
    if (Joueur.x > coinSupGchAtelierCol * 16 && Joueur.x < coinSupDrtAtelierCol * 16 && Joueur.y > coinSupDrtAtelierRow * 16 && Joueur.y < coinInfDrtAtelierRow * 16) {
        spritePos.setText("Atelier")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][1] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][1] = 1
        }
    }
    if (Joueur.x > coinSupGchPmaisonCol * 16 && Joueur.x < coinSupDrtPmaisonCol * 16 && Joueur.y > coinSupDrtPmaisonRow * 16 && Joueur.y < coinInfDrtPmaisonRow * 16) {
        spritePos.setText("Cuisine")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][4] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][4] = 1
        }
    }
    if (Joueur.x > coinSupGchMaisonCol * 16 && Joueur.x < 26 * 16 && Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < coinInfDrtMaisonRow * 16) {
        spritePos.setText("Salon")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][3] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][3] = 1
        }
    }
    if (Joueur.x > 30 * 16 && Joueur.x < coinSupDrtMaisonCol * 16 && Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < 24 * 16) {
        spritePos.setText("Salle de Jeu")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][2] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][2] = 1
        }
    }
    if ((Joueur.x > 34 * 16 && Joueur.x < coinSupDrtMaisonCol * 16 && Joueur.y > 24 * 16 && Joueur.y < 28 * 16) ||
        (Joueur.x > 88 * 16 && Joueur.x < (coinSupDrtMaisonCol + 54) * 16 && Joueur.y > 24 * 16 && Joueur.y < 28 * 16) ||
        (Joueur.x > 118 * 16 && Joueur.x < (coinSupDrtMaisonCol + 84) * 16 && Joueur.y > 24 * 16 && Joueur.y < 28 * 16)) {
        spritePos.setText("Toilettes")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
    }
    if (Joueur.x > 30 * 16 && Joueur.x < 34 * 16 &&
        Joueur.y > 24 * 16 && Joueur.y < 28 * 16 ||
        Joueur.x > 84 * 16 && Joueur.x < 88 * 16 &&
        Joueur.y > 24 * 16 && Joueur.y < 28 * 16 ||
        Joueur.x > 114 * 16 && Joueur.x < 118 * 16 &&
        Joueur.y > 24 * 16 && Joueur.y < 28 * 16 ||
        Joueur.x > 30 * 16 && Joueur.x < 34 * 16 &&
        Joueur.y > 74 * 16 && Joueur.y < 78 * 16) {
        spriteEtage.setText(prevEtage)
        // if (prevEtage === "1er Etage") {
        //     pause(6000)
        // } else if (prevEtage === "2eme Etage") {
        //     pause(9000)
        // }
        spritePos.setText("Ascenseur")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
    }
    if (((Joueur.x > 26 * 16 && Joueur.x < 30 * 16 &&
        Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < coinInfDrtMaisonRow * 16) ||
        (Joueur.x > 30 * 16 && Joueur.x < coinSupDrtMaisonCol * 16 &&
        Joueur.y > 28 * 16 && Joueur.y < coinInfDrtMaisonRow * 16 )) ||
        ((Joueur.x > 80 * 16 && Joueur.x < 84 * 16 &&
        Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < coinInfDrtMaisonRow * 16) ||
        (Joueur.x > 84 * 16 && Joueur.x < coinSupDrtMaisonCol * 16 &&
        Joueur.y > 28 * 16 && Joueur.y < coinInfDrtMaisonRow * 16)) ||
        ((Joueur.x > 110 * 16 && Joueur.x < 114 * 16 &&
        Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < coinInfDrtMaisonRow * 16) ||
        (Joueur.x > 114 * 16 && Joueur.x < coinSupDrtMaisonCol * 16 &&
        Joueur.y > 28 * 16 && Joueur.y < coinInfDrtMaisonRow * 16))) {
        spritePos.setText("Couloir")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
    }
    if (Joueur.x > 84 * 16 && Joueur.x < (coinSupDrtMaisonCol + 54) * 16 && Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < 24 * 16) {
        spritePos.setText("La Coloc")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][5] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][5] = 1
        }
    }
    if (Joueur.x > 114 * 16 && Joueur.x < (coinSupDrtMaisonCol + 84) * 16 && Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < 24 * 16) {
        spritePos.setText("Espace Numérique")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][7] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][7] = 1
        }
    }
    if (Joueur.x > (coinSupGchPmaisonCol + 54) * 16 && Joueur.x < 80 * 16 && Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < coinInfDrtMaisonRow * 16) {
        spritePos.setText("Service Jeunesse")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][6] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][6] = 1
        }
    }
    if (Joueur.x > (coinSupGchMaisonCol + 84) * 16 && Joueur.x < 110 * 16 && Joueur.y > coinSupDrtMaisonRow * 16 && Joueur.y < coinInfDrtMaisonRow * 16) {
        spritePos.setText("L'Agora")
        spritePos.left = scene.screenWidth() / 2 - (spritePos.x - spritePos.left)
        if (tabLieux[1][8] == 0) {
            info.changeScoreBy(50)
            nbExp += 50
            tabLieux[1][8] = 1
        }
    }
    if (Math.abs(Joueur.x - decoupeuse.x) <= 32 && Math.abs(Joueur.y - decoupeuse.y) <= 32) {
        animation.runImageAnimation(decoupeuse, assets.animation`decoupeuseAnimation`, 100, true)
        pause(1600)
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, decoupeuse)
    }
    if (Math.abs(Joueur.x - impr3D.x) <= 16 && Math.abs(Joueur.y - impr3D.y) <= 16) {
        animation.runImageAnimation(impr3D, assets.animation`impr3DAnimation`, 200, true)
        pause(4600)
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, impr3D)
    }
})