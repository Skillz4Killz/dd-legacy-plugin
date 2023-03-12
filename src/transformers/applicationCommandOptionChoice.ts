import { LegacyBot } from "../index.js";
import { DiscordApplicationCommandOptionChoice } from "@discordeno/types";
import { Camelize, Localization, Optionalize } from "../types/shared.js";

export function transformApplicationCommandOptionChoice(
  bot: LegacyBot,
  payload: DiscordApplicationCommandOptionChoice
) {
  const applicationCommandChoice = {
    name: payload.name,
    nameLocalizations: payload.name_localizations ?? undefined,
    value: payload.value,
  };

  return applicationCommandChoice as Optionalize<
    typeof applicationCommandChoice
  >;
}

export interface ApplicationCommandOptionChoice
  extends ReturnType<typeof transformApplicationCommandOptionChoice> {}
