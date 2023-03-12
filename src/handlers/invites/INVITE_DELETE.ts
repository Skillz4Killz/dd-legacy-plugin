import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordInviteDelete } from "@discordeno/types";

export function handleInviteDelete(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordInviteDelete;

  bot.events.inviteDelete(bot, {
    /** The channel of the invite */
    channelId: bot.transformers.snowflake(payload.channel_id),
    /** The guild of the invite */
    guildId: payload.guild_id
      ? bot.transformers.snowflake(payload.guild_id)
      : undefined,
    /** The unique invite code */
    code: payload.code,
  });
}
