import { Bot } from "@discordeno/bot";
import { createBotGatewayHandlers } from "./handler.js";
import { createTransformers, Transformers } from "./transformer.js";

export type LegacyBot<B = Bot> = B & {
  transformers: Transformers;
  handlers: ReturnType<typeof createBotGatewayHandlers>;
};

export function enableLegacyPlugin<B extends Bot>(
  bot: Bot,
  options?: {
    customTransformers: Partial<Transformers>;
    customHandlers?: Partial<ReturnType<typeof createBotGatewayHandlers>>;
  }
): LegacyBot {
  const legacyBot = bot as LegacyBot;

  legacyBot.transformers = createTransformers(
    options?.customTransformers ?? {}
  );
  legacyBot.handlers = createBotGatewayHandlers(options?.customHandlers ?? {});
  return legacyBot;
}

export * from "./transformers/mod.js";
export * from "./handlers/mod.js";
export * from "./transformer.js";
