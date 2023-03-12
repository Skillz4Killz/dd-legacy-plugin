import { DiscordGatewayPayload, DiscordChannel, DiscordenoShard } from "@discordeno/bot";
import { LegacyBot } from "../..";

export async function handleChannelCreate(
  bot: LegacyBot,
  payload: DiscordGatewayPayload,
  shard: DiscordenoShard
) {
  const channel = bot.transformers.channel(bot, {
    channel: payload.d as DiscordChannel,
  });

  bot.events.channelCreate?.(channel, shard);
}
