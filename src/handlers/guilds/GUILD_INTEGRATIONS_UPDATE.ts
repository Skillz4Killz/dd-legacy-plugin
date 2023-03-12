import type { Bot } from "../../bot.js";
import {
  DiscordGatewayPayload,
  DiscordGuildIntegrationsUpdate,
} from "@discordeno/types";

export async function handleGuildIntegrationsUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildIntegrationsUpdate;

  bot.events.integrationUpdate(bot, {
    guildId: bot.transformers.snowflake(payload.guild_id),
  });
}
