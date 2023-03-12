import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordGuildMemberAdd,
} from "@discordeno/types";

export async function handleGuildMemberAdd(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildMemberAdd;
  const guildId = bot.transformers.snowflake(payload.guild_id);
  const user = bot.transformers.user(bot, payload.user);
  const member = bot.transformers.member(bot, payload, guildId, user.id);
  bot.events.guildMemberAdd(bot, member, user);
}
