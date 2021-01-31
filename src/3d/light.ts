import { Color3, HighlightLayer, PointLight, Scene, StandardMaterial, Vector3 } from "babylonjs";
import { Mesh } from "babylonjs";
import type { PosConstrain } from "../model/Constraint";

export const createLight = (pos: PosConstrain, rad: number, color: Color3, scene: Scene) => {
    const sun = Mesh.CreateSphere('sun', 10, rad, scene)
    sun.position = new Vector3( pos.x, pos.y, pos.z)

    const light = new PointLight("Omni0", new Vector3(0, 0, 0), scene);
    light.radius = 0.5
    light.range = 10
    light.parent = sun

    const h1 = new HighlightLayer('hg', scene)
    h1.innerGlow = false
    h1.addMesh(sun, new Color3(0.9, 0.9, 0.9))

    const matSphere = new StandardMaterial('sphere', scene)
    matSphere.emissiveColor = color
    sun.material = matSphere

}