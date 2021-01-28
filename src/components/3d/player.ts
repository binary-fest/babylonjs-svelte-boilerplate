import {
    Scene, 
    Viewport, 
    TargetCamera,
    Mesh,
    Vector3
} from 'babylonjs'

import { inputs } from './inputs'

export const createPlayer = (scene: Scene, viewport: Viewport, keys: Array<any>) => {

    const player = Mesh.CreateSphere("playerMesh", 4, 1, scene)
    player.position.y = 1

    const camera = new TargetCamera("playerCamera", new Vector3(0, 0, 0), scene)
    camera.parent = player
    camera.viewport = viewport

    scene.activeCamera = camera

    scene.onBeforeRenderObservable.add((scene, ev) => {
        if(inputs[keys[0]])
            player.locallyTranslate(new Vector3(0, 0, 0.2))
        if(inputs[keys[2]])
            player.locallyTranslate(new Vector3(0, 0, -0.2))
        if(inputs[keys[1]])
            player.rotation.y -= 0.04
        if(inputs[keys[3]])
            player.rotation.y += 0.04
    })

    return player

}