import { LegacyBot } from "../index.js";
import { DiscordRole } from "@discordeno/types";
import { RoleToggles } from "./toggles/role.js";
import { Optionalize } from "../optionalize.js";

export function transformRole(
  bot: LegacyBot,
  payload: { role: DiscordRole } & { guildId: bigint }
) {
  const role = {
    name: payload.role.name,
    guildId: payload.guildId,
    position: payload.role.position,
    color: payload.role.color,
    toggles: new RoleToggles(payload.role),

    id: bot.transformers.snowflake(payload.role.id),
    botId: payload.role.tags?.bot_id
      ? bot.transformers.snowflake(payload.role.tags.bot_id)
      : undefined,
    integrationId: payload.role.tags?.integration_id
      ? bot.transformers.snowflake(payload.role.tags.integration_id)
      : undefined,
    permissions: bot.transformers.snowflake(payload.role.permissions),
    icon: payload.role.icon ? iconHashToBigInt(payload.role.icon) : undefined,
    unicodeEmoji: payload.role.unicode_emoji,
  };

  return role as Optionalize<typeof role>;
}

export interface Role extends ReturnType<typeof transformRole> {}
