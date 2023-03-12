import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordInviteCreate } from "@discordeno/types";

export function handleInviteCreate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  bot.events.inviteCreate(
    bot,
    bot.transformers.invite(bot, data.d as DiscordInviteCreate)
  );
}
