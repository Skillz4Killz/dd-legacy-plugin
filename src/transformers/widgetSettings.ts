import { LegacyBot } from "../index.js";
import { DiscordGuildWidgetSettings } from "@discordeno/types";
import { Optionalize } from "../optionalize.js";

export function transformWidgetSettings(
  bot: LegacyBot,
  payload: DiscordGuildWidgetSettings
) {
  const widget = {
    enabled: payload.enabled,
    channelId: payload.channel_id ?? undefined,
  };

  return widget as Optionalize<typeof widget>;
}

export interface GuildWidgetSettings
  extends ReturnType<typeof transformWidgetSettings> {}
