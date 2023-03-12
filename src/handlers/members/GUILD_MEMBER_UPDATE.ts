import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordGuildMemberUpdate,
} from "@discordeno/types";

export async function handleGuildMemberUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordGuildMemberUpdate;

  const user = bot.transformers.user(bot, payload.user);
  bot.events.guildMemberUpdate(
    bot,
    bot.transformers.member(
      bot,
      payload,
      bot.transformers.snowflake(payload.guild_id),
      user.id
    ),
    user
  );
}
