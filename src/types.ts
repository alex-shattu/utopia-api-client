/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */

export enum Currencies {
  CRP = 'CRP',
  USD = 'USD',
}

export enum ProfileStatus {
  Available = 'Available',
  Away = 'Away',
  DoNotDisturb = 'DoNotDisturb',
  Invisible = 'Invisible',
  Offline = 'Offline',
}

export interface Filter {
  limit: string;
  offset: string;
  sortBy: string;
}

export enum Settings {
  AllowReceiveEmailFromUtopia = 'AllowReceiveEmailFromUtopia',
  AllowReceiveMessageFromUtopia = 'AllowReceiveMessageFromUtopia',
  AutoDownloadAttachmentLess = 'AutoDownloadAttachmentLess',
  AutoReceiveFileLessThan = 'AutoReceiveFileLessThan',
  AutoSaveImagesInChannel = 'AutoSaveImagesInChannel',
  AutoSaveOutgoingFile = 'AutoSaveOutgoingFile',
  AutoStart = 'AutoStart',
  InterfaceAlwaysShowChannelManagerTab = 'InterfaceAlwaysShowChannelManagerTab',
  InterfaceAlwaysShowUWalletTab = 'InterfaceAlwaysShowUWalletTab',
  InterfaceDisplayContactAvatars = 'InterfaceDisplayContactAvatars',
  InterfaceDisplayImageWhenTheMouseCursorHoversOver = 'InterfaceDisplayImageWhenTheMouseCursorHoversOver',
  InterfaceDoNotShowScrollDoubleArrowInChat = 'InterfaceDoNotShowScrollDoubleArrowInChat',
  InterfaceEnableBuzzNotifications = 'InterfaceEnableBuzzNotifications',
  InterfaceEnableDragAndDropContactInChat = 'InterfaceEnableDragAndDropContactInChat',
  InterfaceEnableNewMessageAnimationInChat = 'InterfaceEnableNewMessageAnimationInChat',
  InterfaceFlipContactListToTheRight = 'InterfaceFlipContactListToTheRight',
  InterfaceHighlightURLLinks = 'InterfaceHighlightURLLinks',
  InterfacePreviewImageInChatWindow = 'InterfacePreviewImageInChatWindow',
  InterfacePreviewImageInTab = 'InterfacePreviewImageInTab',
  InterfaceShowSmilesAsImage = 'InterfaceShowSmilesAsImage',
  InterfaceShowStatusBar = 'InterfaceShowStatusBar',
  KeepHistory = 'KeepHistory',
  NetworkEnableUPNP = 'NetworkEnableUPNP',
  NetworkReplyToPeerInformationRequestsRequiredForMining = 'NetworkReplyToPeerInformationRequestsRequiredForMining',
  NetworkRouteNetworkPacketsRequiredForMining = 'NetworkRouteNetworkPacketsRequiredForMining',
  NetworkShareMyStatus = 'NetworkShareMyStatus',
  NotificationContactBecamesOffline = 'NotificationContactBecamesOffline',
  NotificationContactBecamesOnline = 'NotificationContactBecamesOnline',
  NotificationFinanceNotify = 'NotificationFinanceNotify',
  NotificationIncommingAuth = 'NotificationIncommingAuth',
  NotificationIncommingFile = 'NotificationIncommingFile',
  NotificationNewChannelMessage = 'NotificationNewChannelMessage',
  NotificationNewEmail = 'NotificationNewEmail',
  NotificationNewMessage = 'NotificationNewMessage',
  NotificationUnsNotify = 'NotificationUnsNotify',
  OpenFileAttachmentsByDefaultOSProgram = 'OpenFileAttachmentsByDefaultOSProgram',
  OpenRecentTabOnStartup = 'OpenRecentTabOnStartup',
  SaveEmailAfterSending = 'SaveEmailAfterSending',
  ShowMeAsAwayAfter = 'ShowMeAsAwayAfter',
  TrayIconMode = 'TrayIconMode',
  WhenStartingKeepOld = 'WhenStartingKeepOld',
}

export enum Coder {
  BASE64 = 'BASE64',
  HEX = 'HEX',
}

export enum ImageFormat {
  JPG = 'JPG',
  PNG = 'PNG',
}

export type OwnContact = {
  avatarMd5: string;
  hashedPk: string;
  isFriend: boolean;
  firstName: string;
  lastName: string;
  moodMessage: string;
  nick: string;
  pk: string;
  status: number;
};

export type Contact = OwnContact & {
  authorizationStatus: number;
  group: string;
  lastSeen: string;
  avatarMd5: string;
  hashedPk: string;
  isFriend: boolean;
  moodMessage: string;
  nick: string;
  pk: string;
  status: number;
};

export type Message = {
  dateTime: string;
  file: MessageFile | null;
  id: number;
  isIncoming: boolean;
  // TODO
  messageType: number;
  // TODO
  metaData:
    | null
    | {
        data: {
          command: number; // 1 - unmarked, 0 - marked
          type: number;
        };
        type: 'authcmd';
      }
    | {
        data: {
          action: number;
          topicId: string;
        };
        type: 'pinned_message';
      }
    | {
        data: {
          comment: string;
          pictureData: string;
          pictureFilename: string;
          pictureFormat: string;
          pictureSize: number;
        };
        type: 'picture';
      }
    | {
        data: {
          dateTime: string;
          hexPublicKey: string;
          isChannel: boolean;
          nick: string;
          text: string;
          tid: string;
        };
        type: 'quote';
      }
    | {
        data: {
          parent_topic_id: string;
          text: string;
        };
        type: 'comment';
      };
  nick: string;
  pk: string;
  // TODO
  readDateTime: null | string;
  receivedDateTime: string;
  text: string;
};

export type ChannelMessage = Message & {
  topicId: string;
  hashedPk: string;
};

export type Comment = {
  dateTime: string;
  hashedPk: string;
  id: number;
  isIncoming: boolean;
  // TODO messageType
  messageType: number;
  metaData: {
    data: {
      parent_topic_id: string;
      text: string;
    };
    type: string;
  };
  nick: string;
  pk: string;
  text: string;
  topicId: string;
};

export type MessageFile = {
  filename: string;
  id: number;
};

export type File = {
  dateTime: string;
  fileName: string;
  id: number;
  sourceType: number;
  sourceTypeName: string;
  storageType: number;
  storageTypeName: string;
  totalSize: number;
};

export type Channel = {
  avatarId: string;
  channelid: string;
  created: string;
  description: string;
  isjoined: boolean;
  isprivate: boolean;
  modified: string;
  name: string;
  owner: string;
};

export enum EmailFolderType {
  Inbox = 1,
  Drafts = 2,
  Sent = 4,
  Outbox = 8,
  Trash = 16,
}

export type Email = {
  body: string;
  date: string;
  dateTime: string;
  // TODO
  flags: number;
  folder: EmailFolderType;
  from: string;
  id: number;
  size: number;
  subject: string;
  to: string[];
};

export type TrayIconMode = 'Always' | 'Never' | 'IncommingMessage';

export type GetSystemInfoParams = {};
export interface GetSystemInfoResponse {
  buildAbi: string;
  buildCpuArchitecture: string;
  build_number: string;
  currentCpuArchitecture: string;
  netCoreRate: number;
  networkCores: number;
  networkEnabled: boolean;
  numberOfConnections: number;
  packetCacheSize: number;
  uptime: string;
}

export type GetStatusParams = {};
export interface GetStatusResponse {}

export type GetProfileStatusParams = {};
export interface GetProfileStatusResponse {
  mood: string;
  status: ProfileStatus;
  status_code: number;
}

export type SetProfileStatusParams = {
  status: ProfileStatus;
  mood: string;
};
export interface SetProfileStatusResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetReleaseNotesParams = {};
export interface GetReleaseNotesResponse {
  [language: string]: {
    [version: string]: {
      fixed: string[];
      issues: string[];
      new: string[];
      version: {
        [os: string]: string;
      };
    };
  };
}

export type GetSettingInfoParams = {
  settingId: string;
};
export interface GetSettingInfoResponse {
  [Settings.AllowReceiveEmailFromUtopia]: boolean;
  [Settings.AllowReceiveMessageFromUtopia]: boolean;
  [Settings.AutoDownloadAttachmentLess]: number;
  [Settings.AutoReceiveFileLessThan]: number;
  [Settings.AutoSaveImagesInChannel]: boolean;
  [Settings.AutoSaveOutgoingFile]: boolean;
  [Settings.AutoStart]: boolean;
  [Settings.InterfaceAlwaysShowChannelManagerTab]: boolean;
  [Settings.InterfaceAlwaysShowUWalletTab]: boolean;
  [Settings.InterfaceDisplayContactAvatars]: boolean;
  [Settings.InterfaceDisplayImageWhenTheMouseCursorHoversOver]: boolean;
  [Settings.InterfaceDoNotShowScrollDoubleArrowInChat]: boolean;
  [Settings.InterfaceEnableBuzzNotifications]: boolean;
  [Settings.InterfaceEnableDragAndDropContactInChat]: boolean;
  [Settings.InterfaceEnableNewMessageAnimationInChat]: boolean;
  [Settings.InterfaceFlipContactListToTheRight]: boolean;
  [Settings.InterfaceHighlightURLLinks]: boolean;
  [Settings.InterfacePreviewImageInChatWindow]: boolean;
  [Settings.InterfacePreviewImageInTab]: boolean;
  [Settings.InterfaceShowSmilesAsImage]: boolean;
  [Settings.InterfaceShowStatusBar]: boolean;
  [Settings.KeepHistory]: boolean;
  [Settings.NetworkEnableUPNP]: boolean;
  [Settings.NetworkReplyToPeerInformationRequestsRequiredForMining]: boolean;
  [Settings.NetworkRouteNetworkPacketsRequiredForMining]: boolean;
  [Settings.NetworkShareMyStatus]: boolean;
  [Settings.NotificationContactBecamesOffline]: boolean;
  [Settings.NotificationContactBecamesOnline]: boolean;
  [Settings.NotificationFinanceNotify]: boolean;
  [Settings.NotificationIncommingAuth]: boolean;
  [Settings.NotificationIncommingFile]: boolean;
  [Settings.NotificationNewChannelMessage]: boolean;
  [Settings.NotificationNewEmail]: boolean;
  [Settings.NotificationNewMessage]: boolean;
  [Settings.NotificationUnsNotify]: boolean;
  [Settings.OpenFileAttachmentsByDefaultOSProgram]: boolean;
  [Settings.OpenRecentTabOnStartup]: boolean;
  [Settings.SaveEmailAfterSending]: boolean;
  [Settings.ShowMeAsAwayAfter]: number;
  [Settings.TrayIconMode]: TrayIconMode;
  [Settings.WhenStartingKeepOld]: boolean;
}

export type SetSettingInfoParams =
  | {
      settingId:
        | Settings.AllowReceiveEmailFromUtopia
        | Settings.AllowReceiveMessageFromUtopia
        | Settings.AutoSaveImagesInChannel
        | Settings.AutoSaveOutgoingFile
        | Settings.AutoStart
        | Settings.InterfaceAlwaysShowChannelManagerTab
        | Settings.InterfaceAlwaysShowUWalletTab
        | Settings.InterfaceDisplayContactAvatars
        | Settings.InterfaceDisplayImageWhenTheMouseCursorHoversOver
        | Settings.InterfaceDoNotShowScrollDoubleArrowInChat
        | Settings.InterfaceEnableBuzzNotifications
        | Settings.InterfaceEnableDragAndDropContactInChat
        | Settings.InterfaceEnableNewMessageAnimationInChat
        | Settings.InterfaceFlipContactListToTheRight
        | Settings.InterfaceHighlightURLLinks
        | Settings.InterfacePreviewImageInChatWindow
        | Settings.InterfacePreviewImageInTab
        | Settings.InterfaceShowSmilesAsImage
        | Settings.InterfaceShowStatusBar
        | Settings.KeepHistory
        | Settings.NetworkEnableUPNP
        | Settings.NetworkReplyToPeerInformationRequestsRequiredForMining
        | Settings.NetworkRouteNetworkPacketsRequiredForMining
        | Settings.NetworkShareMyStatus
        | Settings.NotificationContactBecamesOffline
        | Settings.NotificationContactBecamesOnline
        | Settings.NotificationFinanceNotify
        | Settings.NotificationIncommingAuth
        | Settings.NotificationIncommingFile
        | Settings.NotificationNewChannelMessage
        | Settings.NotificationNewEmail
        | Settings.NotificationNewMessage
        | Settings.NotificationUnsNotify
        | Settings.OpenFileAttachmentsByDefaultOSProgram
        | Settings.OpenRecentTabOnStartup
        | Settings.SaveEmailAfterSending;
      newValue: boolean;
    }
  | {
      settingId: Settings.AutoDownloadAttachmentLess | Settings.AutoReceiveFileLessThan | Settings.ShowMeAsAwayAfter;
      newValue: number;
    }
  | {
      settingId: Settings.TrayIconMode;
      newValue: TrayIconMode;
    };
export interface SetSettingInfoResponse {}

export type SetProfileDataParams = {
  nick: string;
  firstName: string;
  lastName: string;
};
export interface SetProfileDataResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetOwnContactParams = {};
export interface GetOwnContactResponse {
  result: OwnContact[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetContactGroupsParams = {};
export interface GetContactGroupsResponse {
  result: string[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetContactsByGroupParams = {
  groupName: string;
};
export interface GetContactsByGroupResponse {
  result: Contact[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetContactsParams = {
  filter: string;
};
export interface GetContactsResponse {
  result: Contact[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetAvatarByKeyParams = {
  pk: string;
  coder: Coder;
  format: ImageFormat;
};
export interface GetAvatarByKeyResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetContactAvatarParams = {
  pk: string;
  coder: Coder;
  format: ImageFormat;
};
export interface GetContactAvatarResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelAvatarParams = {
  channelid: string;
  coder: Coder;
  format: ImageFormat;
};
export interface GetChannelAvatarResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RenameContactGroupParams = {
  oldGroupName: string;
  newGroupName: string;
};
export interface RenameContactGroupResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type DeleteContactGroupParams = {
  groupName: string;
};
export interface DeleteContactGroupResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SetContactGroupParams = {
  contactPublicKey: string;
  groupName: string;
};
export interface SetContactGroupResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SetContactNickParams = {
  contactPublicKey: string;
  newNick: string;
};
export interface SetContactNickResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendInstantMessageParams = {
  to: string;
  text: string;
};
export interface SendInstantMessageResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendInstantQuoteParams = {
  to: string;
  text: string;
  id_message: string;
};
export interface SendInstantQuoteResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendInstantStickerParams = {
  to: string;
  collection: string;
  name: string;
};
export interface SendInstantStickerResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type PinInstantMessageParams = {
  to: string;
  messageId: string;
  pin: boolean;
};
export interface PinInstantMessageResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetPinnedMessagesParams = {
  pk: string;
};
export interface GetPinnedMessagesResponse {
  result: Message[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type BookmarkInstantMessageParams = {
  messageId: number;
  comments: string;
};
export interface BookmarkInstantMessageResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetStickerCollectionsParams = {};
export interface GetStickerCollectionsResponse {
  result: string[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetStickerNamesByCollectionParams = {
  collection_name: string;
};
export interface GetStickerNamesByCollectionResponse {
  result: string[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetImageStickerParams = {
  collection_name: string;
  sticker_name: string;
  coder: Coder;
};
export interface GetImageStickerResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendInstantBuzzParams = {
  to: string;
  comments: string;
};
export interface SendInstantBuzzResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendInstantInvitationParams = {
  to: string;
  channelid: string;
  description: string;
  comments: string;
};
export interface SendInstantInvitationResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RemoveInstantMessagesParams = {
  hex_contact_public_key: string;
};
export interface RemoveInstantMessagesResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetContactMessagesParams = {
  pk: string;
};
export interface GetContactMessagesResponse {
  result: Message[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelMessagesParams = {
  channelId: string;
  limitRows: number;
  offsetRows: number;
};
export interface GetChannelMessagesResponse {
  result: ChannelMessage[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendEmailMessageParams = {
  to: string[];
  subject: string;
  body: string;
  attachmentFileId: string;
};
export interface SendEmailMessageResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type VerifyTransactionParams = {
  source: string;
  destination: string;
  amount: number;
  currency: string;
  batch: string;
};
export interface VerifyTransactionResponse {
  // TODO
}

export type VerifyTransactionByHashParams = {
  hash: string;
};
export interface VerifyTransactionByHashResponse {
  result: {
    request_id: string;
  };
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetVerifyTransactionResponseParams = {
  requestId: string;
};
export interface GetVerifyTransactionResponseResponse {
  result: {
    blockId: string;
    creation_ts: string;
    currency: string;
    meta: {
      batchId: string;
    };
    transaction_hash: string;
  };
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RequestNewPublicKeyPaymentAliasParams = {};
export interface RequestNewPublicKeyPaymentAliasResponse {
  result: {
    request_id: string;
  };
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetMyPublicKeyPaymentAliasesParams = {
  requestId: string;
};
export interface GetMyPublicKeyPaymentAliasesResponse {
  result: {
    alias: string;
    created: string;
    request_id: string;
  }[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type CreatePromoCodeParams = {
  promocode: string;
};
export interface CreatePromoCodeResponse {
  result: {
    ref_id: string;
  };
  resultExtraInfo: {
    elapsed: string;
  };
}

export type DeletePromoCodeParams = {
  promocode: string;
};
export interface DeletePromoCodeResponse {}

export type SendPaymentParams = {};
export interface SendPaymentResponse {}

export type AddDelegateParams = {};
export interface AddDelegateResponse {}

export type RevokeDelegatedParams = {};
export interface RevokeDelegatedResponse {}

export type GetDPoSInfoParams = {};
export interface GetDPoSInfoResponse {}

export type GetEmailFolderParams = {
  folderType: EmailFolderType;
  filter?: string;
};
export interface GetEmailFolderResponse {
  result: number[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetEmailsParams = {
  folderType: EmailFolderType;
  filter?: string;
};
export interface GetEmailsResponse {
  result: Email[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetEmailByIdParams = {
  id: string;
};
export interface GetEmailByIdResponse {
  result: Email[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type AcceptAttachmentParams = {
  emailId: string;
  fileId: string;
};
export interface AcceptAttachmentResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type AbortAttachmentParams = {
  emailId: string;
  fileId: string;
};
export interface AbortAttachmentResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type AcceptFileMessageParams = {
  messageId: string;
};
export interface AcceptFileMessageResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type AbortFileMessageParams = {
  messageId: string;
};
export interface AbortFileMessageResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type DeleteEmailParams = {
  id: string;
};
export interface DeleteEmailResponse {
  // TODO
}

export type SendReplyEmailMessageParams = {
  id: string;
  body: string;
  subject: string;
  attachmentFileId?: number;
};
export interface SendReplyEmailMessageResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendForwardEmailMessageParams = {
  id: string;
  to: string;
  body: string;
  subject: string;
  attachmentFileId?: number;
};
export interface SendForwardEmailMessageResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendEmailInvitationParams = {
  channelId: string;
  to: string;
  description: string;
  comments: string;
};
export interface SendEmailInvitationResponse {
  // TODO
}

export type EmptyEmailsTrashParams = {};
export interface EmptyEmailsTrashResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SetChannelAsBookmarkedParams = {
  channelId: string;
  bookmarked: boolean;
};
export interface SetChannelAsBookmarkedResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetFinanceSystemInformationParams = {};
export interface GetFinanceSystemInformationResponse {
  AirdropReward: boolean;
  CRP: {
    cardCreatePrice: number;
    cardCreatePrice10: number;
    cardCreatePrice100: number;
    cardCreatePrice1000: number;
    cardCreatePrice10000: number;
    cardsCreationEnabled: boolean;
    cardsMaxActive: number;
    cardsMaxPerDay: number;
    investorMinAmount: number;
    invoicesDefaultTtl: number;
    invoicesEnabled: boolean;
    invoicesMaxTotal: number;
    invoicesMaxTotalFromMerchant: number;
    invoicesMinAmount: number;
    transferCardFee: number;
    transferCheckFee: boolean;
    transferExternalFee: number;
    transferInternalFee: number;
    transfersEnabled: boolean;
    unsDefaultTtl: number;
    unsDeleteNameFee: number;
    unsModifyNameFee: number;
    unsName1RegistrationFee: number;
    unsName2RegistrationFee: number;
    unsName3RegistrationFee: number;
    unsName4RegistrationFee: number;
    unsProxyEnabled: boolean;
    unsTransferFee: number;
    vouchersCreateEnabled: boolean;
    vouchersMaxActive: number;
    vouchersMaxPerBatch: number;
    vouchersMinAmount: number;
    vouchersMinPerBatch: number;
    vouchersUseEnabled: boolean;
  };
  PoS: boolean;
  USD: {
    transferExternalFee: number;
    transferInternalFee: number;
    transfersEnabled: boolean;
    vouchersCreateEnabled: boolean;
    vouchersMaxActive: number;
    vouchersMaxPerBatch: number;
    vouchersMinAmount: number;
    vouchersMinPerBatch: number;
    vouchersUseEnabled: boolean;
  };
  enableToUseMining: boolean;
  miningPeriod: number;
  settingsVersion: number;
}

export type GetBalanceParams = {
  currency: Currencies;
};
export interface GetBalanceResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RequestAllFinnaceHistoryParams = {};
export interface RequestAllFinnaceHistoryResponse {}

export type GetFinanceHistoryParams = {};
export interface GetFinanceHistoryResponse {}

export type GetCardsParams = {};
export interface GetCardsResponse {}

export type AddCardParams = {};
export interface AddCardResponse {}

export type DeleteCardParams = {};
export interface DeleteCardResponse {}

export type EnableMiningParams = {
  enabled: 'true' | 'false';
};
export interface EnableMiningResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelsParams = {
  filter: string;
  channel_type: string;
  from: string;
  to: string;
};
export interface GetChannelsResponse {
  result: Channel[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type JoinChannelParams = {
  channelId: string;
  password: string;
};
export interface JoinChannelResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type FetchChannelHistoryParams = {
  channelId: string;
};
export interface FetchChannelHistoryResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendChannelPrivateMessageToContactParams = {
  channelId: string;
  contactHashedPk: string;
  message: string;
};
export interface SendChannelPrivateMessageToContactResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelPrivateMessagesOfContactParams = {
  channelId: string;
  contactHashedPk: string;
};
export interface GetChannelPrivateMessagesOfContactResponse {
  result: Message[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendChannelMessageParams = {
  channelId: string;
  message: string;
};
export interface SendChannelMessageResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendChannelCommentParams = {
  channelId: string;
  comment: string;
  id_message: string;
};
export interface SendChannelCommentResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelCommentsParams = {
  channelId: string;
  messageId: string;
};
export interface GetChannelCommentsResponse {
  result: Comment[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendChannelPictureParams = {
  channelId: string;
  base64_image: string;
  filename_image: string;
  comment: string;
};
export interface SendChannelPictureResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type LeaveChannelParams = {
  channelId: string;
};
export interface LeaveChannelResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelInfoParams = {
  channelId: string;
};

export interface GetChannelInfoResponse {
  HideInCommonList: boolean;
  created: string;
  description: string;
  geotag: string;
  hashtags: string;
  languages: string;
  modified: string;
  owner: string;
  readonly: boolean;
  readonly_privacy: boolean;
  title: string;
  // TODO
  type: string;
}

export type GetChannelModeratorsParams = {
  channelId: string;
};
export interface GetChannelModeratorsResponse {
  result: string[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelContactsParams = {
  channelId: string;
};
export interface GetChannelContactsResponse {
  result: {
    hashedPk: string;
    lastSeen: string;
    local: boolean;
    moderator: boolean;
    nick: string;
    pk: string;
  }[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelModeratorRightParams = {
  channelId: string;
  moderator: string;
};
export interface GetChannelModeratorRightResponse {
  // TODO
  result: {};
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SendChannelQuoteParams = {
  channelId: string;
  text: string;
  id_message: string;
};
export interface SendChannelQuoteResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RemoveChannelMessageParams = {
  channelId: string;
  id_message: string;
};
export interface RemoveChannelMessageResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type EnableChannelNotificationParams = {
  channelId: string;
  enabled: boolean;
};
export interface EnableChannelNotificationResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type CreateChannelParams = {
  channel_name: string;
  description: string;
  read_only: boolean;
  read_only_privacy: boolean;
  password: string;
  languages: string;
  hashtags: string;
  geoTag: string;
  base64_avatar_image: string;
  hide_in_UI: boolean;
  type: 'public' | 'private';
};
export interface CreateChannelResponse {
  // TODO re-test
}

export type ModifyChannelParams = {
  channelId: string;
  description?: string;
  read_only?: boolean;
  read_only_privacy?: boolean;
  password?: string;
  languages?: string;
  hashtags?: string;
  geoTag?: string;
  base64_avatar_image?: string;
  hide_in_UI?: boolean;
};
export interface ModifyChannelResponse {}

export type ModifyChannelTitleParams = {
  channelId: string;
  newTitle: string;
  password: string;
};
export interface ModifyChannelTitleResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type ModifyChannelPasswordParams = {
  channelId: string;
  newPassword: string;
  oldPassword: string;
};
export interface ModifyChannelPasswordResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type DeleteChannelParams = {
  channelId: string;
  password: string;
};
export interface DeleteChannelResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetChannelSystemInfoParams = {};
export interface GetChannelSystemInfoResponse {
  last_downloaded_channel: string;
  local_db_channels: number;
  peers_connected: number;
  total_channels: number;
}

export type GetChannelBannedContactsParams = {
  channelId: string;
};
export interface GetChannelBannedContactsResponse {
  // TODO re-test
  result: Contact[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type ApplyChannelBannedContactsParams = {};
export interface ApplyChannelBannedContactsResponse {}

export type UnsCreateRecordRequestParams = {};
export interface UnsCreateRecordRequestResponse {}

export type UnsRegisteredNamesParams = {};
export interface UnsRegisteredNamesResponse {}

export type UnsDeleteRecordRequestParams = {};
export interface UnsDeleteRecordRequestResponse {}

export type UnsSearchByPkParams = {};
export interface UnsSearchByPkResponse {}

export type UnsSearchByNickParams = {};
export interface UnsSearchByNickResponse {}

export type UnsRegisteredNamesByDatetimesParams = {};
export interface UnsRegisteredNamesByDatetimesResponse {}

export type UnsUnregisteredNamesByDatetimesParams = {};
export interface UnsUnregisteredNamesByDatetimesResponse {}

export type SummaryUnsRegisteredNamesParams = {};
export interface SummaryUnsRegisteredNamesResponse {}

export type UnsHistoryNameParams = {};
export interface UnsHistoryNameResponse {}

export type EnablePoSParams = {};
export interface EnablePoSResponse {}

export type EnableHistoryMiningParams = {};
export interface EnableHistoryMiningResponse {}

export type StatusHistoryMiningParams = {};
export interface StatusHistoryMiningResponse {}

export type GetMiningBlocksParams = {};
export interface GetMiningBlocksResponse {}

export type GetMiningBlocksWithTreasuryParams = {};
export interface GetMiningBlocksWithTreasuryResponse {}

export type GetVouchersParams = {};
export interface GetVouchersResponse {}

export type CreateVoucherParams = {};
export interface CreateVoucherResponse {}

export type CreateVoucherBatchParams = {};
export interface CreateVoucherBatchResponse {}

export type UseVoucherParams = {};
export interface UseVoucherResponse {}

export type DeleteVoucherParams = {};
export interface DeleteVoucherResponse {}

export type GetInvoicesParams = {};
export interface GetInvoicesResponse {}

export type GetInvoiceByReferenceNumberParams = {};
export interface GetInvoiceByReferenceNumberResponse {}

export type GetTransactionIdByReferenceNumberParams = {};
export interface GetTransactionIdByReferenceNumberResponse {}

export type SendInvoiceParams = {};
export interface SendInvoiceResponse {}

export type AcceptInvoiceParams = {};
export interface AcceptInvoiceResponse {}

export type DeclineInvoiceParams = {};
export interface DeclineInvoiceResponse {}

export type CancelInvoiceParams = {};
export interface CancelInvoiceResponse {}

export type RequestUnsTransferParams = {};
export interface RequestUnsTransferResponse {}

export type AcceptUnsTransferParams = {};
export interface AcceptUnsTransferResponse {}

export type DeclineUnsTransferParams = {};
export interface DeclineUnsTransferResponse {}

export type IncomingUnsTransferParams = {};
export interface IncomingUnsTransferResponse {}

export type OutgoingUnsTransferParams = {};
export interface OutgoingUnsTransferResponse {}

export type StorageWipeParams = {};
export interface StorageWipeResponse {}

export type SendAuthorizationRequestParams = {};
export interface SendAuthorizationRequestResponse {}

export type AcceptAuthorizationRequestParams = {
  pk: string;
  message: string;
};
export interface AcceptAuthorizationRequestResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RejectAuthorizationRequestParams = {
  pk: string;
  message: string;
};
export interface RejectAuthorizationRequestResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type DeleteContactParams = {
  pk: string;
};
export interface DeleteContactResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type ClearTrayNotificationsParams = {};
export interface ClearTrayNotificationsResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetNetworkConnectionsParams = {};
export interface GetNetworkConnectionsResponse {
  // TODO
}

export type EnableLogsParams = {};
export interface EnableLogsResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetLogsParams = {
  countLatestRecords: string;
};
export interface GetLogsResponse {
  // TODO
  result: [];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type ClearNetHostDatabaseParams = {};
export interface ClearNetHostDatabaseResponse {}

export type GetProxyMappingsParams = {};
export interface GetProxyMappingsResponse {}

export type CreateProxyMappingParams = {};
export interface CreateProxyMappingResponse {}

export type EnableProxyMappingParams = {};
export interface EnableProxyMappingResponse {}

export type DisableProxyMappingParams = {};
export interface DisableProxyMappingResponse {}

export type RemoveProxyMappingParams = {};
export interface RemoveProxyMappingResponse {}

export type LowTrafficModeParams = {};
export interface LowTrafficModeResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type SetLowTrafficModeParams = {
  enabled: boolean;
};
export interface SetLowTrafficModeResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetWhoIsInfoParams = {};
export interface GetWhoIsInfoResponse {}

export type UnsModifyRecordRequestParams = {};
export interface UnsModifyRecordRequestResponse {}

export type GetUnsSyncInfoParams = {};
export interface GetUnsSyncInfoResponse {}

export type GetMiningInfoParams = {};
export interface GetMiningInfoResponse {
  result: {
    minedAllTime: number;
    minedSession: number;
  };
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RequestTreasuryPoSRatesParams = {};
export interface RequestTreasuryPoSRatesResponse {}

export type GetTreasuryPoSRatesParams = {};
export interface GetTreasuryPoSRatesResponse {}

export type RequestTreasuryTransactionVolumesParams = {};
export interface RequestTreasuryTransactionVolumesResponse {}

export type GetTreasuryTransactionVolumesParams = {};
export interface GetTreasuryTransactionVolumesResponse {}

export type RequestTreasuryUUSDSupplyParams = {};
export interface RequestTreasuryUUSDSupplyResponse {}

export type GetTreasuryUUSDSupplyParams = {};
export interface GetTreasuryUUSDSupplyResponse {}

export type RequestTreasuryCrpSupplyParams = {};
export interface RequestTreasuryCrpSupplyResponse {}

export type GetTreasuryCrpSupplyParams = {};
export interface GetTreasuryCrpSupplyResponse {}

export type UcodeEncodeParams = {
  hex_code: string;
  size_image: string;
  coder: Coder;
  format: ImageFormat;
};
export interface UcodeEncodeResponse {
  result: string;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type UcodeDecodeParams = {
  base64_image: string;
};
export interface UcodeDecodeResponse {
  result: string[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetWebSocketStateParams = {};
export interface GetWebSocketStateResponse {
  // TODO
}

export type SetWebSocketStateParams = {
  enabled: boolean;
  port: number;
  enablessl: boolean;
  // TODO
  /**
   * "notifications": {
        "channel": [
          "newChannelMessage",
          "newOutgoingChannelMessage",
          "newPrivateChannelMessage",
          "channelJoinChanged"
        ],
        "contact": [
          "deleteContactNotification",
          "contactCreatedNotification",
          "newAuthorization",
          "contactStatusNotification",
          "newOutgoingInstantMessage",
          "newInstantMessage",
          "newEmail"
        ],
        "update": [
          "availableUpdateOnServerNotification",
          "updateProgressNotification",
          "updateDownloadedNotification",
          "updatesReadyToRestartNotification",
          "updateErrorNotification"
        ],
        "wallet": [
          "newPaymentTransfer",
          "newPublicKeyPaymentAlias",
          "newGenBlockNotify"
        ]
      },
   */
  notifications: string;
};
export interface SetWebSocketStateResponse {}

export type GetTransfersFromManagerParams = {};
export interface GetTransfersFromManagerResponse {
  result: {
    bytesTransferred: number;
    'contact.nick': string;
    'contact.pk': string;
    createdDateTime: string;
    // TODO
    direction: number;
    // TODO
    directionName: string;
    'file.fileName': string;
    'file.id': number;
    // TODO
    'file.sourceType': number;
    // TODO
    'file.sourceTypeName': string;
    // TODO
    'file.storageType': number;
    'file.storageTypeName': string;
    'file.totalSize': number;
    // TODO
    mediaType: number;
    percentCompleted: number;
    receivedDateTime: string;
    // TODO
    state: 5;
    transferChunkSize: number;
    transferId: number;
    transferredSpeed: number;
  }[];
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetFilesFromManagerParams = {};
export interface GetFilesFromManagerResponse {}

export type AbortTransfersParams = {
  transferId: string;
};
export interface AbortTransfersResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type HideTransfersParams = {
  transferId: string;
};
export interface HideTransfersResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type GetFileParams = {
  fileId: string;
};
export interface GetFileResponse {
  result: {
    body: string;
    filename: string;
  };
}

export type DeleteFileParams = {
  fileId: string;
};
export interface DeleteFileResponse {
  result: boolean;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type UploadFileParams = {
  fileDataBase64: string;
  fileName: string;
};
export interface UploadFileResponse {
  // TODO
}

export type SendFileByMessageParams = {
  to: string;
  fileId: string;
};
export interface SendFileByMessageResponse {
  result: number;
  resultExtraInfo: {
    elapsed: string;
  };
}

export type RequestHistoryByDateParams = {
  from: string;
  to: string;
};
export interface RequestHistoryByDateResponse {
  // TODO
}

// export interface RequestHistoryByDateResponse {

// }
// type interface = RequestHistoryByDateParams {
//   from: string;
//   to: string;
// }

export type ApiMethodName =
  | 'getSystemInfo'
  | 'getProfileStatus'
  | 'setProfileStatus'
  | 'getReleaseNotes'
  | 'getSettingInfo'
  | 'setSettingInfo'
  | 'getOwnContact'
  | 'setProfileData'
  | 'getContactGroups'
  | 'getContactsByGroup'
  | 'getContacts'
  | 'getAvatarByKey'
  | 'getContactAvatar'
  | 'getChannelAvatar'
  | 'setContactGroup'
  | 'renameContactGroup'
  | 'deleteContactGroup'
  | 'setContactNick'
  | 'sendInstantMessage'
  | 'sendInstantQuote'
  | 'sendInstantSticker'
  | 'pinInstantMessage'
  | 'getPinnedMessages'
  | 'bookmarkInstantMessage'
  | 'getStickerCollections'
  | 'getStickerNamesByCollection'
  | 'getImageSticker'
  | 'sendInstantBuzz'
  | 'sendInstantInvitation'
  | 'removeInstantMessages'
  | 'getContactMessages'
  | 'sendEmailMessage'
  | 'requestNewPublicKeyPaymentAlias'
  | 'getMyPublicKeyPaymentAliases'
  | 'createPromoCode'
  | 'deletePromoCode'
  | 'sendPayment'
  | 'verifyTransaction'
  | 'verifyTransactionByHash'
  | 'getVerifyTransactionResponse'
  | 'addDelegate'
  | 'revokeDelegated'
  | 'getDPoSInfo'
  | 'getEmailFolder'
  | 'getEmails'
  | 'getEmailById'
  | 'acceptAttachment'
  | 'abortAttachment'
  | 'acceptFileMessage'
  | 'abortFileMessage'
  | 'deleteEmail'
  | 'sendReplyEmailMessage'
  | 'sendForwardEmailMessage'
  | 'sendEmailInvitation'
  | 'emptyEmailsTrash'
  | 'getFinanceSystemInformation'
  | 'getBalance'
  | 'getFinanceHistory'
  | 'getCards'
  | 'addCard'
  | 'deleteCard'
  // | 'enableMining'
  | 'enablePoS'
  | 'enableHistoryMining'
  | 'statusHistoryMining'
  | 'getMiningBlocks'
  | 'getMiningBlocksWithTreasury'
  | 'getMiningInfo'
  | 'getVouchers'
  | 'createVoucher'
  | 'createVoucherBatch'
  | 'useVoucher'
  | 'deleteVoucher'
  | 'getInvoices'
  | 'getInvoiceByReferenceNumber'
  | 'getTransactionIdByReferenceNumber'
  | 'sendInvoice'
  | 'acceptInvoice'
  | 'declineInvoice'
  | 'cancelInvoice'
  | 'requestUnsTransfer'
  | 'acceptUnsTransfer'
  | 'declineUnsTransfer'
  | 'incomingUnsTransfer'
  | 'requestAllFinnaceHistory'
  | 'outgoingUnsTransfer'
  | 'storageWipe'
  | 'sendAuthorizationRequest'
  | 'acceptAuthorizationRequest'
  | 'rejectAuthorizationRequest'
  | 'deleteContact'
  | 'getChannels'
  | 'sendChannelMessage'
  | 'sendChannelComment'
  | 'getChannelComments'
  | 'sendChannelPicture'
  | 'sendChannelQuote'
  | 'removeChannelMessage'
  | 'enableChannelNotification'
  | 'joinChannel'
  | 'fetchChannelHistory'
  | 'leaveChannel'
  | 'setChannelAsBookmarked'
  | 'getChannelMessages'
  | 'getChannelInfo'
  | 'getChannelModerators'
  | 'getChannelContacts'
  | 'getChannelModeratorRight'
  | 'createChannel'
  | 'modifyChannel'
  | 'modifyChannelTitle'
  | 'modifyChannelPassword'
  | 'deleteChannel'
  | 'getChannelSystemInfo'
  | 'getChannelBannedContacts'
  | 'applyChannelBannedContacts'
  | 'sendChannelPrivateMessageToContact'
  | 'getChannelPrivateMessagesOfContact'
  | 'unsCreateRecordRequest'
  | 'unsModifyRecordRequest'
  | 'unsDeleteRecordRequest'
  | 'unsSearchByPk'
  | 'unsSearchByNick'
  | 'unsRegisteredNamesByDatetimes'
  | 'unsUnregisteredNamesByDatetimes'
  | 'unsHistoryName'
  | 'getUnsSyncInfo'
  | 'unsRegisteredNames'
  | 'summaryUnsRegisteredNames'
  | 'clearTrayNotifications'
  | 'getNetworkConnections'
  | 'enableLogs'
  | 'getLogs'
  | 'clearNetHostDatabase'
  | 'getProxyMappings'
  | 'createProxyMapping'
  | 'enableProxyMapping'
  | 'disableProxyMapping'
  | 'removeProxyMapping'
  | 'lowTrafficMode'
  | 'setLowTrafficMode'
  | 'getWhoIsInfo'
  | 'requestTreasuryPoSRates'
  | 'getTreasuryPoSRates'
  | 'requestTreasuryTransactionVolumes'
  | 'getTreasuryTransactionVolumes'
  | 'requestTreasuryUUSDSupply'
  | 'getTreasuryUUSDSupply'
  | 'requestTreasuryCrpSupply'
  | 'getTreasuryCrpSupply'
  | 'ucodeEncode'
  | 'ucodeDecode'
  | 'setWebSocketState'
  | 'getWebSocketState'
  | 'getTransfersFromManager'
  | 'getFilesFromManager'
  | 'abortTransfers'
  | 'hideTransfers'
  | 'getFile'
  | 'deleteFile'
  | 'sendFileByMessage'
  | 'uploadFile'
  | 'requestHistoryByDate';
