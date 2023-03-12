import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordThreadMembersUpdate,
} from "@discordeno/types";

export async function handleThreadMembersUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordThreadMembersUpdate;
  bot.events.threadMembersUpdate(bot, {
    id: bot.transformers.snowflake(payload.id),
    guildId: bot.transformers.snowflake(payload.guild_id),
    addedMembers: payload.added_members?.map((member) =>
      bot.transformers.threadMember(bot, member)
    ),
    removedMemberIds: payload.removed_member_ids?.map((id) =>
      bot.transformers.snowflake(id)
    ),
  });
}
