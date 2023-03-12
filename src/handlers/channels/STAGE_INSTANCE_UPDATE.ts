import type { Bot } from "../../bot.js";
import { DiscordGatewayPayload, DiscordStageInstance } from "@discordeno/types";

export function handleStageInstanceUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordStageInstance;

  bot.events.stageInstanceUpdate(bot, {
    id: bot.transformers.snowflake(payload.id),
    guildId: bot.transformers.snowflake(payload.guild_id),
    channelId: bot.transformers.snowflake(payload.channel_id),
    topic: payload.topic,
  });
}
