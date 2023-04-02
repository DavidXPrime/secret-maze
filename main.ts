input.onButtonPressed(Button.A, function () {
    cursor_position.move(-1)
})
input.onButtonPressed(Button.B, function () {
    cursor_position.turn(Direction.Right, 90)
    cursor_position.move(1)
    cursor_position.turn(Direction.Left, 90)
})
let cursor_position: game.LedSprite = null
cursor_position = game.createSprite(0, 0)
cursor_position.turn(Direction.Left, 90)
basic.forever(function () {
    if (cursor_position.get(LedSpriteProperty.X) == 0 && cursor_position.get(LedSpriteProperty.Y) == 1) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 1 && cursor_position.get(LedSpriteProperty.Y) == 2) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 2 && cursor_position.get(LedSpriteProperty.Y) == 0) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 3 && cursor_position.get(LedSpriteProperty.Y) == 0) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 4 && cursor_position.get(LedSpriteProperty.Y) == 1) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 4 && cursor_position.get(LedSpriteProperty.Y) == 2) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 4 && cursor_position.get(LedSpriteProperty.Y) == 3) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 2 && cursor_position.get(LedSpriteProperty.Y) == 2) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 2 && cursor_position.get(LedSpriteProperty.Y) == 3) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 2 && cursor_position.get(LedSpriteProperty.Y) == 4) {
        cursor_position.delete()
        cursor_position = game.createSprite(0, 0)
    }
    if (cursor_position.get(LedSpriteProperty.X) == 4 && cursor_position.get(LedSpriteProperty.Y) == 4) {
    	
    }
})
