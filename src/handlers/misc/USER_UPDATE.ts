import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordUser } from "@discordeno/types";

export async function handleUserUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordUser;
  bot.events.botUpdate(bot, bot.transformers.user(bot, payload));
}
