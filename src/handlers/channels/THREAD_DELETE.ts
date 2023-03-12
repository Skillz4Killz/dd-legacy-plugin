import { LegacyBot } from "../../index.js";
import { DiscordChannel, DiscordGatewayPayload } from "@discordeno/types";

export async function handleThreadDelete(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordChannel;
  bot.events.threadDelete(
    bot,
    bot.transformers.channel(bot, { channel: payload })
  );
}
