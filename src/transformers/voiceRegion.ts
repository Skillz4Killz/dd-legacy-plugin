import { LegacyBot } from "../index.js";
import { DiscordVoiceRegion } from "@discordeno/types";
import { Optionalize } from "../optionalize.js";

// TODO: Rename `VoiceRegions` to `VoiceRegion`.

export function transformVoiceRegion(
  bot: LegacyBot,
  payload: DiscordVoiceRegion
) {
  const voiceRegion = {
    id: payload.id,
    name: payload.name,
    optimal: payload.optimal,
    deprecated: payload.deprecated,
    custom: payload.custom,
  };

  return voiceRegion as Optionalize<typeof voiceRegion>;
}

export interface VoiceRegions extends ReturnType<typeof transformVoiceRegion> {}
