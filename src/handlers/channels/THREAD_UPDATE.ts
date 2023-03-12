import { LegacyBot } from "../../index.js";
import { DiscordChannel, DiscordGatewayPayload } from "@discordeno/types";

export async function handleThreadUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordChannel;

  bot.events.threadUpdate(
    bot,
    bot.transformers.channel(bot, { channel: payload })
  );
}
