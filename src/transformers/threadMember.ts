import { LegacyBot } from "../index.js";
import {
  DiscordThreadMember,
  DiscordThreadMemberGuildCreate,
} from "@discordeno/types";
import { Optionalize } from "../optionalize.js";

export function transformThreadMember(
  bot: LegacyBot,
  payload: DiscordThreadMember
) {
  const threadMember = {
    id: payload.id ? bot.transformers.snowflake(payload.id) : undefined,
    userId: payload.user_id
      ? bot.transformers.snowflake(payload.user_id)
      : undefined,
    joinTimestamp: Date.parse(payload.join_timestamp),
    flags: payload.flags,
  };

  return threadMember as Optionalize<typeof threadMember>;
}

export function transformThreadMemberGuildCreate(
  bot: LegacyBot,
  payload: DiscordThreadMemberGuildCreate
) {
  const threadMember = {
    joinTimestamp: Date.parse(payload.join_timestamp),
  };

  return threadMember as Optionalize<typeof threadMember>;
}

export interface ThreadMember
  extends ReturnType<typeof transformThreadMember> {}
export interface ThreadMemberGuildCreate
  extends ReturnType<typeof transformThreadMemberGuildCreate> {}
