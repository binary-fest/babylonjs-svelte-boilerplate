import { Color3, MeshBuilder, Scene, StandardMaterial, Texture, Vector3, Vector4 } from "babylonjs"
import path from "../config/path"
import type { PosConstrain } from "../model/Constraint"


export const createBanner = (constrain: PosConstrain, rotY: number, scene: Scene) => {

    const foot = MeshBuilder.CreateBox("footBanner", {}, scene)
    foot.scaling = new Vector3(1, 0.2, 2.5)
    foot.position = new Vector3(constrain.x, 0.2/2, constrain.z)
    foot.rotation.y = rotY

    const image = new Texture(path.images.banner, scene)
    const material = new StandardMaterial("image", scene)
    material.diffuseTexture = image
    material.emissiveColor = new Color3(1.0, 1.0, 0.7)

    const faceUV = new Array(6)
    faceUV[0] = new Vector4(0, 0, 0, 0)
    faceUV[1] = new Vector4(0, 0, 0, 0)
    faceUV[2] = new Vector4(0, -1, -1, 0)
    faceUV[3] = new Vector4(0, -1, -1, 0)
    faceUV[4] = new Vector4(0, 0, 0, 0)
    faceUV[5] = new Vector4(0, 0, 0, 0)

    const banner = MeshBuilder.CreateBox("banner", {faceUV}, scene)
    banner.scaling = new Vector3(foot.scaling.x/2.5, 5, foot.scaling.z/1.2)
    banner.position = new Vector3(constrain.x, 5/2 + 0.2, constrain.z)
    banner.rotation.y = rotY
    banner.material = material

}