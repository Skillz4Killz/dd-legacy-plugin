import type { Bot } from "../../bot.js";
import type { Guild } from "../../transformers/guild.js";
import { DiscordGatewayPayload, DiscordGuild } from "@discordeno/types";

export function handleGuildUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload,
  shardId: number
) {
  const payload = data.d as DiscordGuild;

  bot.events.guildUpdate(
    bot,
    bot.transformers.guild(bot, { guild: payload, shardId }) as Guild
  );
}
