/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import {
  GetSystemInfoParams,
  GetSystemInfoResponse,
  GetStatusParams,
  GetStatusResponse,
  GetProfileStatusParams,
  GetProfileStatusResponse,
  SetProfileStatusParams,
  SetProfileStatusResponse,
  GetReleaseNotesParams,
  GetReleaseNotesResponse,
  GetSettingInfoParams,
  GetSettingInfoResponse,
  SetSettingInfoParams,
  SetSettingInfoResponse,
  SetProfileDataParams,
  SetProfileDataResponse,
  GetOwnContactParams,
  GetOwnContactResponse,
  GetContactGroupsParams,
  GetContactGroupsResponse,
  GetContactsByGroupParams,
  GetContactsByGroupResponse,
  GetContactsParams,
  GetContactsResponse,
  GetAvatarByKeyParams,
  GetAvatarByKeyResponse,
  GetContactAvatarParams,
  GetContactAvatarResponse,
  GetChannelAvatarParams,
  GetChannelAvatarResponse,
  RenameContactGroupParams,
  RenameContactGroupResponse,
  DeleteContactGroupParams,
  DeleteContactGroupResponse,
  SetContactGroupParams,
  SetContactGroupResponse,
  SetContactNickParams,
  SetContactNickResponse,
  SendInstantMessageParams,
  SendInstantMessageResponse,
  SendInstantQuoteParams,
  SendInstantQuoteResponse,
  SendInstantStickerParams,
  SendInstantStickerResponse,
  PinInstantMessageParams,
  PinInstantMessageResponse,
  GetPinnedMessagesParams,
  GetPinnedMessagesResponse,
  BookmarkInstantMessageParams,
  BookmarkInstantMessageResponse,
  GetStickerCollectionsParams,
  GetStickerCollectionsResponse,
  GetStickerNamesByCollectionParams,
  GetStickerNamesByCollectionResponse,
  GetImageStickerParams,
  GetImageStickerResponse,
  SendInstantBuzzParams,
  SendInstantBuzzResponse,
  SendInstantInvitationParams,
  SendInstantInvitationResponse,
  RemoveInstantMessagesParams,
  RemoveInstantMessagesResponse,
  GetContactMessagesParams,
  GetContactMessagesResponse,
  GetChannelMessagesParams,
  GetChannelMessagesResponse,
  SendEmailMessageParams,
  SendEmailMessageResponse,
  VerifyTransactionParams,
  VerifyTransactionResponse,
  VerifyTransactionByHashParams,
  VerifyTransactionByHashResponse,
  GetVerifyTransactionResponseParams,
  GetVerifyTransactionResponseResponse,
  RequestNewPublicKeyPaymentAliasParams,
  RequestNewPublicKeyPaymentAliasResponse,
  GetMyPublicKeyPaymentAliasesParams,
  GetMyPublicKeyPaymentAliasesResponse,
  CreatePromoCodeParams,
  CreatePromoCodeResponse,
  DeletePromoCodeParams,
  DeletePromoCodeResponse,
  SendPaymentParams,
  SendPaymentResponse,
  AddDelegateParams,
  AddDelegateResponse,
  RevokeDelegatedParams,
  RevokeDelegatedResponse,
  GetDPoSInfoParams,
  GetDPoSInfoResponse,
  GetEmailFolderParams,
  GetEmailFolderResponse,
  GetEmailsParams,
  GetEmailsResponse,
  GetEmailByIdParams,
  GetEmailByIdResponse,
  AcceptAttachmentParams,
  AcceptAttachmentResponse,
  AbortAttachmentParams,
  AbortAttachmentResponse,
  AcceptFileMessageParams,
  AcceptFileMessageResponse,
  AbortFileMessageParams,
  AbortFileMessageResponse,
  DeleteEmailParams,
  DeleteEmailResponse,
  SendReplyEmailMessageParams,
  SendReplyEmailMessageResponse,
  SendForwardEmailMessageParams,
  SendForwardEmailMessageResponse,
  SendEmailInvitationParams,
  SendEmailInvitationResponse,
  EmptyEmailsTrashParams,
  EmptyEmailsTrashResponse,
  SetChannelAsBookmarkedParams,
  SetChannelAsBookmarkedResponse,
  GetFinanceSystemInformationParams,
  GetFinanceSystemInformationResponse,
  GetBalanceParams,
  GetBalanceResponse,
  RequestAllFinnaceHistoryParams,
  RequestAllFinnaceHistoryResponse,
  GetFinanceHistoryParams,
  GetFinanceHistoryResponse,
  GetCardsParams,
  GetCardsResponse,
  AddCardParams,
  AddCardResponse,
  DeleteCardParams,
  DeleteCardResponse,
  EnableMiningParams,
  EnableMiningResponse,
  GetChannelsParams,
  GetChannelsResponse,
  JoinChannelParams,
  JoinChannelResponse,
  FetchChannelHistoryParams,
  FetchChannelHistoryResponse,
  SendChannelPrivateMessageToContactParams,
  SendChannelPrivateMessageToContactResponse,
  GetChannelPrivateMessagesOfContactParams,
  GetChannelPrivateMessagesOfContactResponse,
  SendChannelMessageParams,
  SendChannelMessageResponse,
  SendChannelCommentParams,
  SendChannelCommentResponse,
  GetChannelCommentsParams,
  GetChannelCommentsResponse,
  SendChannelPictureParams,
  SendChannelPictureResponse,
  LeaveChannelParams,
  LeaveChannelResponse,
  GetChannelInfoParams,
  GetChannelInfoResponse,
  GetChannelModeratorsParams,
  GetChannelModeratorsResponse,
  GetChannelContactsParams,
  GetChannelContactsResponse,
  GetChannelModeratorRightParams,
  GetChannelModeratorRightResponse,
  SendChannelQuoteParams,
  SendChannelQuoteResponse,
  RemoveChannelMessageParams,
  RemoveChannelMessageResponse,
  EnableChannelNotificationParams,
  EnableChannelNotificationResponse,
  CreateChannelParams,
  CreateChannelResponse,
  ModifyChannelParams,
  ModifyChannelResponse,
  ModifyChannelTitleParams,
  ModifyChannelTitleResponse,
  ModifyChannelPasswordParams,
  ModifyChannelPasswordResponse,
  DeleteChannelParams,
  DeleteChannelResponse,
  GetChannelSystemInfoParams,
  GetChannelSystemInfoResponse,
  GetChannelBannedContactsParams,
  GetChannelBannedContactsResponse,
  ApplyChannelBannedContactsParams,
  ApplyChannelBannedContactsResponse,
  UnsCreateRecordRequestParams,
  UnsCreateRecordRequestResponse,
  UnsRegisteredNamesParams,
  UnsRegisteredNamesResponse,
  UnsDeleteRecordRequestParams,
  UnsDeleteRecordRequestResponse,
  UnsSearchByPkParams,
  UnsSearchByPkResponse,
  UnsSearchByNickParams,
  UnsSearchByNickResponse,
  UnsRegisteredNamesByDatetimesParams,
  UnsRegisteredNamesByDatetimesResponse,
  UnsUnregisteredNamesByDatetimesParams,
  UnsUnregisteredNamesByDatetimesResponse,
  SummaryUnsRegisteredNamesParams,
  SummaryUnsRegisteredNamesResponse,
  UnsHistoryNameParams,
  UnsHistoryNameResponse,
  EnablePoSParams,
  EnablePoSResponse,
  EnableHistoryMiningParams,
  EnableHistoryMiningResponse,
  StatusHistoryMiningParams,
  StatusHistoryMiningResponse,
  GetMiningBlocksParams,
  GetMiningBlocksResponse,
  GetMiningBlocksWithTreasuryParams,
  GetMiningBlocksWithTreasuryResponse,
  GetVouchersParams,
  GetVouchersResponse,
  CreateVoucherParams,
  CreateVoucherResponse,
  CreateVoucherBatchParams,
  CreateVoucherBatchResponse,
  UseVoucherParams,
  UseVoucherResponse,
  DeleteVoucherParams,
  DeleteVoucherResponse,
  GetInvoicesParams,
  GetInvoicesResponse,
  GetInvoiceByReferenceNumberParams,
  GetInvoiceByReferenceNumberResponse,
  GetTransactionIdByReferenceNumberParams,
  GetTransactionIdByReferenceNumberResponse,
  SendInvoiceParams,
  SendInvoiceResponse,
  AcceptInvoiceParams,
  AcceptInvoiceResponse,
  DeclineInvoiceParams,
  DeclineInvoiceResponse,
  CancelInvoiceParams,
  CancelInvoiceResponse,
  RequestUnsTransferParams,
  RequestUnsTransferResponse,
  AcceptUnsTransferParams,
  AcceptUnsTransferResponse,
  DeclineUnsTransferParams,
  DeclineUnsTransferResponse,
  IncomingUnsTransferParams,
  IncomingUnsTransferResponse,
  OutgoingUnsTransferParams,
  OutgoingUnsTransferResponse,
  StorageWipeParams,
  StorageWipeResponse,
  SendAuthorizationRequestParams,
  SendAuthorizationRequestResponse,
  AcceptAuthorizationRequestParams,
  AcceptAuthorizationRequestResponse,
  RejectAuthorizationRequestParams,
  RejectAuthorizationRequestResponse,
  DeleteContactParams,
  DeleteContactResponse,
  ClearTrayNotificationsParams,
  ClearTrayNotificationsResponse,
  GetNetworkConnectionsParams,
  GetNetworkConnectionsResponse,
  EnableLogsParams,
  EnableLogsResponse,
  GetLogsParams,
  GetLogsResponse,
  ClearNetHostDatabaseParams,
  ClearNetHostDatabaseResponse,
  GetProxyMappingsParams,
  GetProxyMappingsResponse,
  CreateProxyMappingParams,
  CreateProxyMappingResponse,
  EnableProxyMappingParams,
  EnableProxyMappingResponse,
  DisableProxyMappingParams,
  DisableProxyMappingResponse,
  RemoveProxyMappingParams,
  RemoveProxyMappingResponse,
  LowTrafficModeParams,
  LowTrafficModeResponse,
  SetLowTrafficModeParams,
  SetLowTrafficModeResponse,
  GetWhoIsInfoParams,
  GetWhoIsInfoResponse,
  UnsModifyRecordRequestParams,
  UnsModifyRecordRequestResponse,
  GetUnsSyncInfoParams,
  GetUnsSyncInfoResponse,
  GetMiningInfoParams,
  GetMiningInfoResponse,
  RequestTreasuryPoSRatesParams,
  RequestTreasuryPoSRatesResponse,
  GetTreasuryPoSRatesParams,
  GetTreasuryPoSRatesResponse,
  RequestTreasuryTransactionVolumesParams,
  RequestTreasuryTransactionVolumesResponse,
  GetTreasuryTransactionVolumesParams,
  GetTreasuryTransactionVolumesResponse,
  RequestTreasuryUUSDSupplyParams,
  RequestTreasuryUUSDSupplyResponse,
  GetTreasuryUUSDSupplyParams,
  GetTreasuryUUSDSupplyResponse,
  RequestTreasuryCrpSupplyParams,
  RequestTreasuryCrpSupplyResponse,
  GetTreasuryCrpSupplyParams,
  GetTreasuryCrpSupplyResponse,
  UcodeEncodeParams,
  UcodeEncodeResponse,
  UcodeDecodeParams,
  UcodeDecodeResponse,
  GetWebSocketStateParams,
  GetWebSocketStateResponse,
  SetWebSocketStateParams,
  SetWebSocketStateResponse,
  GetTransfersFromManagerParams,
  GetTransfersFromManagerResponse,
  GetFilesFromManagerParams,
  GetFilesFromManagerResponse,
  AbortTransfersParams,
  AbortTransfersResponse,
  HideTransfersParams,
  HideTransfersResponse,
  GetFileParams,
  GetFileResponse,
  DeleteFileParams,
  DeleteFileResponse,
  UploadFileParams,
  UploadFileResponse,
  SendFileByMessageParams,
  SendFileByMessageResponse,
  RequestHistoryByDateParams,
  RequestHistoryByDateResponse,
  ApiMethodName,
  Currencies,
  Coder,
  ImageFormat,
  OwnContact,
  Filter,
  EmailFolderType,
} from '../types';
import axios from 'axios';
import { isValidJSON } from '../helpers';

interface UApiClientProps {
  token: string;
  url: string;
  axiosConfig: CreateAxiosDefaults;
  queueMode?: boolean;
  debug?: boolean;
}

class UApiClient {
  #api: AxiosInstance;
  token: string;
  url: string;
  debug = false;
  #queueMode = true;

  /**
   * Creates an instance of UApiClient.
   * ```ts
   *  const uApiClient = new UApiClient({
   *    axiosConfig: { timeout: 20000 },
   *    token: 'UTOPIA-API-TOKEN',
   *    url: 'https://127.0.0.1:20100/api/1.0',
   *    debug: true,
   *  });
   * ```
   *
   * @constructor
   * @param config - Utopia API client config
   * @param config.token - Client token
   * @param config.url - API URL
   * @param config.axiosConfig - Axios instance config
   * @param config.debug - Enable console.log for errors
   * @returns UApiClient
   */

  constructor({ token, url = 'http://127.0.0.1:20000/api/1.0', axiosConfig = {}, queueMode = true, debug = false }: UApiClientProps) {
    this.token = token;
    this.url = url;
    this.#api = Axios.create(axiosConfig);
    this.debug = debug;
    this.#queueMode = queueMode;
  }

  #queues: { [methodName: string]: (() => void)[] } = {};

  #registerInQueue = async (methodName: ApiMethodName): Promise<() => void> => {
    if (!this.#queueMode) {
      return Promise.resolve(() => {
        return;
      });
    }

    let resolve: any;

    const unregister = () => {
      this.#queues[methodName].shift();
      if (this.#queues[methodName][0]) {
        const nextResolve = this.#queues[methodName][0];
        nextResolve?.();
      }
    };

    const promise = new Promise<() => void>(($resolve) => {
      resolve = () => {
        $resolve(unregister);
      };
      return unregister;
    });

    if (this.#queues[methodName]?.length) {
      this.#queues[methodName].push(resolve);
      return promise;
    } else {
      this.#queues[methodName] = [resolve];
      return unregister;
    }
  };

  call = async <T>(
    method: ApiMethodName,
    params: any,
    filter?: Filter,
  ): Promise<
    | {
        error: string;
        data: null;
      }
    | {
        data: T;
        error: null;
      }
  > => {
    try {
      const unregister = await this.#registerInQueue(method);

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(undefined);
        }, 3000),
      );

      const response = await this.#api.post<T>(this.url, {
        method,
        params,
        token: this.token,
        filter,
      });

      unregister();

      if (!isValidJSON(JSON.stringify(response.data))) {
        return {
          data: null,
          error: JSON.stringify(response.data),
        };
      }

      return { data: response.data, error: null };
    } catch (error) {
      if (this.debug) {
        console.log(error);
      }

      if (axios.isAxiosError(error) && error.response?.status) {
        return {
          error: String(error.response.status),
          data: null,
        };
      } else {
        return { error: 'Unknown', data: null };
      }
    }
  };

  /**
   * Method getProfileStatus returns the profile status.
   * ```js
   * // Request
   * {
   *     "method": "getProfileStatus",
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": {
   *         "mood": "",
   *         "status": "Available",
   *         "status_code": 4096
   *     },
   *     "resultExtraInfo": {
   *         "elapsed": "0"
   *     }
   * }
   * ```
   */

  getProfileStatus = async () => {
    return await this.call<GetProfileStatusResponse>('getProfileStatus', {});
  };

  /**
   * Method setProfileStatus sets the new status, as well as the mood message in the Utopia Ecosystem. The method is called by using Status parameter line with possible options: (Available, Away, DoNotDisturb, Invisible, Offline) and if desired Mood which contains mood message text (up to 130 symbols). In the Response field, the status of completed operation is displayed.
   * ```js
   * // Request
   * {
   *     "method": "setProfileStatus",
   *     "params": {
   *         "status": "Available",
   *         "mood": "Hi" // up to 130 symbols
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": true,
   *     "resultExtraInfo": {
   *         "elapsed": "4624"
   *     }
   * }
   * ```
   */
  setProfileStatus = async ({ status, mood = '' }: SetProfileStatusParams) => {
    return await this.call<SetProfileStatusParams>('setProfileStatus', {
      status,
      mood,
    });
  };

  /**
   * Method getReleaseNotes returns information about latest changes in application grouping by version.
   * ```js
   *  // Request
   * {
   *     "method": "getReleaseNotes",
   *     "params": {},
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": {
   *          "en": {
   *             "versionNumber": {
   *                 "fixed": ['...'],
   *                 "issues": ['...'],
   *                 "new": ['...'],
   *                 "version": {
   *                     "linux": "1.2.290",
   *                      "osx": "1.2.290"
   *                     }}},
   *          },
   *     "resultExtraInfo": {
   *         "elapsed": "4624"
   *     }
   * }
   * ```
   */
  getReleaseNotes = async () => {
    return await this.call<GetReleaseNotesResponse>('getReleaseNotes', {});
  };

  // /**
  //  * Method requestAllFinnaceHistory makes request to get all transactions
  //  * ```js
  //  *     // Request
  //  * {
  //  *     "method": "requestAllFinnaceHistory",
  //  *     "params": {
  //  *     },
  //  *     "token": "TEMPTOKEN"
  //  * }
  //  *
  //  *    // Response
  //  * {
  //  *     "result": {
  //  *          },
  //  *     "resultExtraInfo": {
  //  *         "elapsed": "1"
  //  *     }
  //  * }
  //  *
  //  * ```
  //  */
  // requestAllFinnaceHistory = async () => {
  //    return await this.call<RequestAllFinnaceHistoryResponse>(
  //      'requestAllFinnaceHistory',
  //      {}
  //    );

  // };

  /**
   * Method getSettingInfo returns information about setting by corresponeded setting id. Empty settingId field shows a list of available settings.
   * ```js
   * // Request
   * {
   *     "method": "getSettingInfo",
   *     "params": {
   *         "settingId": ""
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": {
   *         "TrayIconMode":"Always",
   *         "AutoStart": "true"
   *     },
   *     "resultExtraInfo": {
   *         "elapsed": "4624"
   *     }
   * }
   * ```
   */
  getSettingInfo = async ({ settingId }: GetSettingInfoParams) => {
    return await this.call<GetSettingInfoResponse>('getSettingInfo', {
      settingId,
    });
  };

  /**
   * Method setSettingInfo apply new setting value by corresponeded setting id.
   * ```js
   * // Request
   * {
   *     "method": "setSettingInfo",
   *     "params": {
   *         "settingId":"TrayIconMode",
   *         "newValue":"Always"
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": true,
   *     "resultExtraInfo": {
   *         "elapsed": "4624"
   *     }
   * }
   * ```
   */
  setSettingInfo = async ({ settingId, newValue }: SetSettingInfoParams) => {
    return await this.call<SetSettingInfoResponse>(
      'setSettingInfo',
      // @ts-ignore
      { settingId, newValue },
    );
  };

  /**
   * Method getBalance returns in the Response field the amount of cryptons/usd on the primary balance, without considering the balance on cards. Valid filter values for ‘Currency’ is ‘CRP’ or ‘USD’. If 'Currency' filter is not defined then a default value of 'CRP' will be used.
   * ```js
   * // Request
   * {
   *     "method": "getBalance",
   *     "params": {
   *         "currency": "CRP"
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   *  {
   *      "result": 0,
   *      "resultExtraInfo": {
   *          "elapsed": "0"
   *      }
   *  }
   * ```
   */

  getBalance = async ({ currency = Currencies.CRP }: GetBalanceParams) => {
    return await this.call<GetBalanceResponse>('getBalance', {
      currency,
    });
  };

  // /**
  //  * Method getFinanceHistory  allows to receive the history of financial transactions based on the specifications in the parameters of the filter. The list of available filters:
  //  * ALL_CARDS
  //  * INCOMING_CARDS
  //  * OUTGOING_CARDS
  //  * CREATED_CARDS
  //  * DELETED_CARDS
  //  * ALL_GAMEPOKER
  //  * ALL_TRANSFERS
  //  * INCOMING_TRANSFERS
  //  * OUTGOING_TRANSFERS
  //  * ALL_REQUESTS
  //  * AWAITING_REQUESTS
  //  * AUTHORIZED_REQUESTS
  //  * DECLINED_REQUESTS
  //  * CANCELED_REQUESTS
  //  * EXPIRED_REQUESTS
  //  * ALL_APPROVED_REQUESTS
  //  * CREATED_VOUCHERS
  //  * CREATED_VOUCHERS_BATCH
  //  * ACTIVATED_VOUCHERS
  //  * DELETED_VOUCHERS
  //  * ALL_VOUCHERS
  //  * ALL_MINING
  //  * ALL_POS
  //  * ALL_FEE
  //  * ALL_UNS_RECORDS
  //  * UNS_UNS_REGISTRATION
  //  * UNS_UNS_CHANGED
  //  * UNS_UNS_TRANSFERRED
  //  * UNS_UNS_DELETED
  //  * ALL_TRANSACTIONS
  //  * ALIAS_TRANSACTIONS
  //  *
  //  * Filters can be combined by using coma : 'ALL_CARDS,ALL_FEE'
  //  * Also the method accepts as the parameter (reference number), which passes on the number of the transaction which the history should be displayed (empty parameter will start returning information starting from the last message).
  //  * Valid filter values for ‘Currency’ is ‘CRP’ or ‘USD’. If 'Currency' filter is not defined then a default value of 'CRP' will be used.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getFinanceHistory",
  //  *         "params": {
  //  *             "currency": "CRP",
  //  *             "filters": "",
  //  *             "referenceNumber": "",
  //  *             "fromDate": "",
  //  *             "toDate": "",
  //  *             "batchId": "",
  //  *             "fromAmount": "",
  //  *             "toAmount": "",
  //  *             "sourcePk" : "",
  //  *             "destinationPk" : ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```  //  */
  // getFinanceHistory = async (
  //    return await this.call<GetFinanceHistoryResponse>(
  //      'getFinanceHistory',
  //      {}
  //    );

  //   filters,
  //   referenceNumber,
  //   toDate,
  //   fromDate,
  //   batchId,
  //   fromAmount,
  //   toAmount,
  //   destinationPk,
  //   sourcePk
  // ) => {
  //   return;
  // };

  /**
   * Method getSystemInfo returns information about current packaging version of the Utopia application in the Response block. The method is called without using any parameters.
   * ```js
   * // Request
   *     {
   *         "method": "getSystemInfo",
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": {
   *             "buildAbi": "x86_64-little_endian-llp64",
   *             "buildCpuArchitecture": "x86_64",
   *             "build_number": "0.3.9",
   *             "currentCpuArchitecture": "x86_64",
   *             "netCoreRate": 25,
   *             "networkCores": 1,
   *             "networkEnabled": true,
   *             "numberOfConnections": 8,
   *             "packetCacheSize": 301,
   *             "uptime": "00:00:47"
   *         },
   *         "resultExtraInfo": {
   *             "elapsed": "2603"
   *         }
   *     }
   * ```
   */
  getSystemInfo = async () => {
    return await this.call<GetSystemInfoResponse>('getSystemInfo', {});
  };

  /**
   * Method ucodeEncode returns image of ucode in size_image with public key from hex_code
   * ```js
   *  // Request
   * {
   *     "method": "ucodeEncode",
   *         "params": {
   *             "hex_code": "",
   *             "size_image": "",
   *             "coder": "BASE64",
   *             "format": "JPG"
   *         },
   *         "token": "TEMPTOKEN"
   * }
   * ```
   */
  ucodeEncode = async ({ hex_code, size_image, coder, format }: UcodeEncodeParams) => {
    return await this.call<UcodeEncodeResponse>('ucodeEncode', {
      hex_code,
      size_image,
      coder,
      format,
    });
  };

  /**
   * Method ucodeDecode returns hex public key from image in base64 format.
   * ```js
   *  // Request
   *     {
   *         "method": "ucodeDecode",
   *         "params": {
   *             "base64_image": ""
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  ucodeDecode = async ({ base64_image }: UcodeDecodeParams) => {
    return await this.call<UcodeDecodeResponse>('ucodeDecode', {
      base64_image,
    });
  };

  /**
   * Method getChannelAvatar returns to the Response field the avatar of the selected channel in the base64 or hex format.
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelAvatar",
   *         "params": {
   *             "channelid": "3436365645645645643456",
   *             "coder": "BASE64",
   *             "format": "JPG"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *
   *      {
   *     "result": "/9j/4AAQSkZJRgABAQGRolJicoKS.......CiiigAooooA//9k=",
   *     "resultExtraInfo": {
   *         "elapsed": "2"
   *     }
   * }
   * ```
   */
  getChannelAvatar = async ({ channelid, coder, format }: GetChannelAvatarParams) => {
    return await this.call<GetChannelAvatarResponse>('getChannelAvatar', {
      channelid,
      coder,
      format,
    });
  };

  /**
   * Method setProfileData update nick, last name and first name.
   * ```js
   *  // Request
   *     {
   *         "method": "setProfileData",
   *         "params": {
   *             "nick": "new nick",
   *             "firstName": "Jack",
   *             "lastName": "Black"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   *
   * // Response
   *  {
   *     "result": true
   *     "resultExtraInfo": {
   *         "elapsed": "2"
   *     }
   *  }
   * ```
   */
  setProfileData = async ({ firstName, lastName, nick }: SetProfileDataParams) => {
    return await this.call<SetProfileDataResponse>('setProfileData', {
      firstName,
      lastName,
      nick,
    });
  };

  /**
   * Method getAvatarByKey returns to the Response field the avatar of the selected user in the base64 or hex format.
   * ```js
   *
   * // Request
   * {
   *     "method":"getAvatarByKey",
   *     "params": {
   *         "pk":"CDEC99906E4F90799E4399592CC7C59E75BA0AC89FE7EB52C01A89F3F0C5F36A",
   *         "coder":"BASE64",
   *         "format":"JPG"
   *     },
   *     "token":"TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": "/9j/4AAQSkZJRgABAQGRolJicoKS.......CiiigAooooA//9k=",
   *     "resultExtraInfo": {
   *         "elapsed": "2"
   *     }
   * }
   * ```
   */
  getAvatarByKey = async ({ pk, coder, format }: GetAvatarByKeyParams) => {
    return await this.call<GetAvatarByKeyResponse>('getAvatarByKey', {
      pk,
      coder,
      format,
    });
  };

  /**
   * Method getContactAvatar returns to the Response field the avatar of the selected user in the base64 or hex format. As a parameter the method uses Public Key of the contact.
   * ```js
   * // Request
   * {
   *     "method":"getContactAvatar",
   *     "params": {
   *         "pk":"CDEC99906E4F90799E4399592CC7C59E75BA0AC89FE7EB52C01A89F3F0C5F36A",
   *         "coder":"BASE64",
   *         "format":"JPG"
   *     },
   *     "token":"TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": "/9j/4AAQSkZJRgABAQGRolJicoKS.......CiiigAooooA//9k=",
   *     "resultExtraInfo": {
   *         "elapsed": "2"
   *     }
   * }
   * ```
   */
  getContactAvatar = async ({ pk, coder, format }: GetContactAvatarParams) => {
    return await this.call<GetContactAvatarResponse>('getContactAvatar', {
      pk,
      coder,
      format,
    });
  };

  /**
   * Method getContactGroups returns to the Response field the list group names.
   * ```js
   *  // Request
   *     {
   *         "method": "getContactGroups",
   *         "params": {},
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": [ ]
   *     }
   * ```
   */
  getContactGroups = async () => {
    return await this.call<GetContactGroupsResponse>('getContactGroups', {});
  };

  /**
   * Method getContactsByGroup returns to the Response field the list of contacts from group with corresponded name.
   * ```js
   *  // Request
   *     {
   *         "method": "getContactsByGroup",
   *         "params": {
   *             "groupName": "Freedom Society"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": [
   *             {
   *                 "authorizationStatus": 3,
   *                 "avatarMd5": "defAvatar_E0B48BF95ACD8D726D055B27B5324526B4B3A07845CCEE34B085673488525924",
   *                 "group": "",
   *                 "hashedPk": "AEEBB7A78850724A177E1E649E35A47B",
   *                 "isFriend": false,
   *                 "nick": "Utopia",
   *                 "pk": "E0B48BF95ACD8D726D055B27B5324526B4B3A07845CCEE34B085673488525924",
   *                 "status": 4096
   *             }]
   * }
   * ```
   */
  getContactsByGroup = async ({ groupName }: GetContactsByGroupParams) => {
    return await this.call<GetContactsByGroupResponse>('getContactsByGroup', {
      groupName,
    });
  };

  /**
   * Method getContacts returns to the Response field the list of contacts, it is possible to search by full or partial matching of the Public Key and Nickname. As a parameter it is possible to specify Filter that transfers the text line to search for contacts ( has to contain full or partial matching with Public Key or Nickname of the searched contact).The Filter "#owner#" will return information about yourself.
   * ```js
   *  // Request
   *     {
   *         "method": "getContacts",
   *         "params": {
   *             "filter": ""
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": [
   *             {
   *                 "authorizationStatus": 3,
   *                 "avatarMd5": "defAvatar_E0B48BF95ACD8D726D055B27B5324526B4B3A07845CCEE34B085673488525924",
   *                 "group": "",
   *                 "hashedPk": "AEEBB7A78850724A177E1E649E35A47B",
   *                 "isFriend": false,
   *                 "nick": "Utopia",
   *                 "pk": "E0B48BF95ACD8D726D055B27B5324526B4B3A07845CCEE34B085673488525924",
   *                 "status": 4096
   *             },
   *             {
   *                 "authorizationStatus": 3,
   *                 "avatarMd5": "DA67E64C030A727C99B045B0854259B3",
   *                 "group": "Freedom Society",
   *                 "hashedPk": "2A1004A5361A6078DCA2A86077D460BA",
   *                 "isFriend": false,
   *                 "nick": "contact",
   *                 "pk": "7086C343338A5FF2BE11E94E9E0FCEE67E295A0094930AA8936B1F993A994116",
   *                 "status": 4096
   *             }
   *        ]
   * }
   * ```
   */
  getContacts = async ({ filter }: GetContactsParams, $filter?: Filter) => {
    return await this.call<GetContactsResponse>(
      'getContacts',
      {
        filter,
      },
      $filter,
    );
  };

  /**
   * Method getOwnContact returns information about yourself.
   * ```js
   *  // Request
   *     {
   *         "method": "getOwnContact",
   *         "params": {},
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": {
   *             "avatarMd5": "8AFDAB98B48A90F7D3B18AFF96F0852C",
   *             "hashedPk": "809262B77E2EF657F04C7FA9822426D6",
   *             "isFriend": false,
   *             "nick": "contact",
   *             "pk": "CFF4DB80DCA10BD2317D538FF790A03EDA26274768E5EB04E0FDA51989131F32",
   *             "status": 4096
   *         },
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  getOwnContact = async () => {
    return await this.call<GetOwnContactResponse>('getOwnContact', {});
  };

  /**
   * Method sendInstantMessage sends personal message(IM) to the selected contact from the contact list. The method is called by using the To parameter, that passes on the Public Key or Nickname to whom the message would be sent (Public Key can be recognized by using the getContacts method) and Text, which contains the text of the message. In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "sendInstantMessage",
   *         "params": {
   *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "text": "test"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 49863,
   *         "resultExtraInfo": {
   *             "elapsed": "21"
   *         }
   *     }
   * ```
   */
  sendInstantMessage = async ({ to, text }: SendInstantMessageParams) => {
    return await this.call<SendInstantMessageResponse>('sendInstantMessage', {
      to,
      text,
    });
  };

  /**
   * Method sendInstantQuote sends quote personal message(IM) to the selected contact from the contact list on message by id_message.
   * ```js
   *  // Request
   *     {
   *         "method": "sendInstantQuote",
   *         "params": {
   *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "text": "test",
   *             "id_message": "232"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 0,
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  sendInstantQuote = async ({ to, text, id_message }: SendInstantQuoteParams) => {
    return await this.call<SendInstantQuoteResponse>('sendInstantQuote', {
      to,
      text,
      id_message,
    });
  };

  /**
   * Method sendInstantSticker sends sticker personal message(IM) to the selected contact from the contact list a sticker from collection by name.
   * ```js
   *  // Request
   *     {
   *         "method": "sendInstantSticker",
   *         "params": {
   *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "collection": "434",
   *             "name": "343"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 49864,
   *         "resultExtraInfo": {
   *             "elapsed": "11"
   *         }
   *     }
   * ```
   */
  sendInstantSticker = async ({ to, collection, name }: SendInstantStickerParams) => {
    return await this.call<SendInstantStickerResponse>('sendInstantSticker', {
      to,
      collection,
      name,
    });
  };

  /**
   * Method pinInstantMessage changes message as pinned if pin is true or changes message as unpinned if pin is false and then send information about this action to opponent to repeat that on other side.
   * ```js
   *  // Request
   *     {
   *         "method": "pinInstantMessage",
   *         "params": {
   *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "messageId": "123",
   *             "pin": true
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 0,
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  pinInstantMessage = async ({ to, messageId, pin }: PinInstantMessageParams) => {
    return await this.call<PinInstantMessageResponse>('pinInstantMessage', {
      to,
      messageId,
      pin,
    });
  };

  /**
   * Method getPinnedMessages returns list of pinned messages by corresponded contact key in pk
   * ```js
   *  // Request
   *     {
   *         "method": "getPinnedMessages",
   *         "params": {
   *             "pk": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 0,
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  getPinnedMessages = async ({ pk }: GetPinnedMessagesParams) => {
    return await this.call<GetPinnedMessagesResponse>('getPinnedMessages', {
      pk,
    });
  };

  /**
   * Method bookmarkInstantMessage marks message corresponded by messageIs as bookmarked with comments
   * ```js
   *  // Request
   *     {
   *         "method": "bookmarkInstantMessage",
   *         "params": {
   *             "messageId": 11,
   *             "comments": "test"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 0,
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  bookmarkInstantMessage = async ({ messageId, comments }: BookmarkInstantMessageParams) => {
    return await this.call<BookmarkInstantMessageResponse>('bookmarkInstantMessage', { messageId, comments });
  };

  /**
   * Method getStickerCollections returns collection names of stickers.
   * ```js
   *  // Request
   *     {
   *         "method": "getStickerCollections",
   *         "params": {},
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": [
   *             "Default Stickers"
   *         ],
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  getStickerCollections = async () => {
    return await this.call<GetStickerCollectionsResponse>('getStickerCollections', {});
  };

  /**
   * Method getStickerNamesByCollection returns available names from corresponded collection.
   * ```js
   *  // Request
   *     {
   *         "method": "getStickerNamesByCollection",
   *         "params": {
   *             "collection_name": "Default Stickers"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": [
   *             "airstrike",
   *             "rich",
   *             "sick",
   *             "hide",
   *             "fries",
   *             "knife",
   *             "airship",
   *             "gift"
   *         ],
   *         "resultExtraInfo": {
   *             "elapsed": "1"
   *         }
   *     }
   * ```
   */
  getStickerNamesByCollection = async ({ collection_name }: GetStickerNamesByCollectionParams) => {
    return await this.call<GetStickerNamesByCollectionResponse>('getStickerNamesByCollection', { collection_name });
  };

  /**
   * Method getImageSticker returns image by sticker name from corresponded collection in coder that can be equal "BASE64".
   * ```js
   *  // Request
   *     {
   *         "method": "getImageSticker",
   *         "params": {
   *             "collection_name": "test",
   *             "sticker_name": "test",
   *             "coder": "1"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getImageSticker = async ({ collection_name, sticker_name, coder }: GetImageStickerParams) => {
    return await this.call<GetImageStickerResponse>('getImageSticker', {
      collection_name,
      sticker_name,
      coder,
    });
  };

  /**
   * Method sendInstantBuzz sends buzz personal message(IM) to the selected contact from the contact list with comments.
   * ```js
   *  // Request
   *     {
   *         "method": "sendInstantBuzz",
   *         "params": {
   *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "comments": "test"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 49866,
   *         "resultExtraInfo": {
   *             "elapsed": "8"
   *         }
   *     }
   * ```
   */
  sendInstantBuzz = async ({ to, comments }: SendInstantBuzzParams) => {
    return await this.call<SendInstantBuzzResponse>('sendInstantBuzz', {
      to,
      comments,
    });
  };

  /**
   * Method sendInstantInvitation sends invitation personal message(IM) to the selected contact from the contact list with description and comments on channel_id.
   * ```js
   * // Request
   *     {
   *         "method": "sendInstantInvitation",
   *         "params": {
   *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "channelid": "123",
   *             "description": "123",
   *             "comments": "123"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  sendInstantInvitation = async ({ to, channelid, description, comments }: SendInstantInvitationParams) => {
    return await this.call<SendInstantInvitationResponse>('sendInstantInvitation', { to, channelid, description, comments });
  };

  /**
   * Method removeInstantMessages removes all personal messages(IM) of the selected contact from the contact list.
   * ```js
   *  // Request
   *     {
   *         "method": "removeInstantMessages",
   *         "params": {
   *             "hex_contact_public_key": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  removeInstantMessages = async ({ hex_contact_public_key }: RemoveInstantMessagesParams) => {
    return await this.call<RemoveInstantMessagesResponse>('removeInstantMessages', { hex_contact_public_key });
  };

  /**
   * Method sendEmailMessage sends uMail to the selected contact in the Utopia network. The method is called by using the To parameter, which passes on the Public Key or Nickname to which the uMail would be sent (Public Key can be recognized by using the getContacts method); Subject, that determines the subject of the email; and Body, which passes on the text in the body of the uMail. In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "sendEmailMessage",
   *         "params": {
   *             "to": [
   *                 "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F", "120A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814A"
   *             ],
   *             "subject": "test",
   *             "body": "test",
   *             "attachmentFileId": ""
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  sendEmailMessage = async ({ to, subject, body, attachmentFileId }: SendEmailMessageParams) => {
    return await this.call<SendEmailMessageResponse>('sendEmailMessage', {
      to,
      subject,
      body,
      attachmentFileId,
    });
  };

  /**
   * Method getContactMessages returns in the Response block the history of communication from personal chat with selected contact. The method is called by using the Public Key parameter, that passes on the Public Key of the contact (Public Key can be recognized by using the getContacts method)
   * ```js
   *  // Request
   *     {
   *         "method": "getContactMessages",
   *         "params": {
   *             "pk": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getContactMessages = async ({ pk }: GetContactMessagesParams, filter?: Filter) => {
    return await this.call<GetContactMessagesResponse>('getContactMessages', { pk }, filter);
  };

  /**
   * Method requestNewPublicKeyPaymentAlias sends request to generate alias on public key
   * ```js
   *  // Request
   *     {
   *         "method": "requestNewPublicKeyPaymentAlias",
   *         "params": { },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  requestNewPublicKeyPaymentAlias = async () => {
    return await this.call<RequestNewPublicKeyPaymentAliasResponse>('requestNewPublicKeyPaymentAlias', {});
  };

  /**
   * Method createPromoCode makes a request to create promocode and return reference number to obtain response
   * ```js
   *  // Request
   *     {
   *         "method": "createPromoCode",
   *         "params": { "promocode": "CASINO" },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */

  createPromoCode = async ({ promocode }: CreatePromoCodeParams) => {
    return await this.call<CreatePromoCodeResponse>('createPromoCode', {
      promocode,
    });
  };

  /**
   * Method deletePromoCode makes a request to delete existing previous promocode and return reference number to obtain response
   * ```js
   *  // Request
   *     {
   *         "method": "deletePromoCode",
   *         "params": { "promocode": "CASINO" },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  deletePromoCode = async ({ promocode }: DeletePromoCodeParams) => {
    return await this.call<DeletePromoCodeResponse>('deletePromoCode', {
      promocode,
    });
  };

  /**
   * Method getMyPublicKeyPaymentAliases return exist aliases that were created by requestNewPublicKeyPaymentAlias request or id requestId is set then only for this request id
   * ```js
   *  // Request
   *     {
   *         "method": "getMyPublicKeyPaymentAliases",
   *         "params": { "requestId": "12312312" },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */

  getMyPublicKeyPaymentAliases = async ({ requestId }: GetMyPublicKeyPaymentAliasesParams) => {
    return await this.call<GetMyPublicKeyPaymentAliasesResponse>('getMyPublicKeyPaymentAliases', { requestId });
  };

  /**
   * Method verifyTransaction sends request to verify transaction by corresponded parameters
   * ```js
   *  // Request
   *     {
   *         "method": "verifyTransaction",
   *         "params": { "source": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *                     "destination": "70AE0077C023EF30",
   *                     "amount": 1,4,
   *                     "currency": "CRP",
   *                     "batch": "0KC87SL67W585"},
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  verifyTransaction = async ({ source, destination, amount, currency, batch }: VerifyTransactionParams) => {
    return await this.call<VerifyTransactionResponse>('verifyTransaction', {
      source,
      destination,
      amount,
      currency,
      batch,
    });
  };

  /**
   * Method verifyTransaction sends request to verify transaction by corresponded hash of transaction
   * ```js
   *  // Request
   *     {
   *         "method": "verifyTransactionByHash",
   *         "params": { "hash": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F" },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  verifyTransactionByHash = async ({ hash }: VerifyTransactionByHashParams) => {
    return await this.call<VerifyTransactionByHashResponse>('verifyTransactionByHash', { hash });
  };

  /**
   * Method getVerifyTransactionResponse get response about verify transaction that was requested by verifyTransaction or verifyTransactionByHash methods
   * ```js
   *  // Request
   *     {
   *         "method": "getVerifyTransaction// Response",
   *         "params": { "requestId": "12312312" },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getVerifyTransactionResponse = async ({ requestId }: GetVerifyTransactionResponseParams) => {
    return await this.call<GetVerifyTransactionResponseResponse>('getVerifyTransactionResponse', { requestId });
  };

  // /**
  //  * Method sendPayment sends cryptons/USD transfer for the specified amount to the contact or to the card. The method is called by using the To parameters (nick, pk, cardid), which pass on the Public Key, Nickname or the card number of the user to whom the transfer would be sent (Public Key can be recognized by using the getContacts method); Amount, which transfers the amount of transfer (the number needs to be greater than 0 and contain no more than 9 character after coma); Comment is optional, which contains the text of the comment (up to 148 characters); as well as the optional 'From card' field can be specified, that passes on the card number from which the cryptons will be taken from. If the parameter is empty, then cryptons would be deducted from the main account. In the Response field the status of completion of the operation is displayed.Valid filter values for ‘Currency’ is ‘CRP’ or ‘USD’. If 'Currency' filter is not defined then a default value of 'CRP' will be used.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "sendPayment",
  //  *         "params": {
  //  *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
  //  *             "comment": "gift",
  //  *             "cardid": "70AE0077C023EF30",
  //  *             "amount": "10",
  //  *             "currency": "CRP"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * Possible erros:
  //  *     - Corresponded source card is not present
  //  *     - Corresponded amount must be more than 0.01 UUSD
  //  *     - Corresponded amount must be multiple one cent
  //  *     - Corresponded amount and fee must be more than your balance, your amount
  //  *
  //  * ```
  //  */
  // sendPayment = async (currency, cardid, to, amount, comment, fromCard) => {
  //    return await this.call<SendPaymentResponse>(
  //      'sendPayment',
  //      {}
  //    );

  // };
  // /**
  //  * Method addDelegate send request to add delegate cryptons for "pk" for the specified amount.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "addDelegate",
  //  *         "params": {
  //  *             "pk": "CDEC99906E4F90799E4399592CC7C59E75BA0AC89FE7EB52C01A89F3F0C5F360",
  //  *             "amount": "10"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // addDelegate = async (pk, amount) => {
  //    return await this.call<AddDelegateResponse>(
  //      'addDelegate',
  //      {}
  //    );

  // };
  // /**
  //  * Method revokeDelegated send request to revoke all delegated amount for corresponded "pk"
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "revokeDelegated",
  //  *         "params": {
  //  *             "pk": "CDEC99906E4F90799E4399592CC7C59E75BA0AC89FE7EB52C01A89F3F0C5F360"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // revokeDelegated = ({pk}) => {
  //    return await this.call<RevokeDelegatedResponse>(
  //      'method',
  //      {pk}
  //    );
  // };

  // /**
  //  * Method getDPoSInfo returns information about Delegated Proof of Stake
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getDPoSInfo",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // getDPoSInfo = async () => {
  //    return await this.call<GetDPoSInfoResponse>(
  //      'getDPoSInfo',
  //      {}
  //    );

  // };
  // /**
  //  * Method sendInvoice sends invoice (Request Cryptons) for deduction of specified amount from specified card. In the parameters of the method, the card number of the request recipient is specified (CardId). In the second parameter the 'Amount' is specified  which transfers the amount of transfer (the number needs to be greater than 0 and contain no more than 9 character after coma), and the third parameter is optional, where 'Comment is optional, which contains the text of the comment (up to 148 characters).
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "sendInvoice",
  //  *         "params": {
  //  *             "comment": "",
  //  *             "cardid": "123",
  //  *             "amount": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // sendInvoice = async (cardid, amount, comment) => {
  //    return await this.call<SendInvoiceResponse>(
  //      'sendInvoice',
  //      {}
  //    );

  // };
  // /**
  //  * Method acceptInvoice performs payment of the incoming invoice. The method is called with mandatory 'InvoiceId' parameter in which the ID of the invoice that needs to be rejected. For receiving ID of the needed invoice it is needed to call getInvoices  for receiving the list of invoices with their detailed information. In response the acceptInvoice method returns in the Response block the results of completing this request.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "acceptInvoice",
  //  *         "params": {
  //  *             "invoiceid": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // acceptInvoice = ({invoiceid}) => {
  //    return await this.call<AcceptInvoiceResponse>(
  //      'method',
  //      {invoiceid}
  //    );
  // };
  // /**
  //  * Method declineInvoice sends request for declining the payment for the incoming invoice. The method is called with mandatory the 'InvoiceId' parameter. Parameter InvoiceId contains the ID value for the invoice that needs to be declined. To get the ID of the required invoice it is mandatory to call the getInvoices method for receiving the list of invoices with their detailed information. In response the declineInvoice method returns in the Response block the results of completing this request.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "declineInvoice",
  //  *         "params": {
  //  *             "invoiceid": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // declineInvoice = ({invoiceid}) => {
  //    return await this.call<DeclineInvoiceResponse>(
  //      'method',
  //      {invoiceid}
  //    );
  // };
  // /**
  //  * Method requestUnsTransfer allows to transfer the uNS record to contact. The method is called with mandatory 'Name' and 'Public Key' parameters. Name parameter is the name of the uNS record from the list of own uNS records. hexNewOwnerPk  represents  hash of the public portion of the key (as in some instances, key is now known, only hash is), to which the transfer is being made. In the Response field the status of completion of the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "requestUnsTransfer",
  //  *         "params": {
  //  *             "name": "e22",
  //  *             "hexNewOwnerPk": "77D1832EBB35F233A1BB4B4AD9ECC7774F8F2000733EAA81F615A9173A487A52"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  * {
  //  *     "result": "8EF88CC4055DB9A71AF60FBB3A48300BC051DC000B636AA020F4E5FF0433BD84",
  //  *     "resultExtraInfo": {
  //  *         "elapsed": "2"
  //  *     }
  //  * }
  //  *
  //  * ```
  //  */
  // requestUnsTransfer = async (name, hexNewOwnerPk) => {
  //    return await this.call<RequestUnsTransferResponse>(
  //      'requestUnsTransfer',
  //      {}
  //    );

  // };
  // /**
  //  * Method acceptUnsTransfer allows to accept the incoming record of the uNS transfer.  The method is called with the mandatory 'RequesId' parameter, which represents the id of the incoming uNS transfer. To receive the id of incoming transfers it is necessary to call the incomingUnsTransfer method, which returns the list of incoming uNS transfer. In the Response field the status of completion of the acceptUnsTransfer operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "acceptUnsTransfer",
  //  *         "params": {
  //  *             "requestId": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  * // Response
  //  *     {
  //  *         "result": "656863B6D6AA80C0B38DF1D6C64FDC7FBCD658736D666EE2EC22B55DA2052560",
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "3"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */

  // acceptUnsTransfer = ({requestId}) => {
  //    return await this.call<AcceptUnsTransferResponse>(
  //      'method',
  //      {requestId}
  //    );
  // };
  // /**
  //  * Method declineUnsTransfer allows to decline the incoming record of the uNS transfer. The method is called with the mandatory 'RequesId' parameter, which represents the id of the incoming uNS transfer. To receive the id of incoming transfers it is necessary to call the incomingUnsTransfer method, which returns the list of incoming uNS transfer. In the Response field the status of completion of the declineUnsTransfer operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "declineUnsTransfer",
  //  *         "params": {
  //  *             "requestId": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *         }
  //  * // Response
  //  *     {
  //  *         "result": "656863B6D6AA80C0B38DF1D6C64FDC7FBCD658736D666EE2EC22B55DA2052560",
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "3"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */

  // declineUnsTransfer = ({requestId}) => {
  //    return await this.call<DeclineUnsTransferResponse>(
  //      'method',
  //      {requestId}
  //    );
  // };
  // /**
  //  * Method incomingUnsTransfer returns in the Response field the list of all incoming uNS transfer records with their detailed information. The method is called without using any parameters.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "incomingUnsTransfer",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": [
  //  *         ],
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "0"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // incomingUnsTransfer = async () => {
  //    return await this.call<IncomingUnsTransferResponse>(
  //      'incomingUnsTransfer',
  //      {}
  //    );

  // };
  // /**
  //  * Method outgoingUnsTransfer returns in the Response field the list of all outgoing uNS transfer records with their detailed information. The method is called without using any parameters.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "outgoingUnsTransfer",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": [
  //  *         ],
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "0"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // outgoingUnsTransfer = async () => {
  //    return await this.call<OutgoingUnsTransferResponse>(
  //      'outgoingUnsTransfer',
  //      {}
  //    );

  // };
  // /**
  //  * Attention! The method storageWipe irrevocably removes all databases of the user. The method is called without using any parameters. In the Response field the status of completion of the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "storageWipe",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // storageWipe = async () => {
  //    return await this.call<StorageWipeResponse>(
  //      'storageWipe',
  //      {}
  //    );

  // };
  // /**
  //  * Method cancelInvoice allows to cancel the already created invoice. The method is called with mandatory 'InvoiceId' parameter. Parameter InvoiceId contains the ID value for the invoice that needs to be declined. To get the ID of the required invoice it is mandatory to call the getInvoices method for receiving the list of invoices with their detailed information. In response the declineInvoice method returns in the Response block the results of completing this request.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "cancelInvoice",
  //  *         "params": {
  //  *             "invoiceid": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // cancelInvoice = ({invoiceid}) => {
  //    return await this.call<CancelInvoiceResponse>(
  //      'method',
  //      {invoiceid}
  //    );
  // };
  // /**
  //  * Method getTransactionIdByReferenceNumber allows to receive 'batchid' of the transaction by using the ReferenceNumber. In the Response field, batchid is returned, which is considered a successful status for completion of the operation.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getTransactionIdByReferenceNumber",
  //  *         "params": {
  //  *             "referenceNumber": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // getTransactionIdByReferenceNumber = async () => {
  //    return await this.call<GetTransactionIdByReferenceNumberResponse>(
  //      'getTransactionIdByReferenceNumber',
  //      {}
  //    );

  // };
  // /**
  //  * Method getInvoiceByReferenceNumber allows to receive 'batchid' of the invoice using the ReferenceNumber. In the Response field, batchid is returned, which is considered a successful status for completion of the operation.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getInvoiceByReferenceNumber",
  //  *         "params": {
  //  *             "referenceNumber": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // getInvoiceByReferenceNumber = async () => {
  //    return await this.call<GetInvoiceByReferenceNumberResponse>(
  //      'getInvoiceByReferenceNumber',
  //      {}
  //    );

  // };
  // /**
  //  * Method getInvoices returns to the Response field the list of active invoiced. The method is called with using any optional parameters.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getInvoices",
  //  *         "params": {
  //  *             "parameters": {
  //  *                 "cardId": "",
  //  *                 "invoiceId": "",
  //  *                 "pk": "",
  //  *                 "transactionId": "",
  //  *                 "status": "",
  //  *                 "startDateTime": "",
  //  *                 "endDateTime": "",
  //  *                 "referenceNumber": ""
  //  *             }
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": [
  //  *         ],
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "0"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // getInvoices = async (
  //    return await this.call<GetInvoicesResponse>(
  //      'getInvoices',
  //      {}
  //    );

  //   invoiceId,
  //   pk,
  //   transactionId,
  //   status,
  //   startDateTime,
  //   endDateTime,
  //   referenceNumber
  // ) => {
  //   return;
  // };
  // /**
  //  * Method getVouchers returns to the Response field the information about existing vouchers as a list.Valid filter values for ‘Currency’ is ‘CRP’ or ‘USD’. If 'Currency' filter is not defined then a default value of 'CRP' will be used.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getVouchers",
  //  *         "params": {
  //  *             "currency": "CRP"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": [
  //  *         ],
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "0"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // getVouchers = ({currency}) => {
  //    return await this.call<GetVouchersResponse>(
  //      'method',
  //      {currency}
  //    );
  // };

  // /**
  //  * Method getCards returns in the Response field the current list of cards and their detailed information from uWallet. Method is called without using any parameters.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getCards",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // getCards = async () => {
  //    return await this.call<GetCardsResponse>(
  //      'getCards',
  //      {}
  //    );
  // };

  // /**
  //  * Calling the enablePoS method turns on and off the PoS on the remaining irreducible account balance. As a parameter, one of the two statuses, true or false is selected. In the Response field the status of completion of turning on or off the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "enablePoS",
  //  *         "params": {
  //  *             "enable": "true"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // enablePoS = ({enabled}) => {
  //    return await this.call<EnablePoSResponse>(
  //      'method',
  //      {enabled}
  //    );
  // };
  // /**
  //  * Calling the enableHistoryMining method changes the option of the automatic reading of the mining history from the financial server. As a parameter of the method, the status of true or false is specified. In the Response field the status of completion of turning on or off the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "enableHistoryMining",
  //  *         "params": {
  //  *             "enable": "true"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // enableHistoryMining = ({enabled}) => {
  //    return await this.call<EnableHistoryMiningResponse>(
  //      'method',
  //      {enabled}
  //    );
  // };
  // /**
  //  * Calling the statusHistoryMining method returns in the Response block the status of mining history poll. Method is called without using any parameters.
  //  * Meaning of different states:
  //  * 0 = STATE_EMPTY
  //  * 1 = STATE_IN_PROGRESS
  //  * 2 = STATE_RECEIVED_RESPONSE
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "statusHistoryMining",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // statusHistoryMining = async () => {
  //    return await this.call<StatusHistoryMiningResponse>(
  //      'statusHistoryMining',
  //      {}
  //    );

  // };
  // /**
  //  * Method getMiningBlocks returns to the Response field the information about the mining blocks for which the reward has been paid. The method is called without using any parameters.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getMiningBlocks",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // getMiningBlocks = async () => {
  //    return await this.call<GetMiningBlocksResponse>(
  //      'getMiningBlocks',
  //      {}
  //    );

  // };
  // /**
  //  * Method getMiningBlocksWithTreasury returns to the Response field the information about the mining blocks for which the reward has been paid.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getMiningBlocksWithTreasury",
  //  *         "params": {
  //  *               "fromBlockId": "71464",
  //  *               "toBlockId": "",
  //  *               "limit": ""} ,
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *    // Response
  //  *    {
  //  *     "result": [
  //  * {
  //  *     "dateTime": "2022-05-13T09:46:17.392Z",            // - time of block
  //  *     "id": 86926,                                       // - id of mining block
  //  *     "involvedIn": false,
  //  *     "involvedInCount": 1,                              // - count your miners that have mined in this block
  //  *     "numberMiners": 18252,                             // - total count of miners that have mined in this block
  //  *     "price": 0.002629848,                              // - price for one block
  //  *     "treasury": {
  //  *         "CRP": [
  //  *             {
  //  *                 "amount": 6567876.338597688,           // - total amount of CRP
  //  *                 "type": "TOTAL_AMOUNT",
  //  *                 "volume": 178339                       // - total count of wallets with CRP
  //  *             },
  //  *             {
  //  *                 "amount": 6400547.52158307,            // - total supply of CRP after mining
  //  *                 "type": "TOTAL_SUPPLY",
  //  *                 "volume": 86476                        // - total count of wallets with CRP
  //  *             },
  //  *             {
  //  *                 "amount": 16445706.66712978,           // - total transferred amount in CRP
  //  *                 "type": "AMOUNT_BY_TRANSACTIONS_ALL",
  //  *                 "volume": 314797                       // - total transaction in CRP
  //  *             }
  //  *         ],
  //  *         "UUSD": [
  //  *             {
  //  *                 "amount": 999217.233752968,            // - total amount of UUSD
  //  *                 "type": "TOTAL_AMOUNT",
  //  *                 "volume": 177871                       // - total count of wallets with UUSD
  //  *             }
  //  *         ]
  //  *     }
  //  * },
  //  * ....
  //  *
  //  *
  //  *
  //  * ```
  //  */
  // getMiningBlocksWithTreasury = async (fromBlockId, toBlockId, limit) => {
  //    return await this.call<GetMiningBlocksWithTreasuryResponse>(
  //      'getMiningBlocksWithTreasury',
  //      {}
  //    );

  // };
  /**
   * Method getMiningInfo returns statistics value of mining process.
   * ```js
   *  // Request
   *     {
   *         "method": "getMiningInfo",
   *         "params": {},
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": {
   *             "minedAllTime": 0,
   *             "minedSession": 0
   *         },
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  getMiningInfo = async () => {
    return await this.call<GetMiningInfoResponse>('getMiningInfo', {});
  };

  /**
   * Method getFinanceSystemInformation returns in the Response field the information about Utopia financial system (information about fees and limits). Method is called without using any parameters.
   * ```js
   *  // Request
   *     {
   *         "method": "getFinanceSystemInformation",
   *         "params": {},
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": {
   *             "cardCreatePrice": 0.0001,
   *             "cardCreatePrice10": 0.001,
   *             "cardCreatePrice100": 0.01,
   *             "cardCreatePrice1000": 0.1,
   *             "cardCreatePrice10000": 1,
   *             "cardsCreationEnabled": true,
   *             "cardsMaxActive": 50,
   *             "cardsMaxPerDay": 10,
   *             "enableToUseMining": true,
   *             "PoS": false,
   *             "invoicesDefaultTtl": 14400,
   *             "invoicesEnabled": true,
   *             "invoicesMaxTotal": 50,
   *             "invoicesMaxTotalFromMerchant": 5,
   *             "invoicesMinAmount": 1e-09,
   *             "miningEnabled": false,
   *             "settingsVersion": 0,
   *             "transferCardFee": 4.123,
   *             "transferCheckFee": true,
   *             "transferExternalFee": 2,
   *             "transferInternalFee": 1,
   *             "transfersEnabled": true,
   *             "unsDefaultTtl": 43200,
   *             "unsDeleteNameFee": 0.01,
   *             "unsModifyNameFee": 0.01,
   *             "unsName1RegistrationFee": 1000,
   *             "unsName2RegistrationFee": 100,
   *             "unsName3RegistrationFee": 5,
   *             "unsName4RegistrationFee": 0.1,
   *             "unsProxyEnabled": false,
   *             "unsTransferFee": 0.1,
   *             "vouchersCreateEnabled": true,
   *             "vouchersMaxActive": 1000,
   *             "vouchersMaxPerBatch": 50,
   *             "vouchersMinAmount": 1e-09,
   *             "vouchersMinPerBatch": 2,
   *             "vouchersUseEnabled": true
   *         },
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  getFinanceSystemInformation = async () => {
    return await this.call<GetFinanceSystemInformationResponse>('getFinanceSystemInformation', {});
  };

  // /**
  //  * Method addCard sends the request  for creation of new card in uWallet. The method is called by using the following parameters: Name, which passes on the name of the new card (can contain between 1 and 32 symbols), Color, which passes on the color of the card ( in RGB format, for example '#FFFFFF') and also can specify the First 4 numbers of the card for customization ( it is possible to change only 4 first symbols, can contain symbols (A-F) and numbers (0-9)). In the Response field the status of completion of the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "addCard",
  //  *         "params": {
  //  *             "color": "",
  //  *             "name": "test",
  //  *             "preorderNumberInCard": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // addCard = async (name, color, numbers) => {
  //    return await this.call<AddCardResponse>(
  //      'addCard',
  //      {}
  //    );

  // };
  // /**
  //  * Method deleteCard deletes the existing card from uWallet. The amount from card will be returned to the main balance. The following parameter is specified: CardId, which passes on the card number ( CardId can be found by using the getCards method).  In the Response field the status of completion of the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "deleteCard",
  //  *         "params": {
  //  *             "cardId": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // deleteCard = ({cardId}) => {
  //    return await this.call<DeleteCardResponse>(
  //      'method',
  //      {cardId}
  //    );
  // };

  // /**
  //  * Method createVoucher with the mandatory parameter 'amount' creates new voucher for the selected amount in the list of own vouchers. The amount for the vouchers is taken from the main account balance. Amount, which transfers the amount of transfer (the number needs to be greater than 0 and contain no more than 9 character after coma);Valid filter values for ‘Currency’ is ‘CRP’ or ‘USD’. If 'Currency' filter is not defined then a default value of 'CRP' will be used.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "createVoucher",
  //  *         "params": {
  //  *             "amount": "1",
  //  *             "currency": "CRP"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": "C22CBFA08DC02C7CE27811DFABC2812828A7075CFDEF807355742D7931664241",
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "2"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // createVoucher = async (currency, amount) => {
  //    return await this.call<CreateVoucherResponse>(
  //      'createVoucher',
  //      {}
  //    );
  // };

  // /**
  //  * Method createVoucherBatch with the mandatory parameter 'amount' creates new 'count' vouchers for the selected amount in the list of own vouchers. The amount for the vouchers is taken from the main account balance. Amount, which transfers the amount of transfer (the number needs to be greater than 0 and contain no more than 9 character after coma);Valid filter values for ‘Currency’ is ‘CRP’ or ‘USD’. If 'Currency' filter is not defined then a default value of 'CRP' will be used.
  //  * ```js
  //  *     // Request
  //  * {
  //  *     "method": "createVoucherBatch",
  //  *     "params": {
  //  *         "amount": "1",
  //  *         "count": "5",
  //  *         "currency": "CRP"
  //  *     },
  //  *     "token": "TEMPTOKEN"
  //  * }
  //  *
  //  *    // Response
  //  * {
  //  *     "result": "C22CBFA08DC02C7CE27811DFABC2812828A7075CFDEF807355742D7931664241",
  //  *     "resultExtraInfo": {
  //  *         "elapsed": "2"
  //  *     }
  //  * }
  //  *
  //  * ```
  //  */
  // createVoucherBatch = async (amount, count, currency) => {
  //    return await this.call<CreateVoucherBatchResponse>(
  //      'createVoucherBatch',
  //      {}
  //    );
  // };

  // /**
  //  * Method useVoucher allows to use the selected voucher with adding its amount to your main account. The method is called with mandatory 'VoucherId' parameter in which the number of the voucher is specified.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "useVoucher",
  //  *         "params": {
  //  *             "voucherid": "UTP-LWG3-ETOR-XPYC-NVSU-MHJ3"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // useVoucher = ({voucherid}) => {
  //    return await this.call<UseVoucherResponse>(
  //      'method',
  //      {voucherid}
  //    );
  // };

  // /**
  //  * Method deleteVoucher allows to remove your own voucher from the existing list with having the amount refunded back to your account. The method is called with mandatory 'VoucherId' parameter in which the number of the voucher is specified. In the Response field the status of completion of the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "deleteVoucher",
  //  *         "params": {
  //  *             "voucherid": "UTP-LWG3-ETOR-XPYC-NVSU-MHJ3"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": "B0C719276EDD5DFCA519E9EF16B1FF64D582A9731C8FC7E60A3F200E68D0B9A0",
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "2"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // deleteVoucher = ({voucherid}) => {
  //    return await this.call<DeleteVoucherResponse>(
  //      'method',
  //      {voucherid}
  //    );
  // };

  // /**
  //  * Method sendAuthorizationRequest allows to send the authorization request to add the user to the contact list. The method is called with mandatory use of 'Public Key' and 'Message' parameters. The Public Key parameter represents the Public Key of the person being added. The message parameter represents itself the text message with the request to be authorized. In the Response field the status of completion of sending such request is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "sendAuthorization",
  //  *         "params": {
  //  *             "pk": "FC4A715DF0C71B4623EBB56876262945D81C48972F2A34060892D17D55C88418",
  //  *             "message": "123"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": true,
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "23"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // sendAuthorizationRequest = async (pk, message) => {
  //    return await this.call<SendAuthorizationRequestResponse>(
  //      'sendAuthorizationRequest',
  //      {}
  //    );
  // };

  /**
   * Method acceptAuthorizationRequest accepts the incoming authorization request to add user to contacts. The method is called with mandatory use of 'Public Key' and 'Message' parameters. The Public Key parameter represents the Public Key of the person who send the authorization request. The message parameter represents itself the text message. In the Response field the status of completion of sending such request is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "acceptAuthorization",
   *         "params": {
   *             "pk": "FC4A715DF0C71B4623EBB56876262945D81C48972F2A34060892D17D55C88418",
   *             "message": ""
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": true,
   *         "resultExtraInfo": {
   *             "elapsed": "10"
   *         }
   *     }
   * ```
   */
  acceptAuthorizationRequest = async ({ pk, message }: AcceptAuthorizationRequestParams) => {
    return await this.call<AcceptAuthorizationRequestResponse>('acceptAuthorizationRequest', { pk, message });
  };

  /**
   * Method rejectAuthorizationRequest declines the incoming authorization request from user with Public key, which is specified as first parameter (Public Key) of the rejectAuthorizationRequest method. The second parameter of the method is Message row, that represents itself the response message the user who`s authorization is rejected. In the Response field the status of completion of such request is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "rejectAuthorization",
   *         "params": {
   *             "pk": "FC4A715DF0C71B4623EBB56876262945D81C48972F2A34060892D17D55C88418",
   *             "message": "123"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": true,
   *         "resultExtraInfo": {
   *             "elapsed": "78"
   *         }
   *     }
   * ```
   */
  rejectAuthorizationRequest = async ({ pk, message }: RejectAuthorizationRequestParams) => {
    return await this.call<RejectAuthorizationRequestResponse>('rejectAuthorizationRequest', { pk, message });
  };

  /**
   * Method deleteContact allows to perform the operation of removing selected user from the list of contacts. The method is called with mandatory use of 'Public Key' parameter that represents Public key of the to be removed contact. In the Response field the status of completion of such operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "deleteContact",
   *         "params": {
   *             "pk": "82348F684E8C3E2F8E0EF3C960D25619F813D7A2ABB049FB79A370D39A987F3D"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": true,
   *         "resultExtraInfo": {
   *             "elapsed": "1"
   *         }
   *     }
   * ```
   */
  deleteContact = async ({ pk }: DeleteContactParams) => {
    return await this.call<DeleteContactResponse>('deleteContact', { pk });
  };

  /**
   * Method setContactGroup creates group or transfers selected contact into the group in the contact list. The method is called by using the Public Key parameters, which pass the Public Key of the contact (Public Key can be recognized by using the getContacts method) and Group Name, which passes the group name for creation or transfer (up to 32 symbols). In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "setContactGroup",
   *         "params": {
   *             "contactPublicKey": "CDEC99906E4F90799E4399592CC7C59E75BA0AC89FE7EB52C01A89F3F0C5F36A",
   *             "groupName": "test"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": true,
   *         "resultExtraInfo": {
   *             "elapsed": "70"
   *         }
   *     }
   * ```
   */
  setContactGroup = async ({ contactPublicKey, groupName }: SetContactGroupParams) => {
    return await this.call<SetContactGroupResponse>('setContactGroup', {
      contactPublicKey,
      groupName,
    });
  };

  /**
   * Method renameContactGroup renames group name. The method is called by using current and new name group.
   * ```js
   *  // Request
   *     {
   *         "method": "renameContactGroup",
   *         "params": {
   *             "oldGroupName": "friends",
   *             "newGroupName": "best friends"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 3,
   *         "resultExtraInfo": {
   *             "elapsed": "70"
   *         }
   *     }
   * ```
   */
  renameContactGroup = async ({ oldGroupName, newGroupName }: RenameContactGroupParams) => {
    return await this.call<RenameContactGroupResponse>('renameContactGroup', {
      oldGroupName,
      newGroupName,
    });
  };

  /**
   * Method deleteContactGroup delete corresponded group name, all contacts are moved under default group.
   * ```js
   *  // Request
   *     {
   *         "method": "deleteContactGroup",
   *         "params": {
   *             "groupName": "co-workers"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": 3,
   *         "resultExtraInfo": {
   *             "elapsed": "70"
   *         }
   *     }
   * ```
   */
  deleteContactGroup = async ({ groupName }: DeleteContactGroupParams) => {
    return await this.call<DeleteContactGroupResponse>('deleteContactGroup', {
      groupName,
    });
  };

  /**
   * Method setContactNick sets the selected value for the Nickname field for the selected contact. The method is called by using the Public Key parameters, which pass on the Public Key for the contact (Public Key can be recognized by using the getContacts method) and New Nick, which passes on the new Nickname (up to 32 symbols). Empty value to be set as the Nickname Public Key of the contact. In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "setContactNick",
   *         "params": {
   *             "contactPublicKey": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "newNick": "temp"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": true,
   *         "resultExtraInfo": {
   *             "elapsed": "2"
   *         }
   *     }
   * ```
   */
  setContactNick = async ({ contactPublicKey, newNick }: SetContactNickParams) => {
    return await this.call<SetContactNickResponse>('setContactNick', {
      contactPublicKey,
      newNick,
    });
  };

  /**
   * Method getChannels returns in the Response field the current list of all channels of Utopia ecosystem, it is possible to search by name of the channel (partial or complete matching). As a parameter, a Filter can be specified, which can be used for searching of the channel by name ( has to contain full or partial matching of the channel name).
   * ```js
   *  // Request
   *     {
   *         "method": "getChannels",
   *         "params": {
   *             "filter": "talk",
   *             "channel_type": "5",
   *             "from": "", // or "2019-11-23T10:00:00.001",
   *             "to": ""    // or "2021-11-23T10:00:00.001"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getChannels = async ({ filter, channel_type, from, to }: GetChannelsParams) => {
    return await this.call<GetChannelsResponse>('getChannels', {
      filter,
      channel_type,
      from,
      to,
    });
  };

  /**
   * Method sendChannelPrivateMessageToContact creates and sends message in the selected channel directly only to corresponded contact
   * ```js
   *  // Request
   *     {
   *         "method": "sendChannelPrivateMessageToContact",
   *         "params": {
   *             "channelid": "C160AB99F292C98746C3EA6ABB6AC7CD",
   *             "contactHashedPk": "2F4413F9228215B2F76595C88231441C",
   *             "message": "test"
   *         },
   *         "token": ""
   *     }
   * ```
   */
  sendChannelPrivateMessageToContact = async ({ channelId, contactHashedPk, message }: SendChannelPrivateMessageToContactParams) => {
    return await this.call<SendChannelPrivateMessageToContactResponse>('sendChannelPrivateMessageToContact', {
      channelid: channelId,
      contactHashedPk,
      message,
    });
  };

  /**
   * Method getChannelPrivateMessagesOfContact returns chat messages in corresponded channel and contact
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelPrivateMessagesOfContact",
   *         "params": {
   *             "channelid": "C160AB99F292C98746C3EA6ABB6AC7CD",
   *             "contactHashedPk": "2F4413F9228215B2F76595C88231441C"
   *         },
   *         "token": ""
   *     }
   * ```
   */
  getChannelPrivateMessagesOfContact = async ({ channelId, contactHashedPk }: GetChannelPrivateMessagesOfContactParams) => {
    return await this.call<GetChannelPrivateMessagesOfContactResponse>('getChannelPrivateMessagesOfContact', {
      channelid: channelId,
      contactHashedPk,
    });
  };

  /**
   * Method sendChannelMessage creates and sends message in the selected channel (to send the message the user should have joined this channel and needs to have status 'online'). To enter the channel, use joinChannel method. As a parameter the method is using the ChannelId, which passes on the id of the channel in which the message is being sent (finding the id of the channel is possible by using the getChannels method) and Message, which contains the text of the message being sent. In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "sendChannelMessage",
   *         "params": {
   *             "channelid": "123",
   *             "message": "123"
   *         },
   *         "token": ""
   *     }
   * ```
   */
  sendChannelMessage = async ({ channelId, message }: SendChannelMessageParams) => {
    return await this.call<SendChannelMessageResponse>('sendChannelMessage', {
      channelid: channelId,
      message,
    });
  };

  /**
   * Method sendChannelComment creates and sends comment for corresponded message in the selected channel .
   * ```js
   *  // Request
   *     {
   *         "method": "sendChannelComment",
   *         "params": {
   *             "channelid": "C160AB99F292C98746C3EA6ABB6AC7CD",
   *             "comment": "Text of comment",
   *             "message_id": "123456",
   *         },
   *         "token": ""
   *     }
   *
   * ```
   */
  sendChannelComment = async ({ channelId, comment, id_message }: SendChannelCommentParams) => {
    return await this.call<SendChannelCommentResponse>('sendChannelComment', {
      channelid: channelId,
      comment,
      id_message,
    });
  };

  /**
   * Method getChannelComments obtain all comments for corresponded message in the selected channel .
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelComments",
   *         "params": {
   *             "channelid": "C160AB99F292C98746C3EA6ABB6AC7CD",
   *             "message_id": "123456",
   *         },
   *         "token": ""
   *     }
   * ```
   */
  getChannelComments = async ({ channelId, messageId }: GetChannelCommentsParams) => {
    return await this.call<GetChannelCommentsResponse>('getChannelComments', {
      channelid: channelId,
      id_message: messageId,
    });
  };

  /**
   * Method sendChannelPicture creates and sends message with picture in base64 format
   * ```js
   *  // Request
   *     {
   *         "method": "sendChannelPicture",
   *         "params": {
   *             "channelid": "C160AB99F292C98746C3EA6ABB6AC7CD",
   *             "base64_image": "af44......",
   *             "comment": "gift"
   *             "filename_image": "a.gif"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  sendChannelPicture = async ({ channelId, base64_image, comment, filename_image }: SendChannelPictureParams) => {
    return await this.call<SendChannelPictureResponse>('sendChannelPicture', {
      channelid: channelId,
      base64_image,
      filename_image,
      comment,
    });
  };

  /**
   * Method sendChannelQuote sends message as quote on existong one.
   * ```js
   *  // Request
   *     {
   *         "method": "sendChannelQuote",
   *         "params": {
   *             "channelid": "123",
   *             "text": "test",
   *             "id_message": "12345"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  sendChannelQuote = async ({ channelId, text, id_message }: SendChannelQuoteParams) => {
    return await this.call<SendChannelQuoteResponse>('sendChannelQuote', {
      channelid: channelId,
      text,
      id_message,
    });
  };

  /**
   * Method removeChannelMessage removes corresponded message in channel for evryone.
   * ```js
   *  // Request
   *     {
   *         "method": "removeChannelMessage",
   *         "params": {
   *             "channelid": "123",
   *             "id_message": "12345"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  removeChannelMessage = async ({ channelId, id_message }: RemoveChannelMessageParams) => {
    return await this.call<RemoveChannelMessageResponse>('removeChannelMessage', {
      channelid: channelId,
      id_message,
    });
  };

  /**
   * Method enableChannelNotification enable or disable alert incoming message for corresponded channel.
   * ```js
   *  // Request
   *     {
   *         "method": "enableChannelNotification",
   *         "params": {
   *             "channelid": "123",
   *             "enabled": false
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  enableChannelNotification = async ({ channelId, enabled }: EnableChannelNotificationParams) => {
    return await this.call<EnableChannelNotificationResponse>('enableChannelNotification', {
      channelid: channelId,
      enabled,
    });
  };

  /**
   * Method getChannelMessages returns in the Response block the history of communication from selected channel. The method is called by using the channelid parameter, that passes on id of channel.
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelMessages",
   *         "params": {
   *             "channelid": "123",
   *             "limitRows": 1
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getChannelMessages = async ({ channelId, limitRows, offsetRows }: GetChannelMessagesParams, filter?: Filter) => {
    return await this.call<GetChannelMessagesResponse>('getChannelMessages', { channelid: channelId, limitRows, offsetRows }, filter);
  };

  /**
   * Method getChannelInfo returns in the Response field the information about the channel ( the response contains following parameters: HideInCommonList, description, geotag, hashtags, languages, readonly, title, type, private). As a parameter the method is using the ChannelId for which the user is trying to find more information (finding the id of the channel is possible by using the getChannels method).
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelInfo",
   *         "params": {
   *             "channelid": "123"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   *  // Response
   *    {
   *        "result": {
   *            "HideInCommonList": false,
   *            "created": "2023-09-03T10:17:36.154Z",
   *            "description": "Unofficial Utopia JS API Client & Mobile App for Desktop App",
   *            "geotag": "45.0599, 38.996",
   *            "hashtags": "",
   *            "languages": "ru_ru,en_gb",
   *            "modified": "2023-09-03T10:17:36.156Z",
   *            "owner": "E02E5F0CCAA0180719844BCF3ABA25D766D42967D0366020FE7D39654671D338",
   *            "readonly": false,
   *            "readonly_privacy": false,
   *            "title": "Unofficial Utopia API Client",
   *            "type": "public"
   *         },
   *        "resultExtraInfo": {
   *             "elapsed": "0"
   *        }
   *    }
   * ```
   */
  getChannelInfo = async ({ channelId }: GetChannelInfoParams) => {
    return await this.call<GetChannelInfoResponse>('getChannelInfo', {
      channelid: channelId,
    });
  };

  /**
   * Method getChannelModerators returns in the Response field the list of Public Keys of moderators. As a parameter the ChannelId is used (finding the id of the channel is possible by using the getChannels method).
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelModerators",
   *         "params": {
   *             "channelid": "123"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   *
   * ```
   */
  getChannelModerators = async ({ channelId }: GetChannelModeratorsParams) => {
    return await this.call<GetChannelModeratorsResponse>('getChannelModerators', { channelid: channelId });
  };

  /**
   * Method getChannelContacts returns in the Response field the list of contacts on channel with details.
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelContacts",
   *         "params": {
   *             "channelid": "123"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getChannelContacts = async ({ channelId }: GetChannelContactsParams, filter?: Filter) => {
    return await this.call<GetChannelContactsResponse>('getChannelContacts', { channelid: channelId }, filter);
  };

  /**
   * Method getChannelModeratorRight returns in the Response field the list of moderator rights in the channel ( the response contains parameters as ban, delete, promote). As a parameter the method uses: ChannelId from which it is needed to get the list of moderator rights (finding the id of the channel is possible by using the getChannels method) and Public Key of the channel moderator (finding Public Key(pk) of the channel moderator is possible by using the getChannelModerators method).
   * ```js
   *  // Request
   *     {
   *         "method": "getChannelModeratorRight",
   *         "params": {
   *             "channelid": "123",
   *             "moderator": "1"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   *
   * ```
   */
  getChannelModeratorRight = async ({ channelId, moderator }: GetChannelModeratorRightParams) => {
    return await this.call<GetChannelModeratorRightResponse>('getChannelModeratorRight', { channelid: channelId, moderator });
  };

  /**
   * Method createChannel creates uchan record.
   * ```js
   *             // Request
   *         {
   *             "method": "createChannel",
   *             "params": {
   *                 "channel_name": "",
   *                 "description": "",
   *                 "read_only": "",
   *                 "read_only_privacy": "",
   *                 "password": "",
   *                 "languages": "",
   *                 "hashtags": "",
   *                 "geoTag": "",
   *                 "base64_avatar_image": "",
   *                 "hide_in_UI": ""
   *             },
   *             "token": "TEMPTOKEN"
   *         }
   * ```
   */
  // TODO re-teset
  createChannel = async ({
    channel_name,
    description,
    read_only,
    read_only_privacy,
    password,
    languages,
    hashtags,
    geoTag,
    base64_avatar_image,
    hide_in_UI,
  }: CreateChannelParams) => {
    return await this.call<CreateChannelResponse>('createChannel', {
      channel_name,
      description,
      read_only,
      read_only_privacy,
      password,
      languages,
      hashtags,
      geoTag,
      base64_avatar_image,
      hide_in_UI,
    });
  };

  /**
   * Method modifyChannel changes uchan record properties.
   * ```js
   *  // Request
   *  {
   *      "method": "modifyChannel",
   *      "params": {
   *          "channelid": "",
   *          "description": "",
   *          "read_only": "",
   *          "read_only_privacy": "",
   *          "password": "",
   *          "languages": "",
   *          "hashtags": "",
   *          "geoTag": "",
   *          "base64_avatar_image": "",
   *          "hide_in_UI": ""
   *      },
   *      "token": "TEMPTOKEN"
   *  }
   * ```
   */
  modifyChannel = async ({
    channelId,
    description,
    read_only,
    read_only_privacy,
    password,
    languages,
    hashtags,
    geoTag,
    base64_avatar_image,
    hide_in_UI,
  }: ModifyChannelParams) => {
    return await this.call<ModifyChannelResponse>('modifyChannel', {
      channelid: channelId,
      description,
      read_only,
      read_only_privacy,
      password,
      languages,
      hashtags,
      geoTag,
      base64_avatar_image,
      hide_in_UI,
    });
  };

  /**
   * Method modifyChannelTitle changes title in uchan record properties.
   * ```js
   *      // Request
   *  {
   *      "method": "modifyChannelTitle",
   *      "params": {
   *          "channelid": "123",
   *          "newTitle": "new title",
   *          "password": "pass"
   *      },
   *      "token": "TEMPTOKEN"
   *  }
   * ```
   */
  modifyChannelTitle = async ({ channelId, newTitle, password }: ModifyChannelTitleParams) => {
    return await this.call<ModifyChannelTitleResponse>('modifyChannelTitle', {
      channelid: channelId,
      newTitle,
      password,
    });
  };

  /**
   * Method modifyChannelPassword changes passsword in uchan record properties.
   * ```js
   *      // Request
   *  {
   *      "method": "modifyChannelPassword",
   *      "params": {
   *          "channelid": "123",
   *          "newPassword": "new pass",
   *          "password": "pass"
   *      },
   *      "token": "TEMPTOKEN"
   *  }
   * ```
   */
  modifyChannelPassword = async ({ channelId, newPassword, oldPassword }: ModifyChannelPasswordParams) => {
    return await this.call<ModifyChannelPasswordResponse>('modifyChannelPassword', { channelid: channelId, newPassword, password: oldPassword });
  };

  /**
   * Method deleteChannel deletes uchan record.
   * ```js
   *     // Request
   * {
   *     "method": "deleteChannel",
   *     "params": {
   *         "channelid": "123"
   *         "password": "pass"
   *     },
   *     "token": "TEMPTOKEN"
   * }
   *
   * ```
   */
  deleteChannel = async ({ channelId, password }: DeleteChannelParams) => {
    return await this.call<DeleteChannelResponse>('deleteChannel', {
      channelid: channelId,
      password,
    });
  };

  /**
   * Method getChannelSystemInfo returns system properties of channels.
   * ```js
   * // Request
   *     {
   *         "method": "getChannelSystemInfo",
   *         "params": {},
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": {
   *             "local_db_channels": 2972,
   *             "last_downloaded_channel": "IMAGES",
   *             "peers_connected": 16,
   *             "total_channels": 3081
   *         },
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  getChannelSystemInfo = async () => {
    return await this.call<GetChannelSystemInfoResponse>('getChannelSystemInfo', {});
  };

  /**
   * Method getChannelBannedContacts returns list banned contacts on corresponded channel with id channelid.
   * ```js
   *      // Request
   *  {
   *      "method": "getChannelBannedContacts",
   *      "params": {
   *          "channelid": "123123121"
   *      },
   *      "token": "TEMPTOKEN"
   *  }
   * ```
   */
  getChannelBannedContacts = async ({ channelId }: GetChannelBannedContactsParams) => {
    return await this.call<GetChannelBannedContactsResponse>('getChannelBannedContacts', { channelid: channelId });
  };

  // /**
  //  * Method applyChannelBannedContacts apply and send new banned list for corresponded channel with id channelid.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "applyChannelBannedContacts",
  //  *         "params": {
  //  *             "channelid": "123123121"
  //  *             "newList": [
  //  *                {
  //  *                  "hash":"04E06F309930BD34B2FE1E95C852E6FF",
  //  *                  "nick":"mick"
  //  *                },
  //  *                {
  //  *                  "hash":"BD287E72AB20D619737478D24D28949E",
  //  *                  "nick":"spammer"
  //  *                }
  //  *            ]
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  * Or
  //  *     {
  //  *         "method": "applyChannelBannedContacts",
  //  *         "params": {
  //  *             "channelid": "123123121"
  //  *             "newList": "04E06F309930BD34B2FE1E95C852E6FF,BD287E72AB20D619737478D24D28949E"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // applyChannelBannedContacts = async (channelid, newList) => {
  //    return await this.call<ApplyChannelBannedContactsResponse>(
  //      'applyChannelBannedContacts',
  //      {}
  //    );

  // };

  /**
   * Method leaveChannel executes the exit from the selected channel. As a parameter the method takes the ChannelId, which passes on the id of the channel in which the message is being sent (finding the id of the channel is possible by using the getChannels method .
   * ```js
   *  // Request
   *     {
   *         "method": "leaveChannel",
   *         "params": {
   *             "channelid": "123"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  leaveChannel = async ({ channelId }: LeaveChannelParams) => {
    return await this.call<LeaveChannelResponse>('leaveChannel', {
      channelid: channelId,
    });
  };

  /**
   * Method joinChannel executes an entry into selected channel. The following parameters are specified: ChannelId, which passes on the id of the channel in which the message is being sent (finding the id of the channel is possible by using the getChannels method); when needed the parameter Password is specified, which passes on the password for entry into the channel (if left empty, no password is required). In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "joinChannel",
   *         "params": {
   *             "ident": "123",
   *             "password": "123"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *   {
   *      "result": "Success",
   *       "resultExtraInfo": {
   *           "elapsed": "15"
   *         }
   *    }
   * ```
   * Possible errrors:
   *     - Cannot find channel by corresponded ident
   *     - Your password is incorrect
   *     - Your don't have right to join
   *
   */
  joinChannel = async ({ channelId, password }: JoinChannelParams) => {
    return await this.call<JoinChannelResponse>('joinChannel', {
      ident: channelId,
      password,
    });
  };

  /**
   * Method sends command to fetch history for corresponded channel
   * ```js
   *             // Request
   *         {
   *             "method": "fetchChannelHistory",
   *             "params": {
   *                 "channelid": "123"
   *             },
   *             "token": "TEMPTOKEN"
   *         }
   *
   * ```
   */
  fetchChannelHistory = async ({ channelId }: FetchChannelHistoryParams) => {
    return await this.call<FetchChannelHistoryResponse>('fetchChannelHistory', {
      channelid: channelId,
    });
  };

  // /**
  //  * unsCreateRecordRequest method sends a request to register a uNS name in the Utopia ecosystem for specific time period. In addition to uNS name which is used as a parameter (the name contains characters (A-Z), numbers (0-9), a dash (-) character, a period (.) and can be up to 32 characters long.), other parameters include: expiration date (yyyy -mm-dd ) which is a final valid date of the uNS (6 months by default), isPrimary, indicating whether the uNS name is primary, ChannelId, which passes the channel identifier uNS will be associated with (channel identifier can be found out using the getChannels method). The Response field displays the status of the completed operation.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsCreateRecord",
  //  *         "params": {
  //  *             "nick": "",
  //  *             "valid (obsolete)": "",
  //  *             "isPrimary": "false",
  //  *             "channelId": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // unsCreateRecordRequest = async (nick, valid, isPrimary, ChannelId) => {
  //    return await this.call<UnsCreateRecordRequestResponse>(
  //      'unsCreateRecordRequest',
  //      {}
  //    );

  // };
  // /**
  //  * unsModifyRecordRequest method sends a request to modify the uNS name in the Utopia ecosystem for specific time period. In addition to uNS name which is used as a parameter (the name contains characters (A-Z), numbers (0-9), a dash (-) character, a period (.) and can be up to 32 characters long.), other parameters include: expiration date (yyyy -mm-dd ) which is a final valid date of the uNS (6 months by default), isPrimary, indicating whether the uNS name is primary, ChannelId, which passes the channel identifier uNS will be associated with (channel identifier can be found out using the getChannels method). The Response field displays the status of the completed operation.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsModifyRecord",
  //  *         "params": {
  //  *             "nick": "",
  //  *             "valid": "",
  //  *             "isPrimary": "false",
  //  *             "channelId": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // unsModifyRecordRequest = async (nick, valid, isPrimary, ChannelId) => {
  //    return await this.call<UnsModifyRecordRequestResponse>(
  //      'unsModifyRecordRequest',
  //      {}
  //    );

  // };
  // /**
  //  * Method unsDeleteRecordRequest  sends request for deletion of uNS name of the current user. As a parameter the uNS name is used ( uNS name can be found by using the unsRegisteredNames method). In the Response field the status of completion of the operation is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsDeleteRecord",
  //  *         "params": {
  //  *             "nick": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // unsDeleteRecordRequest = ({nick}) => {
  //    return await this.call<UnsDeleteRecordRequestResponse>(
  //      'method',
  //      {nick}
  //    );
  // };
  // /**
  //  * Method unsHistoryName returns the list history of uNS name
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsHistoryName",
  //  *         "params": {
  //  *             "name": "test"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // unsHistoryName = ({name}) => {
  //    return await this.call<UnsHistoryNameResponse>(
  //      'method',
  //      {name}
  //    );
  // };
  // /**
  //  * Method unsSearchByPk returns in the Response field the list of all uNS names with selected 'Filter' parameter (contains full or partial matching with the searched uNS name. The name can contain symbols (A-Z), numbers (0-9), dash symbol (-) and period (.) and can be no greater than 32 symbols in length.).
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsSearchByPk",
  //  *         "params": {
  //  *             "filter": "2323"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // unsSearchByPk = ({filter}) => {
  //    return await this.call<UnsSearchByPkResponse>(
  //      'method',
  //      {filter}
  //    );
  // };
  // /**
  //  * Method unsSearchByNick returns the list of uNS names by partial or full matching with selected 'Filter' parameter (contains full or partial matching with the searched uNS name. The name can contain symbols (A-Z), numbers (0-9), dash symbol (-) and period (.) and can be no greater than 32 symbols in length.).
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsSearchByNick",
  //  *         "params": {
  //  *             "filter": "qwe"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": [
  //  *         ],
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "9"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */

  // unsSearchByNick = ({filter}) => {
  //    return await this.call<UnsSearchByNickResponse>(
  //      'method',
  //      {filter}
  //    );
  // };
  // /**
  //  * Method unsRegisteredNamesByDatetimes returns the list of uNS names by corresponded period dates.).
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsRegisteredNamesByDatetimes",
  //  *         "params": {
  //  *             "from": "2019-11-23T10:00:00.001",
  //  *             "to": "2021-11-23T10:00:00.001"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {}
  //  *
  //  * ```
  //  */
  // unsRegisteredNamesByDatetimes = async (from, to) => {
  //    return await this.call<UnsRegisteredNamesByDatetimesResponse>(
  //      'unsRegisteredNamesByDatetimes',
  //      {}
  //    );

  // };
  // /**
  //  * Method unsUnregisteredNamesByDatetimes returns the list of uNS deleted names by corresponded period dates.).
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsUnregisteredNamesByDatetimes",
  //  *         "params": {
  //  *             "from": "2019-11-23T10:00:00.001",
  //  *             "to": "2021-11-23T10:00:00.001"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {}
  //  *
  //  * ```
  //  */
  // unsUnregisteredNamesByDatetimes = async (from, to) => {
  //    return await this.call<UnsUnregisteredNamesByDatetimesResponse>(
  //      'unsUnregisteredNamesByDatetimes',
  //      {}
  //    );

  // };
  // /**
  //  * Method summaryUnsRegisteredNames returns the list count of uNS names by each day
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "summaryUnsRegisteredNames",
  //  *         "params": {
  //  *             "fromDate": "2019-11-23",
  //  *             "toDate": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": {
  //  *             "records": [
  //  *             ],
  //  *             "summary": {
  //  *                 "registred_during_selected": 0,
  //  *                 "registred_during_year": 0,
  //  *                 "registred_names": 3614,
  //  *                 "registred_users": 154
  //  *             }
  //  *         },
  //  *     "resultExtraInfo": {
  //  *             "elapsed": "78"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // summaryUnsRegisteredNames = async (fromDate, toDate) => {
  //    return await this.call<SummaryUnsRegisteredNamesResponse>(
  //      'summaryUnsRegisteredNames',
  //      {}
  //    );

  // };
  // /**
  //  * Method getUnsSyncInfo returns statistics value of sync process.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getUnsSyncInfo",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": {
  //  *             "last_record_names_registered": "security-test-not-delete",
  //  *             "local_blocks": 15583,
  //  *             "peers_connected": 16,
  //  *             "state": "Idle",
  //  *             "total_blocks": 15583
  //  *         },
  //  *         "resultExtraInfo": {
  //  *             "elapsed": "0"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // getUnsSyncInfo = async () => {
  //    return await this.call<GetUnsSyncInfoResponse>(
  //      'getUnsSyncInfo',
  //      {}
  //    );

  // };
  // /**
  //  * Method unsRegisteredNames returns in the Response field the list of all registered uNS for current user. The method is called without using any parameters.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "unsRegisteredNames",
  //  *          "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * // Response
  //  *     {
  //  *         "result": [
  //  *         ],
  //  *         "resultExtraInfo": {
  //  *         "elapsed": "8"
  //  *         }
  //  *     }
  //  *
  //  * ```
  //  */
  // unsRegisteredNames = async () => {
  //    return await this.call<UnsRegisteredNamesResponse>(
  //      'unsRegisteredNames',
  //      {}
  //    );
  // };

  /**
   * Method getEmailFolder returns to the Response block the list of identifications of uMail emails in the selected folder by using specified search filter. The method is called by using the FolderType parameters, which pass on the number of the folder from which the list should be taken (numbers of the folders 1-Inbox, 2-Drafts, 4-Sent, 8-Outbox, 16-Trash) and it is possible to specify the Filter parameter, which passes on the text value for the search of emails in uMail (has to contain the full or partial match with the Public Key, Nickname or the text of email).
   * ```js
   *  // Request
   *     {
   *         "method": "getEmailFolder",
   *         "params": {
   *             "folderType": "1",
   *             "filter": ""
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   *
   * // Response
   *     {
   *         "result": [
   *             1178,
   *             1012,
   *             990,
   *             251,
   *             242,
   *             233,
   *             47
   *         ],
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   *
   * ```
   */
  getEmailFolder = async ({ folderType, filter }: GetEmailFolderParams) => {
    return await this.call<GetEmailFolderResponse>('getEmailFolder', {
      folderType,
      filter,
    });
  };

  /**
   * Method getEmails returns to the Response block the list of detailed of uMail emails in the selected folder by using specified search filter. The method is called by using the FolderType parameters, which pass on the number of the folder from which the list should be taken (numbers of the folders 1-Inbox, 2-Drafts, 4-Sent, 8-Outbox, 16-Trash) and it is possible to specify the Filter parameter, which passes on the text value for the search of emails in uMail (has to contain the full or partial match with the Public Key, Nickname or the text of email).
   * ```js
   *  // Request
   *     {
   *         "method": "getEmails",
   *         "params": {
   *             "folderType": "1",
   *             "filter": ""
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": [
   *             {
   *                 "dateTime": "2017-06-14T11:14:31.157Z",
   *                 "from": "82348F684E8C3E2F8E0EF3C960D25619F813D7A2ABB049FB79A370D39A987F3D",
   *                 "id": 1178,
   *                 "size": 50,
   *                 "subject": "",
   *                 "to": [
   *                     "CFF4DB80DCA10BD2317D538FF790A03EDA26274768E5EB04E0FDA51989131F32"
   *                 ]
   *             },
   *             {
   *                 "dateTime": "2016-12-08T16:08:48.617Z",
   *                 "from": "FC496FE0D634C0475838DAEBEFA2F841398CDACCCC2E8F030D4ABEC490878715",
   *                 "id": 1012,
   *                 "size": 139635,
   *                 "subject": "",
   *                 "to": [
   *                     "CFF4DB80DCA10BD2317D538FF790A03EDA26274768E5EB04E0FDA51989131F32"
   *                 ]
   *             }
   *        ]
   *     }
   * ```
   */
  getEmails = async ({ folderType, filter }: GetEmailsParams) => {
    return await this.call<GetEmailsResponse>('getEmails', {
      folderType,
      filter,
    });
  };

  /**
   * Method getEmailById  returns the information based on the selected email in uMail. The method is called by using the Id parameter, which passes on the id of the email (id of the email can be found by using getEmailFolder method).
   * ```js
   *  // Request
   *     {
   *         "method": "getEmailById",
   *         "params": {
   *             "id": "33"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * // Response
   *     {
   *         "result": {
   *             "body": "",
   *             "date": null,
   *             "flags": 0,
   *             "from": "",
   *             "id": "",
   *             "subject": "",
   *             "to": [
   *             ]
   *         },
   *         "resultExtraInfo": {
   *             "elapsed": "0"
   *         }
   *     }
   * ```
   */
  getEmailById = async ({ id }: GetEmailByIdParams) => {
    return await this.call<GetEmailByIdResponse>('getEmailById', { id });
  };

  /**
   * Method acceptAttachment accepts to start download corresponded attachment.
   * ```js
   *  // Request
   * {
   *     "method": "acceptAttachment",
   *     "params": {
   *         "emailId": "403590",
   *         "fileId": "403595"
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": false,
   *     "resultExtraInfo": {
   *         "elapsed": "0"
   *     }
   * }
   * ```
   */
  acceptAttachment = async ({ emailId, fileId }: AcceptAttachmentParams) => {
    return await this.call<AcceptAttachmentResponse>('acceptAttachment', {
      emailId,
      fileId,
    });
  };

  /**
   * Method abortAttachment stops to download corresponded attachment.
   * ```js
   *  // Request
   * {
   *     "method": "abortAttachment",
   *     "params": {
   *         "emailId": "403590",
   *         "fileId": "403595"
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": false,
   *     "resultExtraInfo": {
   *         "elapsed": "0"
   *     }
   * }
   * ```
   */
  abortAttachment = async ({ emailId, fileId }: AbortAttachmentParams) => {
    return await this.call<AbortAttachmentResponse>('abortAttachment', {
      emailId,
      fileId,
    });
  };

  /**
   * Method acceptFileMessage accepts to start download corresponded file in message.
   * ```js
   *  // Request
   * {
   *     "method": "acceptFileMessage",
   *     "params": {
   *         "messageId": "403590"
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": false,
   *     "resultExtraInfo": {
   *         "elapsed": "0"
   *     }
   * }
   * ```
   */

  acceptFileMessage = async ({ messageId }: AcceptFileMessageParams) => {
    return await this.call<AcceptFileMessageResponse>('acceptFileMessage', {
      messageId,
    });
  };

  /**
   * Method abortFileMessage stops to download corresponded file in message.
   * ```js
   *  // Request
   * {
   *     "method": "abortFileMessage",
   *     "params": {
   *         "messageId": "403590"
   *     },
   *     "token": "TEMPTOKEN"
   * }
   * // Response
   * {
   *     "result": false,
   *     "resultExtraInfo": {
   *         "elapsed": "0"
   *     }
   * }
   * ```
   */
  abortFileMessage = async ({ messageId }: AbortFileMessageParams) => {
    return await this.call<AbortFileMessageResponse>('abortFileMessage', {
      messageId,
    });
  };

  /**
   * Method deleteEmail  deletes email in uMail. First deletion will move email to the Trash, subsequent will remove from the database. The method is called by using the Id parameter which passes on the id of the email (id of the email can be found by using getEmailFolder method). In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "deleteEmail",
   *         "params": {
   *             "id": "33"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  deleteEmail = async ({ id }: DeleteEmailParams) => {
    return await this.call<DeleteEmailResponse>('deleteEmail', { id });
  };

  /**
   * Method sendReplyEmailMessage creates response email in uMail for the incoming email and sends it to the contact with new message. The method is called by using the Id parameters, which pass on the id of the email (id of the email can be found by using getEmailFolder method) and Body, which passes on the text of the email in uMail. In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "sendReplyEmailMessage",
   *         "params": {
   *             "id": "33",
   *             "body": "hi",
   *             "subject": "new subject",
   *             "attachmentFileId": 1
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  sendReplyEmailMessage = async ({ id, body, subject, attachmentFileId }: SendReplyEmailMessageParams) => {
    return await this.call<SendReplyEmailMessageResponse>('sendReplyEmailMessage', { id, body, subject, attachmentFileId });
  };

  /**
   * Method sendForwardEmailMessage creates response email for an incoming email in uMail and sends it to the selected contact with the new message. The method is called by using the 'Id' parameter, which passes on the id of the email (id of the email can be found by using getEmailFolder method); 'To', which passes on the Public Key or Nickname of the user to which the email will be sent; and 'Body', which passes on the text in uMail. In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "sendForwardEmailMessage",
   *         "params": {
   *             "id": "33",
   *             "to": "FC4A715DF0C71B4623EBB56876262945D81C48972F2A34060892D17D55C88418",
   *             "body": "11",
   *             "subject": "new subject",
   *             "attachmentFileId": 123
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   *
   * ```
   */
  sendForwardEmailMessage = async ({ id, to, body, subject, attachmentFileId }: SendForwardEmailMessageParams) => {
    return await this.call<SendForwardEmailMessageResponse>('sendForwardEmailMessage', { id, to, body, subject, attachmentFileId });
  };

  /**
   * Method sendEmailInvitation sends a mail with invitation to channel with description and comments.
   * ```js
   *  // Request
   *     {
   *         "method": "sendEmailInvitation",
   *         "params": {
   *             "channelid": "33",
   *             "to": "9F0A36BC95EA653E05E39C6B6566AAC5B9B31FB41F15C9F4A0B8CCA6927B814F",
   *             "description": "description text",
   *             "comments": "test"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  sendEmailInvitation = async ({ channelId, to, description, comments }: SendEmailInvitationParams) => {
    return await this.call<SendEmailInvitationResponse>('sendEmailInvitation', {
      channelid: channelId,
      to,
      description,
      comments,
    });
  };

  /**
   * Method emptyEmailsTrash removes all mails from storage that are located in trash folder.
   * ```js
   *  // Request
   *     {
   *         "method": "emptyEmailsTrash",
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  emptyEmailsTrash = async () => {
    return await this.call<EmptyEmailsTrashResponse>('emptyEmailsTrash', {});
  };

  /**
   * Method setChannelAsBookmarked marks loacally corresponded channel as bookmarked to be visible in folder bookmarked channels.
   * ```js
   *  // Request
   *     {
   *         "method": "setChannelAsBookmarked",
   *         "params": {
   *             "channelid": "33",
   *             "bookmarked": true
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  setChannelAsBookmarked = async ({ channelId, bookmarked }: SetChannelAsBookmarkedParams) => {
    return await this.call<SetChannelAsBookmarkedResponse>('setChannelAsBookmarked', { channelId, bookmarked });
  };

  /**
   * Method clearTrayNotifications allows to drop all existing notifications in the tray of the operating system. The method is called without using any parameters. In the Response field the status of completion of the operation is displayed.
   * ```js
   *  // Request
   *     {
   *         "method": "clearTrayNotifications",
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  clearTrayNotifications = async () => {
    return await this.call<ClearTrayNotificationsResponse>('clearTrayNotifications', {});
  };

  /**
   * Method getNetworkConnections returns in Response block detailed information about all current network connections. The method is called without using any parameters.
   * ```js
   *
   * // Request
   *
   *     {
   *         "method": "getNetworkConnections",
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getNetworkConnections = async () => {
    return await this.call<GetNetworkConnectionsResponse>('getNetworkConnections', {});
  };

  /**
   * Method enableLogs enables logging that possible to get by getLogs.
   * ```js
   *  // Request
   *     {
   *         "method": "enableLogs",
   *         "params": {
   *             "enable": true
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  enableLogs = async () => {
    return await this.call<EnableLogsResponse>('enableLogs', {});
  };

  /**
   * Method getLogs returns in Response block console logs.
   * ```js
   *  // Request
   *     {
   *         "method": "getLogs",
   *         "params": {
   *             "countLatestRecords": "10"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  getLogs = async ({ countLatestRecords }: GetLogsParams) => {
    return await this.call<GetLogsResponse>('getLogs', { countLatestRecords });
  };

  // /**
  //  * Method clearNetHostDatabase clear net host database.
  //  * ```js
  //  *
  //  * // Request
  //  *
  //  *     {
  //  *         "method": "clearNetHostDatabase",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // clearNetHostDatabase = async () => {
  //    return await this.call<ClearNetHostDatabaseResponse>(
  //      'clearNetHostDatabase',
  //      {}
  //    );

  // };
  // /**
  //  * Method enableProxyMapping allows to turn on the ability to use the connection with specified 'MappingId' as a parameter when calling this method. To receive the 'MappingId' of the needed connection it is necessary to call the getProxyMappings method. In the Response field the status of completion of operation of turning on the connection is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "enableProxyMapping",
  //  *         "params": {
  //  *             "mappingId": "1"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // enableProxyMapping = ({mappingId}) => {
  //    return await this.call<EnableProxyMappingResponse>(
  //      'method',
  //      {mappingId}
  //    );
  // };
  // /**
  //  * Method disableProxyMapping allows to turn off the ability to use the connection with specified 'MappingId' as a parameter when calling this method. To receive the 'MappingId' of the needed connection it is necessary to call the getProxyMappings method. In the Response field the status of completion of operation of turning off the connection is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "disableProxyMapping",
  //  *         "params": {
  //  *             "mappingId": "1"
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */

  // disableProxyMapping = ({mappingId}) => {
  //    return await this.call<DisableProxyMappingResponse>(
  //      'method',
  //      {mappingId}
  //    );
  // };
  // /**
  //  * Method removeProxyMapping allows to remove the selected configured of proxy mappings. The method is called by using the MapingId parameter, which represents the id of the configured proxy connection. In the Response field the status of completion of operation of removing the mapping is displayed.
  //  * ```js
  //  *  // Request
  //  *
  //  *   {
  //  *       "method": "removeProxyMapping",
  //  *       "params": {
  //  *           "mappingId": ""
  //  *        },
  //  *        "token": "TEMPTOKEN"
  //  *    }
  //  *
  //  * ```
  //  */

  // removeProxyMapping = ({mappingId}) => {
  //    return await this.call<RemoveProxyMappingResponse>(
  //      'method',
  //      {mappingId}
  //    );
  // };
  // /**
  //  * Method getProxyMappings returns in Response block the list of all configured proxy mappings. The method is called without using any parameters.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getProxyMappings",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // getProxyMappings = async () => {
  //    return await this.call<GetProxyMappingsResponse>(
  //      'getProxyMappings',
  //      {}
  //    );

  // };
  // /**
  //  * Method createProxyMapping allows to create a 'bridge' type of connections to receive access to the external page by the specified ip address and port, when trying to call the inter-network address in the Utopia network ( usually used by Idyll browser). The method by using the mandatory parameters SrcHost,SrcPort,DstHost,DstPort,Enabled. The SrcHost  parameters represents its own uNS name, the request of which would be executed in the Idyll browser. The SrcPort parameter represents the port number on which the mapping is planned to be located. Parameter DstHost represents itself the ip address of the page on which it will navigate, and parameters DstPort is the number of port on which the needed page with specified ip address is located. The Enabled parameter represents the activity of such connection as 'true' or 'false'. In the Response block the status of completion of the attempt to create a connection with specified parameters is displayed.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "createProxyMapping",
  //  *         "params": {
  //  *             "srcHost": "",
  //  *             "srcPort": "",
  //  *             "dstHost": "",
  //  *             "dstPort": "",
  //  *             "enabled": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // createProxyMapping = async (srcHost, srcPort, dstHost, dstPort, enabled) => {
  //    return await this.call<CreateProxyMappingResponse>(
  //      'createProxyMapping',
  //      {}
  //    );

  // };

  /**
   * Method lowTrafficMode returns in Response block the status of low Traffic mode. The method is called without using any parameters.
   * ```js
   *  // Request
   *     {
   *         "method": "lowTrafficMode",
   *         "params": {},
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  lowTrafficMode = async () => {
    return await this.call<LowTrafficModeResponse>('lowTrafficMode', {});
  };

  /**
   * Method setLowTrafficMode allows to turn on or off the low Traffic mode. The method is called by using the enabled parameter, which represents itself a status of true or false that is being set for this particular mode.
   * ```js
   *  // Request
   *     {
   *         "method": "setLowTrafficMode",
   *         "params": {
   *             "enabled": "false"
   *         },
   *         "token": "TEMPTOKEN"
   *     }
   * ```
   */
  setLowTrafficMode = async ({ enabled }: SetLowTrafficModeParams) => {
    return await this.call<SetLowTrafficModeResponse>('setLowTrafficMode', {
      enabled,
    });
  };

  // /**
  //  * Method getWhoIsInfo returns in Response block the detailed information about selected user. As a parameter of the method, the Public key of the particular user can be used, or his nickname, if such contact was added to the contact list.
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getWhoIsInfo",
  //  *         "params": {
  //  *             "owner": ""
  //  *         },
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  * ```
  //  */
  // getWhoIsInfo = nick_or_pk => {
  //   return;
  // };

  // /**
  //  * Method requestTreasuryPoSRates makes request to obtain treasury PoS rate data
  //  * ```js
  //  *  // Request
  //  *
  //  * {
  //  *     "method": "requestTreasuryPoSRates",
  //  *     "params": {},
  //  *     "token": "TEMPTOKEN"
  //  * }
  //  *
  //  * ```
  //  */
  // requestTreasuryPoSRates = async () => {
  //    return await this.call<RequestTreasuryPoSRatesResponse>(
  //      'requestTreasuryPoSRates',
  //      {}
  //    );

  // };
  // /**
  //  * Method getTreasuryPoSRates returns in Response block the detailed information about treasury PoS rate
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getTreasuryPoSRates",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // getTreasuryPoSRates = async () => {
  //    return await this.call<GetTreasuryPoSRatesResponse>(
  //      'getTreasuryPoSRates',
  //      {}
  //    );

  // };
  // /**
  //  * Method requestTreasuryTransactionVolumes makes request to obtain treasury transaction volume data
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "requestTreasuryTransactionVolumes",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // requestTreasuryTransactionVolumes = async () => {
  //    return await this.call<RequestTreasuryTransactionVolumesResponse>(
  //      'requestTreasuryTransactionVolumes',
  //      {}
  //    );

  // };
  // /**
  //  * Method getTreasuryTransactionVolumes returns in Response block the detailed information about treasury transaction volume>
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getTreasuryTransactionVolumes",
  //  *         "params": { "currency": "CRP"},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  * // Response
  //  * {
  //  *     "result": {
  //  *         "summary": {
  //  *             "allTimeAmount": "10168160.212781259",
  //  *             "allTimeTransactionVolume": "19699"
  //  *         },
  //  *         "transactions": [
  //  *             {
  //  *                 "amount": 0,
  //  *                 "date": "2019-12-01",
  //  *                 "volume": 0
  //  *             },
  //  *          // ...
  //  *             {
  //  *                 "amount": 80.556958762,
  //  *                 "date": "2021-08-13",
  //  *                 "volume": 31
  //  *             },
  //  *             {
  //  *                 "amount": 1.06,
  //  *                 "date": "2021-08-14",
  //  *                 "volume": 3
  //  *             }
  //  *           ]
  //  *     },
  //  *     "resultExtraInfo": {
  //  *         "elapsed": "9"
  //  *     }
  //  * }
  //  *
  //  * ```
  //  */

  // getTreasuryTransactionVolumes = ({currency}) => {
  //    return await this.call<GetTreasuryTransactionVolumesResponse>(
  //      'method',
  //      {currency}
  //    );
  // };
  // /**
  //  * Method requestTreasuryUUSDSupply makes request to obtain treasury UUSD records with supply information
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "requestTreasuryUUSDSupply",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // requestTreasuryUUSDSupply = async () => {
  //    return await this.call<RequestTreasuryUUSDSupplyResponse>(
  //      'requestTreasuryUUSDSupply',
  //      {}
  //    );

  // };
  // /**
  //  * Method getTreasuryUUSDSupply returns in Response block the detailed information about treasury UUSD records with supply information>
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getTreasuryUUSDSupply",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  * // Response
  //  * {
  //  *     "result": {
  //  *         "records": [
  //  *             {
  //  *                 "date": "2021-07-01",
  //  *                 "supply": 0
  //  *             },
  //  *             {
  //  *                 "date": "2021-08-08",
  //  *                 "supply": 983.569459
  //  *             },
  //  *             {
  //  *                 "date": "2021-08-09",
  //  *                 "supply": 983.436858998
  //  *             },
  //  *             {
  //  *                 "date": "2021-08-10",
  //  *                 "supply": 983.360269098
  //  *             }
  //  *         ],
  //  *         "totalSupply": "983.36"
  //  *     },
  //  *     "resultExtraInfo": {
  //  *         "elapsed": "0"
  //  *     }
  //  * }
  //  *
  //  * ```
  //  */
  // getTreasuryUUSDSupply = async () => {
  //    return await this.call<GetTreasuryUUSDSupplyResponse>(
  //      'getTreasuryUUSDSupply',
  //      {}
  //    );

  // };
  // /**
  //  * Method requestTreasuryCrpSupply makes request to obtain treasury Crp records with supply information
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "requestTreasuryCrpSupply",
  //  *         "params": {},
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  *
  //  * ```
  //  */
  // requestTreasuryCrpSupply = async () => {
  //    return await this.call<RequestTreasuryCrpSupplyResponse>(
  //      'requestTreasuryCrpSupply',
  //      {}
  //    );

  // };
  // /**
  //  * Method getTreasuryCrpSupply returns in Response block the detailed information about treasury Crp records with supply information>
  //  * ```js
  //  *  // Request
  //  *     {
  //  *         "method": "getTreasuryCrpSupply",
  //  *         "token": "TEMPTOKEN"
  //  *     }
  //  * // Response
  //  * {
  //  *     "result": {
  //  *         "records": [
  //  *             {
  //  *                 "date": "2021-07-01",
  //  *                 "supply": 0
  //  *             },
  //  *             {
  //  *                 "date": "2021-08-08",
  //  *                 "supply": 983.569459
  //  *             },
  //  *             {
  //  *                 "date": "2021-08-09",
  //  *                 "supply": 983.436858998
  //  *             },
  //  *             {
  //  *                 "date": "2021-08-10",
  //  *                 "supply": 983.360269098
  //  *             }
  //  *         ],
  //  *         "totalSupply": "983.36"
  //  *     },
  //  *     "resultExtraInfo": {
  //  *         "elapsed": "0"
  //  *     }
  //  * }
  //  *
  //  * ```
  //  */
  // getTreasuryCrpSupply = async () => {
  //    return await this.call<GetTreasuryCrpSupplyResponse>(
  //      'getTreasuryCrpSupply',
  //      {}
  //    );

  // };

  /**
   * Method getWebSocketState returns WSS Notifications state, 0 - disabled or active listening port number.
   * ```js
   *  // Request
   *   {
   *     "method": "getWebSocketState",
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  getWebSocketState = async () => {
    return await this.call<GetWebSocketStateResponse>('getWebSocketState', {});
  };

  /**
   * Method setWebSocketState set WSS Notification state.
   *   The list of notifications can be specified via groups   <b> Groups and notification list</b><li><i>contact</i></li><ul><li>deleteContactNotification</li> <li>contactCreatedNotification</li> <li>newAuthorization</li>  <li>contactStatusNotification</li> <li>newOutgoingInstantMessage</li> <li>newInstantMessage</li> <li>newEmail</li> </ul> <li><i>update</i></li><ul> <li>availableUpdateOnServerNotification</li>    <li>updateProgressNotification</li>    <li>updateDownloadedNotification</li>    <li>updatesReadyToRestartNotification</li>    <li>updateErrorNotification</li>    </ul><li><i>channel</i></li>    <ul>    <li>newChannelMessage</li>    <li>newOutgoingChannelMessage</li>  <li>newPrivateChannelMessage</li>   <li>channelJoinChanged</li>     </ul><li><i>wallet</i></li>    <ul>    <li>newPaymentTransfer</li>     </ul> <li><i>all</i></li> </ul>
   * Sample Notification list "wallet, contact"
   * ```js
   *  // Request
   *
   * {
   *     "method": "setWebSocketState",
   *     "params": {
   *         "enabled": "",
   *         "port": "",
   *         "enablessl": true,
   *         "notifications": "all",
   *     },
   *     "token": "TEMPTOKEN"
   * }
   *
   * ```
   */
  setWebSocketState = async ({ enabled, port }: SetWebSocketStateParams) => {
    return await this.call<SetWebSocketStateResponse>('setWebSocketState', {
      enabled,
      port,
    });
  };

  /**
   * Method getTransfersFromManager returns list of file transfer.
   * ```js
   *  // Request
   *   {
   *     "method": "getTransfersFromManager",
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  getTransfersFromManager = async () => {
    return await this.call<GetTransfersFromManagerResponse>('getTransfersFromManager', {});
  };

  /**
   * Method getFilesFromManager returns list of files.
   * ```js
   *  // Request
   *   {
   *     "method": "getFilesFromManager",
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  getFilesFromManager = async () => {
    return await this.call<GetFilesFromManagerResponse>('getFilesFromManager', {});
  };

  /**
   * Method abortTransfers abort transfer with selected ID.
   * ```js
   *  // Request
   *   {
   *     "method": "abortTransfers",
   *     "params": {
   *         "transferId": ""
   *     },
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  abortTransfers = async ({ transferId }: AbortTransfersParams) => {
    return await this.call<AbortTransfersResponse>('abortTransfers', {
      transferId,
    });
  };

  /**
   * Method hideTransfers hide transfer with selected ID.
   * ```js
   *  // Request
   *   {
   *     "method": "hideTransfers",
   *     "params": {
   *         "transferId": ""
   *     },
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  hideTransfers = async ({ transferId }: HideTransfersParams) => {
    return await this.call<HideTransfersResponse>('hideTransfers', {
      transferId,
    });
  };

  /**
   * Method getFile return file with selected ID.
   * ```js
   *  // Request
   *   {
   *     "method": "getFile",
   *     "params": {
   *         "fileId": ""
   *     },
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  getFile = async ({ fileId }: GetFileParams) => {
    return await this.call<GetFileResponse>('getFile', { fileId });
  };

  /**
   * Method deleteFile delete file with selected ID.
   * ```js
   *  // Request
   *   {
   *     "method": "deleteFile",
   *     "params": {
   *         "fileId": ""
   *     },
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  deleteFile = async ({ fileId }: DeleteFileParams) => {
    return await this.call<DeleteFileResponse>('deleteFile', { fileId });
  };

  /**
   * Method sendFileByMessage send file with selected address.
   * ```js
   *  // Request
   *   {
   *     "method": "sendFileByMessage",
   *     "params": {
   *         "to": "",
   *         "fileId": ""
   *     },
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  sendFileByMessage = async ({ to, fileId }: SendFileByMessageParams) => {
    return await this.call<SendFileByMessageResponse>('sendFileByMessage', {
      to,
      fileId,
    });
  };

  /**
   * Method requestHistoryByDate send request to obtain history bt corresponded date period.
   * ```js
   *  // Request
   *   {
   *     "method": "requestHistoryByDate",
   *     "params": {
   *         "from": "2016-12-08T16:08:48.617Z",
   *         "to": "2016-12-09T16:08:48.617Z"
   *     },
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  requestHistoryByDate = async ({ from, to }: RequestHistoryByDateParams) => {
    return await this.call<RequestHistoryByDateResponse>('requestHistoryByDate', { from, to });
  };

  /**
   * Method uploadFile upload data in base64 format and returns id of new file.
   * ```js
   *  // Request
   *   {
   *     "method": "uploadFile",
   *     "params": {
   *         "fileDataBase64": "12121",
   *         "fileName": "test.jpg"
   *     },
   *     "token": "TEMPTOKEN"
   *   }
   * ```
   */
  uploadFile = async ({ fileDataBase64, fileName }: UploadFileParams) => {
    return await this.call<UploadFileResponse>('uploadFile', {
      fileDataBase64,
      fileName,
    });
  };
}

export default UApiClient;

// "description": "Unofficial Utopia JS API Client & Mobile App for Desktop App",
// "geotag": "45.0599, 38.996",
// "hashtags": "",
// "languages": "ru_ru,en_gb",
// "modified": "2023-09-03T10:17:36.156Z",
// "owner": "E02E5F0CCAA0180719844BCF3ABA25D766D42967D0366020FE7D39654671D338",
// "readonly": false,
// "readonly_privacy": false,
// "title": "Unofficial Utopia API Client",
// "type": "public"
// ?_`7vcVlb9330h$VYkR6zBduRv8y$+R6
