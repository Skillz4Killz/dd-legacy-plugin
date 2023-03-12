import type { Bot } from "../../bot.js";
import {
  DiscordGatewayPayload,
  DiscordGuildBanAddRemove,
} from "@discordeno/types";

export async function handleGuildBanRemove(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildBanAddRemove;

  await bot.events.guildBanRemove(
    bot,
    bot.transformers.user(bot, payload.user),
    bot.transformers.snowflake(payload.guild_id)
  );
}
