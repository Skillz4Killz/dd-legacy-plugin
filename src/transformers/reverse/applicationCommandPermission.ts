import { DiscordGuildApplicationCommandPermissions } from "@discordeno/bot";
import { LegacyBot } from "../../index.js";
import { ApplicationCommandPermission } from "../applicationCommandPermission.js";

export function transformApplicationCommandPermissionToDiscordApplicationCommandPermission(
  bot: LegacyBot,
  payload: ApplicationCommandPermission
): DiscordGuildApplicationCommandPermissions {
  return {
    id: bot.transformers.reverse.snowflake(payload.id),
    application_id: bot.transformers.reverse.snowflake(payload.applicationId),
    guild_id: bot.transformers.reverse.snowflake(payload.guildId),
    permissions: payload.permissions.map((perm) => ({
      id: bot.transformers.reverse.snowflake(perm.id),
      type: perm.type,
      permission: perm.permission,
    })),
  };
}
