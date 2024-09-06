namespace SpriteKind {
    export const pop1 = SpriteKind.create()
    export const pic = SpriteKind.create()
    export const onoi = SpriteKind.create()
    export const i = SpriteKind.create()
    export const dot = SpriteKind.create()
}
namespace StatusBarKind {
    export const invotery = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (dot.x == 2 && dot.y == 0) {
        tiles.setCurrentTilemap(tilemap`level4`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (dot.x == 10) {
            tiles.setCurrentTilemap(tilemap`level2`)
            mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        } else {
            tiles.setCurrentTilemap(tilemap`level2`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite2 = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f f f f f f f f f f f f 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f f f f f f f f f f f f 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 
            1 1 f f f f f f f f f f f f 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.onoi)
        mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
        scaling.scaleToPixels(mySprite2, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        mySprite2.setPosition(125, 70)
        dot = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
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
            `, SpriteKind.Player)
        dot.setPosition(2, 0)
        statusbar2 = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 f f f f f f f f f f 1 1 f 
            f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 f f f f f f f f f f 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 
            f 1 1 f f f f f f f f f f 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.StatusBar)
        scaling.scaleToPixels(statusbar2, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        statusbar2.setFlag(SpriteFlag.RelativeToCamera, true)
        statusbar2.setPosition(78, 111)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (dot1.x == 1 && dot1.y == 0) {
            game.gameOver(true)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    mySprite.setPosition(125, 30)
})
controller.combos.attachCombo("a+b", function () {
    if (mySprite6.x == 77) {
        statusbar9 = sprites.create(img`
            d d d d d d d d d d d d d d d d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d d d d d d d d d d d d d d d d 
            `, SpriteKind.StatusBar)
        scaling.scaleToPixels(statusbar9, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        statusbar9.setFlag(SpriteFlag.RelativeToCamera, true)
        statusbar9.setPosition(78, 111)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (game.askForString("what is the number and number minus one?", 2) == "ed") {
            mySprite.setPosition(125, 30)
            mySprite4 = sprites.create(img`
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                d d d d d f f f f d d d d d d d 
                d d d d f 1 1 1 1 f e e d d d d 
                d d d d d f f f 1 1 e e d d d d 
                d d d d d d d d e 1 1 f d d d d 
                d d d d d d d e e e 1 1 f d d d 
                d d d d d d e e e d f 1 f d d d 
                d d d d d e e e d d f 1 f d d d 
                d d d d e e e d d d f 1 f d d d 
                d d d e e e d d d d d f d d d d 
                d d d e e d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                `, SpriteKind.pic)
            mySprite4.setFlag(SpriteFlag.RelativeToCamera, true)
            scaling.scaleToPixels(mySprite4, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            statusbar5 = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 f f f f 1 1 1 1 1 1 f 
                f 1 1 1 f 1 1 1 1 f e e 1 1 1 f 
                f 1 1 1 1 f f f 1 1 e e 1 1 1 f 
                f 1 1 1 1 1 1 1 e 1 1 f 1 1 1 f 
                f 1 1 1 1 1 1 e e e 1 1 f 1 1 f 
                f 1 1 1 1 1 e e e 1 f 1 f 1 1 f 
                f 1 1 1 1 e e e 1 1 f 1 f 1 1 f 
                f 1 1 1 e e e 1 1 1 f 1 f 1 1 f 
                f 1 1 e e e 1 1 1 1 1 f 1 1 1 f 
                f 1 1 e e 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.StatusBar)
            scaling.scaleToPixels(statusbar5, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            statusbar5.setFlag(SpriteFlag.RelativeToCamera, true)
            statusbar5.setPosition(96, 111)
            mySprite4.setPosition(123, 70)
            dot.setPosition(10, 0)
            statusbar6 = sprites.create(img`
                d d d d d d d d d d d d d d d d 
                d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
                d 1 1 f f f f f f f f f f 1 1 d 
                d 1 1 f 1 1 1 1 1 1 1 1 1 1 1 d 
                d 1 1 f 1 1 1 1 1 1 1 1 1 1 1 d 
                d 1 1 f 1 1 1 1 1 1 1 1 1 1 1 d 
                d 1 1 f 1 1 1 1 1 1 1 1 1 1 1 d 
                d 1 1 f f f f f f f f f f 1 1 d 
                d 1 1 1 1 1 1 1 1 1 1 1 f 1 1 d 
                d 1 1 1 1 1 1 1 1 1 1 1 f 1 1 d 
                d 1 1 1 1 1 1 1 1 1 1 1 f 1 1 d 
                d 1 1 f f f f f f f f f f 1 1 d 
                d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
                d d d d d d d d d d d d d d d d 
                `, SpriteKind.StatusBar)
            scaling.scaleToPixels(statusbar6, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            statusbar6.setFlag(SpriteFlag.RelativeToCamera, true)
            statusbar6.setPosition(78, 111)
        } else {
            mySprite.setPosition(125, 30)
            game.setGameOverMessage(false, "GAME OVER!")
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite.setPosition(24, 58)
        dot.setPosition(2, 0)
        C = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f f f f f f f f f f f f 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 f f f f f f f f f f f f 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.i)
        C.setFlag(SpriteFlag.RelativeToCamera, true)
        scaling.scaleToPixels(C, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        C.setPosition(123, 70)
        statusbar7 = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.StatusBar)
        scaling.scaleToPixels(statusbar7, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        statusbar7.setFlag(SpriteFlag.RelativeToCamera, true)
        statusbar7.setPosition(60, 111)
        statusbar8 = sprites.create(img`
            d d d d d d d d d d d d d d d d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 f f f f 1 1 1 1 1 1 d 
            d 1 1 1 f d d d d f e e 1 1 1 d 
            d 1 1 1 1 f f f d d e e 1 1 1 d 
            d 1 1 1 1 1 1 1 e 1 d f 1 1 1 d 
            d 1 1 1 1 1 1 e e e d d f 1 1 d 
            d 1 1 1 1 1 e e e 1 f d f 1 1 d 
            d 1 1 1 1 e e e 1 1 f d f 1 1 d 
            d 1 1 1 e e e 1 1 1 f d f 1 1 d 
            d 1 1 e e e 1 1 1 1 1 f 1 1 1 d 
            d 1 1 e e 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
            d d d d d d d d d d d d d d d d 
            `, SpriteKind.StatusBar)
        scaling.scaleToPixels(statusbar8, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        statusbar8.setFlag(SpriteFlag.RelativeToCamera, true)
        statusbar8.setPosition(96, 111)
        dot1 = sprites.create(img`
            8 . . . . . . . . . . . . . . . 
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
            `, SpriteKind.Player)
        dot1.setPosition(1, 0)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.moveWithController(2, 2, 2)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite3.setFlag(SpriteFlag.RelativeToCamera, true)
})
function copy () {
    statusbar = sprites.create(img`
        d d d d d d d d d d d d d d d d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
        d d d d d d d d d d d d d d d d 
        `, SpriteKind.StatusBar)
    scaling.scaleToPixels(statusbar, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    statusbar.setFlag(SpriteFlag.RelativeToCamera, true)
    statusbar.setPosition(78, 111)
}
let mySprite3: Sprite = null
let statusbar8: Sprite = null
let statusbar7: Sprite = null
let C: Sprite = null
let statusbar6: Sprite = null
let statusbar5: Sprite = null
let mySprite4: Sprite = null
let statusbar9: Sprite = null
let dot1: Sprite = null
let statusbar2: Sprite = null
let mySprite2: Sprite = null
let dot: Sprite = null
let mySprite6: Sprite = null
let statusbar: Sprite = null
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setCurrentTilemap(tilemap`level2`)
let hand = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 6 6 6 6 6 . . . 
    . . . . . . . 6 d d 6 d d 6 . . 
    . . . . . . . . 6 d d 6 d d 6 . 
    . . . . . . . . . 6 7 7 6 7 7 6 
    . . . . . . . . . . 6 7 7 6 7 7 
    . . . . . . . . . . . 6 7 7 6 7 
    . . . . . . . . . . . . 6 7 7 6 
    . . . . . . . . . . . . . 6 7 7 
    `, SpriteKind.Player)
scaling.scaleToPixels(hand, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
hand.setFlag(SpriteFlag.RelativeToCamera, true)
hand.setPosition(110, 70)
statusbar = sprites.create(img`
    d d d d d d d d d d d d d d d d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d d d d d d d d d d d d d d d 
    `, SpriteKind.StatusBar)
scaling.scaleToPixels(statusbar, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
statusbar.setFlag(SpriteFlag.RelativeToCamera, true)
statusbar.setPosition(78, 111)
let statusbar3 = sprites.create(img`
    d d d d d d d d d d d d d d d d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d d d d d d d d d d d d d d d 
    `, SpriteKind.StatusBar)
scaling.scaleToPixels(statusbar3, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
statusbar3.setFlag(SpriteFlag.RelativeToCamera, true)
statusbar3.setPosition(96, 111)
let statusbar4 = sprites.create(img`
    d d d d d d d d d d d d d d d d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d d d d d d d d d d d d d d d 
    `, SpriteKind.StatusBar)
scaling.scaleToPixels(statusbar4, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
statusbar4.setFlag(SpriteFlag.RelativeToCamera, true)
statusbar4.setPosition(60, 111)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.dot)
mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.dot)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
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
    `, SpriteKind.dot)
mySprite5.setPosition(60, 111)
mySprite6.setPosition(78, 111)
mySprite7.setPosition(96, 111)
mySprite5.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite6.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite7.setFlag(SpriteFlag.RelativeToCamera, true)
