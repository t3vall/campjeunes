@namespace
class SpriteKind:
    PNJ = SpriteKind.create()
    PC = SpriteKind.create()
    QtObjet = SpriteKind.create()
    Curseur = SpriteKind.create()
    Icon = SpriteKind.create()

def on_b_pressed():
    global isCursorVisible
    if isCursorVisible == 0:
        curseur2.set_flag(SpriteFlag.INVISIBLE, False)
        isCursorVisible = 1
    else:
        curseur2.set_flag(SpriteFlag.INVISIBLE, True)
        isCursorVisible = 0
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(10)
    q1MDP.set_flag(SpriteFlag.INVISIBLE, False)
    tempQ1MDP.set_position(1 * 16, 244 * 16)
    updateQuete(numQuete2)
sprites.on_overlap(SpriteKind.player, SpriteKind.QtObjet, on_on_overlap)

def estRDCAtelier(coinSupDrtCol: number, coinSupDrtRow: number, coinInfDrtRow: number, coinSupGchCol: number):
    if Joueur.x < coinSupDrtCol * 16 and Joueur.x > coinSupGchCol * 16 and Joueur.y > coinSupDrtRow * 16:
        return True
    else:
        return False
def estEtageAtelier(coinSupDrtCol2: number, coinSupDrtRow2: number, coinInfDrtRow2: number, coinSupGchCol2: number):
    if Joueur.x < (coinSupDrtCol2 + 40) * 16 and Joueur.x > (coinSupGchCol2 + 40) * 16 and Joueur.y > coinSupDrtRow2 * 16:
        return True
    else:
        return False
def estDansAtelier(coinSupDrtCol3: number, coinSupDrtRow3: number, coinInfDrtRow3: number, coinSupGchCol3: number):
    if estRDCAtelier(coinSupDrtCol3,
        coinSupDrtRow3,
        coinInfDrtRow3,
        coinSupGchCol3) or estEtageAtelier(coinSupDrtCol3,
        coinSupDrtRow3,
        coinInfDrtRow3,
        coinSupGchCol3):
        return True
    else:
        return False
def creerTuilePorte(coinSupDrtCol4: number, coinInfDrtRow4: number, posPorteCol: number, posPorteRow: number):
    X2 = 0
    while X2 <= coinSupDrtCol4:
        Y2 = 0
        while Y2 <= coinInfDrtRow4:
            if X2 == posPorteCol and Y2 == posPorteRow:
                if X2 == coinSupDrtCol4:
                    tiles.set_tile_at(tiles.get_tile_location(X2, Y2),
                        assets.tile("""
                            tilePorteGch
                        """))
                else:
                    tiles.set_tile_at(tiles.get_tile_location(X2, Y2),
                        assets.tile("""
                            tilePorteDrt
                        """))
            Y2 += 1
        X2 += 1

def on_overlap_tile(sprite2, location):
    if estRDCStudio(coinSupDrtStudioCol,
        coinSupDrtStudioRow,
        coinInfDrtSudioRow,
        coinSupGchStudioCol):
        if not (Math.floor(sprite2.x / 16) == Math.ceil(posEscalierStudio[0][0] / 16) or Math.floor(sprite2.x / 16) == Math.floor(posEscalierStudio[0][0] / 16)):
            tiles.place_on_tile(sprite2,
                tiles.get_tile_location(Math.floor(sprite2.x / 16) - 1, Math.floor(sprite2.y / 16)))
        if Math.ceil(sprite2.y / 16) == Math.floor(posEscalierStudio[1][0] / 16):
            tiles.place_on_tile(sprite2,
                tiles.get_tile_location(Math.floor(sprite2.x / 16), Math.floor(sprite2.y / 16) - 1))
    elif estEtageStudio(coinSupDrtStudioCol,
        coinSupDrtStudioRow,
        coinInfDrtSudioRow,
        coinSupGchStudioCol):
        if Math.ceil(sprite2.y / 16) == Math.floor(posEscalierStudio[1][1] / 16):
            tiles.place_on_tile(sprite2,
                tiles.get_tile_location(Math.floor(sprite2.x / 16), Math.floor(sprite2.y / 16) - 1))
    if estRDCAtelier(coinSupDrtAtelierCol,
        coinSupDrtAtelierRow,
        coinInfDrtAtelierRow,
        coinSupGchAtelierCol):
        if Math.ceil(sprite2.y / 16) == Math.floor(posEscalierStudio[1][0] / 16):
            tiles.place_on_tile(sprite2,
                tiles.get_tile_location(Math.floor(sprite2.x / 16), Math.floor(sprite2.y / 16) - 1))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        tileStair2
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite3, location2):
    if estRDCAtelier(coinSupDrtAtelierCol,
        coinSupDrtAtelierRow,
        coinInfDrtAtelierRow,
        coinSupGchAtelierCol):
        if Math.ceil(sprite3.x / 16) == Math.floor(posEscAtelier[0][0] / 16):
            tiles.place_on_tile(sprite3,
                tiles.get_tile_location(Math.floor(sprite3.x / 16) - 1, Math.floor(sprite3.y / 16)))
        if Math.ceil(sprite3.y / 16) == Math.floor(posEscAtelier[1][0] / 16):
            tiles.place_on_tile(sprite3,
                tiles.get_tile_location(Math.floor(sprite3.x / 16), Math.floor(sprite3.y / 16) - 1))
    elif estEtageAtelier(coinSupDrtAtelierCol,
        coinSupDrtAtelierRow,
        coinInfDrtAtelierRow,
        coinSupGchAtelierCol):
        if Math.ceil(sprite3.x / 16) == Math.floor(posEscAtelier[0][1] / 16):
            tiles.place_on_tile(sprite3,
                tiles.get_tile_location(Math.floor(sprite3.x / 16) - 1, Math.floor(sprite3.y / 16)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        tileStair0
    """),
    on_overlap_tile2)

def stopMove():
    controller.move_sprite(Joueur, 0, 0)
def creetuileEscalier(coinSupDrtCol5: number, coinInfDrtRow5: number, coinSupDrtRow4: number, coinSupGchCol4: number, Maison: bool):
    if coinSupGchCol4 <= rdcGchDrt and coinSupDrtRow4 >= rdcHtBs:
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtCol5 - 1, coinInfDrtRow5 - 2),
            assets.tile("""
                tileStair0
            """))
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtCol5 - 1, coinInfDrtRow5 - 1),
            assets.tile("""
                myTile7
            """))
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtCol5 - 2, coinInfDrtRow5 - 1),
            assets.tile("""
                tileStair2
            """))
    elif coinSupDrtCol5 > rdcGchDrt and not Maison:
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtCol5 - 1, coinInfDrtRow5 - 3),
            assets.tile("""
                tileStair0
            """))
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtCol5 - 1, coinInfDrtRow5 - 2),
            assets.tile("""
                tileStair0
            """))
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtCol5 - 1, coinInfDrtRow5 - 1),
            assets.tile("""
                myTile7
            """))
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtCol5 - 2, coinInfDrtRow5 - 1),
            assets.tile("""
                tileStair2
            """))
def creerTuileCoin(coinSupDrtCol6: number, coinInfDrtRow6: number, coinSupDrtRow5: number, coinSupGchCol5: number, Maison2: bool):
    X22 = 0
    while X22 <= coinSupDrtCol6:
        Y22 = 0
        while Y22 <= coinInfDrtRow6:
            if Maison2:
                if X22 == coinSupGchCol5 and Y22 == coinSupDrtRow5:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile21
                        """))
                if X22 == coinSupDrtCol6 and Y22 == coinSupDrtRow5:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile22
                        """))
                if X22 == coinSupDrtCol6 and Y22 == coinInfDrtRow6:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile23
                        """))
                if X22 == coinSupGchCol5 and Y22 == coinInfDrtRow6:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile9
                        """))
            if coinSupGchCol5 <= rdcGchDrt and coinSupDrtRow5 <= rdcHtBs:
                if X22 == coinSupGchCol5 and Y22 == coinSupDrtRow5:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile21
                        """))
                if X22 == coinSupDrtCol6 and Y22 == coinSupDrtRow5:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile22
                        """))
                if X22 == coinSupDrtCol6 and Y22 == coinInfDrtRow6:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile23
                        """))
                if X22 == coinSupGchCol5 and Y22 == coinInfDrtRow6:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            myTile9
                        """))
            else:
                if X22 == coinSupGchCol5 and Y22 == coinSupDrtRow5:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            tileCoinSupGch
                        """))
                if X22 == coinSupDrtCol6 and Y22 == coinSupDrtRow5:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            tileCoinSupDrt
                        """))
                if X22 == coinSupDrtCol6 and Y22 == coinInfDrtRow6:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            tileCoinInfDrt
                        """))
                if X22 == coinSupGchCol5 and Y22 == coinInfDrtRow6:
                    tiles.set_tile_at(tiles.get_tile_location(X22, Y22),
                        assets.tile("""
                            tileCoinInfGch
                        """))
            Y22 += 1
        X22 += 1
    if Maison2:
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtPmaisonCol, coinSupDrtPmaisonRow),
            assets.tile("""
                myTile16
            """))
        tiles.set_tile_at(tiles.get_tile_location(coinSupDrtPmaisonCol, coinInfDrtPmaisonRow),
            assets.tile("""
                myTile16
            """))
def debutQuete():
    global numQuete2, q1MDP, tempQ1MDP
    if numQuete2 == 0:
        numQuete2 = 1
        txtQueteL1.set_text("Retrouver le")
        txtQueteL2.set_text("Mot de Passe du PC!")
        q1MDP = sprites.create(assets.image("""
            spritePapier
        """), SpriteKind.QtObjet)
        tempQ1MDP = sprites.create(assets.image("""
            spritePapier
        """), SpriteKind.QtObjet)
        q1MDP.set_flag(SpriteFlag.INVISIBLE, True)
        tempQ1MDP.set_position(randint(12, 38) * 16, randint(37, 58) * 16)
def logInPC():
    global isPCOn, curseur3, logOutIcon
    if Math.floor(Joueur.x / 16) == 1 and Math.floor(Joueur.y / 16) == 42:
        if isPCOn == 0:
            if game.ask_for_string("Veuillez entrer le mot de passe!!!") == mdpPC:
                txtQueteL1.set_text("")
                txtQueteL2.set_text("")
                sprites.destroy(q1MDP)
                sprites.destroy(tempQ1MDP)
                info.change_score_by(10)
                isPCOn = 1
                scene.center_camera_at(6 * 16, 70 * 16)
                curseur3 = sprites.create(assets.image("""
                    spriteCursor
                """), SpriteKind.player)
                curseur3.set_position(6 * 16, 70 * 16)
                controller.move_sprite(Joueur, 0, 0)
                controller.move_sprite(curseur3)
                logOutIcon = sprites.create(assets.image("""
                    spriteOnOff
                """), SpriteKind.Icon)
                logOutIcon.set_position(1 * 16 + 8, 73 * 16)
            else:
                game.splash("Mot de Passe Incorrect!!!")
def creerIntBat(coinSupDrtCol7: number, coinInfDrtRow7: number, coinSupDrtRow6: number, coinSupGchCol6: number, posPorteCol2: number, posPorteRow2: number, Maison3: bool):
    creerTuileMur(coinSupDrtCol7,
        coinInfDrtRow7,
        coinSupDrtRow6,
        coinSupGchCol6,
        Maison3)
    creerTuileCoin(coinSupDrtCol7,
        coinInfDrtRow7,
        coinSupDrtRow6,
        coinSupGchCol6,
        Maison3)
    creerTuilePorte(coinSupDrtCol7, coinInfDrtRow7, posPorteCol2, posPorteRow2)
    creerTuileSol(coinSupDrtCol7,
        coinInfDrtRow7,
        coinSupDrtRow6,
        coinSupGchCol6,
        Maison3)
    creeMurInterieur(coinSupDrtCol7,
        coinInfDrtRow7,
        coinSupDrtRow6,
        coinSupGchCol6,
        Maison3)
    creetuileEscalier(coinSupDrtCol7,
        coinInfDrtRow7,
        coinSupDrtRow6,
        coinSupGchCol6,
        Maison3)

def on_overlap_tile3(sprite4, location3):
    if estEtageStudio(coinSupDrtStudioCol,
        coinSupDrtStudioRow,
        coinInfDrtSudioRow,
        coinSupGchStudioCol):
        if Math.ceil(sprite4.y / 16) == location3.row:
            tiles.place_on_tile(sprite4,
                tiles.get_tile_location(Math.floor(sprite4.x / 16), Math.floor(sprite4.y / 16) - 1))
    elif estDansAtelier(coinSupDrtAtelierCol,
        coinSupDrtAtelierRow,
        coinInfDrtAtelierRow,
        coinSupGchAtelierCol):
        if Math.ceil(sprite4.x / 16) == location3.column:
            tiles.place_on_tile(sprite4,
                tiles.get_tile_location(Math.floor(sprite4.x / 16) - 1, Math.floor(sprite4.y / 16)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        tuileNoir
    """),
    on_overlap_tile3)

def updateQuete(numQuete: number):
    if numQuete == 1:
        if tempQ1MDP.tilemap_location().column == 1 and tempQ1MDP.tilemap_location().row == 244:
            txtQueteL1.set_text("Entrer dans l'ordinateur")
            txtQueteL2.set_text("")
def creerTuileSol(coinSupDrtCol8: number, coinInfDrtRow8: number, coinSupDrtRow7: number, coinSupGchCol7: number, Maison4: bool):
    X23 = 0
    while X23 <= coinSupDrtCol8:
        Y23 = 0
        while Y23 <= coinInfDrtRow8:
            if X23 >= coinSupGchCol7 + 1 and X23 <= coinSupDrtCol8 - 1 and (Y23 >= coinSupDrtRow7 + 1 and Y23 <= coinInfDrtRow8 - 1):
                tiles.set_tile_at(tiles.get_tile_location(X23, Y23),
                    assets.tile("""
                        tileSol1
                    """))
            if Maison4:
                if X23 > 30 and X23 < 34 and (Y23 > 24 and Y23 < 28):
                    tiles.set_tile_at(tiles.get_tile_location(X23, Y23),
                        assets.tile("""
                            myTile18
                        """))
                if X23 == coinSupGchCol7 and (Y23 >= coinSupDrtPmaisonRow + 1 and Y23 <= coinInfDrtPmaisonRow - 1):
                    tiles.set_tile_at(tiles.get_tile_location(X23, Y23),
                        assets.tile("""
                            tileSol1
                        """))
            Y23 += 1
        X23 += 1
def estDansStudio(coinSupDrtCol9: number, coinSupDrtRow8: number, coinInfDrtRow9: number, coinSupGchCol8: number):
    if estRDCStudio(coinSupDrtCol9,
        coinSupDrtRow8,
        coinInfDrtRow9,
        coinSupGchCol8) or estEtageStudio(coinSupDrtCol9,
        coinSupDrtRow8,
        coinInfDrtRow9,
        coinSupGchCol8):
        return True
    else:
        return False
def creerTuileMur(coinSupDrtCol10: number, coinInfDrtRow10: number, coinSupDrtRow9: number, coinSupGchCol9: number, Maison5: bool):
    X24 = 0
    while X24 <= coinSupDrtCol10:
        Y24 = 0
        while Y24 <= coinInfDrtRow10:
            if Maison5:
                if Y24 == coinSupDrtRow9 and X24 >= coinSupGchCol9:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur6
                        """))
                if Y24 == coinInfDrtRow10 and X24 >= coinSupGchCol9:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur6
                        """))
                if X24 == coinSupGchCol9 and (Y24 >= coinSupDrtRow9 and Y24 <= coinInfDrtRow10):
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur3
                        """))
                if X24 == coinSupDrtCol10 and (Y24 >= coinSupDrtRow9 and Y24 <= coinInfDrtRow10):
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur3
                        """))
                if (X24 == 26 or X24 == 30) and Y24 == coinSupDrtRow9:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            myTile14
                        """))
                if X24 == 39 and (Y24 == 24 or Y24 == 28):
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            myTile16
                        """))
                if X24 == 26 and Y24 == coinInfDrtRow10:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            myTile13
                        """))
            if coinSupGchCol9 <= rdcGchDrt and coinSupDrtRow9 <= rdcHtBs:
                if Y24 == coinSupDrtRow9 and X24 >= coinSupGchCol9:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur6
                        """))
                if Y24 == coinInfDrtRow10 and X24 >= coinSupGchCol9:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur6
                        """))
                if X24 == coinSupGchCol9 and (Y24 >= coinSupDrtRow9 and Y24 <= coinInfDrtRow10):
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur3
                        """))
                if X24 == coinSupDrtCol10 and (Y24 >= coinSupDrtRow9 and Y24 <= coinInfDrtRow10):
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur3
                        """))
            else:
                if Y24 == coinSupDrtRow9 and X24 >= coinSupGchCol9:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur2
                        """))
                if Y24 == coinInfDrtRow10 and X24 >= coinSupGchCol9:
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur4
                        """))
                if X24 == coinSupGchCol9 and (Y24 >= coinSupDrtRow9 and Y24 <= coinInfDrtRow10):
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur1
                        """))
                if X24 == coinSupDrtCol10 and (Y24 >= coinSupDrtRow9 and Y24 <= coinInfDrtRow10):
                    tiles.set_tile_at(tiles.get_tile_location(X24, Y24),
                        assets.tile("""
                            tileMur0
                        """))
            Y24 += 1
        X24 += 1
def estRDCStudio(coinSupDrtCol11: number, coinSupDrtRow10: number, coinInfDrtRow11: number, coinSupGchCol10: number):
    if Joueur.x < coinSupDrtCol11 * 16 and Joueur.x > coinSupGchCol10 * 16 and Joueur.y > coinSupDrtRow10 * 16:
        return True
    else:
        return False
def creeMurInterieur(coinSupDrtCol12: number, coinInfDrtRow12: number, coinSupDrtRow11: number, coinSupGchCol11: number, Maison6: bool):
    X232 = 0
    while X232 <= coinSupDrtCol12:
        Y232 = 0
        while Y232 <= coinInfDrtRow12:
            if Maison6:
                if X232 == 26 and (Y232 > coinSupDrtRow11 and Y232 < coinInfDrtRow12):
                    if Y232 == 14 or Y232 == 25:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur10
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif Y232 == 17 or Y232 == 28:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur9
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif not (Y232 == 15 or Y232 == 16 or (Y232 == 26 or Y232 == 27)):
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur3
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    else:
                        pass
                if X232 == 30 and (Y232 > coinSupDrtRow11 and Y232 < 28):
                    if Y232 == 24:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                myTile27
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif Y232 == 14:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur10
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif Y232 == 17:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur9
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif Y232 == 25:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur14
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif Y232 == 27:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur15
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif not (Y232 == 15 or Y232 == 16 or Y232 == 26):
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur3
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    else:
                        pass
                if Y232 == 24 and (X232 > 30 and X232 < coinSupDrtCol12):
                    if X232 == 34:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                myTile26
                            """))
                    elif X232 > 30 and X232 < 34:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur11
                            """))
                    else:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur6
                            """))
                    tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                if Y232 == 28 and (X232 > 30 and X232 < coinSupDrtCol12):
                    if X232 == 34:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                myTile28
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif X232 == 35:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur7
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif X232 == 38:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur8
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif not (X232 == 36 or X232 == 37):
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur13
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    else:
                        pass
                if X232 == 30 and Y232 == 28:
                    tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                        assets.tile("""
                            myTile19
                        """))
                    tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                if X232 == 34 and (Y232 > 24 and Y232 < 27):
                    tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                        assets.tile("""
                            tileMur12
                        """))
                    tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                if X232 == 34 and Y232 == 27:
                    tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                        assets.tile("""
                            tileMur16
                        """))
                    tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                if X232 == coinSupGchCol11 and (Y232 > 22 and Y232 < coinInfDrtRow12 - 1):
                    if Y232 == 23:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur10
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif Y232 == 26:
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur9
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    elif not (Y232 == 24 or Y232 == 25):
                        tiles.set_tile_at(tiles.get_tile_location(X232, Y232),
                            assets.tile("""
                                tileMur3
                            """))
                        tiles.set_wall_at(tiles.get_tile_location(X232, Y232), True)
                    else:
                        pass
            else:
                pass
            Y232 += 1
        X232 += 1
def appuisBtnAsc():
    if Joueur.tile_kind_at(TileDirection.RIGHT, assets.tile("""
        tileMur16
    """)):
        stopMove()
        story.show_player_choices("1er Etage", "2e Etage")
        if story.check_last_answer("1er Etage"):
            music.play(music.create_song(assets.song("""
                    dansAsc
                """)),
                music.PlaybackMode.IN_BACKGROUND)
            Joueur.set_position(Joueur.x - 1 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.set_position(Joueur.x + 54 * 16, Joueur.y - 50 * 16)
            music.stop_all_sounds()
        else:
            music.play(music.create_song(assets.song("""
                    dansAsc
                """)),
                music.PlaybackMode.IN_BACKGROUND)
            Joueur.set_position(Joueur.x - 1 * 16, Joueur.y + 49 * 16)
            pause(6000)
            Joueur.set_position(Joueur.x + 84 * 16, Joueur.y - 50 * 16)
            music.stop_all_sounds()
        music.play(music.create_song(assets.song("""
                AscArrivé
            """)),
            music.PlaybackMode.IN_BACKGROUND)
    elif Joueur.tile_kind_at(TileDirection.RIGHT, assets.tile("""
        tileMur17
    """)):
        stopMove()
        story.show_player_choices("RdC", "2e Etage")
        if story.check_last_answer("RdC"):
            music.play(music.create_song(assets.song("""
                    dansAsc
                """)),
                music.PlaybackMode.IN_BACKGROUND)
            Joueur.set_position(Joueur.x - 55 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.set_position(Joueur.x, Joueur.y - 50 * 16)
            music.stop_all_sounds()
        else:
            music.play(music.create_song(assets.song("""
                    dansAsc
                """)),
                music.PlaybackMode.IN_BACKGROUND)
            Joueur.set_position(Joueur.x - 55 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.set_position(Joueur.x + 84 * 16, Joueur.y - 50 * 16)
            music.stop_all_sounds()
        music.play(music.create_song(assets.song("""
                AscArrivé
            """)),
            music.PlaybackMode.IN_BACKGROUND)
    elif Joueur.tile_kind_at(TileDirection.RIGHT, assets.tile("""
        tileMur18
    """)):
        stopMove()
        story.show_player_choices("RdC", "1er Etage")
        if story.check_last_answer("RdC"):
            music.play(music.create_song(assets.song("""
                    dansAsc
                """)),
                music.PlaybackMode.IN_BACKGROUND)
            Joueur.set_position(Joueur.x - 85 * 16, Joueur.y + 49 * 16)
            pause(6000)
            Joueur.set_position(Joueur.x, Joueur.y - 50 * 16)
            music.stop_all_sounds()
        else:
            music.play(music.create_song(assets.song("""
                    dansAsc
                """)),
                music.PlaybackMode.IN_BACKGROUND)
            Joueur.set_position(Joueur.x - 85 * 16, Joueur.y + 49 * 16)
            pause(3000)
            Joueur.set_position(Joueur.x + 54 * 16, Joueur.y - 50 * 16)
            music.stop_all_sounds()
        music.play(music.create_song(assets.song("""
                AscArrivé
            """)),
            music.PlaybackMode.IN_BACKGROUND)
    startMove()
def startMove():
    controller.move_sprite(Joueur, 100, 100)

def on_add_handler_update_priority_modifier_after_camera():
    curseur2.left = scene.camera_property(CameraProperty.LEFT) + 0
    curseur2.top = scene.camera_property(CameraProperty.TOP) + 28
    if q1MDP:
        q1MDP.left = scene.camera_property(CameraProperty.LEFT) + 2
        q1MDP.top = scene.camera_property(CameraProperty.TOP) + 30
spriteutils.add_event_handler(spriteutils.UpdatePriorityModifier.AFTER,
    spriteutils.UpdatePriority.CAMERA,
    on_add_handler_update_priority_modifier_after_camera)

def on_on_overlap2(sprite5, otherSprite2):
    global isPCOn
    if controller.A.is_pressed():
        isPCOn = 0
        sprites.destroy(logOutIcon)
        sprites.destroy(curseur3)
        scene.camera_follow_sprite(Joueur)
        controller.move_sprite(curseur3, 0, 0)
        controller.move_sprite(Joueur)
        game.splash("Quete ", "" + str(numQuete2) + ": Terminée")
        info.change_score_by(100)
sprites.on_overlap(SpriteKind.player, SpriteKind.Icon, on_on_overlap2)

def on_on_overlap3(sprite6, otherSprite3):
    tiles.place_on_tile(sprite6,
        tiles.get_tile_location(Math.floor(sprite6.x / 16), Math.floor(sprite6.y / 16)))
sprites.on_overlap(SpriteKind.player, SpriteKind.PNJ, on_on_overlap3)

def estEtageStudio(coinSupDrtCol13: number, coinSupDrtRow12: number, coinInfDrtRow13: number, coinSupGchCol12: number):
    if Joueur.x < (coinSupDrtCol13 + 63) * 16 and Joueur.x > (coinSupGchCol12 + 63) * 16 and Joueur.y > coinSupDrtRow12 * 16:
        return True
    else:
        return False

def on_a_pressed():
    global isCursorVisible
    if Math.floor(Joueur.x / 16) == posPorteStudioCol + 1 and Math.floor(Joueur.y / 16) == posPorteStudioRow:
        if game.ask("Voulez vous entrer?"):
            tiles.place_on_tile(Joueur,
                tiles.get_tile_location(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtStudioCol,
                coinInfDrtSudioRow,
                coinSupDrtStudioRow,
                coinSupGchStudioCol,
                posPorteStudioCol,
                posPorteStudioRow,
                False)
            PC2.set_flag(SpriteFlag.INVISIBLE, False)
            PNJ1.set_flag(SpriteFlag.INVISIBLE, False)
    elif Math.floor(Joueur.x / 16) == posPorteStudioCol - 1 and Math.floor(Joueur.y / 16) == posPorteStudioRow:
        if game.ask("Voulez vous Sortir?"):
            tiles.place_on_tile(Joueur,
                tiles.get_tile_location(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creeTuileToit(coinSupDrtStudioCol,
                coinInfDrtSudioRow,
                coinSupDrtStudioRow,
                coinSupGchStudioCol)
            PC2.set_flag(SpriteFlag.INVISIBLE, True)
            PNJ1.set_flag(SpriteFlag.INVISIBLE, True)
    if Math.floor(Joueur.x / 16) == posPorteAtelierCol - 1 and Math.floor(Joueur.y / 16) == posPorteAtelierRow:
        if game.ask("Voulez vous entrer?"):
            tiles.place_on_tile(Joueur,
                tiles.get_tile_location(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtAtelierCol,
                coinInfDrtAtelierRow,
                coinSupDrtAtelierRow,
                coinSupGchAtelierCol,
                posPorteAtelierCol,
                posPorteAtelierRow,
                False)
    elif Math.floor(Joueur.x / 16) == posPorteAtelierCol + 1 and Math.floor(Joueur.y / 16) == posPorteAtelierRow:
        if game.ask("Voulez vous Sortir?"):
            tiles.place_on_tile(Joueur,
                tiles.get_tile_location(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creeTuileToit(coinSupDrtAtelierCol,
                coinInfDrtAtelierRow,
                coinSupDrtAtelierRow,
                coinSupGchAtelierCol)
    if Math.floor(Joueur.x / 16) == posPorteMaisonCol + 1 and Math.floor(Joueur.y / 16) == posPorteMaisonRow:
        if game.ask("Voulez vous entrer?"):
            tiles.place_on_tile(Joueur,
                tiles.get_tile_location(Math.floor(Joueur.x / 16) - 2, Math.floor(Joueur.y / 16)))
            creerIntBat(coinSupDrtPmaisonCol,
                coinInfDrtPmaisonRow,
                coinSupDrtPmaisonRow,
                coinSupGchPmaisonCol,
                posPorteMaisonCol,
                posPorteMaisonRow,
                False)
            creerIntBat(coinSupDrtMaisonCol,
                coinInfDrtMaisonRow,
                coinSupDrtMaisonRow,
                coinSupGchMaisonCol,
                posPorteMaisonCol,
                posPorteMaisonRow,
                True)
    elif Math.floor(Joueur.x / 16) == posPorteMaisonCol - 1 and Math.floor(Joueur.y / 16) == posPorteMaisonRow:
        if game.ask("Voulez vous Sortir?"):
            tiles.place_on_tile(Joueur,
                tiles.get_tile_location(Math.floor(Joueur.x / 16) + 2, Math.floor(Joueur.y / 16)))
            creeTuileToit(coinSupDrtPmaisonCol,
                coinInfDrtPmaisonRow,
                coinSupDrtPmaisonRow,
                coinSupGchPmaisonCol)
            creeTuileToit(coinSupDrtMaisonCol,
                coinInfDrtMaisonRow,
                coinSupDrtMaisonRow,
                coinSupGchMaisonCol)
    if Math.floor(Joueur.x / 16) == 11 and Math.floor(Joueur.y / 16) == 56 or Math.floor(Joueur.x / 16) == 11 and Math.floor(Joueur.y / 16) == 58:
        game.splash("Le Studio")
    if Math.floor(Joueur.x / 16) == 39 and Math.floor(Joueur.y / 16) == 56 or Math.floor(Joueur.x / 16) == 39 and Math.floor(Joueur.y / 16) == 58:
        game.splash("L'Atelier")
    if Math.floor(Joueur.x / 16) == 42 and Math.floor(Joueur.y / 16) == 29 or Math.floor(Joueur.x / 16) == 42 and Math.floor(Joueur.y / 16) == 31:
        game.splash("La Maison")
    for valeur2 in sprites.all_of_kind(SpriteKind.PNJ):
        if Math.floor(Joueur.y / 16) == Math.floor(valeur2.y / 16) and (Math.floor(Joueur.x / 16) - Math.floor(valeur2.x / 16) == 1 or Math.ceil(Joueur.x / 16) - Math.floor(valeur2.x / 16) == 0) or Math.floor(Joueur.x / 16) == Math.floor(valeur2.x / 16) and (Math.floor(Joueur.y / 16) - Math.floor(valeur2.y / 16) == 1 or Math.ceil(Joueur.y / 16) - Math.floor(valeur2.y / 16) == 0):
            game.set_dialog_frame(img("""
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
            """))
            if Math.percent_chance(90):
                info.change_score_by(10)
                game.show_long_text("bonjour mario!", DialogLayout.BOTTOM)
                game.show_long_text("Tu doit trouver le Mot de Passe du PC!",
                    DialogLayout.BOTTOM)
                if numQuete2 == 0:
                    debutQuete()
            else:
                info.change_score_by(100)
                game.show_long_text("Mario!!!!", DialogLayout.BOTTOM)
                game.show_long_text("On est pas dans le bon jeu!!!!!", DialogLayout.BOTTOM)
    if q1MDP and isCursorVisible == 1:
        if curseur2.overlaps_with(q1MDP):
            info.change_score_by(10)
            game.splash("le MDP est: ", mdpPC)
            curseur2.set_flag(SpriteFlag.INVISIBLE, True)
            isCursorVisible = 0
    logInPC()
    appuisBtnAsc()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def creeTuileToit(coinSupDrtCol14: number, coinInfDrtRow14: number, coinSupDrtRow13: number, coinSupGchCol13: number):
    X223 = 0
    while X223 <= coinSupDrtCol14:
        Y223 = 0
        while Y223 <= coinInfDrtRow14:
            if X223 < coinSupGchCol13 + Math.floor((coinSupDrtCol14 - coinSupGchCol13) / 2) and Y223 >= coinSupDrtRow13 and X223 >= coinSupGchCol13:
                tiles.set_tile_at(tiles.get_tile_location(X223, Y223),
                    assets.tile("""
                        tuile3
                    """))
            if X223 == coinSupGchCol13 + Math.floor((coinSupDrtCol14 - coinSupGchCol13) / 2) and Y223 >= coinSupDrtRow13:
                tiles.set_tile_at(tiles.get_tile_location(X223, Y223),
                    assets.tile("""
                        tileToitCtr1
                    """))
            if X223 == coinSupGchCol13 + Math.ceil((coinSupDrtCol14 - coinSupGchCol13) / 2) and Y223 >= coinSupDrtRow13:
                tiles.set_tile_at(tiles.get_tile_location(X223, Y223),
                    assets.tile("""
                        tileToitCtr2
                    """))
            if X223 > coinSupGchCol13 + Math.ceil((coinSupDrtCol14 - coinSupGchCol13) / 2) and Y223 >= coinSupDrtRow13:
                tiles.set_tile_at(tiles.get_tile_location(X223, Y223),
                    assets.tile("""
                        tuile2
                    """))
            Y223 += 1
        X223 += 1
logOutIcon: Sprite = None
curseur3: Sprite = None
tempQ1MDP: Sprite = None
q1MDP: Sprite = None
posEscalierStudio: List[List[number]] = []
posEscAtelier: List[List[number]] = []
txtQueteL2: TextSprite = None
txtQueteL1: TextSprite = None
numQuete2 = 0
coinInfDrtPmaisonRow = 0
coinSupDrtPmaisonRow = 0
coinSupDrtPmaisonCol = 0
coinSupGchPmaisonCol = 0
posPorteMaisonRow = 0
posPorteMaisonCol = 0
coinInfDrtMaisonRow = 0
coinSupDrtMaisonRow = 0
coinSupDrtMaisonCol = 0
coinSupGchMaisonCol = 0
posPorteAtelierRow = 0
posPorteAtelierCol = 0
coinInfDrtAtelierRow = 0
coinSupDrtAtelierRow = 0
coinSupDrtAtelierCol = 0
coinSupGchAtelierCol = 0
posPorteStudioRow = 0
posPorteStudioCol = 0
coinInfDrtSudioRow = 0
coinSupDrtStudioRow = 0
coinSupDrtStudioCol = 0
coinSupGchStudioCol = 0
PNJ1: Sprite = None
Joueur: Sprite = None
PC2: Sprite = None
isPCOn = 0
isCursorVisible = 0
curseur2: Sprite = None
mdpPC = ""
rdcHtBs = 0
rdcGchDrt = 0
songAtelier = music.create_song(assets.song("""
    Atelier
"""))
songStudio = music.create_song(assets.song("""
    Studio
"""))
songJardin = music.create_song(assets.song("""
    Jardin
"""))
songMaison = music.create_song(assets.song("""
    Maison
"""))
mySprite = sprites.create(assets.image("""
    croix
"""), SpriteKind.player)
debug = 0
rdcLargeur = 52
rdcHauteur = 62
rdcGchDrt = rdcLargeur / 2
rdcHtBs = rdcLargeur / 2
info.set_score(0)
mdpPC = "P"
curseur2 = sprites.create(assets.image("""
    spriteCurseur
"""), SpriteKind.Curseur)
isCursorVisible = 0
isPCOn = 0
tiles.set_current_tilemap(tilemap("""
    niveau0
"""))
PC2 = sprites.create(assets.image("""
    SpritePc
"""), SpriteKind.PC)
Joueur = sprites.create(assets.image("""
    Mario
"""), SpriteKind.player)
PNJ1 = sprites.create(assets.image("""
    Luigi
"""), SpriteKind.PNJ)
controller.move_sprite(Joueur, 100, 100)
scene.camera_follow_sprite(Joueur)
Joueur.set_flag(SpriteFlag.SHOW_PHYSICS, True)
tiles.place_on_tile(PC2, tiles.get_tile_location(1, 41))
tiles.place_on_tile(Joueur, tiles.get_tile_location(11, 55))
tiles.place_on_tile(PNJ1, tiles.get_tile_location(5, 55))
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
PNJ1.set_flag(SpriteFlag.INVISIBLE, True)
PC2.set_flag(SpriteFlag.INVISIBLE, True)
curseur2.left = scene.camera_property(CameraProperty.LEFT) + 0
curseur2.top = scene.camera_property(CameraProperty.TOP) + 28
curseur2.z = 0
curseur2.set_flag(SpriteFlag.INVISIBLE, True)
numQuete2 = 0
txtQueteL1 = textsprite.create("", 1, 15)
txtQueteL2 = textsprite.create("", 1, 15)
txtQueteL1.left = 0
txtQueteL1.top = 0
txtQueteL1.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
txtQueteL2.left = 0
txtQueteL2.top = 8
txtQueteL1.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
txtQueteL2.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
posEscalierStudio = [[7 * 16 + 8, 70 * 16 + 8], [61 * 16 + 8, 61 * 16 + 8]]
posEscAtelier = [[51 * 16 + 8, 91 * 16 + 8], [59 * 16 + 8, 59 * 16 + 8]]
test2 = 0

def on_forever():
    if estDansStudio(coinSupDrtStudioCol,
        coinSupDrtStudioRow,
        coinInfDrtSudioRow,
        coinSupGchStudioCol):
        if Joueur.left <= posEscalierStudio[0][0] and Joueur.left >= posEscalierStudio[0][0] - 8 and Joueur.y == posEscalierStudio[1][0]:
            Joueur.set_position(posEscalierStudio[0][1], posEscalierStudio[1][1])
        if Joueur.left >= posEscalierStudio[0][1] and Joueur.y == posEscalierStudio[1][1]:
            Joueur.set_position(posEscalierStudio[0][0] + 16, posEscalierStudio[1][0])
    if estDansAtelier(coinSupDrtAtelierCol,
        coinSupDrtAtelierRow,
        coinInfDrtAtelierRow,
        coinSupGchAtelierCol):
        if Joueur.top <= posEscAtelier[1][0] and Joueur.top >= posEscAtelier[1][0] - 8 and Math.ceil(Joueur.x / 16) == Math.ceil(posEscAtelier[0][0] / 16):
            Joueur.set_position(posEscAtelier[0][1], posEscAtelier[1][1])
        if Joueur.top >= posEscAtelier[1][1] and Math.ceil(Joueur.x / 16) == Math.ceil(posEscAtelier[0][1] / 16):
            Joueur.set_position(posEscAtelier[0][0], posEscAtelier[1][0] + 16)
    if Math.ceil(Joueur.x / 16) == 30 and Math.ceil(Joueur.y / 16) == 26:
        Joueur.set_position((30 * 16) + 8, (26 * 16) + 8)
    if Math.ceil(Joueur.x / 16) == 84 and Math.ceil(Joueur.y / 16) == 26:
        Joueur.set_position((84 * 16) + 8, (26 * 16) + 8)
    if Math.ceil(Joueur.x / 16) == 114 and Math.ceil(Joueur.y / 16) == 26:
        Joueur.set_position((114 * 16) + 8, (26 * 16) + 8)
forever(on_forever)

def on_on_update():
    pass
game.on_update(on_on_update)
