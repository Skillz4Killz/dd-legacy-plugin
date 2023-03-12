import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordGuildRoleCreate,
} from "@discordeno/types";

export async function handleGuildRoleCreate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildRoleCreate;
  bot.events.roleCreate(
    bot,
    bot.transformers.role(bot, {
      role: payload.role,
      guildId: bot.transformers.snowflake(payload.guild_id),
    })
  );
}
