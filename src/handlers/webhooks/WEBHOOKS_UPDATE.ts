import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordWebhookUpdate } from "@discordeno/types";

export function handleWebhooksUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordWebhookUpdate;
  bot.events.webhooksUpdate(bot, {
    channelId: bot.transformers.snowflake(payload.channel_id),
    guildId: bot.transformers.snowflake(payload.guild_id),
  });
}
