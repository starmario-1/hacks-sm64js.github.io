import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { ccm_seg7_area_1_collision } from "./areas/1/collision.inc"
import { ccm_geo_00051C } from "./areas/1/geo.inc"

export const level_ccm_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    //{ command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, ccm_geo_00051C] },
    { command: LevelCommands.terrain, args: [ccm_seg7_area_1_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 140, -1512, 2560, -2305] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]