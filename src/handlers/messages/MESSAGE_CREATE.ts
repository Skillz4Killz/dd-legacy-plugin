import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordMessage } from "@discordeno/types";

export async function handleMessageCreate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordMessage;

  bot.events.messageCreate(bot, bot.transformers.message(bot, payload));
}
