import { LegacyBot } from "../../index.js";
import { DiscordTeam } from "@discordeno/types";
import { Team } from "../team.js";

export function transformTeamToDiscordTeam(
  bot: LegacyBot,
  payload: Team
): DiscordTeam {
  const id = bot.utils.bigintToSnowflake(payload.id);

  return {
    name: payload.name,

    id,
    icon: payload.icon ? bot.utils.iconBigintToHash(payload.icon) : null,
    owner_user_id: bot.utils.bigintToSnowflake(payload.ownerUserId),
    members: payload.members.map((member) => ({
      membership_state: member.membershipState,
      permissions: member.permissions,
      team_id: id,
      user: bot.transformers.reverse.user(bot, member.user),
    })),
  };
}
