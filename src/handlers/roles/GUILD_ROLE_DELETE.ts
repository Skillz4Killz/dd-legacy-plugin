import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordGuildRoleDelete,
} from "@discordeno/types";

export async function handleGuildRoleDelete(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildRoleDelete;
  bot.events.roleDelete(bot, {
    roleId: bot.transformers.snowflake(payload.role_id),
    guildId: bot.transformers.snowflake(payload.guild_id),
  });
}
