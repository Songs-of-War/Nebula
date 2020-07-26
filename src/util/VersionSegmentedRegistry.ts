import { ForgeModStructure113 } from '../model/struct/model/module/forgemod/forgemod113.struct'
import { ForgeModStructure17 } from '../model/struct/model/module/forgemod/forgemod17.struct'
import { BaseForgeModStructure } from '../model/struct/model/module/forgemod.struct'
import { MinecraftVersion } from './MinecraftVersion'

export class VersionSegmentedRegistry {


    public static readonly FORGEMOD_STRUCT_IML = [
        ForgeModStructure17,
        ForgeModStructure113
    ]

    public static getForgeModStruct(
        minecraftVersion: MinecraftVersion,
        forgeVersion: string,
        absoluteRoot: string,
        relativeRoot: string,
        baseUrl: string
    ): BaseForgeModStructure {
        for (const impl of VersionSegmentedRegistry.FORGEMOD_STRUCT_IML) {
            if (impl.isForVersion(minecraftVersion, forgeVersion)) {
                return new impl(absoluteRoot, relativeRoot, baseUrl, minecraftVersion)
            }
        }
        throw new Error(`No forge mod structure found for Minecraft ${minecraftVersion}!`)
    }

}
