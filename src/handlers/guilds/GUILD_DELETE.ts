import type { Bot } from "../../bot.js";
import {
  DiscordGatewayPayload,
  DiscordUnavailableGuild,
} from "@discordeno/types";

export async function handleGuildDelete(
  bot: LegacyBot,
  data: DiscordGatewayPayload,
  shardId: number
) {
  const payload = data.d as DiscordUnavailableGuild;
  bot.events.guildDelete(bot, bot.transformers.snowflake(payload.id), shardId);
}
