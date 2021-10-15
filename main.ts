function Character_Animations () {
    characterAnimations.loopFrames(
    player_1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . . f f 6 6 f f . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f f 8 8 8 8 8 8 f f . . . 
        . . f f 8 6 6 6 6 6 6 8 f f . . 
        . . f 8 6 f f f f f f 6 8 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 6 6 6 6 6 6 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 6 6 f f . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f f 8 8 8 8 8 8 f f . . . 
        . . f f 8 6 6 6 6 6 6 8 f f . . 
        . f f 8 6 f f f f f f 6 8 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 8 8 8 8 e d d 4 e . . 
        . . e 4 f 6 6 6 6 e d d e . . . 
        . . . . f 8 8 8 8 8 e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f f 6 6 f f . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f f 8 8 8 8 8 8 f f . . . 
        . . f f 8 6 6 6 6 6 6 8 f f . . 
        . . f 8 6 f f f f f f 6 8 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 6 6 6 6 6 6 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 6 6 f f . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f f 8 8 8 8 8 8 f f . . . 
        . . f f 8 6 6 6 6 6 6 8 f f . . 
        . f f 8 6 f f f f f f 6 8 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 8 8 8 8 f e f . . 
        . . . e d d e 6 6 6 6 f 4 e . . 
        . . . . e e f 8 8 8 8 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    player_1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 6 6 f f f f f . . 
        . . f f e 6 e 6 6 e 6 e f f . . 
        . . f e 6 f 6 f f 6 f 6 e f . . 
        . . f f f 6 6 e e 6 6 f f f . . 
        . f f e f 6 f e e f 6 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 6 6 6 6 6 6 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 6 6 f f f f . . . 
        . . f f e 6 e 6 6 e 6 e f f . . 
        . . f e 6 f 6 f f f 6 f e f . . 
        . . f f f 6 f e e 6 6 f f f . . 
        . . f e 6 f f e e 6 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 6 6 6 6 6 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 6 6 f f f f f . . 
        . . f f e 6 e 6 6 e 6 e f f . . 
        . . f e 6 f 6 f f 6 f 6 e f . . 
        . . f f f 6 6 e e 6 6 f f f . . 
        . f f e f 6 f e e f 6 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 6 6 6 6 6 6 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 6 6 f f f f . . . 
        . . f f e 6 e 6 6 e 6 e f f . . 
        . . f e f 6 f f f 6 f 6 e f . . 
        . . f f f 6 6 e e f 6 f f f . . 
        . . f e e f 6 e e f f 6 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 6 6 6 6 6 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player_1,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 6 f e e e e f f . . . . 
        . . f 6 6 6 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 6 6 6 6 e e f f f f . . . 
        . f 6 e f f f f 6 6 6 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 6 6 6 e d d e . . . . . 
        . . . f 8 8 8 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 6 f e e e e f f . . . . 
        . . f 6 6 6 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 6 6 6 6 e e f f f f . . . 
        . f 6 e f f f f 6 6 6 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f 8 8 e d d 4 f . . . . . 
        . . . f 6 6 e d d e f . . . . . 
        . f f f 8 8 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 6 f e e e e f f . . . . 
        . . f 6 6 6 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 6 6 6 6 e e f f f f . . . 
        . f 6 e f f f f 6 6 6 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 6 6 6 e d d e . . . . . 
        . . . f 8 8 8 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 6 f e e e e f f . . . . 
        . . f 6 6 6 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 6 6 6 6 e e f f f f . . . 
        . f 6 e f f f f 6 6 6 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f 8 8 8 8 e d d 4 . . . . 
        . . . f 6 6 6 6 e d d e . . . . 
        . . f f 8 8 8 8 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player_1,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 6 6 6 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 6 6 6 6 e f . 
        . . . f e 6 6 6 f f f f e 6 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 8 8 8 f . . . 
        . . . . . e d d e 6 6 6 f . . . 
        . . . . . f e e f 8 8 8 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 6 f . . . 
        . . . f f e e e e f 6 6 6 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 6 6 6 6 e f . 
        . . . f e 6 6 6 f f f f e 6 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 6 6 f . . . 
        . . . . f f f e e f 8 8 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 6 f . . . 
        . . . f f e e e e f 6 6 6 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 6 6 6 6 e f . 
        . . . f e 6 6 6 f f f f e 6 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 8 8 8 f . . . 
        . . . . . e d d e 6 6 6 f . . . 
        . . . . . f e e f 8 8 8 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 6 f . . . 
        . . . f f e e e e f 6 6 6 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 6 6 6 6 e f . 
        . . . f e 6 6 6 f f f f e 6 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 6 6 6 6 f . . . 
        . . . . f e e f 8 8 8 8 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
let player_1: Sprite = null
player_1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f 6 6 f f . . . . . 
    . . . . f f 6 6 6 6 f f . . . . 
    . . . f f 8 8 8 8 8 8 f f . . . 
    . . f f 8 6 6 6 6 6 6 8 f f . . 
    . . f 8 6 f f f f f f 6 8 f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 8 8 8 8 8 8 f 4 e . . 
    . . 4 d f 6 6 6 6 6 6 f d 4 . . 
    . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player_1, 100, 100)
tiles.setTilemap(tilemap`level2`)
scene.cameraFollowSprite(player_1)
tiles.placeOnRandomTile(player_1, sprites.dungeon.floorLight2)
Character_Animations()
