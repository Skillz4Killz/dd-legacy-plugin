import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordMessage } from "@discordeno/types";

export async function handleMessageUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordMessage;
  if (!payload.edited_timestamp) return;

  bot.events.messageUpdate(bot, bot.transformers.message(bot, payload));
}
