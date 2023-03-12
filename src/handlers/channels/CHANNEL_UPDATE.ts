import type { Bot } from "../../bot.js";
import { DiscordChannel, DiscordGatewayPayload } from "@discordeno/types";

export async function handleChannelUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordChannel;
  const channel = bot.transformers.channel(bot, { channel: payload });

  bot.events.channelUpdate(bot, channel);
}
