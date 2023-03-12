import {
  Bot,
  AllowedMentions,
  DiscordAllowedMentions,
  DiscordEmbed,
  DiscordActivity,
  DiscordMember,
  DiscordUser,
  DiscordTeam,
  DiscordApplication,
  BigString,
  CreateApplicationCommand,
  DiscordCreateApplicationCommand,
  DiscordApplicationCommand,
  ApplicationCommandOption,
  DiscordApplicationCommandOption,
  ApplicationCommandOptionChoice,
  DiscordApplicationCommandOptionChoice,
  InteractionResponse,
  DiscordAttachment,
  DiscordGetGatewayBot,
  DiscordAutoModerationRule,
  DiscordAutoModerationActionExecution,
  DiscordChannel,
  DiscordGuild,
  DiscordMessage,
  DiscordRole,
  DiscordVoiceState,
  DiscordInteraction,
  DiscordInteractionDataOption,
  DiscordIntegrationCreateUpdate,
  DiscordInviteCreate,
  DiscordEmoji,
  DiscordPresenceUpdate,
  DiscordWebhook,
  DiscordAuditLogEntry,
  DiscordGuildApplicationCommandPermissions,
  DiscordScheduledEvent,
  DiscordThreadMember,
  DiscordWelcomeScreen,
  DiscordVoiceRegion,
  DiscordGuildWidget,
  DiscordGuildWidgetSettings,
  DiscordStageInstance,
  DiscordSticker,
  DiscordStickerPack,
  DiscordTemplate,
} from "@discordeno/bot";
import { Activity, transformActivity } from "./transformers/activity";
import { Application, transformApplication } from "./transformers/application";
import {
  ApplicationCommand,
  transformApplicationCommand,
} from "./transformers/applicationCommand";
import { transformApplicationCommandOption } from "./transformers/applicationCommandOption";
import { transformApplicationCommandOptionChoice } from "./transformers/applicationCommandOptionChoice";
import {
  ApplicationCommandPermission,
  transformApplicationCommandPermission,
} from "./transformers/applicationCommandPermission";
import { Attachment, transformAttachment } from "./transformers/attachment";
import {
  AuditLogEntry,
  transformAuditLogEntry,
} from "./transformers/auditLogEntry";
import {
  AutoModerationRule,
  transformAutoModerationRule,
} from "./transformers/automodRule";
import { Channel, transformChannel } from "./transformers/channel";
import { Component, transformComponent } from "./transformers/component";
import { Embed, transformEmbed } from "./transformers/embed";
import { Emoji, transformEmoji } from "./transformers/emoji";
import { GetGatewayBot, transformGatewayBot } from "./transformers/gatewayBot";
import { Guild, transformGuild } from "./transformers/guild";
import { Integration, transformIntegration } from "./transformers/integration";
import {
  Interaction,
  InteractionDataOption,
  transformInteraction,
  transformInteractionDataOption,
} from "./transformers/interaction";
import { Invite, transformInvite } from "./transformers/invite";
import {
  Member,
  User,
  transformMember,
  transformUser,
} from "./transformers/member";
import { Message, transformMessage } from "./transformers/message";
import {
  transformEmbedToDiscordEmbed,
  transformComponentToDiscordComponent,
  transformActivityToDiscordActivity,
  transformMemberToDiscordMember,
  transformUserToDiscordUser,
  transformTeamToDiscordTeam,
  transformApplicationToDiscordApplication,
  transformApplicationCommandToDiscordApplicationCommand,
  transformApplicationCommandOptionToDiscordApplicationCommandOption,
  transformApplicationCommandOptionChoiceToDiscordApplicationCommandOptionChoice,
  transformAttachmentToDiscordAttachment,
} from "./transformers/mod";
import { PresenceUpdate, transformPresence } from "./transformers/presence";
import { transformAllowedMentionsToDiscordAllowedMentions } from "./transformers/reverse/allowedMentions";
import { Role, transformRole } from "./transformers/role";
import {
  ScheduledEvent,
  transformScheduledEvent,
} from "./transformers/scheduledEvent";
import {
  StageInstance,
  transformStageInstance,
} from "./transformers/stageInstance";
import {
  Sticker,
  StickerPack,
  transformSticker,
  transformStickerPack,
} from "./transformers/sticker";
import { Team, transformTeam } from "./transformers/team";
import { Template, transformTemplate } from "./transformers/template";
import {
  ThreadMember,
  transformThreadMember,
} from "./transformers/threadMember";
import { VoiceRegions, transformVoiceRegion } from "./transformers/voiceRegion";
import { VoiceState, transformVoiceState } from "./transformers/voiceState";
import { Webhook, transformWebhook } from "./transformers/webhook";
import {
  WelcomeScreen,
  transformWelcomeScreen,
} from "./transformers/welcomeScreen";
import { GuildWidget, transformWidget } from "./transformers/widget";
import {
  GuildWidgetSettings,
  transformWidgetSettings,
} from "./transformers/widgetSettings";

export interface Transformers {
  reverse: {
    allowedMentions: (
      bot: LegacyBot,
      payload: AllowedMentions
    ) => DiscordAllowedMentions;
    embed: (bot: LegacyBot, payload: Embed) => DiscordEmbed;
    component: (bot: LegacyBot, payload: Component) => DiscordComponent;
    activity: (bot: LegacyBot, payload: Activity) => DiscordActivity;
    member: (bot: LegacyBot, payload: Member) => DiscordMember;
    user: (bot: LegacyBot, payload: User) => DiscordUser;
    team: (bot: LegacyBot, payload: Team) => DiscordTeam;
    application: (bot: LegacyBot, payload: Application) => DiscordApplication;
    snowflake: (snowflake: BigString) => string;
    createApplicationCommand: (
      bot: LegacyBot,
      payload: CreateApplicationCommand
    ) => DiscordCreateApplicationCommand;
    applicationCommand: (
      bot: LegacyBot,
      payload: ApplicationCommand
    ) => DiscordApplicationCommand;
    applicationCommandOption: (
      bot: LegacyBot,
      payload: ApplicationCommandOption
    ) => DiscordApplicationCommandOption;
    applicationCommandOptionChoice: (
      bot: LegacyBot,
      payload: ApplicationCommandOptionChoice
    ) => DiscordApplicationCommandOptionChoice;
    interactionResponse: (
      bot: LegacyBot,
      payload: InteractionResponse
    ) => DiscordInteractionResponse;
    attachment: (bot: LegacyBot, payload: Attachment) => DiscordAttachment;
  };
  snowflake: (snowflake: BigString) => bigint;
  gatewayBot: (payload: DiscordGetGatewayBot) => GetGatewayBot;
  automodRule: (
    bot: LegacyBot,
    payload: DiscordAutoModerationRule
  ) => AutoModerationRule;
  automodActionExecution: (
    bot: LegacyBot,
    payload: DiscordAutoModerationActionExecution
  ) => AutoModerationActionExecution;
  channel: (
    bot: LegacyBot,
    payload: { channel: DiscordChannel } & { guildId?: bigint }
  ) => Channel;
  guild: (
    bot: LegacyBot,
    payload: { guild: DiscordGuild } & { shardId: number }
  ) => Guild;
  user: (bot: LegacyBot, payload: DiscordUser) => User;
  member: (
    bot: LegacyBot,
    payload: DiscordMember,
    guildId: bigint,
    userId: bigint
  ) => Member;
  message: (bot: LegacyBot, payload: DiscordMessage) => Message;
  role: (
    bot: LegacyBot,
    payload: { role: DiscordRole } & { guildId: bigint }
  ) => Role;
  voiceState: (
    bot: LegacyBot,
    payload: { voiceState: DiscordVoiceState } & { guildId: bigint }
  ) => VoiceState;
  interaction: (bot: LegacyBot, payload: DiscordInteraction) => Interaction;
  interactionDataOptions: (
    bot: LegacyBot,
    payload: DiscordInteractionDataOption
  ) => InteractionDataOption;
  integration: (
    bot: LegacyBot,
    payload: DiscordIntegrationCreateUpdate
  ) => Integration;
  invite: (bot: LegacyBot, invite: DiscordInviteCreate) => Invite;
  application: (bot: LegacyBot, payload: DiscordApplication) => Application;
  team: (bot: LegacyBot, payload: DiscordTeam) => Team;
  emoji: (bot: LegacyBot, payload: DiscordEmoji) => Emoji;
  activity: (bot: LegacyBot, payload: DiscordActivity) => Activity;
  presence: (bot: LegacyBot, payload: DiscordPresenceUpdate) => PresenceUpdate;
  attachment: (bot: LegacyBot, payload: DiscordAttachment) => Attachment;
  embed: (bot: LegacyBot, payload: DiscordEmbed) => Embed;
  component: (bot: LegacyBot, payload: DiscordComponent) => Component;
  webhook: (bot: LegacyBot, payload: DiscordWebhook) => Webhook;
  auditLogEntry: (
    bot: LegacyBot,
    payload: DiscordAuditLogEntry
  ) => AuditLogEntry;
  applicationCommand: (
    bot: LegacyBot,
    payload: DiscordApplicationCommand
  ) => ApplicationCommand;
  applicationCommandOption: (
    bot: LegacyBot,
    payload: DiscordApplicationCommandOption
  ) => ApplicationCommandOption;
  applicationCommandPermission: (
    bot: LegacyBot,
    payload: DiscordGuildApplicationCommandPermissions
  ) => ApplicationCommandPermission;
  scheduledEvent: (
    bot: LegacyBot,
    payload: DiscordScheduledEvent
  ) => ScheduledEvent;
  threadMember: (bot: LegacyBot, payload: DiscordThreadMember) => ThreadMember;
  welcomeScreen: (
    bot: LegacyBot,
    payload: DiscordWelcomeScreen
  ) => WelcomeScreen;
  voiceRegion: (bot: LegacyBot, payload: DiscordVoiceRegion) => VoiceRegions;
  widget: (bot: LegacyBot, payload: DiscordGuildWidget) => GuildWidget;
  widgetSettings: (
    bot: LegacyBot,
    payload: DiscordGuildWidgetSettings
  ) => GuildWidgetSettings;
  stageInstance: (
    bot: LegacyBot,
    payload: DiscordStageInstance
  ) => StageInstance;
  sticker: (bot: LegacyBot, payload: DiscordSticker) => Sticker;
  stickerPack: (bot: LegacyBot, payload: DiscordStickerPack) => StickerPack;
  applicationCommandOptionChoice: (
    bot: LegacyBot,
    payload: DiscordApplicationCommandOptionChoice
  ) => ApplicationCommandOptionChoice;
  template: (bot: LegacyBot, payload: DiscordTemplate) => Template;
}

export function createTransformers(options: Partial<Transformers>) {
  return {
    reverse: {
      allowedMentions:
        options.reverse?.allowedMentions ||
        transformAllowedMentionsToDiscordAllowedMentions,
      embed: options.reverse?.embed || transformEmbedToDiscordEmbed,
      component:
        options.reverse?.component || transformComponentToDiscordComponent,
      activity: options.reverse?.activity || transformActivityToDiscordActivity,
      member: options.reverse?.member || transformMemberToDiscordMember,
      user: options.reverse?.user || transformUserToDiscordUser,
      team: options.reverse?.team || transformTeamToDiscordTeam,
      application:
        options.reverse?.application ||
        transformApplicationToDiscordApplication,
      snowflake: options.reverse?.snowflake || bigintToSnowflake,
      createApplicationCommand:
        options.reverse?.createApplicationCommand ||
        transformCreateApplicationCommandToDiscordCreateApplicationCommand,
      applicationCommand:
        options.reverse?.applicationCommand ||
        transformApplicationCommandToDiscordApplicationCommand,
      applicationCommandOption:
        options.reverse?.applicationCommandOption ||
        transformApplicationCommandOptionToDiscordApplicationCommandOption,
      applicationCommandOptionChoice:
        options.reverse?.applicationCommandOptionChoice ||
        transformApplicationCommandOptionChoiceToDiscordApplicationCommandOptionChoice,
      interactionResponse:
        options.reverse?.interactionResponse ||
        transformInteractionResponseToDiscordInteractionResponse,
      attachment:
        options.reverse?.attachment || transformAttachmentToDiscordAttachment,
    },
    automodRule: options.automodRule || transformAutoModerationRule,
    automodActionExecution:
      options.automodActionExecution || transformAutoModerationActionExecution,
    activity: options.activity || transformActivity,
    application: options.application || transformApplication,
    attachment: options.attachment || transformAttachment,
    channel: options.channel || transformChannel,
    component: options.component || transformComponent,
    embed: options.embed || transformEmbed,
    emoji: options.emoji || transformEmoji,
    guild: options.guild || transformGuild,
    integration: options.integration || transformIntegration,
    interaction: options.interaction || transformInteraction,
    interactionDataOptions:
      options.interactionDataOptions || transformInteractionDataOption,
    invite: options.invite || transformInvite,
    member: options.member || transformMember,
    message: options.message || transformMessage,
    presence: options.presence || transformPresence,
    role: options.role || transformRole,
    user: options.user || transformUser,
    team: options.team || transformTeam,
    voiceState: options.voiceState || transformVoiceState,
    snowflake: options.snowflake || snowflakeToBigint,
    webhook: options.webhook || transformWebhook,
    auditLogEntry: options.auditLogEntry || transformAuditLogEntry,
    applicationCommand:
      options.applicationCommand || transformApplicationCommand,
    applicationCommandOption:
      options.applicationCommandOption || transformApplicationCommandOption,
    applicationCommandPermission:
      options.applicationCommandPermission ||
      transformApplicationCommandPermission,
    scheduledEvent: options.scheduledEvent || transformScheduledEvent,
    threadMember: options.threadMember || transformThreadMember,
    welcomeScreen: options.welcomeScreen || transformWelcomeScreen,
    voiceRegion: options.voiceRegion || transformVoiceRegion,
    widget: options.widget || transformWidget,
    widgetSettings: options.widgetSettings || transformWidgetSettings,
    stageInstance: options.stageInstance || transformStageInstance,
    sticker: options.sticker || transformSticker,
    stickerPack: options.stickerPack || transformStickerPack,
    gatewayBot: options.gatewayBot || transformGatewayBot,
    applicationCommandOptionChoice:
      options.applicationCommandOptionChoice ||
      transformApplicationCommandOptionChoice,
    template: options.template || transformTemplate,
  };
}
