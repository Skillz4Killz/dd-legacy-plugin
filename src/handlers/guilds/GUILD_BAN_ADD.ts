import type { Bot } from "../../bot.js";
import {
  DiscordGatewayPayload,
  DiscordGuildBanAddRemove,
} from "@discordeno/types";

export async function handleGuildBanAdd(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildBanAddRemove;
  bot.events.guildBanAdd(
    bot,
    bot.transformers.user(bot, payload.user),
    bot.transformers.snowflake(payload.guild_id)
  );
}
