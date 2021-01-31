import { Color3, Mesh, MeshBuilder, Scene, StandardMaterial, Texture, Vector3, Vector4 } from "babylonjs";

export const createDecoration = (path: string, scene: Scene) => {

    const foot = MeshBuilder.CreateCylinder("foot", {
        height: 0.5,
        diameter: 4
    }, scene)
    foot.position.y = 0.5/2

    const pole1 = MeshBuilder.CreateCylinder("foot", {
        height: 2,
        diameter: 0.5
    }, scene)
    pole1.position.y = pole1.scaling.y/2 + foot.scaling.y
    pole1.position.x = 1

    const pole2 = MeshBuilder.CreateCylinder("foot", {
        height: 2,
        diameter: 0.5
    }, scene)
    pole2.position.y = pole2.scaling.y/2 + foot.scaling.y
    pole2.position.x = -1

    const image = new Texture(path, scene)
    const material = new StandardMaterial("image", scene)
    material.diffuseTexture = image
    // material.emissiveColor = new Color3(1.0, 1.0, 0.7)

    const faceUV = new Array(6)
    faceUV[0] = new Vector4(1, 1, 0, 0)
    // faceUV[1] = new Vector4(1, 1, 0, 0)
    faceUV[2] = new Vector4(0, 0, 0, 0)
    faceUV[3] = new Vector4(0, 0, 0, 0)
    faceUV[4] = new Vector4(0, 0, 0, 0)
    faceUV[5] = new Vector4(0, 0, 0, 0)

    const box = MeshBuilder.CreateBox("box", {
        height: 3,
        width: 3,
        depth: 0.8,
        faceUV
    })
    box.position.y = box.scaling.y + foot.scaling.y + pole1.scaling.y
    box.material = material

}