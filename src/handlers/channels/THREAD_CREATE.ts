import { LegacyBot } from "../../index.js";
import { DiscordChannel, DiscordGatewayPayload } from "@discordeno/types";

export async function handleThreadCreate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordChannel;

  bot.events.threadCreate(
    bot,
    bot.transformers.channel(bot, { channel: payload })
  );
}
