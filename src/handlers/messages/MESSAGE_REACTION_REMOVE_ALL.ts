import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordMessageReactionRemoveAll,
} from "@discordeno/types";

export async function handleMessageReactionRemoveAll(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordMessageReactionRemoveAll;

  bot.events.reactionRemoveAll(bot, {
    channelId: bot.transformers.snowflake(payload.channel_id),
    messageId: bot.transformers.snowflake(payload.message_id),
    guildId: payload.guild_id
      ? bot.transformers.snowflake(payload.guild_id)
      : undefined,
  });
}
