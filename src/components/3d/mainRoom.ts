import { Color3, 
    MeshBuilder, 
    Scene, 
    StandardMaterial, 
    Texture, 
    Vector3, 
    Vector4, 
    PointLight, 
    Mesh, 
    HighlightLayer } 
from "babylonjs"
import path from "../../config/path"

interface Constrain{
    xPos: number,
    yPos: number
    zPos: number,
}

export const createMainRoom = (constrain: Constrain,scene: Scene) => {

    const sun = Mesh.CreateSphere('sun', 10, 0.2, scene)
    sun.position = new Vector3(-5, 1, -5)

    const light = new PointLight("Omni0", new Vector3(3, 3, 0), scene);
    light.radius = 0.5
    light.range = 10
    light.parent = sun

    const h1 = new HighlightLayer('hg', scene)
    h1.innerGlow = false
    h1.addMesh(sun, new Color3(0.9, 0.9, 0.9))

    const matSphere = new StandardMaterial('sphere', scene)
    matSphere.emissiveColor = new Color3(1.0, 1.0, 0.7)
    sun.material = matSphere

    const mainImageTex = new Texture(path.logo, scene)
    const mainImageMat = new StandardMaterial('mat', scene)
    mainImageMat.diffuseTexture = mainImageTex

    const mainWallTex = new Texture(path.funiture.wall, scene)
    const mainWallMat = new StandardMaterial("mat", scene)
    mainWallMat.diffuseTexture = mainWallTex

    const faceUV = new Array(6)
    faceUV[0] = new Vector4(1, 1, 0, 0)
    faceUV[2] = new Vector4(0, 0, 0, 0)
    faceUV[3] = new Vector4(0, 0, 0, 0)
    faceUV[4] = new Vector4(0, 0, 0, 0)
    faceUV[5] = new Vector4(0, 0, 0, 0)

    const mainWallSizeY = 6

    const mainConstrainY = constrain.yPos + mainWallSizeY

    const mainWallBox = MeshBuilder.CreateBox("box", {faceUV}, scene)
    mainWallBox.scaling = new Vector3(10, mainWallSizeY, 1)
    mainWallBox.position.y = mainConstrainY/2
    mainWallBox.material = mainWallMat

    const mainImageBox = MeshBuilder.CreateBox("box", {faceUV}, scene)
    mainImageBox.scaling = new Vector3(8, 5, 1.5)
    mainImageBox.position.y = mainConstrainY/2
    mainImageBox.material = mainImageMat

}