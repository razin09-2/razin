namespace SpriteKind {
    export const pop1 = SpriteKind.create()
    export const pic = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, null, function (sprite, undefined) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 500)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.moveWithController(2, 2, 2)
    mySprite3 = sprites.create(, SpriteKind.Player)
    mySprite3.setFlag(SpriteFlag.RelativeToCamera, true)
})
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
scene.setBackgroundImage()
tiles.setCurrentTilemap(0)
let hand = sprites.create(, SpriteKind.Player)
scaling.scaleToPixels(hand, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
hand.setFlag(SpriteFlag.RelativeToCamera, true)
hand.setPosition(110, 70)
