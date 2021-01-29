import { MeshBuilder, Scene, Vector3 } from "babylonjs"
import type { PosConstrain } from "../model/Constraint"


export const createBanner = (constrain: PosConstrain, rotY: number, scene: Scene) => {

    const foot = MeshBuilder.CreateBox("footBanner", {}, scene)
    foot.scaling = new Vector3(1, 0.2, 2.5)
    foot.position = new Vector3(constrain.x, 0.2/2, constrain.z)
    foot.rotation.y = rotY

    const banner = MeshBuilder.CreateBox("banner", {}, scene)
    banner.scaling = new Vector3(foot.scaling.x/2.5, 5, foot.scaling.z/1.2)
    banner.position = new Vector3(constrain.x, 5/2, constrain.z)
    banner.rotation.y = rotY

}