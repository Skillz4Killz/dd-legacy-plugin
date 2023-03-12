import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordMessageDelete } from "@discordeno/types";

export async function handleMessageDelete(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordMessageDelete;

  bot.events.messageDelete(bot, {
    id: bot.transformers.snowflake(payload.id),
    channelId: bot.transformers.snowflake(payload.channel_id),
    guildId: payload.guild_id
      ? bot.transformers.snowflake(payload.guild_id)
      : undefined,
  });
}
