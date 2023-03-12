import type { Bot } from "../bot.js";
import { DiscordMember, DiscordUser } from "@discordeno/types";
import { Optionalize } from "../optionalize.js";
import { MemberToggles } from "./toggles/member.js";
import { UserToggles } from "./toggles/user.js";

export function transformUser(bot: LegacyBot, payload: DiscordUser) {
  const user = {
    id: bot.transformers.snowflake(payload.id || ""),
    username: payload.username,
    discriminator: payload.discriminator,
    avatar: payload.avatar ? iconHashToBigInt(payload.avatar) : undefined,
    locale: payload.locale,
    email: payload.email ?? undefined,
    flags: payload.flags,
    premiumType: payload.premium_type,
    publicFlags: payload.public_flags,
    toggles: new UserToggles(payload),
  };

  return user as Optionalize<typeof user>;
}

export function transformMember(
  bot: LegacyBot,
  payload: DiscordMember,
  guildId: bigint,
  userId: bigint
) {
  const member = {
    id: userId,
    guildId,
    user: payload.user ? bot.transformers.user(bot, payload.user) : undefined,
    nick: payload.nick ?? undefined,
    roles: payload.roles.map((id) => bot.transformers.snowflake(id)),
    joinedAt: Date.parse(payload.joined_at),
    premiumSince: payload.premium_since
      ? Date.parse(payload.premium_since)
      : undefined,
    avatar: payload.avatar ? iconHashToBigInt(payload.avatar) : undefined,
    permissions: payload.permissions
      ? bot.transformers.snowflake(payload.permissions)
      : undefined,
    communicationDisabledUntil: payload.communication_disabled_until
      ? Date.parse(payload.communication_disabled_until)
      : undefined,
    toggles: new MemberToggles(payload),
  };

  return member as Optionalize<typeof member>;
}

export interface Member extends ReturnType<typeof transformMember> {}
export interface User extends ReturnType<typeof transformUser> {}
