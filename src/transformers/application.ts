import { DiscordApplication, iconHashToBigInt } from "@discordeno/bot";
import { LegacyBot } from "../index.js";
import { Optionalize } from "../optionalize.js";

export function transformApplication(
  bot: LegacyBot,
  payload: DiscordApplication
) {
  const application = {
    name: payload.name,
    description: payload.description,
    rpcOrigins: payload.rpc_origins,
    botPublic: payload.bot_public,
    botRequireCodeGrant: payload.bot_require_code_grant,
    termsOfServiceUrl: payload.terms_of_service_url,
    privacyPolicyUrl: payload.privacy_policy_url,
    verifyKey: payload.verify_key,
    primarySkuId: payload.primary_sku_id,
    slug: payload.slug,
    coverImage: payload.cover_image
      ? iconHashToBigInt(payload.cover_image)
      : undefined,
    flags: payload.flags,

    id: bot.transformers.snowflake(payload.id),
    icon: payload.icon ? iconHashToBigInt(payload.icon) : undefined,
    owner: payload.owner
    // @ts-ignore the partial here wont break anything
    ? bot.transformers.user(bot, payload.owner)
      : undefined,
    team: payload.team ? bot.transformers.team(bot, payload.team) : undefined,
    guildId: payload.guild_id
      ? bot.transformers.snowflake(payload.guild_id)
      : undefined,
  };

  return application as Optionalize<typeof application>;
}

export interface Application extends ReturnType<typeof transformApplication> {}
