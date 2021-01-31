import {
    Scene, 
    Viewport, 
    TargetCamera,
    Mesh,
    Vector3
} from 'babylonjs'

import { inputs } from './inputs'
import keys from '../config/keys'

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
            player.locallyTranslate(new Vector3(0, 0, 0.07))

        if(inputs[keys.moveBackward])
            player.locallyTranslate(new Vector3(0, 0, -0.05))
        
        if(inputs[keys.moveLeft])
            player.locallyTranslate(new Vector3(-0.05, 0, 0))

        if(inputs[keys.moveRight])
            player.locallyTranslate(new Vector3(0.05, 0, 0))

        if(inputs[keys.facingLeft])
            player.rotation.y -= 0.02

        if(inputs[keys.facingRight])
            player.rotation.y += 0.02
        
        if(inputs[keys.facingUp])
            player.rotation.x -= 0.01

        if(inputs[keys.facingDown])
            player.rotation.x += 0.01
        
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