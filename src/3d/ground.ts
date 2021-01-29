import {
    Scene,
    StandardMaterial,
    Texture,
    MeshBuilder,
    Vector3
} from "babylonjs";

interface Size{
    width: number,
    height: number,
    position: Vector3
}

export const createGround = (path: string, size: Size, scene: Scene) => {

    const material = new StandardMaterial("mat2", scene)
    // material.emissiveColor = new Color3(0.3, 0.3, 0.3);

    const groundTexture = new Texture(path, scene)
    material.diffuseTexture = groundTexture

    const ground = MeshBuilder.CreateGround('ground', size)
    ground.position = size.position
    ground.material = material

}