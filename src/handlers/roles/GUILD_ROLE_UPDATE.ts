import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordGuildRoleUpdate,
} from "@discordeno/types";

export async function handleGuildRoleUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildRoleUpdate;

  bot.events.roleUpdate(
    bot,
    bot.transformers.role(bot, {
      role: payload.role,
      guildId: bot.transformers.snowflake(payload.guild_id),
    })
  );
}
