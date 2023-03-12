import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordGuildMemberRemove,
} from "@discordeno/types";

export async function handleGuildMemberRemove(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildMemberRemove;
  const guildId = bot.transformers.snowflake(payload.guild_id);
  const user = bot.transformers.user(bot, payload.user);

  bot.events.guildMemberRemove(bot, user, guildId);
}
