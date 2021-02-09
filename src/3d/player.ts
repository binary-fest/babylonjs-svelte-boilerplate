import {
    Scene, 
    Viewport, 
    TargetCamera,
    Mesh,
    Vector3,
    PhysicsImpostor
} from 'babylonjs'

import { inputs } from './inputs'
import keys from '../config/keys'
import speed from '../config/speed'

export const createPlayer = (scene: Scene, viewport: Viewport) => {

    const player = Mesh.CreateSphere("playerMesh", 4, 2, scene)
    player.position.y = 4
    player.position.z = -35

    const camera = new TargetCamera("playerCamera", new Vector3(0, 0, 0), scene)
    camera.parent = player
    camera.viewport = viewport

    camera

    scene.activeCamera = camera

    scene.onBeforeRenderObservable.add(() => {


        if(inputs[keys.moveForward])
            player.locallyTranslate(new Vector3(0, 0, speed.moveForward))

        if(inputs[keys.moveBackward])
            player.locallyTranslate(new Vector3(0, 0, -speed.moveBackward))
        
        if(inputs[keys.moveLeft])
            player.locallyTranslate(new Vector3(-speed.moveLeft, 0, 0))

        if(inputs[keys.moveRight])
            player.locallyTranslate(new Vector3(speed.moveRight, 0, 0))

        if(inputs[keys.facingLeft])
            player.rotation.y -= speed.facingLeft

        if(inputs[keys.facingRight])
            player.rotation.y += speed.facingRight
        
        if(inputs[keys.facingUp])
            player.rotation.x -= speed.facingUp

        if(inputs[keys.facingDown])
            player.rotation.x += speed.facingDown
        
        if(player.position.y != 4){
            player.position.y = 4
        }

        if(player.rotation.x > 0.18){
            player.rotation.x = 0.18
        }

        if(player.rotation.x < -0.3){
            player.rotation.x = -0.3
        }

        // console.log(player.rotation.x)
        
    })

    return player

}