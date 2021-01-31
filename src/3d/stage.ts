import { Color3, 
    MeshBuilder, 
    Scene, 
    StandardMaterial, 
    Texture, 
    Vector3, 
    Vector4, 
    PointLight, 
    Mesh, 
    HighlightLayer, 
    BoxBuilder,
    Sound} 
from "babylonjs"
import path from "../config/path"
import type { PosConstrain } from "../model/Constraint"
import { createBanner } from "./banner"
import { registerBeforeRender } from "./register"

export const createStage = (constrain: PosConstrain, player: Mesh, scene: Scene) => {

    // const sun = Mesh.CreateSphere('sun', 10, 0.2, scene)
    // sun.position = new Vector3(-5 + constrain.xPos, 1, -5 + constrain.zPos)

    // const light = new PointLight("Omni0", new Vector3(3, 3, 0), scene);
    // light.radius = 0.5
    // light.range = 10
    // light.parent = sun

    // const h1 = new HighlightLayer('hg', scene)
    // h1.innerGlow = false
    // h1.addMesh(sun, new Color3(0.9, 0.9, 0.9))

    // const matSphere = new StandardMaterial('sphere', scene)
    // matSphere.emissiveColor = new Color3(1.0, 1.0, 0.7)
    // sun.material = matSphere

    const mainImageTex = new Texture(path.images.show, scene)
    const mainImageMat = new StandardMaterial('mat', scene)
    mainImageMat.emissiveColor = new Color3(1.0, 1.0, 0.7)
    mainImageMat.diffuseTexture = mainImageTex

    const mainWallTex = new Texture(path.images.woodenWall, scene)
    const mainWallMat = new StandardMaterial("mat", scene)
    mainWallMat.diffuseTexture = mainWallTex

    const faceUV = new Array(6)
    faceUV[0] = new Vector4(0, 0, 0, 0)
    // faceUV[1] = new Vector4(0, 0, 0, 0)
    faceUV[2] = new Vector4(0, 0, 0, 0)
    faceUV[3] = new Vector4(0, 0, 0, 0)
    faceUV[4] = new Vector4(0, 0, 0, 0)
    faceUV[5] = new Vector4(0, 0, 0, 0)

    const mainWallSizeY = 7

    const mainConstrainY = constrain.y + mainWallSizeY

    const mainWallBox = MeshBuilder.CreateBox("box", {faceUV}, scene)
    mainWallBox.scaling = new Vector3(10, mainWallSizeY, 1)
    mainWallBox.position = new Vector3(constrain.x, mainConstrainY/2, constrain.z)
    mainWallBox.material = mainWallMat

    const mainImageBox = MeshBuilder.CreateBox("box", {faceUV}, scene)
    mainImageBox.scaling = new Vector3(8, 5, 1.5)
    mainImageBox.position = new Vector3(constrain.x, (mainConstrainY/2) + 0.6/2, constrain.z)
    mainImageBox.material = mainImageMat

    const base = MeshBuilder.CreateBox("stage", {}, scene)
    base.scaling = new Vector3(10, 0.6, 5)
    base.position.y = 0.6/2
    base.position.z = constrain.z + (base.scaling.z + 1)/-2
    base.position.x = constrain.x

    const stair = MeshBuilder.CreateBox("stair", {}, scene)
    stair.scaling = new Vector3(base.scaling.x/1.1, 0.3, 1)
    stair.position.y = 0.3/2
    stair.position.z = -0.5 + base.position.z + base.scaling.z * -(1/2)
    stair.position.x = constrain.x

    createBanner({
        x: -8 + constrain.x,
        y: 0,
        z: -0.5 + constrain.z
    }, 45,scene)

    createBanner({
        x: 8 + constrain.x,
        y: 0,
        z: -0.5 + constrain.z
    }, -45,scene)

    // const music = new Sound("music", path.music, scene, null, {
    //     loop: true,
    //     autoplay: true
    //   })

    // const footBanner1 = MeshBuilder.CreateBox("footBanner", {}, scene)
    // footBanner1.scaling = new Vector3(1, 0.2, 2.5)
    // footBanner1.position = new Vector3(-8, 0.2/2, -0.5)
    // footBanner1.rotation.y = 45

    // const banner1 = MeshBuilder.CreateBox("banner", {}, scene)
    // banner1.scaling = new Vector3(footBanner1.scaling.x/2.5, 10, footBanner1.scaling.z/1.2)
    // banner1.position = new Vector3(-8, 0.2/2, -0.5)
    // banner1.rotation.y = 45

    if(player != null){
        scene.registerBeforeRender(() => {
            const distanceFromMusic = ((Math.sqrt(Math.pow(player.position.x - mainImageBox.position.x, 2) + Math.pow(player.position.z - mainImageBox.position.z, 2)))/60)
            // console.log((1 - 0) - distanceFromMusic)
            // music.setVolume((1 - 0) - distanceFromMusic)
        })
    }

}