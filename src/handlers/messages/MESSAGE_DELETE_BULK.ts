import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordMessageDeleteBulk,
} from "@discordeno/types";

export async function handleMessageDeleteBulk(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordMessageDeleteBulk;

  const channelId = bot.transformers.snowflake(payload.channel_id);
  const guildId = payload.guild_id
    ? bot.transformers.snowflake(payload.guild_id)
    : undefined;

  bot.events.messageDeleteBulk(bot, {
    ids: payload.ids.map((id) => bot.transformers.snowflake(id)),
    channelId: bot.transformers.snowflake(payload.channel_id),
    guildId: payload.guild_id
      ? bot.transformers.snowflake(payload.guild_id)
      : undefined,
  });
}
