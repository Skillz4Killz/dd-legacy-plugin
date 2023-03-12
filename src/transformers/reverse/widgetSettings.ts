import { LegacyBot } from "../../index.js";
import { DiscordGuildWidgetSettings } from "@discordeno/types";
import { GuildWidgetSettings } from "../widgetSettings.js";

export function transformWidgetSettingsToDiscordWidgetSettings(
  bot: LegacyBot,
  payload: GuildWidgetSettings
): DiscordGuildWidgetSettings {
  return {
    enabled: payload.enabled,
    channel_id: payload.channelId ?? null,
  };
}
